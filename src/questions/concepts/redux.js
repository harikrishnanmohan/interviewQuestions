import { createStore } from "redux";

const storeReducer = (state = { counter: 0 }, action) => {
  // we need to set the default value here to let the redux know the initial value for the store
  // the returning state will replace the old state by redux
  if (action.type === "increment") {
    return { counter: state.counter + 1 };
  }
  if (action.type === "decrement") {
    return { counter: state.counter - 1 };
  }
  if (action.type === "byValue") {
    return { counter: state.counter + action.value };
  }
  return counter;
};

const store = createStore(storeReducer);
export default store;

// wrap the next code in App.js
import { Provider } from "react-redux";
import store from "redux.js";

<Provider store={store}>
  <App />
</Provider>;

// to use the redux store use the bellow hooks
import { useSelector, useDispatch } from "react-redux";

const dispatch = useDispatch(); // to change the store, will pass the action
const counter = useSelector((state) => state.counter);
console.log(counter);

const incrementCounter = () => {
  dispatch({ type: "increment" });
};

const incrementByValue = (value) => {
  dispatch({ type: "byValue", value: value });
};

incrementCounter();
incrementByValue(5);
