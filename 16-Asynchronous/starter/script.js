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

  // Long method for fetching============ START============================

  // fetch(`https://restcountries.eu/rest/v2/name/${country}`)
  //   // .then method syntax
  //   // .then (Promise_fullfilled, Promise_rejected)
  //   .then(
  //     // Function if promise fulfilled
  //     response => {
  //       if (!response.ok)
  //         throw new Error(`Country not found (${response.status})`);
  //       return response.json();
  //     }

  //     // Function if promise rejected
  //     // To catch error before initialize
  //     // err => alert(err)
  //   )
  //   .then(data => {
  //     renderCountry(data[0]);

  //     // Chaining promise

  //     // chain start
  //     // calling neighbor of the country
  //     // const neighbour = data[0].borders[0];
  //     const neighbour = 'xd';
  //     if (!neighbour) return;

  //     // Country 2
  //     return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`);
  //   })
  //   .then(response => {
  //     if (!response.ok)
  //       throw new Error(`Country not found (${response.status})`);
  //     response.json();
  //   })
  //   .then(data => {
  //     renderCountry(data, 'neighbour');
  //   }) //Chain ends
  //   // To catch error globally
  //   .catch(err => {
  //     console.error(`${err}`);
  //     renderError(`Something went wrong ${err.message}. Try again!`);
  //   })
  //   .finally(() => {
  //     countriesContainer.style.opacity = 1;
  //   });

  // Long method for fetching============END============================

  // SHORT method for fetching============START============================

  getJSON(
    `https://restcountries.eu/rest/v2/name/${country}`,
    'Country not found'
  )
    .then(data => {
      renderCountry(data[0]);
      // const neighbour = 'xd';
      const neighbour = data[0].borders[0];
      if (!neighbour) throw new Error('No neighbour found!');
      // console.log(data[0]);

      // Country 2
      return getJSON(`https://restcountries.eu/rest/v2/alpha/${neighbour}`);
    })

    .then(data => {
      renderCountry(data, 'neighbour');
    })
    .catch(err => {
      console.error(`${err}`);
      renderError(`Something went wrong ${err.message} LMAO`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
  // SHORT method for fetching============END============================
};

const getJSON = function (url, errMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errMsg} (${response.status})`);

    return response.json();
  });
};

// getCountryData('united states of america');
// getCountryData('philippines');
// getCountryData('algeria');

const whereAmI = function (lat, long) {
  // fetch(`https://geocode.xyz/${long},${lat}?geoit=json`)
  fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${long}&localityLanguage=en`
  )
    .then(response => {
      // return response.json();
      // console.log(response.json());
      return response.json();
    })
    .then(data => {
      // console.log(data.countryName);
      // getCountryData(data.countryName);
      // const errorNum = data.status,
      //   errorDesc = data.description;
      // if (errorNum == '401') console.log(`Error ${errorNum}, ${errorDesc}`);
      // console.log(data);
      return data.countryName;
    })
    .then(country => {
      // if (country == '') throw new Error('No country exist');
      // getCountryData(country);

      console.log(`You are in ${country}`);
      fetch(`https://restcountries.eu/rest/v2/name/${country}`)
        .then(dataCountry => {
          // console.log(dataCountry);
          return dataCountry.json();
        })
        .then(newCountry => {
          const countryData = newCountry[0],
            currentNeighbor = newCountry[0].borders[0];
          renderCountry(countryData);
          if (!currentNeighbor) throw new Error('No Neighbor found');
          // get countryData then render

          // Neighbor
          return fetch(
            `https://restcountries.eu/rest/v2/alpha/${currentNeighbor}`
          ).then(getNeighborData => {
            return getNeighborData.json();
          });
        })
        .then(neighbourData => {
          renderCountry(neighbourData, 'neighbour');
        })
        .catch(countryErr => {
          console.log(countryErr);
          renderError(countryErr.message);
        });
    })
    .catch(err => {
      console.log(`Invalid Coordinate ${err.status}`);
      renderError(`Invalid Coordinate ${err.status}`);
    });
};
// whereAmI(37.421, -122.08); //USA
// whereAmI(14.5469551, 121.0604766); //Philippines
// whereAmI(27.8193752, -7.3515912); //Africa , Algeria
// whereAmI(24.822, 55.5); //Dubai
// whereAmI(undefined, null); //USA
// whereAmI(14.8008788, 121.0289141);

