import { takeEvery, put, all } from "redux-saga/effects";

export function* world() {
  console.log("hello world from saga");
}

export function* joker() {
  console.log("hello Joker from saga");
}

export function* sagas() {
  yield all([takeEvery("Joker", joker), takeEvery("world", world)]);
}
