import Login from '../components/Login'
import useAuth from '../hooks/useAuth'
import ProtectedRoutes from './ProtectRoutes'

export const AppRoutes = () => {
  const auth = useAuth()
  return auth.getUser() ? <ProtectedRoutes /> : <Login />
}
