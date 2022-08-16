// How to access :-

// document
console.log(document);

// head
console.log(document.head);

// title
console.log(document.title);

// To change the title
// document.title = 'Rajpoot Himanshu';

// body
console.log(document.body);

/* nav (It can be select by two types):-

let navTag = document.querySelector("nav");
 console.log(navTag);

 // And Other will be :-
 console.log(document.querySelector("nav"));
 */

// NavTag
console.log(document.querySelector("nav"));

// navTag with having an Id= "test", how to select is :-
console.log(document.querySelector('#test'));

// navTag with having a class = "rock", how to select is :-
let navTag = document.querySelector('.rock');
console.log(navTag);

// anchor Tag
let anchorTag = document.querySelector('nav a');
console.log('anchorTag');
/*
    In short, we can also write :-
    console.log(document.querySelector('nav a'));
 */

// h1 Tag
let h1Tag = document.querySelector('#msg');
console.log(h1Tag);

h1Tag.innerHTML = 'I am the Unluckiest person of this world';

// To give the proper style how we give is :-
h1Tag.style.backgroundColor = 'purple';
h1Tag.style.color = 'white';
h1Tag.style.padding = '20px';
h1Tag.style.marginTop = '20px';
h1Tag.style.marginBottom = '20px';
h1Tag.style.borderRadius = '20px';
h1Tag.style.fontSize = '40px';
h1Tag.style.textShadow = '0 0 5px black';
h1Tag.style.boxShadow = '0 0 10px orange';
h1Tag.style.textAlign = 'center';
