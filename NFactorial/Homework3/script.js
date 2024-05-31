// HomeWork 3

// const user = {
//     name: 'Ospan',
//     age: 18,
//     gender: 'male'
// };
// console.log(user);

// console.log(`${user.name} gender is ${user.gender}`);



// let age = prompt('Enter your age');

// if(typeof age != Number){
//     alert('You dont enter your age correctly! \nPlease use Number format for enter your age');
//     age = prompt('Enter your age');
// }

// alert(age);
// console.log(age);



// let a = +prompt('a?', '');
// console.log(a) // string
// a = +a
// console.log(a) // number

// if (a == 0) {
//   alert( 0 );
// }
// if (a == 1) {
//   alert( 1 );
// }

// if (a == 2 || a == 3) {
//   alert( '2,3' );
// }   


let sum = 0;
for (let i = 0; i <= 100; i+=2) {
    sum += i;
}

console.log(sum);

// for (let i = 0; i < 3; i++) {
//     alert( `number ${i}!` );
// }

let i = 0;
while (i < 3) {
    alert(`number ${i}!`);
    i = i + 1;
}