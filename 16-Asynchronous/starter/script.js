'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// NEW COUNTRIES API URL (use instead of the URL shown in videos):
// https://restcountries.com/v2/name/portugal

// Or?
// https://countries-api-836d.onrender.com/countries/

// This works:
// https://api.restcountries.com/countries/v5/names.common/Canada

// NEW REVERSE GEOCODING API URL (use instead of the URL shown in videos):
// https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}

///////////////////////////////////////
// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open(
//     'GET',
//     `https://api.restcountries.com/countries/v5/names.common/${country}`,
//   );

//   request.setRequestHeader(
//     'Authorization',
//     'Bearer rc_live_adc9392a808047ce9fef2bff40af6684',
//   );
//   request.send();
//   console.log(request.responseText);

//   request.addEventListener('load', function () {
//     console.log(this.responseText);

//     const {
//       data: {
//         objects: [data1],
//       },
//     } = JSON.parse(this.responseText);
//     console.log(data1);

//     const html = `
//         <article class="country">
//           <img class="country__img" src="${data1.flag.url_png}" />
//           <div class="country__data">
//             <h3 class="country__name">${data1.names.common}</h3>
//             <h4 class="country__region">${data1.region}</h4>
//             <p class="country__row"><span>👫</span>${(+data1.population / 1000000).toFixed(1)} people</p>
//             <p class="country__row"><span>🗣️</span>${data1.languages[0].name}</p>
//             <p class="country__row"><span>💰</span>${data1.currencies[0].name}</p>
//           </div>
//         </article>
//   `;

//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// };

// getCountryData('portugal');
// getCountryData('spain');
// getCountryData('germany');

const renderCountry = function (data, className = '') {
  const html = `
        <article class="country ${className}">
          <img class="country__img" src="${data.flags.png}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} people</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
          </div>
        </article>
  `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (message) {
  countriesContainer.insertAdjacentText('beforeend', message);
  countriesContainer.style.opacity = 1;
};

// const requestCountry = function (url, onSuccess) {
//   const request = new XMLHttpRequest();
//   request.open('GET', url);

//   request.addEventListener('load', function () {
//     if (this.status < 200 || this.status >= 300) {
//       renderError(`Could not load country data (HTTP ${this.status}).`);
//       return;
//     }

//     let data;
//     try {
//       data = JSON.parse(this.responseText);
//     } catch (error) {
//       renderError('Could not read the country data.');
//       console.error(error);
//       return;
//     }

//     onSuccess(data);
//   });

//   request.addEventListener('error', function () {
//     renderError('Could not load country data. Check your connection.');
//   });

//   request.send();
// };

// const getCountryAndNeighbour = function (country) {
//   const apiUrl = 'https://countries-api-836d.onrender.com/countries';

//   requestCountry(
//     `${apiUrl}/name/${encodeURIComponent(country)}`,
//     function (countries) {
//       const data1 = Array.isArray(countries) ? countries[0] : null;
//       if (!data1) {
//         renderError(`No country found for "${country}".`);
//         return;
//       }
//       renderCountry(data1);

//       const neighbour = data1.borders?.[0];
//       if (!neighbour) {
//         renderError(`${data1.name} has no neighbouring countries.`);
//         return;
//       }

//       requestCountry(
//         `${apiUrl}/alpha/${encodeURIComponent(neighbour)}`,
//         function (data2) {
//           if (!data2 || !data2.name) {
//             renderError(`Could not find neighbour "${neighbour}".`);
//             return;
//           }
//           renderCountry(data2, 'neighbour');
//         },
//       );
//     },
//   );
// };

// getCountryAndNeighbour('portugal');

// This is the old way of calling APIs - new XMLHttpRequest();

// Doing it the new way by using fetch API

const getCountryData = function (country) {
  // Country 1
  return fetch(
    `https://countries-api-836d.onrender.com/countries/name/${country}`,
  )
    .then(response => response.json())
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];
      if (!neighbour) return;

      //  Country 2
      return fetch(
        `https://countries-api-836d.onrender.com/countries/alpha/${neighbour}`,
      );
    })
    .then(response => response.json())
    .then(data => renderCountry(data, 'neighbour'));
};

getCountryData('portugal');
