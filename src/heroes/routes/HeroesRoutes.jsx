import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui/components"
import { MarvelPage } from "../MarvelPage"
import { DCPage } from "../DCPage"
import { SearchPage } from "../pages/hooks/components/helpers/SearchPage"
import { HeroPage } from "../pages/hooks/components/helpers/HeroPage"


export const HeroesRoutes = () => {
  return (
    <>

     <Navbar />

      <div className="container">
         <Routes>
           <Route path="marvel" element={<MarvelPage />}/>
           <Route path="dc" element={<DCPage />}/>
           <Route path="/" element={<Navigate to="/marvel"/>}/>
           <Route path="search" element={<SearchPage />}/>
           <Route path="hero/:id" element={<HeroPage />}/>
         </Routes>
     </div>
    </>
        
     
  )
}
