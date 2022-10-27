import FormLogin from "../../components/FormLogin";
import { MainBgDark, SignInContent, SignInIcon } from "./index.styles";
export default function Login() {
    
  return (
    <MainBgDark>
      <SignInContent>
        <SignInIcon className="fa fa-user-circle"></SignInIcon>
        <h1>Sign In</h1>
        <FormLogin />
      </SignInContent>
    </MainBgDark>
  );
}
