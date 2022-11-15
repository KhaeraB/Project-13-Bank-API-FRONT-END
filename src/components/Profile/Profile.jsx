import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { MainBgDark } from "../Login/index.styles";
import { balance_data } from "../../data/mock/data";
import { UserAccount } from '../UserAccount/UserAccount';
import { EditUserHeader } from '../EditUser/EditUser';


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
      <EditUserHeader/>
      <h2 className="sr-only">Accounts</h2>
      {balance_data.map((item, index) => {
        return (
            <UserAccount
            index={index}
            title={item.title}
            amount={item.amount}
            description={item.description}/>
        )
      })}
    </MainBgDark>
  );
}
