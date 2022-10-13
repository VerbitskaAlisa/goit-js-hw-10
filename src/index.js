import './css/styles.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchCountries }from './js/fetchCountries';
import debounce from 'lodash.debounce';
import { refs } from './js/refs';
import { countriesMarkup, countryInfoMarkup } from './js/markup';

const DEBOUNCE_DELAY = 300;
let inputValue = "";

refs.inputRef.addEventListener("input", debounce(onInputChange, DEBOUNCE_DELAY));


function addCountriesMarkup(data) {
    const markup = data.map(countriesMarkup).join('');
    refs.countryListRef.innerHTML = markup;
  }
  
  function addCountryInfoMarkup(data) {
    const markup = data.map(countryInfoMarkup).join('');
    refs.infoRef.innerHTML = markup;
  }


function onInputChange (e) {
    refs.countryListRef.innerHTML = '';
    refs.infoRef.innerHTML = '';
    inputValue = e.target.value.trim().toLowerCase();
  
    if (!inputValue) {
      return;
    }
    fetchCountries(inputValue).then(data => {
        if (data.length === 1) {
        addCountryInfoMarkup(data);
        } else if (data.length >= 2 && data.length <= 10) {
          addCountriesMarkup(data);
        } else {
          return Notify.info(
            'Too many matches found. Please enter a more specific name.'
          );
        }
      })
      .catch(error => {
        return Notify.failure('Oops, there is no country with that name');
      });
  }
