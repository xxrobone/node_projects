const output = document.querySelector('.output');

const API_URL = 'http://localhost:5000/characters';

const fetchedCharacters = [];

const fetchAPI = async (api) => {
  const data = await fetch(api);
  const movies = await data.json();
  fetchedCharacters.push(movies);
  console.log(fetchedCharacters);
};

fetchAPI(API_URL)

const title = 'movie title';
const powers = 'super powers';
const weaknesses = 'im weak to these ';

const createMovieItem = `
<div class="container">
<div class="infoWrapper">
    <h2>${title}</h2>
    <h3>${powers}</h3>
    <h3>${weaknesses}</h3>
</div>
<div>
    <img src="the img" alt="">
</div>
</div>
`;

output.innerHTML = createMovieItem;

console.log('is the js file working');
