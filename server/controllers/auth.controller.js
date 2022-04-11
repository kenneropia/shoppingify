const { promisify } = require('util')
const jwt = require('jsonwebtoken')
const User = require('./../models/user/userModel')

const signToken = (user) =>
  jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_ACCESS_EXPIRES,
  })

exports.login = async (req, res, next) => {
  const { email = '', password = '' } = req.body
  console.log(req.body)
  let user = null
  if (email && email.includes('@')) {
    user = await User.findOne({ email }).select('+password')
  }

  if (!user || !(await User.correctPassword(password, user.password))) {
    return res.status(401).json({
      error: {
        status: 401,
        message: 'Your email or password is incorrect',
      },
    })
  }

  user.password = null

  const token = signToken(user)
  res.json({ token, data: { user } })
}

exports.signup = async (req, res, next) => {
  const userDetails = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  }

  const isUserValid = User.userValidator(userDetails)

  const newUser = await User.create(userDetails)

  res.json({ data: { user: newUser } })
}

exports.protectRoute = async (req, res, next) => {
  const bearer = req.headers['authorization']
  if (!bearer) {
    return res.status(401).json({
      error: {
        status: 401,
        message: 'The authorization header is missing ',
      },
    })
  }
  let token = bearer.split(' ')[1]
  if (!token) {
    return res.json({
      error: {
        status: 401,
        message: 'You are not logged in! Please log in to get access',
      },
    })
  }

  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET)
  const freshUser = await User.findById(decoded.id)

  if (!freshUser) {
    return res.json({
      error: {
        status: 401,
        message: 'The user belonging to this token does no longer exist',
      },
    })
  }

  if (User.changedPasswordAfter(decoded.iat)) {
    return res.json({
      error: {
        status: 401,
        message: 'User recently changed password! Please log in again',
      },
    })
  }

  req.user = freshUser
  req.body.user = freshUser.id
  next()
}

// exports.signin = async (req, res, next) => {
//   const { email = '', password = '' } = req.body
//   let user = null
//   if (email && email.includes('@')) {
//     user = await User.findOne({ email }).select('+password')
//   }

//   if (!user || !(await User.correctPassword(password, user.password))) {
//     return res.status(401).json({
//       error: {
//         status: 401,
//         message: 'Your email or username is incorrect',
//       },
//     })
//   }

//   user.password = null

//   const token = signToken(user)
//   let refreshToken = await RefreshToken.createToken(user)
//   res.json({ accessToken: token, refreshToken, data: { user } })
// }

// exports.refreshToken = async (req, res) => {
//   const { refreshToken: requestToken } = req.body

//   if (requestToken == null) {
//     return res
//       .status(403)
//       .json({ status: 403, message: 'Refresh Token is required!' })
//   }

//   let refreshToken = await RefreshToken.findOne({ token: requestToken })

//   if (!refreshToken) {
//     res
//       .status(403)
//       .json({ status: 403, message: 'Refresh token is not in database!' })
//     return
//   }

//   if (RefreshToken.verifyExpiration(refreshToken)) {
//     await RefreshToken.findByIdAndRemove(refreshToken._id, {
//       useFindAndModify: false,
//     })

//     res.status(403).json({
//       status: 403,
//       type: 'refreshToken',
//       message: 'Refresh token was expired. Please make a new signin request',
//     })
//     return
//   }

//   let newAccessToken = jwt.sign(
//     { id: refreshToken.user.id },
//     process.env.JWT_SECRET,
//     {
//       expiresIn: process.env.JWT_ACCESS_EXPIRES,
//     }
//   )

//   return res.status(200).json({
//     accessToken: newAccessToken,
//     refreshToken: refreshToken.token,
//   })
// }
