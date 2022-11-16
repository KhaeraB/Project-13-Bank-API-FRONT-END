import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { MainBgDark } from "../Login/index.styles";
import { balance_data } from "../../data/mock/data";
import { UserAccount } from "../UserAccount/UserAccount";
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

export default function Profile() {
  const dispatch = useDispatch();

  const { token, success } = useSelector((state) => state.userDataLogin);
  const { firstName, lastName } = useSelector((state) => state.userDataProfile);

  const [editedFirstName, setEditedFirstName] = useState();
  const [editedLastName, setEditedLastName] = useState();
  const [editUserNameForm, setEditUserNameForm] = useState("");
  const [editBgColor, setEditBgColor] = useState("");

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
  };

  document.title = "Argent Bank - Account Page";
  const navigate = useNavigate();

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
      {balance_data.map((item, index) => {
        return (
          <UserAccount
            index={item.index}
            title={item.title}
            amount={item.amount}
            description={item.description}
          />
        );
      })}
    </MainBgDark>
  );
}
