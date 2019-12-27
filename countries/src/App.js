import React from 'react';
import axios from 'axios';
import SerachFilter from './components/SerachFilter';
import Countries from './components/Countries';
import DisplayCountry from './components/DisplayCountry';

const App = () => {
  const [countries, setCountries] = React.useState([]);
  const [filterParam, setFilterParam] = React.useState('');
  const [showCountry, setShowCountry] = React.useState(false);
  const [country, setCountry] = React.useState('');

  React.useEffect(() => {
    axios.get('https://restcountries.eu/rest/v2/all').then(res => {
      // console.log(res.data);
      setCountries(res.data);
    });
  }, []);

  const handleFilter = e => {
    setFilterParam(e.target.value);
  };

  const handleShow = e => {
    // console.log(e.target.value);
    setCountry(e.target.value);
    setShowCountry(!showCountry);
  };

  const countryResult = filterParam
    ? countries.filter(country =>
        country.name.toLowerCase().includes(filterParam.toLowerCase())
      )
    : countries;

  return (
    <>
      <SerachFilter filerParam={filterParam} handleFilter={handleFilter} />
      {filterParam && (
        <Countries countries={countryResult} handleShow={handleShow} />
      )}
      {showCountry && (
        <DisplayCountry
          country={countryResult.filter(nation => nation.name === country)[0]}
        />
      )}
    </>
  );
};

export default App;
