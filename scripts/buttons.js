//greeting and goodbye buttons
function greeting() {
    alert("Hello and Welcome :D");
}

function farewell() {
    alert("Bye bye, see you soon (hopefully)!");
}

//mini questionnaire buttons
function question(){
    let name = prompt("Hii! What's your name?");
    alert(name + "? What a lovely name! Nice to meet you, " + name + "!");
}

function question2() {
    let colour = prompt("Hi Again! What's your favourite colour?");
    alert("Ah yes, the colour " + colour + ". A fine one indeed"); 
}

function question3() {
    let animal = prompt("Just one more question, what's your favourite animal?");
    alert(animal + " are great :)");
}

function question4() {
    let subject = prompt("Ok I lied, this is the last question: What's your favoruite subject in school?");
    alert(subject + "?" + " Sounds like fun!");
}
//math test thing
function varDemo() {
    alert("check the console and do some math..addition!")
    let firstnumber = 2;
    let secondnumber = 3;
    let answer = firstnumber + secondnumber;
    console.log(answer + " ...fun stuff here!");
}

function varDemo2() {
    alert("check the console and do some math..but division this time!")
    let firstnumber = 45
    let secondnumber = 5
    let answer = firstnumber / secondnumber
    console.log(answer + " ...numbers are fun :)")
}

function varDemo3() {
    alert("check the console and do some math..we're ending with multiplication!")
    let firstnumber = 6
    let secondnumber = 7
    let answer = firstnumber * secondnumber
    console.log(answer + " ...woo math!")
}

//random button
function midway() {
    alert("yay! You're halfway through the list of buttons!")
}