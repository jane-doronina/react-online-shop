import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  currentUser: null
}

export const userSlice = createSlice({
  name: "user",
  initialState: INITIAL_STATE,
  reducers: {
    setCurrentUser(state, action) {
      state.currentUser = action.payload;
    }
  }
});

export const { setCurrentUser } = userSlice.actions;
export const userReducer = userSlice.reducer;


// OLD VERSION WITHOUT TOOLKIT

// const userReducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case USER_ACTION_TYPES.SET_CURRENT_USER:
//       return {...state, currentUser: action.payload };
//     default:
//       return state;
//   }
// };
