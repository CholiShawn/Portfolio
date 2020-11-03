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

//review
function review(yes, no){
    let rating = prompt("Did you like this page? Yes or no?")
    if (rating === "yes"){
    alert("yay! I'm so so glad you liked it! :)") ; 
}
    else if (rating === "no"){
        alert("oh no! I'll be sure to do better next time!");
}
    else{
        alert("ah, I see");
}
}
// Prompts the user for a integer and returns a message on if its odd or even
//this is a test
function oddOrEven() {
    let userNum = prompt("Enter an integer")
    if (userNum %2 == 1) {
            alert("That number is odd")
    }
    else {
        alert("That number is even")
    }
}

//another test
function whileSumThrees() {
    let sum = 0;
    let i = 0;
    while(i < 1000) {
        sum += i; //sum multiples of 3 under 1000
        i = i + 3;
       
    }
    console.log(sum)//log to console
}

//Create a JavaScript function, largerNumber() that prompts the 
//user for two integers and uses conditional statement(s) to alert the user 
//to the larger of the two numbers.
function largerNumber() {
    let number = prompt ("Enter 2 integers")
    let number = 0
    let num2 = 0
    if (number < num2) {
        alert (num2 + " is greater")
    }
    else {
        alert (number + " is greater")
    }
}