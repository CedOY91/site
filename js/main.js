document.addEventListener('DOMContentLoaded', function(){

  let burger = document.querySelector('.menu__burger');
  let bar =  document.querySelector('.menu__bar');
  let body = document.body;

function dropDown(){
    if(burger.className === "menu__burger") {
       burger.classList.add('active');
      } else {
        burger.classList.remove('active');
       } 
      if(bar.className === 'menu__bar' ) {
      bar.classList.add('active');
      } else {
       bar.classList.remove('active');
       }
      if(body.className ===''){
      body.classList.add('lock');
      } else {
       body.classList.remove('lock');
    }
  }


burger.addEventListener("click", dropDown);
});
