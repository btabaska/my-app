import { createStore, action } from "easy-peasy";
// sets up store for easy peasy, creates a store called activeCards and an action called cahngeActive cards
export const store = createStore({
  activeCards: [],
  changeActiveCards: action((state: any, payload) => {
    // Action takes payload received and sets activeCards to that payload
    state.activeCards = payload;
  }),
});
