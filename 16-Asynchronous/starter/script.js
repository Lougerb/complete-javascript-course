'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

const renderCountry = function (data, className = '') {
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

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

// Promise Method
const getCountryData = function (country) {
  // fetch - to get/request API from the webserver
  //   then method will do something after requesting API

  // Fetch in normal function
  // fetch(`https://restcountries.eu/rest/v2/name/${country}`)
  //   .then(function (response) {
  //     console.log(response);
  //     // This then will get the respons
  //     // then return the json type of respons
  //     return response.json();
  //   })
  //   .then(function (data) {
  //     // This .then will get the data of the respons
  //     console.log(data);
  //   });

  // fetch in Arrow Function (recommended)
  // fetch(`https://restcountries.eu/rest/v2/name/${country}`)
  // .then(response =>response.json()
  //   .then(data => renderCountry(data[0]))
  // );

  fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    // .then method syntax
    // .then (Promise_fullfilled, Promise_rejected)
    .then(
      // Function if promise fulfilled
      response => response.json()

      // Function if promise rejected
      // To catch error before initialize
      // err => alert(err)
    )
    .then(data => {
      renderCountry(data[0]);

      // Chaining promise

      // chain start
      // calling neighbor of the country
      const neighbour = data[0].borders[0];
      if (!neighbour) return;
      return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`);
    })
    .then(response => response.json())
    .then(
      data => {
        renderCountry(data, 'neighbour');
      },
      noneighbor => console.log('no neighbor')
    ) //Chain ends
    // To catch error globally
    .catch(err => {
      console.error(`${err}`);
      renderError(`Something went wrong ${err.message}. Try again!`);
    });
};

getCountryData('japan');
