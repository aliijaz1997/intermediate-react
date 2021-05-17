import { reducer } from "./App";

test("`increment` should increase the count", () => {
  const initialState = { count: 0 };
  const newState = reducer(initialState, { type: "increment" });
  expect(newState.count).toBe(1);
});
test("`decrement` should decrease the count", () => {
  const initialState = { count: 1 };
  const newState = reducer(initialState, { type: "decrement" });
  expect(newState.count).toBe(0);
});
test("`reset` should reset the count", () => {
  const initialState = { count: 1 };
  const newState = reducer(initialState, { type: "reset" });
  expect(newState.count).toBe(0);
});
