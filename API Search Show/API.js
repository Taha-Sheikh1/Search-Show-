
// form.addEventListener('submit', async function(e){
//     e.preventDefault();
//     let searchTerm = form.elements.query.value;
//     const config = {
//         params: {
//             q: searchTerm
//         }
//     }
//     let res = await axios.get(`https://api.tvmaze.com/search/shows?q=${config}`)
//     // console.log(res.data[0].show.image.medium);
//      showImage(res.data)
//      form.elements.query.value = '';

// })
// const showImage = (shows) => {
//     for (let result of shows) {
//         if(result.show.image) {
//     let img = document.createElement('IMG')
//     img.src = result.show.image.medium;
//     document.body.append(img)
// }
//     }

// }


const form = document.getElementById('SearchForm');
form.addEventListener('submit', async function(e) {
    e.preventDefault();
await fetch('https://api.tvmaze.com/search/shows?q=shows')
.then( (res) => {
return res.json();
})
.then ( (data) => {

// Getting The Random Data

let Data = data;
let RandomData = Data[Math.floor(Math.random() * Data.length)];
let RandomShow = RandomData;

//Getting the Image!
  let img = document.getElementById('image');
  let showImage = RandomShow.show.image.medium;
  img.src = showImage;
  document.body.append(img);

// Inputing The URL:
let URl = document.getElementById('url');
let genUrl = RandomShow.show.url;
URl.innerText = `URL:- ${genUrl}`;

// Inputing The Name:
let Name = document.getElementById('name');
let genName = RandomShow.show.name;
Name.innerText = `Name:- ${genName}`;

// Inputing The Type of Show
let type = document.getElementById('Type');
let genType = RandomShow.show.type;
type.innerText = `Type:- ${genType}`;

// Inputing The Language
let language = document.getElementById('language');
let genlang = RandomShow.show.language;
language.innerText = `Language:- ${genlang}`;

});
});



// $( function (){

// });