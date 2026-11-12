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
const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open(
    'GET',
    `https://api.restcountries.com/countries/v5/names.common/${country}`,
  );

  request.setRequestHeader(
    'Authorization',
    'Bearer rc_live_adc9392a808047ce9fef2bff40af6684',
  );
  request.send();
  console.log(request.responseText);

  request.addEventListener('load', function () {
    console.log(this.responseText);

    const {
      data: {
        objects: [data1],
      },
    } = JSON.parse(this.responseText);
    console.log(data1);

    const html = `
        <article class="country">
          <img class="country__img" src="${data1.flag.url_png}" />
          <div class="country__data">
            <h3 class="country__name">${data1.names.common}</h3>
            <h4 class="country__region">${data1.region}</h4>
            <p class="country__row"><span>👫</span>${(+data1.population / 1000000).toFixed(1)} people</p>
            <p class="country__row"><span>🗣️</span>${data1.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${data1.currencies[0].name}</p>
          </div>
        </article>
  `;

    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};

getCountryData('portugal');
getCountryData('spain');
getCountryData('germany');
