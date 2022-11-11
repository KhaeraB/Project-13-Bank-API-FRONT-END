import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { MainBgDark } from "../Login/index.styles";
import { balance_data } from "../../data/mock/data";
import { UserAccount } from '../Account/account';
import {
  EditButton,
  WelcomUser,
  FormEdit,
  HeaderAccount,
} from "./index.styles";

export default function Profile() {
  document.title = "Argent Bank - Account Page"
  const navigate = useNavigate()

  const { token } = useSelector((state) => state.userDataLogin)
 
  useEffect(() => {
    if (!token) {
      navigate('/')
    }
  }, [token, navigate])
  
  return (
    
    <MainBgDark>
      <HeaderAccount>
        <div>
          <WelcomUser>Welcome back </WelcomUser>
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
      {balance_data.map((item) => {
        return (
            <UserAccount
            title={item.title}
            amount={item.amount}
            description={item.description}/>
        )
      })}
    </MainBgDark>
  );
}
