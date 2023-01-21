let menu = document.querySelector("#menu"),
close = document.querySelector("#close"),
modal = document.querySelector(".nav__modal")

menu.addEventListener('click',()=>{modal.classList.remove("hide")})
close.addEventListener('click',()=>{modal.classList.add("hide")})