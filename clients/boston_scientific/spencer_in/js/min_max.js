"use strict";

// let $ = function(id){
//   return document.getElementById(id);
// }

let toggle = function(){
  let h4 = this;                  // the clicked h4
  let ul = h4.nextElementSibling; // h4's nest sibling ul
  let i = h4.childNodes[0];

  // toggle plusminus sign
  if(i.getAttribute("class") === "fas fa-plus blue"){
    i.setAttribute("class", "fas fa-minus blue")
  }else{
    i.setAttribute("class", "fas fa-plus blue")
  }

  // toggle ul visability
  if(ul.hasAttribute("class")){
    ul.removeAttribute("class");
  }else{
    ul.setAttribute("class", "hide");
  }
}

window.onload = function(){
  // get h4 tags
  let layouts = document.getElementById("layouts");
  let elements = layouts.getElementsByTagName("h4");
  // console.log(elements);

  // attach event handlers
  for(let i = 0; i < elements.length; i++){
    let h4 = elements[i];
    
    // attach h4 click event
    evt.attach(h4, "click", toggle);
  }
}