// const imaDokuda = function (long, lat) {
//   fetch(`https://geocode.xyz/${long},${lat}?geoit=json`)
//     // fetch(
//     //   `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${long}&localityLanguage=en`
//     // )
//     .then(response => {
//       // return response.json();
//       // console.log(response.json());
//       // console.log(response);
//       if (!response.ok) throw new Error('Invalid Coordinates');
//       return response.json();
//     })
//     .then(data => {
//       // console.log(data.countryName);
//       // getCountryData(data.countryName);
//       // const errorNum = data.status,
//       //   errorDesc = data.description;
//       // if (errorNum == '401') console.log(`Error ${errorNum}, ${errorDesc}`);
//       if (data.error?.code == '018') throw new Error('Invalid Country');
//       setTimeout(() => {
//         console.log(data);
//       }, 2000);

//       // return data.countryName;
//     })
//     // .then(country => {
//     //   // if (country == '') throw new Error('No country exist');
//     //   getCountryData(country);
//     //   console.log(`You are in ${country}`);
//     // })
//     .catch(err => {
//       console.log(`${err}`);
//     });
// };

// imaDokuda(25.2120555, 55.2666567);
// imaDokuda(27.8193752, -7.3515912);
// imaDokuda(`d`, 'lol');

//geocode.xyz IS SHIT, REMOVE THAT

// Promises

// const lotteryPromise = new Promise(function (resolve_, reject_) {
//   console.log('Lotter draw is happening!');
//   console.log('Countdown in 3');

//   setTimeout(() => {
//     if (Math.random() >= 0.5) {
//       resolve_('You Win!');
//     } else {
//       reject_('You Lose LMAO');
//     }
//   }, 3000);
// });

// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

const getUserPosition = function () {
  return new Promise(function (resolvePosition, rejectPosition) {
    // navigator.geolocation.getCurrentPosition()
    // This method is already defined
    // This method will ask user to "Know youe Location"
    navigator.geolocation.getCurrentPosition(resolvePosition, rejectPosition);
  });
};

// // Getting user's position
// getUserPosition()
//   .then(pos => {
//     console.log(pos);
//     console.log(pos.coords.latitude);
//     console.log(pos.coords.longitude);
//     const userLat = pos.coords.latitude,
//       userLong = pos.coords.longitude;
//     // call promise to render your location
//     whereAmI(userLat, userLong);
//   })
//   .catch(posErr => console.error(posErr));

const createImage = function (imgNum) {
  // Element with src attribute
  const imgElem = document.createElement('img');
  // Append imgElem by Body element
  document.body.appendChild(imgElem);
  // Set attribute of img Element
  imgElem.setAttribute('src', `img/img-${imgNum}.jpg`);

  // Can also be like this
  // Which is easy
  // document.body.insertAdjacentHTML(
  //   'afterbegin',
  //   `<img src="img/img-${imgNum}.jpg"></img>`
  // );
};

// createImage(1);

const createImage2 = function (imgNum) {
  // return new Promise(function (resolveImg, rejectImg) {
  //   resolveImg(`img/img-${imgNum}.jpg"></img>`);
  //   rejectImg('Image not Found!');
  // });

  return new Promise(function (resolveImg, rejectImg) {
    const imgElem2 = document.createElement('img');
    // Append imgElem by Body element
    document.body.appendChild(imgElem2);
    // Set attribute of img Element
    imgElem2.setAttribute('src', `img/img-${imgNum}.jpg`);

    // rejectImg('Image not Found!');
  });

  // return `img/img-${imgNum}.jpg"></img>`;
};

// const imgRotation = new Promise(function (resolveImg, rejectImg) {

//   resolveImg(createImage2());
//   rejectImg('Image not Found!');
// });

// const rotateImg = function (secs) {
//   return new Promise(function (resolveSec) {
//     setTimeout(resolveSec, secs * 1000);
//   });
// };
// // createImage2(2);
// rotateImg(1)
//   .then(() => {
//     createImage2(1);
//     return rotateImg(2);
//   })
//   .then(() => createImage2(2) );

// ASYNC
// Does not need .THEN Method

const checkThisCountry = async function (country) {
  try {
    // To fetch respons
    const responsCountry = await fetch(
      `https://restcountries.eu/rest/v2/name/${country}`
    );
    // Throw error if nothing response
    if (!responsCountry.ok)
      throw new Error(`Error: ${responsCountry.status} Country not found !`);

    // To get JSON
    const dataCountry = await responsCountry.json();
    // console.log(responsCountry);

    // console.log(responsCountry);
    renderCountry(dataCountry[0]);
  } catch (err) {
    // To render Error to HRML
    renderError(err.message);
    console.log(err.message);
  }
};

