import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import {
  EditButton,
  WelcomUser,
  FormEdit,
  HeaderAccount,
} from "./index.styles";
import { editProfile } from "../../features/auth/authServices";

export const EditUserHeader = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { token } = useSelector((state) => state.userDataLogin)
  const { firstName, lastName } = useSelector((state) => state.userDataProfile)
  const { success } = useSelector((state) => state.userDataLogin)

  console.log(firstName, lastName);

  useEffect(()=>{
    if(!token ){
      navigate ('/login')
    }
    navigate ('/profile')
    dispatch(editProfile())
  }, [token, navigate, dispatch])

  const { editFirstName, setEditFirstName } = useState();
  const { editLastName, setEditLastName } = useState();
  const {button}

  return (
    <HeaderAccount>
      <div>
        <WelcomUser>
          Welcome back
          <br />
          {firstName + " " + lastName}
        </WelcomUser>
        <EditButton onClick={handleEdit}>Edit Name</EditButton>
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
  );
};
