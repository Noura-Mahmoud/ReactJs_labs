import { v4 as uuid } from "uuid";

const initialState = [
  {
    id: uuid(),
    director: "Frank Darabont",
  },
  {
    id: uuid(),
    director: "Quentin Tarantino",
  },
  {
    id: uuid(),
    director: "Christopher Nolan",
  },
];
export const directorsReducer = (state = initialState) => {
  return state;
};
