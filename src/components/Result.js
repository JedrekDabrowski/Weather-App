import React from 'react';
import '../styles/Result.css';

export default function Result(props) {
  const {
    date,
    err,
    city,
    sunrise,
    sunset,
    temp,
    pressure,
    humidity,
    timezone,
    wind,
  } = props.weather;
  let content = null;
  if (!err && city) {
    const sunriseTime = new Date(
      (sunrise + timezone - 7200) * 1000
    ).toLocaleTimeString();
    const sunsetTime = new Date(
      (sunset + timezone - 7200) * 1000
    ).toLocaleTimeString();
    content = (
      <>
        <h4>
          Aktualne dane pogodowe dla miasta <p className='data'>{city}</p>
        </h4>
        <h4>
          Dane dla dnia i godziny <p className='data'>{date}</p>
        </h4>
        <h4>
          Temparatura: <p className='data'>{temp} &#176;C</p>
        </h4>
        <h4>
          Ciśnienie: <p className='data'>{pressure} hPa</p>
        </h4>
        <h4>
          Wilgotność: <p className='data'>{humidity} %</p>
        </h4>
        <h4>
          Siła wiatru: <p className='data'>{wind} m/s</p>
        </h4>
        <h4>
          Wschód słońca: <p className='data'>{sunriseTime}</p>
        </h4>
        <h4>
          Zachód słońca: <p className='data'>{sunsetTime}</p>
        </h4>
      </>
    );
  }
  return (
    <div className='result'>
      {err ? (
        <p className='data noCity'>
          Brak danych w bazie o podanym mieście: {city}
        </p>
      ) : (
        content
      )}
    </div>
  );
}