// To check where the user
const dokoIru = async function () {
  try {
    // Get location from user using getUserPosition() function
    const pos = await getUserPosition();

    // Throw Error
    // NOTE: This doesnt work idk why
    // BUT I manage to workout on Catch method
    // if (pos.code == 1)
    // throw new Error(`Error code ${pos.code}, ${pos.message}`);

    // console.log(pos.coords.latitude);
    // Deconstrunct the response
    const { latitude: posLAT, longitude: posLONG } = pos.coords;

    // console.log(posLAT, posLONG);

    // Fetch what country are we
    // Using Latitued and Longitude from getting position
    const rescount = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${posLAT}&longitude=${posLONG}&localityLanguage=en`
    );
    // Get the JSON from response
    const resJson = await rescount.json();
    // console.log(resJson);

    // Deconstruct country name from json
    const { city, countryName: currentCountry } = resJson;

    // Rebder country using checkThisCountry Function
    checkThisCountry(currentCountry);
    // console.log(`You are in ${city}, ${currentCountry}`);
    return `You are in ${city}, ${currentCountry}`;
  } catch (err) {
    // console.log(err);
    if (err.code == 1) {
      // console.log(`Error code ${err.code}: ${err.message}`);
      renderError(`Error code ${err.code}: ${err.message}`);
    }
    throw err;
  }
};

// checkThisCountry('aylmao');
// dokoIru()

// Async + Then method
// dokoIru()
//   .then(city => console.log(city))
//   .catch(err => {
//     // renderError(`Error code ${err.code}: ${err.message}`);
//     console.log(`Error code ${err.code}: City not found`);
//     // console.log(err);
//   })
//   .finally(() => console.log(`Finished processing Geo`));

// Try Catch Statement

// try {
//   let y = 1;
//   const x = 2;

//   // ERROR: X is constant, cant replace
//   x = 3;
// } catch (err) {
//   console.error(err.message);
// }

// Async + Then method
// dokoIru()
//   .then(city => console.log(city))
//   .catch(err => {
//     // renderError(`Error code ${err.code}: ${err.message}`);
//     console.log(`Error code ${err.code}: City not found`);
//     // console.log(err);
//   })
//   .finally(() => console.log(`Finished processing Geo`));

// Async ONLY

// Syntax use here:
// it's called IIFE

/*(function(){
  do something
}());
*/

// (async function () {
//   try {
//     const resp = await dokoIru();
//     console.log(resp);
//   } catch (err) {
//     renderError(`Error code ${err.code}: ${err.message}`);
//     console.log(`Error code ${err.code}: City not found`);
//   }
//   console.log(`Finished processing Geo`);
// })();

const get3Countries = async function (c1, c2, c3) {
  try {
    // Using this method loads in Series
    // const [data1] = await getJSON(
    //   `https://restcountries.eu/rest/v2/name/${c1}`
    // );
    // const [data2] = await getJSON(
    //   `https://restcountries.eu/rest/v2/name/${c2}`
    // );
    // const [data3] = await getJSON(
    //   `https://restcountries.eu/rest/v2/name/${c3}`
    // );
    // console.log(data1, data2, data3);

    // This Method use to load all data at the same time
    // Must be on array
    const dataALL = await Promise.all([
      getJSON(`https://restcountries.eu/rest/v2/name/${c1}`),
      getJSON(`https://restcountries.eu/rest/v2/name/${c2}`),
      getJSON(`https://restcountries.eu/rest/v2/name/${c3}`),
    ]);

    console.log(dataALL); //Output: [Array(1), Array(1), Array(1)]

    // To get EACH data easily use .map() method
    const countryCapital = dataALL.map(d => d[0].capital);
    console.log(countryCapital);
  } catch (err) {
    console.log(err);
  }
};

// get3Countries('qatar', 'japan', 'malaysia');

// Promise.race
// if there's multiple await you want to execute without using .map() Method
// it will only execute who will bring the data first

(async function () {
  const resp = await Promise.race([
    getJSON(`https://restcountries.eu/rest/v2/name/japan`),
    getJSON(`https://restcountries.eu/rest/v2/name/italy`),
    getJSON(`https://restcountries.eu/rest/v2/name/vietnam`),
  ]);

  console.log(resp[0]);
})();
