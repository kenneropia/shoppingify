const Joi = require('joi')

const schema = Joi.object({
  username: Joi.string().alphanum().min(3).max(12).required(),

  password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),

  birth_year: Joi.number().integer().max(new Date().getFullYear()),

  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: true },
    })
    .required(),
}).with('username', 'password')

const userValidator = (data) => {
  const res = Joi.assert(data, schema, { abortEarly: false })
  return { type: true }
}
module.exports = userValidator
