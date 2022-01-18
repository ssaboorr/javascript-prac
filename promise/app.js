// XHR request
// Fetch api
// axios

// console.log(axios)

// let url = "https://pokeapi.co/api/v2/pokemon/"

// axios.get(url)
// .then(({data}) => {

//     console.log(data)
// })
// .catch(err => console.log(err))

// axios.get(url)
// .then(({data}) => {

//     const pokemons = data.results
//     // console.log(pokemons)
//     for(let pokemon of pokemons){
//         console.log(pokemon.name)
//     }
// })
const ul = document.querySelector("ul");

let url = "https://swapi.dev/api/planets";

axios
  .get(url)
  .then(({ data }) => {
    // console.log(data)
    for (let planet of data.results) {
      let li = document.createElement("li");
      li.innerText = planet.name;
      ul.append(li);
      console.log(planet.name);
    }
    return axios.get(data.next);
  })
  .then(({ data }) => {
    for (let planet of data.results) {
      let li = document.createElement("li");
      li.innerText = planet.name;
      ul.append(li);

      console.log(planet.name);
    }
    return axios.get(data.next);
  })
  .then(({ data }) => {
    for (let planet of data.results) {
      let li = document.createElement("li");
      li.innerText = planet.name;
      ul.append(li);
      console.log(planet.name);
    }
  })
  .catch((err) => console.log(err));
