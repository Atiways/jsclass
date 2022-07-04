let text ="hello Atirola";

// let text1 = " It's alright to know you are fine";
let text1 = "what you is \"achievable\" ";
console.log(text1);
console.log(text1.length);

// String method helps to work with string
// Slice method
//It extracts a part of the string and return the extracted part on a new string.

let str = "Apple,Orange,Berry";
console.log(str.slice(6,12));

//Replace string content
text = "Please visit us in GIIT";
let newText = text.replace('GIIT', 'GIIT AFRICA');
console.log(newText);

// converting to lower and upper case
console.log(newText.toUpperCase());
console.log(newText.toLowerCase());

// concat method
let greetings = "hello";
let rspt = "good morning";
console.log(greetings.concat(rspt));

//trim method
let ex = "          Hello world          ";
console.log(ex.trim());
//split
text = "a,b,c,d,e";

let arr = text.split(',');
console.log(arr[1]);

// string template lateral it makes use of  the back tick rather than the quote to define a string
text = `what is your name`;
console.log(text);
// preserving the indentation
 let sentence = `dmriocm rejfv gtrekgopdv,m;ls grdfskml
            5ogtro54gtrkg5otrkmlk mo5g4trmgmtlogmtre
        kotmglfjtogmfrlogrekm;lfds,./orelm;df,v.srltker
    nmkkkfvkermmmmmmmmmmm grewkmgokrvl
    rgejmf`;
console.log(sentence);
// it provides an eassy way to insert variables and expressions inside a string
let firstname ="David";
let lastname = "onoaa";
let result = `welcome ${firstname} ${lastname}`;
console.log(result); 
//expression substitution
let price = 10;
let vat = 0.25;
let total = `Total: ${(price *(1+vat).toFixed(2))}`

let header = "template laterals";
let tags = ["template laterals","javascript","PHP","es6"];
let html = `<h2> ${header} </h2> <ul>`;
for(const x of tags){
    html += `<li> ${x} </li>`
}
html += `</ul>`
console.log(html);
document.getElementById('demo').innerHTML = html;

