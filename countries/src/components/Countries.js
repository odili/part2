import React from 'react';
import Country from './Country';
import DisplayCountry from './DisplayCountry';

const Countries = ({ countries, handleShow }) => {
  if (countries.length > 10) {
    return <p>Too many matches, specify another filter</p>;
  }
  if (countries.length === 1) {
    const country = countries[0];
    return <DisplayCountry country={country} />;
  }

  return (
    <>
      {countries.map(country => (
        <Country
          key={country.numericCode}
          name={country.name}
          handleShow={handleShow}
        />
      ))}
    </>
  );
};

export default Countries;
