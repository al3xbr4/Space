const header = document.querySelector('.grid');
const section = document.querySelector('.grid');

const requestURL = "./js/product.json";
const request = new XMLHttpRequest();

request.open('GET', requestURL);

request.responseType = 'json';

request.send();

request.onload = function() {
  const products = request.response; // Accede a la propiedad 'stock' en la respuesta
  populateHeader(products);
  showHeroes(products);
}
function populateHeader(jsonObj) {
    const myH1 = document.createElement('h1');
    myH1.textContent = jsonObj['Name']; // Accede a la propiedad 'nombre' en el primer elemento del array 'stock'
    header.appendChild(myH1);
    
    const myPara = document.createElement('p');
    myPara.textContent = 'Description: ' + jsonObj['Town'] + ' // Price: ' + jsonObj['precio'] + '€'; // Accede a las propiedades 'descripcion' y 'precio' en el primer elemento del array 'stock'
    header.appendChild(myPara);
  }



function showHeroes(jsonObj) {
    const product = jsonObj['stock'];
    const card = document.createElement('div');
    card.classList.add('card');
  for (var i = 0; i < product.length; i++) {

    
    const myArticle = document.createElement('article');
    const myH2 = document.createElement('h2');
    const myPara1 = document.createElement('p');
    const myPara2 = document.createElement('h3');
  
    myH2.textContent = product[i].nombre;
    myPara1.textContent = 'Description: ' + product[i].descripcion;
    myPara2.textContent = 'Price: ' + product[i].precio + '€';
  
    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
  
    card.appendChild(myArticle);
    section.appendChild(card);
  }
  request.responseType = 'json';
    request.open('GET', requestURL);
    request.responseType = 'text'; // recibimos una cadena de tipo "string"
    request.send();

    request.onload = function() {
    const superHeroesText = request.response; // cogemos la cadena de response
    const superHeroes = JSON.parse(superHeroesText); // la convertimos a objeto
    populateHeader(superHeroes);
    showHeroes(superHeroes);
    }

    const myJSON = { "name": "Chris", "age": "38" };
    myJSON
    const myString = JSON.stringify(myJSON);
    myString
}