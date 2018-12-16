import axios from 'axios';
import { showResults } from './js/search-results';
import './scss/style.scss';

// DOM
const searchFormEl = document.querySelector('#search-form');
const searchInputEl = document.querySelector('#search-input');
const searchOptionEl = document.querySelector('#search-option');

const apiBaseUrl = 'https://swapi.co/api';

let searchOption = 'films';

searchOptionEl.addEventListener('change', function() {
   searchOption = this.value;
});

searchFormEl.addEventListener('submit', function(e) {
   e.preventDefault();

   const searchValue = searchInputEl.value;

   const apiUrl = `${apiBaseUrl}/${searchOption}/?search=${searchValue}`;
   axios
      .get(apiUrl)
      .then(res => res.data)
      .then(data => {
         console.log(data.results);
         showResults(searchOption, data.results);
      })
      .catch(err => {
         console.log(err);
      });
});
