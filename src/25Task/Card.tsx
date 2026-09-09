import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
// import FavoriteIcon from "@mui/icons-material/Favorite";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
// import { AddDeleteFavouriteFilm } from "../../lib/FavouriteFilms";
import { MyFavouriteIcon } from "./MyFavouriteIcon";
// import { createContext, useState } from "react";
// import { useImmer } from "use-immer";
// import { useEffect, useState } from "react";
interface MyCardProps {
  listResults: any[];
  value: number[];
  filterAutocompleteCard: any[];
  searchResults: any[];
}

export function MyCard({
  listResults = [],
  value = [],
  filterAutocompleteCard,
  searchResults,
}: MyCardProps) {
  //можно прописать пропсы так, через интерфейс либо как ниже
  // setFilterMassive((draft)=>((((filterAutocompleteCard.map(a=>Object.values(a)))).flat()).filter(a=>typeof a!=='string')))
  // const [filterMassive, setFilterMassive]=useImmer<any[]>([]);
  // console.log((((filterAutocompleteCard.map(a=>Object.values(a)))).flat()).filter(a=>typeof a!=='string'));//Object.values открывает объекты и получает значения ключей
  //flat поднимает массивы внутри на один уровень вверх
  // console.log(filterAutocompleteCard);
  let i = 0;
  const filterMassive = filterAutocompleteCard
    .map((a) => Object.values(a))
    .flat()
    .filter((a) => typeof a !== "string");
  console.log(filterMassive);
  console.log(value);
  console.log(
    listResults.filter(
      (a) =>
        value[1] > parseInt(a.release_date) &&
        parseInt(a.release_date) < value[0],
    ),
  );
  console.log(searchResults);

  //   console.log(listResults);
  //   const [ElementsCard, setElementsCard] = useState([]);
  //   console.log(ElementsCard);
  //   let FiveElements = [...listResults.slice(0, 6)];
  //   console.log(FiveElements);
  //   if (listResults.length === 0) return null;

  //   for (let i = 1; i < 2; i++) {
  //   console.log(listResults[i].poster_path);
  //   console.log(listResults[i].title);
  //   console.log(listResults[i].overview);

  return (
    ((searchResults.length>0? searchResults:
    listResults
    ).filter(
        (a) =>
          (filterMassive.length > 0
            ? filterMassive.some((item) => a.genre_ids.includes(item))
            : true) &&
          !(value[0] >= parseInt(a.release_date)) &&
          parseInt(a.release_date) <= value[1],
      )
    ).map((a) => (
        //some проверяет подходит ли хотя бы один под описание, если да то возращает true, includes проверяет есть ли он там
        //вторая часть проверяет находится ли во временном промежутке
        ///обязательно фигурные скобки если return большой
        //Если фигурные скобки, то не работает
        // <Paper elevation={9} >
        <MiniCard
          key={i++}
          image={a.poster_path}
          title={a.title}
          overview={a.overview}
          id={a.id}
          raiting={a.vote_average}
        ></MiniCard>
        // </Paper>
      ))
  );
}
function MiniCard({
  image,
  title,
  overview,
  id,
  raiting
}: ///либо пропсы можно прописать так
{
  image: string;
  title: string;
  overview: string;
  id: number;
  raiting:number
}) {
  return (
    
    <Card
      sx={{
        width: "100%",
        height: 250,
        m: 1,
        display: "flex",
        flexDirection: "row",
      }}
    >
      
      <CardMedia
        sx={{ objectFit: "contain", width: 200, flexShrink: 0 }}
        component="img"
        image={`https://image.tmdb.org/t/p/original${image}`}
        alt="Простите, не вышло"
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          height: "100%",
          flexGrow: 1, //заставляет занять весть оставшийся объем
        }}
      >
        {/* <Paper elevation={5}> */}
        <CardContent>
          <Link to={`/${id}`}>
            <h2>{title}</h2>
          </Link>
          <Typography
            sx={{
              fontSize: 14,
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {overview}
          </Typography>
          {/* <Typography>{`https://image.tmdb.org/t/p/original${image}`}</Typography> */}
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
          <button onClick={() => console.log(id)}>Оценка: {(Math.round(raiting*100))/100}</button>
          {/* <IconButton> */}
            {/* <FavoriteIcon sx={{color:"disabled"}} ></FavoriteIcon> */}
            {/* <FavoriteIcon onClick={()=>AddDeleteFavouriteFilm({url:`/account/${22187086}/favorite/movies`})} sx={{color:"#da1010"}} ></FavoriteIcon> */}
            <MyFavouriteIcon id={id} ></MyFavouriteIcon>
          {/* </IconButton> */}
        </CardActions>   
        {/* </Paper>    */}
      </Box>
      
    </Card>
    
  );
}

//   if (i < 8) {
//     FiveElements
//       .map((a) =>
//         setElementsCard([
//           ...ElementsCard,
//           <MiniCard
//             key={i++}
//             image={a.poster_path}
//             title={a.title}
//             overview={a.overview}
//           ></MiniCard>,
//         ]),
//       );
//   }
// }
// switch (page) {
//   case 1:
//     for (let i = 0; i <7; i++) {
//   console.log(listResults[i].poster_path);
//   console.log(listResults[i].title);
//   console.log(listResults[i].overview);
//         return(
//         <MiniCard
//         key={i}
//           image={listResults[i].poster_path}
//           title={listResults[i].title}
//           overview={listResults[i].overview}
//         ></MiniCard>)
//     }
//     break;
//   case 2:
//     for (let i = 6; i < 12; i++) {
//         return(
//         <MiniCard
//           image={listResults[i].poster_path}
//           title={listResults[i].title}
//           overview={listResults[i].overview}
//         ></MiniCard>)
//     }
//     break;}
