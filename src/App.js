import { Routes, Route } from 'react-router-dom'
import RequireAuth from './features/auth/RequireAuth'
import Layout from './components/Layout/Layout'

import Public from './components/Public/Public'
import Login from './components/Login'
import Error from './components/Error'
import Profil from './components/Profil'


function App() {
  return (

    <Routes>
      <Route path="/" element={<Layout/>}>
        {/* public routes */}
        <Route index element={<Public/>} />
        <Route path="login" element={<Login />} />

        {/* protected routes */}
        <Route element={<RequireAuth />}>
          <Route path="profil" element={<Profil/>} />
        </Route>
        <Route path='/*' element={< Error/>} />
      </Route>
    </Routes>
  )
}


export default App;