import axios from 'axios';
import './scss/style.scss';

// DOM
const searchFormEl = document.querySelector('#search-form');
const searchInputEl = document.querySelector('#search-input');
const searchOptionEl = document.querySelector('#search-option');
const searchResultsEl = document.querySelector('#search-results');

const apiBaseUrl = 'https://swapi.co/api';

axios
   .get('https://jsonplaceholder.typicode.com/todos/1')
   .then(res => res.data)
   .then(data => {
      console.log(data);
   })
   .catch(err => {
      console.log(err);
   });
