const searchResultsEl = document.querySelector('#search-results');

const generateHTML = text => `<li>${text}</li>`;

export const showResults = (searchOption, results) => {
   let html;

   if (searchOption === 'films') {
      html = results.map(result =>
         generateHTML(`<b>Title:</b> ${result.title}, <b>Director:</b> ${result.director}`)
      );
   } else if (searchOption === 'people') {
      html = results.map(result =>
         generateHTML(`<b>Name:</b> ${result.name}, <b>Height:</b> ${result.height}`)
      );
   } else if (searchOption === 'planets') {
      html = results.map(result =>
         generateHTML(`<b>Name:</b> ${result.name}, <b>Climate:</b> ${result.climate}`)
      );
   } else if (searchOption === 'starships') {
      html = results.map(result =>
         generateHTML(`<b>Name:</b> ${result.name}, <b>Model:</b> ${result.model}`)
      );
   }
   searchResultsEl.innerHTML = html.join(' ');
};
