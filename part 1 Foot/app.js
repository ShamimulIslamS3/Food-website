// activ navbar
let nav = document.querySelector(".navigation-wrap");

window.onscroll = function () {
  if(document.documentElement.scrollTob  < 20){
   nav.classList.add("scroll-on");
  }else{
    nav.classList.add("scroll-on");
  }
}


// nav hide

let navBar = document.querySelectorAll(".nav-link");
let navColllapse = document.querySelector(".navbar-collapse.collapse");

navBar.forEach((a) =>{
  a.addEventListener("click", () =>{
    navColllapse.classList.remove("show")
  })
})


// counter design


const count1 = document.querySelector('#count1');
let conter = 0;


setInterval(()=>{
  conter++;
  if(conter <= 100){
    count1.innerText = conter;
  }
  
},1000)

const count2 = document.querySelector('#count2');
let conter2 = 0;

setInterval(()=>{
  conter2++;
  if(conter2 <= 200){
    count2.innerText = conter2;
  }
},1000);

const count3 = document.querySelector('#count3');
let counter3 = 0;

setInterval(()=>{
  counter3++;
  count3.innerText = counter3;
},1000)

const count4 = document.querySelector('#count4');
let counter4 = 0;
setInterval(()=>{
  counter4++;
  if(counter4 <= 400){
    count4.innerText = counter4;
  }
},1000)





