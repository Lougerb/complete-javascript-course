'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

{
  /* <article class="country">
          <img class="country__img" src="" />
          <div class="country__data">
            <h3 class="country__name">COUNTRY</h3>
            <h4 class="country__region">REGION</h4>
            <p class="country__row"><span>👫</span>POP people</p>
            <p class="country__row"><span>🗣️</span>LANG</p>
            <p class="country__row"><span>💰</span>CUR</p>
          </div>
        </article> */
}

// Modern way of ASYNC

// Public API to use
// https://restcountries.eu/rest/v2/name/{name}

const getCountryData = function (country) {
  // fetch - to get/request API from the webserver
  //   then method will do something after requesting API
  fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    .then(function (response) {
      console.log(response);
      // This then will get the respons
      // then return the json type of respons
      return response.json();
    })
    .then(function (data) {
      // This .then will get the data of the respons
      console.log(data);
    });
};

getCountryData('philippines');
