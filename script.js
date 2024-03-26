let red = document.querySelector(".red");
let blue = document.querySelector(".blue")
let green = document.querySelector(".green")
let yellow = document.querySelector(".yellow")
let main = document.querySelector("main")

red.addEventListener("click", ()=>{
     main.style.backgroundColor = "red";
     main.style.color = "white";
})
blue.addEventListener("click", ()=>{
    main.style.backgroundColor = "blue";
    main.style.color = "white";
})
green.addEventListener("click", ()=>{
    main.style.backgroundColor = "green";
    main.style.color = "white";
})
yellow.addEventListener("click", ()=>{
    main.style.backgroundColor = "yellow";
    main.style.color = "black";
})