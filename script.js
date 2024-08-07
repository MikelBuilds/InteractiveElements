let s1 = document.getElementById("sq1");
s1.addEventListener("mouseenter", function() {
    s1.style.backgroundColor = "blue";
    s1.style.color = "white";
    s1.style.transform = "scale(1.2)";
    s1.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.3)";
});

s1.addEventListener("mouseleave", function() {
    s1.style.backgroundColor = "grey";
    s1.style.color = "black";
    s1.style.transform = "scale(1)";
    s1.style.boxShadow = "none";
});

let s2 = document.getElementById("sq2");
s2.addEventListener("mouseenter", function() {
    s2.style.backgroundColor = "red";
    s2.style.color = "white";
    s2.style.transform = "rotate(10deg)";
    s2.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.3)";
});

s2.addEventListener("mouseleave", function() {
    s2.style.backgroundColor = "grey";
    s2.style.color = "black";
    s2.style.transform = "rotate(0deg)";
    s2.style.boxShadow = "none";
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
    s4.innerHTML = `<h1>${num}</h1>`;
});

s4.addEventListener("mouseleave", function() {
    s4.innerHTML = "<h1>4</h1>";
});

document.addEventListener("DOMContentLoaded", function() {
    let cr = document.getElementById("cursor");
    let main = document.getElementById("main");

    if (cr && main) {
        main.addEventListener("mousemove", function(details) {
            window.requestAnimationFrame(() => {
                cr.style.left = details.clientX + "px";
                cr.style.top = details.clientY + "px";
            });
        });
    } else {
        console.error("Cursor or main element not found!");
    }
});
