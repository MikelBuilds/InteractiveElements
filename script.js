let s1 = document.getElementById("sq1");
s1.addEventListener("mouseenter", function() {
    s1.style.backgroundColor = "blue";
    s1.style.color = "white";
});

let s2 = document.getElementById("sq2");
s2.addEventListener("mouseenter", function() { 
    s2.style.backgroundColor = "red";
    s2.style.color = "white";
});

let s3 = document.getElementById("sq3");
s3.addEventListener("mouseenter", function() {
    let r1 = Math.floor(Math.random() * 256);
    let r2 = Math.floor(Math.random() * 256);
    let r3 = Math.floor(Math.random() * 256);
    s3.style.backgroundColor = `rgb(${r1}, ${r2}, ${r3})`;  
});
s3.addEventListener("mouseleave", function() {
    s3.style.backgroundColor = "white";
});

let s4 = document.getElementById("sq4");

s4.addEventListener("mouseenter", function() {
    let num = Math.floor(Math.random() * 1000);
    s4.innerHTML = `<h1> ${num} </h1>`
});

s4.addEventListener("mouseleave", function() {
    s4.innerHTML = "<h1>4</h1>"
});

