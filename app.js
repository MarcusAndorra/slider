// VALORES DEL SLIDER
let sliderMin = document.getElementById("price_min");
let sliderMax = document.getElementById("price_max");

// VALORES DE LO QUE SE ESCRIBE
let valMin    = document.getElementById("val_min");
let valMax    = document.getElementById("val_max");

// SEPACION ENTRE EL VALOR MINIMO Y EL MAXIMO
let minGap    = 100;

// FUNCIONS CUAN HI HAN CANVI ALS SLIDER
function slideMin(){
  if(parseInt(sliderMax.value) - parseInt(sliderMin.value) <= minGap){
    sliderMin.value = parseInt(sliderMax.value) - minGap;
  }

  valMin.value = sliderMin.value;
}

function slideMax(){
  if(parseInt(sliderMax.value) - parseInt(sliderMin.value) <= minGap){
    sliderMax.value = parseInt(sliderMin.value) + minGap;
  }
  
  valMax.value = sliderMax.value;
}

// FUNCIONS CUAN HI HA CANVI AL INPUT
function inputMin(){
  sliderMin.value = valMin.value;
}

function inputMax(){
  sliderMax.value = valMax.value;
}