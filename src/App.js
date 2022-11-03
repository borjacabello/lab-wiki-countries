import axios from "axios";
import { Route, Routes } from 'react-router-dom';
import './App.css';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import Navbar from './components/Navbar';
import Home from './components/Home';

import allCountriesArr from './countries.json';
import { useState, useEffect } from 'react';
import CountriesDetails from "./components/CountriesDetails";

function App() {

  //const [countries, setCountries] = useState(allCountriesArr)
  const [countriesAPI, setCountriesAPI] = useState([])

  
  useEffect( () => {
    axios.get("https://ih-countries-api.herokuapp.com/countries")
    .then(response => setCountriesAPI(response.data))
    .catch(error => console.log(error))
  }, [])


  return (
    <div className="App">
      <Navbar style={{position: "fixed"}}/>
      
      <div style={{display: "flex", justifyContent: "space-around", padding: "50px 120px 50px 10px"}}>
        <CountriesList countries={countriesAPI}/>

        <Routes>
          <Route path="/" element={ <Home /> } />
          {/* <Route path="/:country" element={ <CountryDetails countries={countriesAPI} /> } /> */}
          <Route path="/:country" element={ <CountriesDetails /> } />
        </Routes>
      </div>

    </div>
  );
}

export default App;
