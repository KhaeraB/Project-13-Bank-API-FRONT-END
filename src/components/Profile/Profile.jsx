import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { MainBgDark } from "../Login/index.styles";
import  UserAccount  from "../UserAccount/UserAccount";
import {
  EditButton,
  WelcomUser,
  FormEdit,
  HeaderAccount,
  InputWrapper,
  InputWrapper2,
  WelcomUserName,
} from "./index.styles";
import { editProfile } from "../../features/auth/authServices";

/**
 * Display the Account elements with profile and access to edit user name form  
 * @component
 * @returns {JSX.Element} Profile component
 */
const Profile = () =>{

  document.title = "Argent Bank - Account Page";

  // react , redux hooks 
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { token, success } = useSelector((state) => state.userDataLogin);
  const { firstName, lastName } = useSelector((state) => state.userDataProfile);

  // form values elements
  const [editedFirstName, setEditedFirstName] = useState();
  const [editedLastName, setEditedLastName] = useState();

  //edit form state
  const [editUserNameForm, setEditUserNameForm] = useState("");
  const [editBgColor, setEditBgColor] = useState(false);

  const editNameButton = (e) => {
    e.preventDefault();
    setEditUserNameForm((current) => !current);
    setEditBgColor(!editBgColor);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editProfile(token, editedFirstName, editedLastName));
    if ({ success }) {
      setEditUserNameForm((current) => !current);
    }
      setEditBgColor()
  };

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [token, navigate]);

  return (
    <MainBgDark className={editBgColor ? "bgLight" : "bgDark"}>
      <HeaderAccount>
        <WelcomUser className={editBgColor ? "titleDark" : "titleLight"}>
          Welcome back
        </WelcomUser>
        {!editUserNameForm ? (
          <div>
            <WelcomUserName>{firstName + " " + lastName}</WelcomUserName>

            <EditButton onClick={editNameButton}>Edit Name</EditButton>
          </div>
        ) : (
          <FormEdit onSubmit={handleSubmit}>
            <InputWrapper>
              <label htmlFor="firstName"></label>
              <input
                type="text"
                placeholder={firstName}
                onChange={(e) => setEditedFirstName(e.target.value)}
                required
              />
              <button type="submit">Save</button>
             
            </InputWrapper>
            <InputWrapper2>
            <label htmlFor="lastName"></label>
              <input
                type="text"
                placeholder={lastName}
                onChange={(e) => setEditedLastName(e.target.value)}
                required
              />
              <button onClick={editNameButton}>Cancel</button>
            </InputWrapper2>
          </FormEdit>
        )}
      </HeaderAccount>
      <h2 className="sr-only">Accounts</h2>
          <UserAccount
          editBgColor={editBgColor}
          title="Argent Bank Checking (x8349)"
          amount="$2,082.79"
          description="Available Balance"
          />
          <UserAccount
          editBgColor={editBgColor}
          title="Argent Bank Savings (x6712)"
          amount="$10,928.42"
          description="Available Balance"
          />
          <UserAccount
          editBgColor={editBgColor}
          title="Argent Bank Credit Card (x8349)"
          amount="$184.30"
          description="Current Balance"
          />
    </MainBgDark>
  );
}
export default Profile