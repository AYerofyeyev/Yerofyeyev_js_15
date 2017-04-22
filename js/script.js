'use strict';

function ready() {

  let wrapper = document.querySelector(".wrapper");
  wrapper.style.padding = "50px";
  wrapper.style.textAlign = "center";
  wrapper.style.fontFamily = "Arial";
  wrapper.style.fontSize = "16px";

  let query = document.querySelector(".query");
  query.style.width = "400px";
  query.style.lineHeight = "26px";

  let search = document.querySelector(".pure-button");
  search.addEventListener("click", pull);

  let result = document.querySelector(".result");
  result.style.margin = "0 2px";
  result.style.border = "1px solid #c0c0c0";

  function pull() {
    console.log(query.value);
    let request = new XMLHttpRequest();
    request.open("post", "/submit");
    request.send(query.value);
    console.log(request);
  }
}


document.addEventListener("DOMContentLoaded", ready);
