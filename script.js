//Kasper
/*let billedergalleri = [
    ["img/rød.png","img/gul.png","img/grøn.png"]
]

let select_element = document.getElementById("");
for(let i = 0; <galleri.lenght; i++) {

    let billedergalleri = galleri [i];
    select_element.innerHTML +="<div class'billederigalleri' > + '" billedegaleri[i][0]+ billedergalleri[i][1]++ billedergalleri[i][2]
}
*/

//Signe
let countDownBowling = new Date("May 5, 2023 17:00:00").getTime();

let countDown = setInterval(function() {

    let iDag = new Date().getTime();

    let dageIndtil = countDownBowling - iDag;

    let dage = Math.floor(dageIndtil / (1000 * 60 * 60 * 24));

    let timer = Math.floor((dageIndtil % (1000 * 60 * 60 * 24)) / (1000 * 60 *60));

    let minutter = Math.floor((dageIndtil % (1000 * 60 * 60)) / (1000 * 60));


    if (dageIndtil < 0 ) {
        clearInterval(countDown);
        document.getElementById("countdownid").innerHTML = "Eventet er igang!";
    }
    else {
        document.getElementById("countdownid").innerHTML = dage + " " + timer + " " +  minutter;
    }

}, 1000);

let dtmArray = ["Dage", "Timer", "Minutter"];

for(let i = 0; i < dtmArray.length; i++) {
    document.getElementById("dtm").innerHTML += dtmArray[i] + " ";
}




//Aimi

//Claudia
const myForm = document.getElementById("myForm");
const popup = document.getElementById("popup");
const userNameSpan = document.getElementById("userName");

myForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");

  if (nameInput.checkValidity() && emailInput.checkValidity()) {
    userNameSpan.innerText = nameInput.value;
    popup.style.display = "block";
  }
});
