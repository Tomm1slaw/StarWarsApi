const searchResultsEl = document.querySelector('#search-results');

const generateHTML = text => `<li>${text}</li>`;

export const showResults = (searchOption, results) => {
   let html;

   switch (searchOption) {
      case 'films':
         html = results.map(result =>
            generateHTML(`<b>Title:</b> ${result.title}, <b>Director:</b> ${result.director}`)
         );
         break;
      case 'people':
         html = results.map(result =>
            generateHTML(`<b>Name:</b> ${result.name}, <b>Height:</b> ${result.height}`)
         );
         break;
      case 'planets':
         html = results.map(result =>
            generateHTML(`<b>Name:</b> ${result.name}, <b>Climate:</b> ${result.climate}`)
         );
         break;
      case 'starships':
         html = results.map(result =>
            generateHTML(`<b>Name:</b> ${result.name}, <b>Model:</b> ${result.model}`)
         );
         break;
   }
   searchResultsEl.innerHTML = html.join(' ');
};
