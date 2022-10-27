import { Form } from "react-bootstrap";
import {
  InputRemember,
  SignInButton,
  InputWrapper,
  Label
} from "./index.styles";
export default function FormLogin() {
  return (
    
        <Form>
          <InputWrapper>
            <Label for="username">Username</Label>
            <input type="text" id="username" />
          </InputWrapper>
          <InputWrapper>
            <Label for="password">Password</Label>
            <input type="password" id="password" />
          </InputWrapper>
          <InputRemember>
            <input type="checkbox" id="remember-me" />
            <label for="remember-me">Remember me</label>
          </InputRemember>
          {/* <!-- PLACEHOLDER DUE TO STATIC SITE --> */}
          <SignInButton to="/user">
            Sign In
          </SignInButton>
          {/* // SHOULD BE THE BUTTON BELOW  
       
       <button class="sign-in-button">Sign In</button> 
       */}
        </Form>
  );
}
