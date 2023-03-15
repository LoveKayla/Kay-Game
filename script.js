/* Declare variables below to save the different sections (divs) of your story*/

let button1 = document.querySelector(".option-one");
let optionOneScreen = document.querySelector(".option-one-screen");

let button2 = document.querySelector(".option-two");
let optionTwoScreen = document.querySelector(".option-two-screen");


let button3 = document.querySelector(".option-three");
let optionThreeScreen = document.querySelector(".option-one-end");

let button4 = document.querySelector(".option-four");
let optionFourScreen = document.querySelector(".option-two-end");

button1.onclick = function() {
    optionOneScreen.style.display="block";
    optionTwoScreen.style.display="none";
    
};



button2.onclick = function() {
    optionTwoScreen.style.display="block";
    optionOneScreen.style.display="none";
    optionThreeScreen.style.display="none";
    optionFourScreen.style.display="block";
};

button3.onclick = function() {
    optionThreeScreen.style.display="block";
};



button4.onclick = function() {
    optionFourScreen.style.display="block";
};



/* When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!
INSERT_VARIABLE.onclick=function(){

};

INSERT_VARIABLE.onclick=function(){



INSERT_VARIABLE.onclick=function(){

};

*/


