import { Route, BrowserRouter, Routes } from "react-router-dom";
import { AppClick } from "./ClickAndMoreInfo";
import MainSetup from "./MainSetup";
export default function NewApp(){
return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainSetup></MainSetup>}></Route>
      <Route path="/:idAboutFilm" element={<AppClick></AppClick>}/>
    </Routes>
    </BrowserRouter>
    
)
}