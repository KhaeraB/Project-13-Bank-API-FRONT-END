import EditUser from "../../components/EditUser";
import { MainBgDark } from "../Login/index.styles";
import { balance_data } from "../../mock/data";
import {
  Account,
  AccountWrapper,
  AccountTitle,
  AccountAmount,
  AccountDescription,
  AccountWrapperCta,
  TransactionButton,
} from "./index.styles";

export default function User() {
  return (
    <MainBgDark>
      <EditUser />
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
