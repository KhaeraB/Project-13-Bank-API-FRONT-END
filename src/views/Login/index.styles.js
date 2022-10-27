import { Container } from "react-bootstrap";
import styled from "styled-components";
import { customTheme } from "../../constants";

export const MainBgDark = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 84vh;
  flex: 1;
  background-color: #12002b;
  margin: 0;
`;

export const SignInContent = styled(Container)`
  box-sizing: border-box;
  background-color: white;
  width: 300px;
  margin: 0 auto;
  margin-top: 3rem;
  padding: 2rem;
  h1 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
  }
`;

export const SignInIcon = styled.i`
  .fa-user-circle {
    font-size: ${customTheme.fonts.xlarge};
  }
`;
