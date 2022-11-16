import {
    Account,
    AccountWrapper,
    AccountTitle,
    AccountAmount,
    AccountDescription,
    AccountWrapperCta,
    TransactionButton,
  } from "./index.styles";
  import PropTypes from 'prop-types'
  
/**
 * Create Account Wrapper component 
 * @compoment 
 * @param {any} {title
 * @param {any} amount
 * @param {any} description
 * @param {any} editBgColor} Change color to button Edit Name from Profile Page
 * @returns {any}
 */
const UserAccount = ({title, amount, description, editBgColor}) => {

  
    return (
        <Account>
        <AccountWrapper >
          <AccountTitle>{title}</AccountTitle>
          <AccountAmount>{amount}</AccountAmount>
          <AccountDescription>{description}</AccountDescription>
        </AccountWrapper>
        <AccountWrapperCta>
          <TransactionButton className={editBgColor ? 'buttonPurple' : "buttonGreen"}>View transactions</TransactionButton>
        </AccountWrapperCta>
      </Account>
    )
  }
export default UserAccount

//Proptypes
UserAccount.propTypes = {
    title: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    editBgColor: PropTypes.bool, 
  }

