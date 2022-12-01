const redux = require("redux");

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "INCREMENT") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "DECREMENT") {
    return {
      counter: state.counter - 1,
    };
  } else return state;
};
const store = redux.createStore(counterReducer);
console.log(store);

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubscriber);
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });

// first import redux and then create store second create reducer function which contain
// two argumnets state and action create subscriber for subscribe the store action is also
// necesaryif we not create action then counter in consoleis 1
