import {
    Account,
    AccountWrapper,
    AccountTitle,
    AccountAmount,
    AccountDescription,
    AccountWrapperCta,
    TransactionButton,
  } from "../Profile/index.styles";
  import PropTypes from 'prop-types'
  
export const UserAccount = (props) => {

  
    return (
        <Account index={props.index}>
        <AccountWrapper >
          <AccountTitle>{props.title}</AccountTitle>
          <AccountAmount>{props.amount}</AccountAmount>
          <AccountDescription>{props.description}</AccountDescription>
        </AccountWrapper>
        <AccountWrapperCta>
          <TransactionButton>View transactions</TransactionButton>
        </AccountWrapperCta>
      </Account>
    )
  }

//Proptypes
UserAccount.propTypes = {
    title: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }

