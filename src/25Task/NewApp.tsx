import { Route, BrowserRouter, Routes } from "react-router-dom";
import { App } from "./App";
import { AppClick } from "./ClickAndMoreInfo";
export default function NewApp(){
return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App></App>}></Route>
      <Route path="/:idAboutFilm" element={<AppClick></AppClick>}/>
    </Routes>
    </BrowserRouter>
    
)
}