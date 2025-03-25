import { createSlice, configureStore } from "@reactjs/toolkit";

const initialState = {
  counter: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
    byValue(state, action) {
      state.counter = state.counter + action.payload; //payload is automatically gave by react. its always payload
    },
  },
});

const store = configureStore({ reducer: { counter: counterSlice.reducer } });

export const counterActions = counterSlice.actions;
export default store;

// wrap the next code in App.js
import { Provider } from "react-redux";
import store from "redux.js";

<Provider store={store}>
  <App />
</Provider>;

// to use the redux store use the bellow hooks
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "./index.js";

const dispatch = useDispatch(); // to change the store, will pass the action
const counter = useSelector((state) => state.counter.counter); // first counter is the name we gave in configure function and the secount counter is the action value in store
console.log(counter);

const incrementCounter = () => {
  dispatch(counterActions.increment());
};

const incrementByValue = (value) => {
  dispatch(counterActions.byValue(5)); // this 5 will be passed to reducer function by react with action.payload argument
};

incrementCounter();
incrementByValue(5);
