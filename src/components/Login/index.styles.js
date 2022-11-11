
import styled from "styled-components"
import { Container } from "react-bootstrap"
import { customTheme } from "../../utils/style/variable"

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
  .fa{
    font-size:${customTheme.fonts.xlarge};
  }
  h1 {
    font-size: 2.5rem;
    font-weight: bold;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin: 0.5rem;
  }
`;

export const SignInIcon = styled.i`
  .fa-user-circle {
    font-size: ${customTheme.fonts.xlarge};
  }
`;
export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-bottom: 1rem;
    input{
        padding: 5px;
        font-size: 1.2rem;
    }
`; 

export const InputRemember = styled.div`
    display: flex;
    flex-direction: row;
    text-align: left;
    margin-bottom: 1rem;
    align-content: center;
    label{
        margin-left: 0.25rem;
    }
`; 

export const Label = styled.label`
    font-weight: bold;
`; 


export const SignInButton = styled.button`
    display: block;
    width: 100%;
    padding: 8px;
    font-size: 1.1rem;
    font-weight: bold;
    margin-top: 1rem;
    border-color: #00bc77;
    background-color: #00bc77;
    color: #fff;
    border: none; 
    
`
