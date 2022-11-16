import styled from "styled-components";
import { customTheme } from "../../utils/style/variable";

export const FormEdit = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const HeaderAccount = styled.div`
  margin-bottom: 2rem;
`;
export const WelcomUser = styled.h1`
  margin-bottom: 0;
`;
export const WelcomUserName = styled.h2`
  margin: 0;
  margin-bottom: 2rem;
  color: white;
`;
export const EditButton = styled.button`
  border-color: #00bc77;
  background-color: #00bc77;
  color: #fff;
  font-weight: bold;
  padding: 10px;
`;
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  input {
    padding: 15px 20px;
    margin: 5px;
  }

  button {
    padding: 8px 36px;
    margin: 5px;
    color: ${customTheme.colors.neutral100};
    border: 1px solid ${customTheme.colors.neutral100};
    background-color: white;
    font-weight: bold;
    border-radius: 3px;
  }
`;
export const InputWrapper2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  input {
    padding: 15px 20px;
    margin: 5px;
  }

  button {
    padding: 8px 36px;
    margin: 5px;
    color: ${customTheme.colors.neutral100};
    border: 1px solid ${customTheme.colors.neutral100};
    background-color: white;
    font-weight: bold;
    border-radius: 3px;
  }
`;
