
// Задержка на промисах
function delay(ms) {
    return new Promise(resolve => {
      setTimeout(resolve, ms);
    });
  }
  
  // Пример использования:
  delay(3000).then(() => alert('выполнилось через 3 секунды'));



//   Можно ли "перевыполнить" промис?   NO
  let promise = new Promise(function(resolve, reject) {
    resolve(1);
  
    setTimeout(() => resolve(2), 1000);
  });
  
  promise.then(alert); // выведет 1




//   Промисы: сравните then и catch
  let promise1 = new Promise((resolve, reject) => {
    reject('error');
  });
  
  promise1
    .then(result => {
      // этот блок не выполнится
    })
    .catch(error => {
      console.log('Catch:', error); // выведет "Catch: error"
    });
  
    promise1
    .then(
      result => {
        // этот блок не выполнится
      },
      error => {
        console.log('Then error:', error); // выведет "Then error: error"
      }
    );