let card_container = document.getElementById('card-container');




window.addEventListener('DOMContentLoaded', async()=>{
    const response = await fetch('https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=j8tv9eNtTyTcIS02ZJu5uwTec760vGeC');

    // const API_KEY = '529f1534590c456f89f2e452677867d4';
    // const response = await fetch(`https://newsapi.org/v2/everything?q=apple&from=2024-08-30&to=2024-08-30&sortBy=popularity&apiKey=${API_KEY}`);
    const resJson = await response.json();
   

    const results = resJson.results;
    console.log(results.splice(1,11));

    // results.forEach(item => {
    //     card_container.innerHTML += `
    //     <div class="card">
    //         <img src="https://via.placeholder.com/150" alt="Article image" id="img">
    //         <div class="card-content">
    //             <h2 id="title">${item.title}</h2>
    //             <p id="description">${item.abstract}</p>
    //             <div class="card-footer">
    //                 <span id="date">${item.byline} · ${item.updated_date}</span>
    //                 <span class="tag" id="tag">${item.section}</span>
    //                 <span id="">${item.per_facet[0]}</span>
    //             </div>
    //         </div>
    //     </div>
    //     `
    // });




});