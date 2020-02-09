import { call, put, takeLatest } from "@redux-saga/core/effects";
import { saveToLocalStorage } from "../helpers";

import * as api from "../api/forecast";
import * as actions from "../AC/forecast";

function* getForecast(action) {
  try {
    const response = yield api.getForecast(action.payload);

    saveToLocalStorage(action.payload, "options");
    yield put(actions.setForecast(response.data));
  } catch (error) {
    return console.log(`Error: ${error.message}`);
  }
}

export function* forecast() {
  yield takeLatest(actions.getForecast, getForecast);
}
