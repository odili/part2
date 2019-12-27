import React from 'react';
import axios from 'axios';

const DisplayCountry = ({ country }) => {
  const [weather, setWeather] = React.useState({});
  // const country = countries[0];
  const params = {
    access_key: process.env.REACT_APP_WEATHER_KEY,
    query: country.capital,
  };

  React.useEffect(() => {
    axios
      .get('http://api.weatherstack.com/current', { params })
      .then(response => {
        // console.log(response.data.current);
        setWeather(response.data.current);
      })
      .catch(error => {
        console.log(error);
      });
  }, [params.query]);

  return (
    <div>
      <h1>{country.name}</h1>
      <p>
        capital: <strong> {country.capital}</strong>
      </p>
      <p>
        population: <strong>{country.population}</strong>
      </p>
      <h3>languages</h3>
      <ul>
        {country.languages.map(lang => (
          <li key={lang.nativeName}>{lang.name}</li>
        ))}
      </ul>
      <img className="flag" alt={country.name} src={country.flag} />
      <h2>Weather in {country.capital}</h2>
      <p>
        <strong> temperature:</strong>
        {`  ${weather.temperature}℃ Celcius`}
      </p>
      <img alt={country.capital} src={weather.weather_icons} />
      <p>
        <strong> Wind:</strong>
        {` ${weather.wind_speed} kph direction ${weather.wind_dir}`}
      </p>
    </div>
  );
};

export default DisplayCountry;
