import React, { useRef, useState } from 'react';
import '../styles/App.css';
import Form from './Form.js';
import Result from './Result.js';
import Header from './Header.js';
import Footer from './Footer.js';

const APIkey = 'c06272c73de545a7f672d9cd0437f163';

export default function App() {
  const [weather, setWeather] = useState({
    value: '',
    date: '',
    city: '',
    sunrise: '',
    sunset: '',
    temp: '',
    pressure: '',
    wind: '',
    humidity: '',
    timezone: '',
    err: false,
  });

  const slideRef = useRef(null);

  function handleInputChange(e) {
    setWeather({
      value: e.target.value,
    });
  }

  function handleCitySubmit(e) {
    e.preventDefault();
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${weather.value}&APPID=${APIkey}&units=metric`;

    fetch(API)
      .then((response) => {
        if (response.ok) {
          return response;
        }
        throw Error('Nie udało się pobrać danych');
      })
      .then((response) => response.json())
      .then((data) => {
        const date = new Date().toLocaleString();
        setWeather((prevValue) => ({
          err: false,
          date: date,
          sunrise: data.sys.sunrise,
          sunset: data.sys.sunset,
          temp: data.main.temp,
          pressure: data.main.pressure,
          humidity: data.main.humidity,
          wind: data.wind.speed,
          timezone: data.timezone,
          city: prevValue.value,
          value: prevValue.value,
        }));
      })
      .catch((err) => {
        console.log(err);
        setWeather((prevValue) => ({
          value: prevValue.value,
          err: true,
          city: prevValue.value,
        }));
      });
  }

  function slideDown() {
    slideRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className='App'>
      <Header />
      <Form
        value={weather.value}
        change={handleInputChange}
        submit={handleCitySubmit}
        slideDown={slideDown}
      />
      <Result weather={weather} />
      <Footer />
      <div ref={slideRef}></div>
    </div>
  );
}
