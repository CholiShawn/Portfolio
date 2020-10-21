function greeting() {
    alert("Hello and Welcome :D");
}

function farewell() {
    alert("Bye bye, see you soon (hopefully)!");
}

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

function varDemo() {
    let firstnumber = 2;
    let secondnumber = 3;
    let answer = firstnumber + secondnumber;
    console.log(answer);
}