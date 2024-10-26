import { Routes ,Route } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import RegisterPage from "./pages/Auth/RegisterPage"
import LoginPage from "./pages/Auth/LoginPage"
import AuthPage from "./pages/Auth/AuthPage"

const App = () => {
  return (
    <Routes>
      {/* Add your routes here */}
      <Route index element={<LandingPage/>}/>

      {/* Auth Routes */}
      <Route path="/auth" element={<AuthPage/>}>
        <Route path="register" element={<RegisterPage/>}/>
        <Route path="login" element={<LoginPage/>}/>
      </Route>
      {/* Protected Routes  */}
    </Routes>
  )
}

export default App