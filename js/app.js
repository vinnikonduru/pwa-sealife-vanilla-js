const container = document.querySelector(".container");
const sealifes = [
  
  { name: "Glitter_Fish", image: "images/sealife1.jpg" },
  { name: "Twin_Fishes", image: "images/sealife2.jpg" },
  { name: "Rare_Fish", image: "images/sealife3.jpg" },
  { name: " Sword_Fish", image: "images/sealife4.jpg" },
  { name: "Nemo_Dory", image: "images/sealife5.jpg" },
  { name: "Stingray", image: "images/sealife6.jpg" },
  { name: "Cute_Fish", image: "images/sealife7.jpg" },
  { name: "Aquarium", image: "images/sealife8.jpg" },
  { name: "Fish_Aquarium", image: "images/sealife9.jpg" },

]

const showSealifes = () => {
    let output = ""
    sealifes.forEach(
        ({name, image}) =>
        (output += `
        <div class = "card">
          <img class = "card--avatar" src=${image}/>
          
          <h1 class = "card--title"> ${name}</h1>
          <a class = "card--link" href="#"> Fishes </a>
        </div>  
        `)
    );
        container.innerHTML = output
};

document.addEventListener("DOMContentLoaded", showSealifes)
    
if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err))
  })
}