import LoginPage from "../pages/LoginPage";
import NotesPage from "../pages/NotesPage";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import RequireAuth from "./RequireAuth";
import SignupPage from "../pages/SignupPage";
import LogoutPage from "../pages/LogoutPage";
import ForgetPasswordPage from "../pages/ForgetPasswordPage";
import '../Index.css';
import ResetPassword from "./ResetPassword";

function App() {
  return (
    <>
      <BrowserRouter>
      <div className="nav-container"> 
      <ul>
          <li >
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">login</Link>
          </li>

          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li>
            <Link to="/logout">logout</Link>
          </li>
          <li>
            <Link to="/forgetpassword">forget</Link>
          </li>
          
        </ul>

      </div>
        <div>
        <Routes>
        <Route  path="/signup" element={<SignupPage/>} />
          <Route index path="/" element={<RequireAuth> <NotesPage /> </RequireAuth>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/resetpassword/:token" element={<ResetPassword/>}/>
          <Route path="/logout" element={<LogoutPage/>}/>
          <Route path="/forgetpassword" element={<ForgetPasswordPage/>}/>
        </Routes>
        </div>
        
      </BrowserRouter>

    </>
  );
}

export default App;
