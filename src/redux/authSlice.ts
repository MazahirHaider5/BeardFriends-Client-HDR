import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Address {
  city?: string;
  state?: string;
  country?: string;
  zip?: string;
  street?: string;
}

interface User {
  id: string;
  email: string;
  username?: string;
  name?: string;
  phone?: string;
  password?: string;
  profilephoto?: string;
  coverphoto?: string;
  stripe_customer_id: string;
  last_transaction_id?: string;
  role: "member" | "admin" | "barber";
  language: string;
  DOB?: string;
  address?: Address;
  provider?: string;
  qr_code?: string;
  photo?: string;
  token?: string;
  __v: number;
}

interface UserState {
  user: User;
}

const initialState: UserState = {
  user: {
    id: "",
    email: "",
    username: "",
    name: "",
    phone: "",
    password: "",
    profilephoto: "",
    coverphoto: "",
    stripe_customer_id: "",
    last_transaction_id: "",
    role: "member",
    language: "en",
    DOB: "",
    address: {
      city: "",
      state: "",
      country: "",
      zip: "",
      street: ""
    },
    provider: "",
    qr_code: "",
    photo: "",
    token: "",
    __v: 0
  }
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser(state, action: PayloadAction<Partial<User>>) {
      state.user = { ...state.user, ...action.payload };
    },
    resetUser(state) {
      state.user = initialState.user;
    }
  }
});

export const { updateUser, resetUser } = userSlice.actions;
export default userSlice.reducer;
