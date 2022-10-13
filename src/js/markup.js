export { countriesMarkup, countryInfoMarkup };

function countriesMarkup({ flags, name }) {
  return `<li class="country-list__item">
      <img
        class="country-list__flag"
        src="${flags.svg}"
        width="35px"
        height="25px"
      />
      <p class="country-list__name">${name.official}</p>
    </li>`;
}

function countryInfoMarkup({ flags, name, capital, population, languages }) {
  const languagesString = Object.values(languages).join('');

  return ` 
    <div class="country-list__item">
    <img class="country-list__flag" width="60px" height="40px" src="${flags.svg}"></img>
    <p class="country-list__name">${name.official}</p></div>
    <div class="country-description">
    <p class="country-description__name">Capital: <span class="country-description__resault" >${capital}</span><p>
    <p class="country-description__name">Population: <span class="country-description__resault">${population}</span></p>
    <p class="country-description__name">Languages: <span class="country-description__resault" >${languagesString}</span></p>
    </div>`;
}