import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useEffect, useState } from "react";
// import { createContext } from "react";
type MyFilterprops={
  page:number;
  state:any;
  handleState:Function;
}
export function MyFilter({ state, handleState, page }: MyFilterprops) {
  
  const url1 = 'https://api.themoviedb.org/3/movie/top_rated?language=ru'; //топ рейтинга
  //https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200
  // https://api.themoviedb.org/3/account/me/favorite/movies?language=en-US&page=1&sort_by=created_at.asc
  ///`https://api.themoviedb.org/3/movie/top_rated?language=ru`
  const url2 = `https://api.themoviedb.org/3/movie/popular?language=ru`; //популярные
  const [url, seturl] = useState(url2);
  const newUrl = url + `&page=${page}`;///вставка переменной в строку ${page}
  useEffect(() => {
    fetch(newUrl, {
      method: "GET",
      headers: {
        accept:'application/json',
        // "Content-type": "application/json"
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNmE5NGFiN2VkMWY0MTYzNWVmYTYwNWY3ZWM3NGEwYSIsIm5iZiI6MTc1Mzg5ODQzOC45MjEsInN1YiI6IjY4OGE1ZGM2ODYyYmNkMmJmYmExYTZhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JkQMetRZX9F4quD8GBqSSWp2VLcNctcAL_VwQ_SUrSk",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        handleState(data.results);
        console.log(data.results);
        console.log(state);
        console.log((parseInt(state[0].release_date)))
        // console.log(cs)
        // console.log(state[0])
      })
      .catch((err) => console.error(err));
  }, [newUrl]);
  return (
    <>
      <Select
        sx={{ m: 2, width: 200,  left:0,  }}
        value={url}
        onChange={(e) => {
          seturl(e.target.value);
        }}
      >
        <MenuItem value={url1}>Top raiting</MenuItem>
        <MenuItem value={url2}>Top popular</MenuItem>
      </Select>
      {/* <button onClick={() => {seturl(url1)}}>Set top reiting</button>
      <button onClick={() => {seturl(url2)}}>Set popular</button> */}
    </>
  );
}
