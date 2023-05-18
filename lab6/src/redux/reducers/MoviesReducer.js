import { v4 as uuid } from "uuid";
import { Add_Movie, Delete_Movie, Get_All_Movies } from "../actionTypes";

const initialState = null;
export const moviesReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case Get_All_Movies:
      return payload;
    case Add_Movie:
      return [...state, { ...payload, id: uuid() }];

    case Delete_Movie:
      const movieIndex = state.findIndex(
        (m) => m.id.toString() === payload.toString()
      );
      state.splice(movieIndex, 1);
      return [...state];
    default:
      return state;
  }
};
