import { Route, Routes } from "react-router-dom"

import { LoginPage } from "../auth/pages/components/hooks/LoginPage"
import { HeroesRoutes } from "../heroes/routes/HeroesRoutes"

export const AppRouter = () => {
  return (
    <>

       <Routes>

         <Route path="login" element={<LoginPage/>}/>

         <Route path="/*" element={<HeroesRoutes/>}/>
       </Routes>
    </>
  )
}
