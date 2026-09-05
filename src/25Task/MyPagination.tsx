import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
// import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
// import { useState } from "react";
interface MyPaginationProps{
  page:number;
  handleChangePage:any;
}
export function MyPagination({page,handleChangePage}:MyPaginationProps) {  
  return (
    <>
      <Box sx={{ pt: 50 }}>
        <Stack spacing={1}>
          <Typography>Страница:{page}</Typography>
          <Pagination
            size="large"
            page={page}
            onChange={handleChangePage}
            count={20}
            color="secondary"
            showFirstButton
            showLastButton
          />
        </Stack>
      </Box>
    </>
  );
}
