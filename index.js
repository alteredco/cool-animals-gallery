import {
  CoolMammals, 
  CoolAmphibians, 
  CoolReptiles,  
  CoolBugs
} from  './data/cool_animals.mjs';

//reset gallery div content
const galleryDiv = document.getElementById("gallery");
galleryDiv.innerHTML = "";

function createGalleryItem( dataType) {
  //generate div with class gallery__item
  const div = document.createElement('div');
  div.className = "gallery__item";
  //generate img element
  const img = document.createElement('img');
  img.src = dataType.imgUrl;
  img.alt = dataType.name;
  div.appendChild(img);
  //generate name
  const newTitle = document.createElement('h3');
  newTitle.textContent = `${dataType.name}`
  div.appendChild(newTitle);
  const latinName = document.createElement('h6');
  latinName.textContent = `(${dataType.latinName})`;
  div.appendChild(latinName);
  //generate details
  const newsubTitle = document.createElement('h5');
  newsubTitle.textContent = `Location: ${dataType.location}`;
  div.appendChild(newsubTitle);
  //generate description
  const newDescription = document.createElement('p');
  newDescription.textContent = `Cool feature: ${dataType.feature}`;
  div.appendChild(newDescription);
 
  //append data to div
  galleryDiv.appendChild(div);
}

createGalleryItem(CoolMammals[0]);
createGalleryItem(CoolReptiles[0]);
createGalleryItem(CoolAmphibians[0]);
createGalleryItem(CoolBugs[0]);

// const mammalBtn = document.getElementById('mammalBtn');
// const amphibianBtn = document.getElementById('amphibianBtn');

// function removeContent() {
//   const gallery = document.getElementById("gallery")
//   while(gallery.firstChild) {
//     gallery.removeChild(gallery.firstChild)
//   }
// }
