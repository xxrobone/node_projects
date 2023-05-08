const output = document.querySelector('.output');

const API_URL = 'http://localhost:5000/characters';

const fetchedCharacters = [];

const fetchAPI = async (api) => {
  const data = await fetch(api);
  const movies = await data.json();
  fetchedCharacters.push(movies);
    console.log(fetchedCharacters);
    
    output.innerHTML = createMovieItem(movies);
};

fetchAPI(API_URL)

const title = 'movie title';
const powers = 'super powers';
const weaknesses = 'im weak to these ';

const createMovieItem = (data) => {
    let list;

    data.map(({title, powers, weaknesses, image}) => {
       let item = `
        <div class="container">
        <div class="infoWrapper">
            <h2>${title}</h2>
            <h3>${powers}</h3>
            <h3>${weaknesses}</h3>
        </div>
        <div>
            <img src="/week1/${image}" alt="">
        </div>
        </div>
        `;

        list += item
    })

    return list
}



console.log('is the js file working');
