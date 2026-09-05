import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { createContext, useEffect, useState } from "react";
import { useImmer } from "use-immer";
//Есть проблема с тем как сохранять себе полученные данные из fetch
//Пробросить данные сразу в Card
const top100Films = [
  "Боевик",
  "Комедия",
  "Драма",
  "Триллер",
  "Ужасы",
  "Фантастика",
  "Детектив",
];
interface Genre {
  id:number;
  name:string;
}
interface filters {
  state:[];
  funChange:Function;
}
export function MyAutocomplete({state, funChange}:filters) {
  const [renderInput, setrenderInput] = useState<any[]>([]);
  const url = `https://api.themoviedb.org/3/genre/movie/list?language=ru`;
  const [dataFilters, setdataFilters] = useImmer<Genre[]>([]);
  // const [dataFilters, setdataFilters] = useState<any[]>([])
//   function HandleState(a:any){
//   setdataFilters(a)
// }
  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNmE5NGFiN2VkMWY0MTYzNWVmYTYwNWY3ZWM3NGEwYSIsIm5iZiI6MTc1Mzg5ODQzOC45MjEsInN1YiI6IjY4OGE1ZGM2ODYyYmNkMmJmYmExYTZhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JkQMetRZX9F4quD8GBqSSWp2VLcNctcAL_VwQ_SUrSk",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        console.log(data.genres);
        console.log(Array.isArray(data.genres));
        
        // setdataFilters(()=>data.genres);//рабочий вариант 
        setdataFilters((draft)=>draft.concat(data.genres));
        // HandleState(data.genres);
        console.log(dataFilters);
      })
      // .then((res)=>console.log(res.data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <>
      <div>
        <a>Выбранные категории:</a>
      </div>
      <span></span>
      <Autocomplete
        value={renderInput}
        onChange={(e, value) => {
          setrenderInput(value);
          setTimeout(()=>console.log(value),5000);
          funChange(value);
        }}
        multiple // необходимое условие для множественного выбора
        options={dataFilters}
        getOptionLabel={(option)=>option.name}
        disableCloseOnSelect // это нам пригодится дальше
        renderInput={(params) => <TextField {...params} label="Жанры" />}
      />
    </>
  );
}
