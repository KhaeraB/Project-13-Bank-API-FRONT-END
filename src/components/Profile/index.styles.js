import styled from "styled-components";
import { customTheme } from "../../utils/style/variable";
export const Account = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  background-color: #fff;
  width: 80%;
  margin: 0 auto;
  flex-direction: column;
  padding: 1.5rem;
  box-sizing: border-box;
  text-align: left;
  margin-bottom: 2rem;
  @media (min-width: 720px) {
    flex-direction: row;
  }
`;

export const AccountWrapper = styled.div`
  width: 100%;
  flex: 1;
`;
export const AccountWrapperCta = styled.div`
  width: 100%;
  flex: 1;
  @media (min-width: 720px) {
    flex: 0;
  }
`;
export const AccountTitle = styled.h3`
  margin: 0;
  padding: 0;
  font-size: 1rem;
  font-weight: normal;
`;
export const AccountAmount = styled.p`
  margin: 0;
  font-size: 2.5rem;
  font-weight: bold;
`;
export const AccountDescription = styled.p`
  margin: 0;
`;

export const TransactionButton = styled.button`
  display: block;
  width: 100%;
  padding: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  margin-top: 1rem;
  border-color: #00bc77;
  background-color: #00bc77;
  color: #fff;
  @media (min-width: 720px) {
    width: 200px;
  }
`;
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
