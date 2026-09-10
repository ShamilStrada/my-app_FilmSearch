import { TextField } from "@mui/material";
import { useEffect, useState } from "react";

interface Film {
    funChangeFilm:Function;
    page:number
}

export const InputFilm = ({funChangeFilm, page}:Film) => {
  const [valueInput, setValueInput] = useState<string>("");
  const [flag, setFlag] = useState(false);
//   const [dataSearchFilm, setDataSearchFilm] = useState();
  const url = `https://api.themoviedb.org/3/search/movie?query=${valueInput}&include_adult=false&language=ru&page=${page}`;
  useEffect(() => {
    fetch(url, {
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNmE5NGFiN2VkMWY0MTYzNWVmYTYwNWY3ZWM3NGEwYSIsIm5iZiI6MTc1Mzg5ODQzOC45MjEsInN1YiI6IjY4OGE1ZGM2ODYyYmNkMmJmYmExYTZhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JkQMetRZX9F4quD8GBqSSWp2VLcNctcAL_VwQ_SUrSk",
      },
    })
      .then((response) => {
        if (!response.ok) {
          console.log("Произошла ошибка", response.status);
          throw new Error(`Произошла ошибка ${response.status}`);
        }
        return response.json();
      })

      .then((data) => {
        console.log(data.results);
        console.log(Array.isArray(data))
        funChangeFilm(data.results)
      })
      .catch((err) => console.error(err.message));
  }, [flag,page]);
  return (
    <form
      onSubmit={(e) => {
        //только форма имеет возможность отправлять запрос через Enter
        e.preventDefault();
        console.log(valueInput);
        setFlag(!flag);
      }}
    >
      <TextField sx={{width: "80%"}}
        placeholder="Введите название фильма"
        onChange={(e) => setValueInput(e.target.value)}
        value={valueInput}
      ></TextField>
    </form>
  );
};
