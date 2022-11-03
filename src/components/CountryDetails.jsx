import React from 'react';
import { Link, useParams } from 'react-router-dom';

function CountryDetails(props) {
  const { country } = useParams();
  const { countries } = props;

  // The object to show the details from
  let countryDetailsObject;

  countries.forEach((eachCountry) => {
    if (eachCountry.alpha3Code === country) {
      countryDetailsObject = eachCountry;
    }
  });

  return (
    <div>
      <img
        src={`https://flagpedia.net/data/flags/icon/72x54/${countryDetailsObject.alpha2Code.toLowerCase()}.png`}
        alt={countryDetailsObject.name.common}
        width={150}
      />
      <h2>{countryDetailsObject.name.common}</h2>
      <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
        <p>Capital</p>
        <p>{countryDetailsObject.capital[0]}</p>
      </div>
      <hr />
      <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
        <p>Area</p>
        <p>{countryDetailsObject.area} km2</p>
      </div>
      <hr />
      <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
        <p>Borders</p>
        <ul>
            {countryDetailsObject.borders.map(eachBorder => {
                return (
                    <Link to={`/${eachBorder}`} key={eachBorder}><li>{eachBorder}</li></Link>
                )
            })}
        </ul>
      </div>
    </div>
  );
}

export default CountryDetails;
