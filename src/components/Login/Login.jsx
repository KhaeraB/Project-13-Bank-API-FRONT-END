import { Form } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../features/auth/authServices";
import {
  InputRemember,
  SignInButton,
  InputWrapper,
  Label,
  MainBgDark,
  SignInContent,
} from "./index.styles";


/**
 * Create the logi form for access to Account page
 * @component
 * @returns {JSX.Element} Login component
 */
const Login = () => {
  document.title = "Argent Bank - Login";
 // Hooks
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // data for post the form
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const errRef = useRef();
  // token and error
 
  const { token, error } = useSelector((state) => state.userDataLogin);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  useEffect(() => {
    if (token) {
      navigate("/profile");
    }
      
  }, [token, navigate, error]);

  const content = (
    <section className="login">
      <MainBgDark>
        <SignInContent>
          <FaUserCircle className="fa" />
          <h1>Sign In</h1>

          <p
            ref={errRef}
            className={error ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {error}
          </p>
         
          <Form onSubmit={handleSubmit}>
            <InputWrapper>
              <Label htmlFor="username">Username</Label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="off"
                required
              />
            </InputWrapper>
            <InputWrapper>
              <Label htmlFor="password">Password</Label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="off"
                required
              />
            </InputWrapper>
            <InputRemember>
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </InputRemember>

            <SignInButton type="submit" name="Login">
              Sign In
            </SignInButton>
          </Form>
        </SignInContent>
      </MainBgDark>
    </section>
  );

  return content;
};
export default Login;
