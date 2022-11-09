import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";

import { useLoginMutation } from "../../features/auth/authApiSlice";
import { Form } from "react-bootstrap";
import {
  InputRemember,
  SignInButton,
  InputWrapper,
  Label,
  MainBgDark,
  SignInContent,
  SignInIcon,
} from "./index.styles";
import { logIn } from "../../features/auth/authSlice";

const Login = () => {
  const userRef = useRef();
  const errRef = useRef();
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [email, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = await login({ email: email, password: pwd }).unwrap();
      
      dispatch(logIn({ ...userData, email }));
      setEmail("");
      setPwd("");
      navigate("/profil");
    } catch (err) {
      if (!err?.originalStatus) {
        // isLoading: true until timeout occurs
        setErrMsg("No Server Response");
      } else if (err.originalStatus === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.originalStatus === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };

  const handleUserInput = (e) => setEmail(e.target.value);

  const handlePwdInput = (e) => setPwd(e.target.value);

  const content = isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <section className="login">
      <MainBgDark>
        <SignInContent>
          <SignInIcon className="fa fa-user-circle"></SignInIcon>
          <h1>Sign In</h1>
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <Form onSubmit={handleSubmit}>
            <InputWrapper>
              <Label htmlFor="username">Username</Label>
              <input
                type="text"
                id="email"
                ref={userRef}
                value={email}
                autoComplete= "off"
                onChange={handleUserInput}
                required
              />
            </InputWrapper>
            <InputWrapper>
              <Label htmlFor="password">Password</Label>
              <input
                type="password"
                id="password"
                onChange={handlePwdInput}
                value={pwd}
                required
              />
            </InputWrapper>
            <InputRemember>
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </InputRemember>

            <SignInButton>Sign In</SignInButton>
          </Form>
        </SignInContent>
      </MainBgDark>
    </section>
  );

  return content;
};
export default Login;
