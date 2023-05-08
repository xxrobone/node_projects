const output = document.querySelector('.output');

const api = 'http://localhost:5000/movies';

const fetchedMovies = [];

const fetch = async (api) => {
  const data = await fetch(api);
  const movies = await data.json();
  fetchedMovies.push(movies);
  console.log(fetchedMovies);
};

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
