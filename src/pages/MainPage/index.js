import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getForecast } from "../../AC/forecast";
import { forecastInformation } from "../../selectors/forecast";
import Select from "../../components/select";

import styles from "./MainPage.module.scss";

const MainPage = () => {
  const dispatch = useDispatch();

  const forecast = useSelector(forecastInformation);

  const [city, setCity] = useState("");

  const options = JSON.parse(localStorage.getItem("options")) || [];

  const forecastSearch = e => {
    e.preventDefault();
    dispatch(getForecast(city));
    setCity("");
  };

  return (
    <div className={styles.mainPage}>
      <h2 className={styles.title}>Welcome to the Weather App!</h2>
      <form onSubmit={forecastSearch} className={styles.form}>
        <Select
          name="city"
          value={city}
          text="Please, enter the city"
          options={options}
          onChange={e => setCity(e.target.value)}
        />
        <button className={styles.submitButton}>Search</button>
      </form>
      {forecast && (
        <div className={styles.forecastContent}>
          <h3>Weather in {forecast.city}:</h3>
          <h3>{`${forecast.main}. ${forecast.temp}`}&#8451;</h3>
        </div>
      )}
    </div>
  );
};

export default MainPage;
