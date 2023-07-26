const APILINK = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=a9f89fece1309f8a1532b5cdd5fc5f07';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=a9f89fece1309f8a1532b5cdd5fc5f07&query=";

const main = document.getElementById("section");
const forom = document.getElementById("form");
const search = document.getElementById("query");

returnMovies(APILINK);

function returnMovies(url){
    fetch(url).then(res => res.json())
    .then(function(data)){
        console.log(data.results);
        data.results.array.forEach(element => {
            const div_card = document.createElement('div');
            const div_row = document.createElement('div');
            const div_column = document.createElement('div');
            const image = document.createElement('img');
            const title = document.createElement('h3');
            const center = document.createElement('center');

            title.innerHTML = `${element.title}`;
            image.src = IMG_PATH + element.poster_path;
        });
    }
}

/* returnMovies(APILINK);

function returnMovies(url){
    fetch(url).then(res => res.json())
    .then(function(data){
        console.log(data.results);
        data.results.array.forEach(element => {
            const div_card = document.createElement('div');
            div_card.setAttribute('class', 'card');
            const div_row = document.createElement('div');
            div_card.setAttribute('class', 'row');
            const div_column = document.createElement('div');
            div_card.setAttribute('class', 'column');
            const image= document.createElement('img');
            div_card.setAttribute('class', 'thumbnail');
            div_card.setAttribute('id', 'image');
            const title = document.createElement('h3');
            div_card.setAttribute('id', 'title');
            const center = document.createElement('center');

            title.innerHTML = `${element.title}`;
            image.src = IMG_PATH + element.poster_path;

            center.appendChild(image);
            div_card.appendChild(center);
            div_card.appendChild(title);
            div_column.appendChild(div_card);
            div_row.appendChild(div_row);

            main.appendChild(div_row);
        });
    };
}

FormData.addEventListner("submit", (e) => {
    e.preventDefault();
    main.innerHTML = ''

    const searchItem = search.value;

    if (searchItem) {
        returnMovies(SEARCHAPI + searchItem);
        search.value = '';
    }
});

//does this count as a commit? */