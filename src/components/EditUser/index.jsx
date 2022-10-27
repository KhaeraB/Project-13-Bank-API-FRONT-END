import { EditButton, WelcomUser, FormEdit, HeaderAccount } from "./index.styles";

export default function EditUser() {
  return (
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
  );
}
