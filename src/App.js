import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Login from "./components/Login/Login";
import Public from "./components/Public/Public";
import Profil from "./components/Profile/Profile";
import { Error } from "./components/Error/Error";
import Swagger from "./components/Swagger";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route index element={<Public />} />
        <Route path="login" element={<Login />} />

        {/*protected routes with Persist*/}
        <Route path="profile" element={<Profil />} />

        {/* Error route */}
        <Route path="*" element={<Error />} />

        {/* Swagger route */}
        <Route path="swagger" element={<Swagger />} />
      </Route>
    </Routes>
  );
}

export default App;
