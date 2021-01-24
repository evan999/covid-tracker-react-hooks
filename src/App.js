import React, { useState, useEffect } from "react";
import {
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core"
import './App.css';

function App() {
  const [countries, setCountries] = useState([]);

  // https://disease.sh/v3/covid-19/countries

  useEffect(() => {

    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => (
            {
              name: country.country, // United States, United Kingdom
              value: country.countryInfo.iso2, // UK, USA, FR
            }));
          setCountries(countries);
        })
    };
    getCountriesData();
  }, []);


  return (
    <div className="app">
      <div className="app__header">
        <h1>COVID-19 TRACKER</h1>
        <FormControl className="app__dropdown">
          <Select
            variant="outlined"
            value="abc"
          >
            {
              /* Loop through all the countries and show a drop-down
                list of all the options
              */
            }

            {
              countries.map(country => (
                <MenuItem value={country.value}>{country.name}</MenuItem>
              ))
            }

            {/* <MenuItem value="worldwide">Worldwide</MenuItem>
            <MenuItem value="worldwide">Option 2</MenuItem>
            <MenuItem value="worldwide">Worldwde</MenuItem>
            <MenuItem value="worldwide">Worldwde</MenuItem> */}
          </Select>
        </FormControl>
      </div>


    </div>
  );
}

export default App;
