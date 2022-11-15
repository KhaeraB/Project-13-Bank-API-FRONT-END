import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Login from "./components/Login";
import Public from "./components/Public/Public";
import Profil from "./components/Profile/Profile";
import RequireAuth from "./features/auth/RequireAuth";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route index element={<Public />} />
        <Route path="login" element={<Login />} />

        {/*protected routes */}
        <Route element={<RequireAuth />}>
          <Route path="profile" element={<Profil />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
