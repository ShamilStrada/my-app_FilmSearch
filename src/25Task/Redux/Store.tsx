import { configureStore } from '@reduxjs/toolkit';
import CheckMail from "./CheckMailSlice"



export const store = configureStore({ reducer: {user: CheckMail} });
export type RootState = ReturnType<typeof store.getState>; //Форма стейта
export type AppDispatch = typeof store.dispatch;
