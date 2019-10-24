import {
  CoolMammals, 
  CoolAmphibians, 
  CoolReptiles,  
  CoolBugs
} from  './data/cool_animals.mjs';


//reset gallery div content
const galleryDiv = document.getElementById("gallery");
galleryDiv.innerHTML = "";

function createGalleryItem( dataSource) {
  //generate div with class gallery__item
  const cardDiv = document.createElement('div');
  cardDiv.className = "gallery__item";
  //generate img element
  const img = document.createElement('img');
  img.src = dataSource.imgUrl;
  img.alt = dataSource.name;
  cardDiv.appendChild(img);
  //generate name
  const newName =  document.createElement('h3');
  newName.textContent = dataSource.name;
  cardDiv.appendChild(newName);
  const newLatinName = document.createElement('h6');
  newLatinName.textContent = dataSource.latinName;
  cardDiv.appendChild(newLatinName);
  //generate location
  const newLocation =  document.createElement('h5');
  newLocation.textContent = `Location: ${dataSource.location}`;
  cardDiv.appendChild(newLocation);
  //generate description
  const newFeature =  document.createElement('p');
  newFeature.textContent = `Cool Feature: ${dataSource.feature}`;
  cardDiv.appendChild(newFeature);
  //append data to gallery div
 galleryDiv.appendChild(cardDiv);
}

createGalleryItem(CoolMammals[0]);
createGalleryItem(CoolReptiles[0]);
createGalleryItem(CoolAmphibians[0]);
createGalleryItem(CoolBugs[0]);

//get button elements
const mammalBtn = document.getElementById('mammalBtn');
const amphibianBtn = document.getElementById('amphibianBtn');
const reptileBtn = document.getElementById('reptileBtn');
const bugBtn = document.getElementById('bugBtn');
const homeBtn =  document.getElementById('homeBtn');

//remove content within gallery div
function removeContent() {
  const galleryDiv = document.getElementById("gallery")
  while(galleryDiv.firstChild) {
    galleryDiv.removeChild(galleryDiv.firstChild)
  }
}

//------------add button functionality---------
mammalBtn.onclick = (e) => {
  removeContent();
  //map function goes here
  CoolMammals.map( mammal => {
    createGalleryItem(mammal);
  })
}

amphibianBtn.onclick = (e) => {
  removeContent();
  //map function goes here
  CoolAmphibians.map( amph => {
    createGalleryItem(amph);
  })
}

reptileBtn.onclick = (e) => {
  removeContent();
  //map function goes here
  CoolReptiles.map( reptile => {
    createGalleryItem(reptile);
  })
}

bugBtn.onclick = (e) => {
  removeContent();
  //map function goes here
  CoolBugs.map( bug => {
    createGalleryItem(bug);
  })
}

//create random selection of animals
function randomAnimal(dataSource) {
  return dataSource[Math.floor(Math.random() * dataSource.length)];
}

//click on heading randomizes gallery
homeBtn.onclick = (e) => {
  removeContent();
  createGalleryItem(randomAnimal(CoolMammals));
  createGalleryItem(randomAnimal(CoolReptiles));
  createGalleryItem(randomAnimal(CoolAmphibians));
  createGalleryItem(randomAnimal(CoolBugs));
}





