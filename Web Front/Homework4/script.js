// ----- Function using ? || ----- 

// function checkAge(age) {
//     if (age >= 18) {
//       return true;
//     } else {
//       return confirm('Родители разрешили?');
//     }
// }

// let age = prompt('Enter your age');
// let check = (age >= 18) ? true : confirm('Родители разрешили?');
// let check1 = age >= 18 || confirm('Родители разрешили?');
// alert(check1);

// ----- Pow ----- 
// let x = prompt('Enter number');
// let n = prompt('Enter power');
// function pow(x, n){
//     let res = 1;
//     for (let i = 1; i <= n; i++) {
//         res *= x;
//     }
//     return res;
// }

// alert(pow(x,n));



// const ask = (question, yes, no) => {
//     if (confirm(question)) yes();
//     else no();
// };
  
// ask(
//     "Вы согласны?",
//     () => alert("Вы согласились."),
//     () => alert("Вы отменили выполнение.")
// );


// -------- SORT --------
// let arr = [5, 2, 1, -10, 8];
// arr.sort((a,b) => b-a)
// alert( arr ); // 8, 5, 2, 1, -10




// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [ vasya, petya, masha ];

// let names = users.map(user => user.name);

// alert( names ); // Вася, Петя, Маша




// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [ vasya, petya, masha ];

// let usersMapped = users.map(user => ({
//     fullName: `${user.name} ${user.surname}`,
//     id: user.id
// }));

// /*
// usersMapped = [
//   { fullName: "Вася Пупкин", id: 1 },
//   { fullName: "Петя Иванов", id: 2 },
//   { fullName: "Маша Петрова", id: 3 }
// ]
// */

// alert( usersMapped[0].id ) // 1
// alert( usersMapped[0].fullName ) // Вася Пупкин






let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28

function getAverageAge(users) {
    let ages = arr.map(user => user.age);

    let sum = 0;
    for (let i = 0; i < ages.length; i++) {
        sum += ages[i];
    }
    return sum / users.length;
}   