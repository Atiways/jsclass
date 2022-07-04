let val = document;
val = document.all;
val = document.all[5];
val = document.characterSet;
val = document.head;
val = document.body;
val = document.URL;
val = document.domain;
val = document.doctype;
val = document.contentType;

val = document.forms;
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].className;
val = document.forms[0].action;

val = document.scripts;
val = document.scripts[2].getAttribute('src');

let scripts = document.scripts;
// covert the html collection to an array
let scriptArr = Array.from(scripts);

scriptArr.forEach(function(script) {
    console.log(script);
});


console.log(val);
// an html collection must be converted to an array before it can be loopable
