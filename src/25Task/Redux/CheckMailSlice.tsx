import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
interface UserProp {
  name: string;
  isLoggedMail: boolean;
  isLoggedIn: boolean;
  parol: string;
}
const InitialProps: UserProp = {
  name: '',
  isLoggedMail: false,
  isLoggedIn: false,
  parol: '1111',
};

const CheckMail = createSlice({
  name: 'user',
  initialState: InitialProps,
  reducers: {
    loginParol: (state, action: PayloadAction<string>) => {
      action.payload === state.parol
        ? (state.isLoggedIn = true)
        : (state.isLoggedIn = false);
    },
    loginMail: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
      state.isLoggedMail = true;
    }, //action - объект-действие отправленный через dispatch

    logout: (state) => {
      state.name = '';
      state.isLoggedIn = false;
      state.isLoggedMail = false;
    },
  },
});
export default CheckMail.reducer;
export const { loginMail, loginParol, logout } = CheckMail.actions;
