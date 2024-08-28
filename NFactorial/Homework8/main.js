'use strick';

const user = {
    name: "Ospan",
    age: 18,
    number: "+7 775 911 67 90"
};

const person = JSON.parse(JSON.stringify(user));
console.log(person);



const usd = document.querySelector("#usd");
const kzt = document.querySelector("#kzt");

usd.addEventListener('input', ()=>{
    const request = new XMLHttpRequest();
    request.open("GET", 'data.json');
    request.setRequestHeader('Content-type', 'app.json');
    request.send();


    request.addEventListener('readystatechange', ()=>{
        if(request.readyState === 4 && request.status === 200){
            console.log(request.response);
            const data = JSON.parse(request.response);
            kzt.value = +usd.value*data.current.usd;
        }
    });
});


kzt.addEventListener("input", async()=>{
    // const request = new XMLHttpRequest();
    // request.open("GET", 'data.json');
    // request.setRequestHeader('Content-type','app/json');
    // request.send();
    // request.addEventListener('readystatechange',()=>{
    //     if(request.readyState===4 && request.status===200){
    //         console.log(request.response);
    //         const data = JSON.parse(request.response);
    //         usd.value = +(kzt.value/data.current.usd);
    //     }
    // });


    let request = await fetch('./data.json');
    if(request.ok){
        const data = await request.json();
        console.log(data);
        usd.value = +(kzt.value/data.current.usd);
    }
});