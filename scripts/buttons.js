//greeting and goodbye buttons
function hello() {
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
    alert("check the console and do some math..addition!");
    let firstnumber = 2;
    let secondnumber = 3;
    let answer = firstnumber + secondnumber;
    console.log(answer + " ...fun stuff here!");
}

function varDemo2() {
    alert("check the console and do some math..but division this time!");
    let firstnumber = 45;
    let secondnumber = 5;
    let answer = firstnumber / secondnumber
    console.log(answer + " ...numbers are fun :)")
}

function varDemo3() {
    alert("check the console and do some math..we're ending with multiplication!");
    let firstnumber = 6;
    let secondnumber = 7;
    let answer = firstnumber * secondnumber;
    console.log(answer + " ...woo math!");
}

//random button
function midway() {
    alert("yay! You're halfway through the list of buttons!");
}

//review
function review(yes, no){
    let rating = prompt("Did you like this page? Yes or no?");
    if (rating === "yes"){
    alert("yay! I'm so so glad you liked it! :)"); 
}
    else if (rating === "no"){
        alert("oh no! I'll be sure to do better next time!");
}
    else{
        alert("ah, I see");
}
}
//Prompts the user for a integer and returns a message on if its odd or even
//this is a test
function oddOrEven() {
    let userNum = prompt("Enter an integer");
    if (userNum %2 == 1) {
            alert("That number is odd");
    }
    else {
        alert("That number is even");
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

//encryption assignment
function secretLanguage() {
    let normalWords = prompt("write your message here:");
    let codeWords = "";
    let firstLetter = "";
    for(let i = 0; i < normalWords.length; i++){
        firstletter = normalWords[0]
        //my 'secret language is just replacing the vowels with symbols, 
        //and adding 'wy' at the end
        codeWords = normalWords.replace(/a/g, '&')
        .replace(/A/g, '&')
        .replace(/e/g, '^')
        .replace(/E/g, '^')
        .replace(/i/g, '!')
        .replace(/I/g, '!')
        .replace(/o/g, '~')
        .replace(/O/g, '~')
        .replace(/u/g, '@')
        .replace(/U/g, '@') + firstLetter + "wy";
    
    }
  document.getElementById("encryption").innerHTML = codeWords;
}

function notSecretLanguage() {
    let codeWords = prompt("write your encrypted message here:");
    let normalWords = "";
    for(let i = 0; i < normalWords.length; i++){
        normalWords = codeWords.replace(/&/g, 'a')
        .replace(/^/g, 'e')
        .replace(/!/g, 'i')
        .replace(/~/g, '~')
        .replace(/@/g, 'u') - "wy";
}
  document.getElementById("decrypt").innerHTML = normalWords;
}