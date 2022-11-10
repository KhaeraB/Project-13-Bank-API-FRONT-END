import { balance_data } from "../../mock/data";
import {
  MainBgDark,
  Account,
  AccountWrapper,
  AccountTitle,
  AccountAmount,
  AccountDescription,
  AccountWrapperCta,
  TransactionButton,
  EditButton,
  WelcomUser,
  FormEdit,
  HeaderAccount,
} from "./index.styles";

export const Profil =() =>{
  return (
    <MainBgDark>
      <HeaderAccount>
        <div>
          <WelcomUser>Welcome back</WelcomUser>
          <EditButton>Edit Name</EditButton>
        </div>
        <FormEdit>
          <div>
            <input type="text" />
            <input type="text" />
          </div>
          <div>
            <button type="submit">Save</button>
            <button>Cancel</button>
          </div>
        </FormEdit>
      </HeaderAccount>
      <h2 className="sr-only">Accounts</h2>
      {balance_data.map((transaction) => {
        return (
          <Account>
            <AccountWrapper>
              <AccountTitle>{transaction.title}</AccountTitle>
              <AccountAmount>{transaction.amount}</AccountAmount>
              <AccountDescription>{transaction.description}</AccountDescription>
            </AccountWrapper>
            <AccountWrapperCta>
              <TransactionButton>View transactions</TransactionButton>
            </AccountWrapperCta>
          </Account>
        );
      })}
    </MainBgDark>
  );
}
export default Profil