import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import { IconButton } from "@mui/material"; 

export function AppClick(){
const {idAboutFilm} = useParams() as {idAboutFilm:string};
const url=`https://api.themoviedb.org/3/movie/${idAboutFilm}?language=ru`;
const [dataFilm,setdataFilm] = useState<any>({});
const[loading,setloading]=useState<boolean>(true);
// 'https://api.themoviedb.org/3/movie/969681?language=ru';
// `https://developer.themoviedb.org/reference/movie-details`
useEffect(()=>{
    fetch(url,
        {
            method:"GET",
            headers:{
               accept:'application/json',
                // "Content-type": "application/json"
                Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNmE5NGFiN2VkMWY0MTYzNWVmYTYwNWY3ZWM3NGEwYSIsIm5iZiI6MTc1Mzg5ODQzOC45MjEsInN1YiI6IjY4OGE1ZGM2ODYyYmNkMmJmYmExYTZhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JkQMetRZX9F4quD8GBqSSWp2VLcNctcAL_VwQ_SUrSk",
      }
        }
    )
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        setdataFilm(data);
    })
    .catch(err=>console.error("Ошибка загрузки:"+err))
    .finally(()=>setloading(false))
},[url])
if (loading) return <div>"Загрузка..."</div>
return(
    <>        
    <Link to={"/"}><h1>{dataFilm.title}</h1></Link>
        <Card sx={{ Width: 50, Height: 50, m: 1, display:"flex", position:"relative" }}>
      <CardMedia
        component="img"
        height={600}
         width={100}
        image={`https://image.tmdb.org/t/p/original${dataFilm.poster_path}`}
        alt="Простите, не вышло"
      />
      <CardContent>
        {/* <Link to={`/${id}`}><h2>{title}</h2></Link>  */}
        <Typography sx={{fontSize:20, fontWeight:"bold"}} gutterBottom >{"Слоган для зрителей: "+dataFilm.tagline}</Typography>
        <Typography sx={{fontSize:16}} align="left" gutterBottom>{dataFilm.overview}</Typography>
        <Typography sx={{fontSize:14, fontStyle:"italic"}} align="left">{"Длительность фильма: "+dataFilm.runtime+" минут / "+(dataFilm.runtime/60).toFixed(2)+" ч"}</Typography>
        <Typography sx={{fontSize:14, fontStyle:"italic"}} align="left">{"Жанр фильма: "+dataFilm.genres.map((a:any)=>a.name).join(', ')}</Typography>
        <Typography sx={{fontSize:14, fontStyle:"italic"}} align="left">{"Язык оригинала: "+dataFilm.original_language}</Typography>
        <Typography sx={{fontSize:14, fontStyle:"italic"}} align="left">{"Выпускающая компания: "+dataFilm.production_companies.map((a:any)=>a.name).join(', ')}</Typography>
        <Typography sx={{fontSize:14, fontStyle:"italic"}} align="left">{"Страны производства "+dataFilm.production_countries.map((a:any)=>a.name).join(', ')}</Typography>
        <Typography sx={{fontSize:14, fontStyle:"italic"}} align="left">{"Бюджет: "+dataFilm.budget/10**6+" млн. $"}</Typography>
        {/* <Typography>{`https://image.tmdb.org/t/p/original${image}`}</Typography> */}
      </CardContent>
      <CardActions>
         {/* <button onClick={()=>console.log(id)}>Подробнее</button> */}
        {/* <IconButton><FavoriteIcon></FavoriteIcon></IconButton> */}
      </CardActions>
    </Card></> 

)
}