import { createSelector } from "reselect";
import { get, isEmpty } from "lodash";

const forecastData = state => get(state, "forecast.data", {});

export const forecastInformation = createSelector(
  forecastData,
  data =>
    !isEmpty(data) && {
      city: data.name,
      main: data.weather[0].main,
      temp: data.main.temp
    }
);
