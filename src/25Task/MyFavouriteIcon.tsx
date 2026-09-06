import { IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {  useState } from "react";
import { FavouriteFilm } from "../../lib/FavouriteFilms";
import {AddDeleteFavouriteFilm} from "../../lib/PostFilm"
interface PropsMyFavourite{
    id:number
}
export function MyFavouriteIcon({id}:PropsMyFavourite) {
  const [flag, setFlag] = useState<boolean>(false);
  return flag ? (
    <IconButton >
      <FavoriteIcon onClick={()=>{
        AddDeleteFavouriteFilm({url:`/account/${22187086}/favorite`,idFilm:id,AddOrDelete:false, method:'POST'})
        FavouriteFilm({url:`/account/${22187086}/favorite/movies`, method:"GET"})
        setFlag(false)
        }} sx={{color:'red'}}></FavoriteIcon>
    </IconButton>
  ) : (
    <IconButton >
      <FavoriteIcon onClick={()=>
      {
        AddDeleteFavouriteFilm({url:`/account/${22187086}/favorite`,idFilm:id,AddOrDelete:true, method:'POST'})
        FavouriteFilm({url:`/account/${22187086}/favorite/movies`, method:"GET"
        })       
        setFlag(true)
        }}></FavoriteIcon>
    </IconButton>
  );
}
