let x = document.getElementById("viewmore");
let y = document.getElementById("viewlater")
let viewlessbutton = document.getElementById("viewless");
let horiz = document.getElementById("horiz");
let button1 = document.getElementById("button1");
let userLogin = document.getElementById("user-login");
let backButton = document.getElementById("backbutton")


function displaycontent() {
    x.style.display = 'none';
    horiz.style.display = 'block';
    y.textContent = "~Mana Badi - Nadu Nedu is to strengthen the infrastructure and transform the existing infrastructure of the schools in the mission mode in a phased manner over a period of three years starting from 2019-20.Under Mana Badi - Nadu Nedu program, following 9 infrastructure components have been taken up. (1) Toilets with running water (2) Drinking water (3) Major and minor repairs (4) Electrification (5) Furniture for students and staff (6) Green chalk boards (7) Painting to schools (8) English labs and (9) Compound walls."
    viewlessbutton.style.display = 'block';
}

function hidecontent() {
    x.style.display = 'block'
    viewlessbutton.style.display = 'none'
    horiz.style.display = 'none'
    y.textContent = ''
}

function expand() {
    userLogin.style.display = 'block';
}

function goBack() {
    userLogin.style.display = 'none';
}