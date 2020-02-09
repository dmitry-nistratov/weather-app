import { handleActions } from "redux-actions";

import * as actions from "../AC/forecast";
import { LOADING_STATUSES } from "../constants";

const initialState = {
  forecast: "",
  status: LOADING_STATUSES.EMPTY,
  error: ""
};

const forecast = handleActions(
  {
    [actions.getForecast.toString()]: () => ({
      ...initialState,
      status: LOADING_STATUSES.LOADING
    }),
    [actions.setForecast.toString()]: (state, { payload }) => ({
      ...state,
      data: payload,
      status: LOADING_STATUSES.SUCCESS
    })
  },
  initialState
);

export default forecast;
