// VALORES DEL SLIDER
let sliderMin = document.getElementById("price_min");
let sliderMax = document.getElementById("price_max");

// VALORES DE LO QUE SE ESCRIBE
let valMin    = document.getElementById("val_min");
let valMax    = document.getElementById("val_max");

// SEPACION ENTRE EL VALOR MINIMO Y EL MAXIMO
let minGap    = 100;


function slideMin(){
  if(parseInt(sliderMax.value) - parseInt(sliderMin.value) <= minGap){
    sliderMin.value = parseInt(sliderMax.value) - minGap;
  }

  valMin.textContent = sliderMin.value;
}

function slideMax(){
  if(parseInt(sliderMax.value) - parseInt(sliderMin.value) <= minGap){
    sliderMax.value = parseInt(sliderMin.value) + minGap;
  }
  
  valMax.textContent = sliderMax.value;
}