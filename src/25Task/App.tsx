import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { MyAutocomplete } from './MyAutocomplete';
import { MySlider } from './SliderMy';
import { MyFilter } from './Filter';
import { MyCard } from './Card';
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';
import { MyPagination } from './MyPagination';
import { InputFilm } from './InputFilm';
import { Paper } from '@mui/material';
// import { Paper } from '@mui/material';
interface App {
  funfilter: () => void;
}
export function App({ funfilter }: App) {
  const [page, setPage] = useState<number>(1); ///страница
  const [results, setResults] = useState<[]>([]); ///массив с данными
  const [value, setValue] = useState<number[]>([1990, 2026]); ///слайдер
  const [filterAutocomplete, setFilterAutocomplete] = useState<[]>([]); //фильтры жанров
  const [dataSearchFilm, setDataSearchFilm] = useState<[]>([]); //поиск по названию

  const funSearchFilm = (list: []) => {
    setDataSearchFilm(list);
  };
  const funChangeApp = (list: []) => {
    setFilterAutocomplete(list);
  };
  function handleChange(event: any, value: number[]) {
    ///функция на изменение времени слайдера
    setValue(value);
  }
  function ChangeResults(list: []) {
    ///функция изменения результатов запроса
    setResults(list);
  }
  function handleChangePage(event: any, value: number) {
    ///функц. изменения номера страницы
    setPage(value);
  }
  return (
    <>
      {/* <FormControl fullWidth sx={{ m: 1 }} /> */}
      
      <Box component={Paper} elevation={10}
        sx={{
          width: 420,
          height:"97vh",
          m: 1,
          // border: '3px dashed',
          position: 'absolute', //позиция
          top: 0, //перенесли бокс в правый верхний угол
          left: 0,
          display: 'block', //отображение
        }}
      >
        <Box sx={{ mb: 1, display: 'flex', gap: 2 }}>
          <Typography sx={{ fontSize: 25, fontStyle: 'italic' }}>Фильтры</Typography>
          <IconButton onClick={funfilter}>
            <ClearIcon></ClearIcon>
          </IconButton>
        </Box>
        <Box sx={{ mb: 1, display: 'block', gap: 2 }}>
          <InputFilm page={page} funChangeFilm={funSearchFilm}></InputFilm>
        </Box>
        <MyFilter state={results} handleState={ChangeResults} page={page}></MyFilter>
        <Typography sx={{ mb: 5 }}>Год релиза:</Typography>
        <MySlider value={value} handleChange={handleChange}></MySlider>
        <FormControl fullWidth sx={{ m: 2 }}></FormControl>
        <MyAutocomplete
          state={filterAutocomplete}
          funChange={funChangeApp}
        ></MyAutocomplete>
        <MyPagination page={page} handleChangePage={handleChangePage}></MyPagination>
      </Box>
      
      <Box component={Paper} elevation={10}
        sx={{
          // border: '3px dashed',
          // borderRadius:"5",
          width: 1200,
          height: "97vh",
          position: 'fixed', //позиция
          top: 0, //перенесли бокс в правый верхний угол
          right: 0,
          m: 1, //отступы
          display: 'flex', //отображение
          flexWrap: 'wrap', //перенос строки
          overflow: 'auto',
        }}
      >
        
        <MyCard
          searchResults={dataSearchFilm}
          listResults={results}
          value={value}
          filterAutocompleteCard={filterAutocomplete}
        ></MyCard>
         
      </Box>
     
    </>
  );
}
///Может можно сделать красивее два в одном
//  else {
//     return (
//       <>
//         <div></div>
//         <FormControl fullWidth sx={{ m: 1 }} />
//         <Box
//           sx={{
//             width: 420,
//             ml: 1,
//             border: "3px dashed",
//             position: "absolute", //позиция
//             top: 0, //перенесли бокс в правый верхний угол
//             left: 0,
//             display: "block", //отображение
//           }}
//         >
//           <Box sx={{ mb: 1, display: "flex", gap: 2 }}>
//             <Typography sx={{ fontSize: 25, fontStyle: "italic" }}>
//               Фильтры
//             </Typography>
//             <IconButton onClick={() => usestateFilter(!stateFilter)}>
//               <ClearIcon></ClearIcon>
//             </IconButton>

//           </Box>
//           <InputFilm page={page} funChangeFilm={funSearchFilm}></InputFilm>
//           <MyFilter
//             state={results}
//             handleState={ChangeResults}
//             page={page}
//           ></MyFilter>
//           <Typography sx={{ mb: 5 }}>Год релиза:</Typography>
//           <MySlider value={value} handleChange={handleChange}></MySlider>
//           <FormControl fullWidth sx={{ m: 1 }}></FormControl>
//           <MyAutocomplete state={filterAutocomplete} funChange={funChangeApp}></MyAutocomplete>
//           <MyPagination
//             page={page}
//             handleChangePage={handleChangePage}
//           ></MyPagination>
//         </Box>
//         <Box
//           sx={{
//             border: "3px dashed",
//             width: 1200,
//             height: 850,
//             position: "absolute", //позиция
//             top: 0, //перенесли бокс в правый верхний угол
//             right: 0,
//             m: 1, //отступы
//             display: "flex", //отображение
//             flexWrap: "wrap", //перенос строки
//             overflow: "auto",
//           }}
//         >
//           <MyCard searchResults={dataSearchFilm}  listResults={results} value={value} filterAutocompleteCard={filterAutocomplete}></MyCard>
//         </Box>
//       </>
//     );
//   }
// }
