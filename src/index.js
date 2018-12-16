import axios from 'axios';
import { add, subtract } from './js/calculator';

import './scss/style.scss';

console.log(add(5, 10));
console.log(subtract(5, 10));

const getTodos = () =>
   new Promise((resolve, reject) => {
      setTimeout(() => {
         resolve([1, 2, 3]);
      }, 2000);
   });

getTodos()
   .then(data => {
      console.log(data);
   })
   .catch(err => console.log(`Error: ${err}`));

axios
   .get('https://jsonplaceholder.typicode.com/posts/1')
   .then(res => res.data)
   .then(data => {
      console.log(data);
   })
   .catch(error => {
      console.log(error);
   });
