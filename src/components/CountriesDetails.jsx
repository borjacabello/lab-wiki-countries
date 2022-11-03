import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

function CountriesDetails() {
  const [countryInfo, setCountryInfo] = useState(null);
  const [isFetching, setIsFetching] = useState(true);

  const { country } = useParams();

  useEffect(() => {
    axios
      .get(`https://ih-countries-api.herokuapp.com/countries/${country}`)
      .then((response) => {
        setCountryInfo(response.data)
        setIsFetching(false)
      })
      .catch((error) => {
        console.log(error);
      });
  }, [country]);

  if (isFetching === true) {
    return <h3>Looking for countries...</h3>
  }

  return (
    <div>
        <img
            src={`https://flagpedia.net/data/flags/icon/72x54/${countryInfo.alpha2Code.toLowerCase()}.png`}
            alt={countryInfo.name.common}
            width={150}
        />
        <h2>{countryInfo.name.common}</h2>
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
            <p>Capital</p>
            <p>{countryInfo.capital[0]}</p>
        </div>
        <hr />
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
            <p>Area</p>
            <p>{countryInfo.area} km2</p>
        </div>
        <hr />
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
            <p>Borders</p>
            <ul>
                {countryInfo.borders.map(eachBorder => {
                    return (
                        <Link to={`/${eachBorder}`} key={eachBorder}><li>{eachBorder}</li></Link>
                    )
                })}
            </ul>
        </div>
    </div>
  )
}

export default CountriesDetails;
