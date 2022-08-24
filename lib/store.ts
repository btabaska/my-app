import { createStore, action } from "easy-peasy";

export const store = createStore({
  activeCards: [],
  changeActiveCards: action((state: any, payload) => {
    state.activeSongs = payload;
  }),
});
