// FIND ELEMENTS

// 1
let tableByAge = document.getElementById('age-table');
console.log(tableByAge)

// 2
let labelList = tableByAge.getElementsByTagName('label');
let labelList2 = document.querySelectorAll('#age-table label')
console.log(labelList);

// 3
let tdAge = tableByAge.getElementsByTagName('td')[0]
console.log(tdAge)
console.log(tdAge.textContent)

// 4
// let form = document.querySelectorAll('form[name="search"]');
let form = document.getElementsByName('search')[0]
console.log(form)

// 5
const firstInput = form.getElementsByTagName('input')[0];
console.log(firstInput)

// 6
let lastInput = form.getElementsByTagName('input');
console.log(lastInput[lastInput.length-1])



// TAG in Commment
let body = document.body;

// body.innerHTML = "<!--" + body.tagName + "-->";

alert( body.firstChild.data ); // что выведет?
// Answer: BODY.  B/c we remove all divs in body and enter this comment