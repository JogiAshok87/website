import {Navigate, Route} from 'react-router-dom'
import Cookie from 'js-cookie'

const ProtectedRoute = ({element, ...rest}) => {
  const token = Cookie.get('jwt_token')

  if (token === undefined) {
    return <Navigate to="/login" />
  }
  return <Route {...rest} element={element} />
}

export default ProtectedRoute