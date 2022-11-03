import React from 'react';
import { Link } from 'react-router-dom';

function CountriesList(props) {

  const {countries} = props; 
    
  return (
    <div>
      

      <h4>Countries List</h4>


      {countries.map(eachCountry => {
        return (
            <p key={eachCountry.name.official}>
              <Link to={`/${eachCountry.alpha3Code}`}>{eachCountry.name.common}</Link>
            </p>
        );
      })}

    </div>
  );
}

export default CountriesList;
