 




   

  
 










    

  









      // ==================================

// 1. Toggle humbugger menu;

// By default, the .link tag should 

// display none.

// ==================================

const linkmenu = document.getElementsByClassName('link')[0]

const hammenu = document.querySelector('.hamburger')

linkmenu.style.display = 'none'

hammenu.addEventListener('click', () => {

   

  var links = document.getElementsByClassName("link");

  Array.from(links).forEach((x) => {

    if (x.style.display == "none") {

      x.style.display = "block";

    } else {

      x.style.display = "none";

    }

  })

})

// ==================================

// 2. Display products based on 

// All, Men or Female categories.

// ==================================

//filter("all");

//function filter(c) {

 // var x, i;

 // x = document.getElementsByClassName('percard')

 // if (c == "all") c = ""

 // for(i = 0; i < x.length; i++){

//    removeClass(x[i], "show");

//    if(x[i].className.indexOf(c) > -1) addClass(x[i], "show");

    

 // }

  

// }

 

// function addClass(element, name) {

//   var i, ar1, ar2;

//   ar1 = element.className.split(" ")

//   ar2 = name.split(" ")

//   for (i = 0; i < ar2.length; i++) {

//     if(ar1.indexOf(ar2[i]) == -1){

//       element.className += " " + ar2[i]

//     }

//   }

// }

 

 

 

 

// function removeClass(element, name) {

//   var i, ar1, ar2;

//   ar1 = element.className.split(" ")

//   ar2 = name.split(" ")

//   for (i = 0; i < ar2.length; i++) {

//   }

//   element.className = ar1.join(" ");

// }

 

// ==================================

// 2. Display products based on 

// search keywords in the input fields.

// ==================================

document.querySelector('.search_product').addEventListener('input', filterproduct)

function filterproduct() {

  

  const searchproduct = document.querySelector('.search_product')

  const filter = searchproduct.value.toLowerCase()

  const items = document.querySelectorAll('.percard')

  

  items.forEach((item) => {

    let text = item.textContent;

    if(text.toLowerCase().includes(filter.toLowerCase()))

    {

      item.style.display = '';

      }

      else{

        item.style.display = 'none';

      }

  });

  

}
