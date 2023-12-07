import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Signup } from './components/Signup'
import { Dashboard } from './components/Dashboard'
import { AuthProvider } from './state/authContext'
import { Login } from './components/Login'
import { PrivateRoute } from './components/PrivateRoute'

export function App() {
  return (
    <div>
      <h1>supabase-auth-react</h1>
      <Router>
        <AuthProvider>
          <Switch>
            <PrivateRoute exact path="/" component={Dashboard} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  )
}