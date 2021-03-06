'use strict';

let serverAnswer = {};

function ready() {


  let wrapper = document.querySelector(".wrapper");
  wrapper.style.padding = "50px";
  wrapper.style.textAlign = "center";
  wrapper.style.fontFamily = "Arial";
  wrapper.style.fontSize = "16px";

  let query = document.querySelector(".query");
  query.style.width = "400px";
  query.style.lineHeight = "26px";
  query.focus();

  let search = document.querySelector(".pure-button");
  search.addEventListener("click", pull);

  let loading = document.querySelector(".onload");
  loading.style.opacity = 0;

  let result = document.querySelector(".result");
  result.style.margin = "60px 2px";
  result.style.border = "1px solid #c0c0c0";

  pull();

  function pull() {
    console.log(query.value);
    let defaultImages = result.querySelectorAll("img");
    if (defaultImages.length > 0) {
      defaultImages.forEach(function(item, i, defaultImages){
        item.remove();
      });
    }

    //CORS
    let request = "https://pixabay.com/api/?key=3118779-be29778b1b1db18e334fc6de3&q=" + query.value + "&image_type=photo";
    let xhr = new XMLHttpRequest();
    xhr.open("POST", request, true);

    xhr.onload = function(){
      let serverAnswer = JSON.parse(xhr.responseText);
      console.log(serverAnswer);
      let library = serverAnswer.hits;
      console.log(library);
      let image = [];
      for (let i = 0; i < library.length; i++){
        image[i] = document.createElement("img");
        image[i].src = library[i].previewURL;
        result.appendChild(image[i]);
        loading.style.opacity = 0; 
      }
    };
    xhr.send();
    console.log(xhr);
    loading.style.opacity = 1;


    // JSONP
    // let serverAnswer = document.createElement("script");
    // serverAnswer.src = "https://pixabay.com/api/?key=3118779-be29778b1b1db18e334fc6de3&q=" + query.value + "&image_type=photo";
    // console.log(serverAnswer);
    // result.appendChild(serverAnswer);
    //
    // function(){
    // }

    // jQuery $.getJSON("https://pixabay.com/api/?key=3118779-be29778b1b1db18e334fc6de3&q=" + query.value + "&image_type=photo",
    //   console.log(serverAnswer);
    //   console.log(library);
    //     console.log(image[i]);

    return false;
  }
}

document.addEventListener("DOMContentLoaded", ready);
