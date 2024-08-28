async function getTopStories(){
    const response = await fetch('https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=j8tv9eNtTyTcIS02ZJu5uwTec760vGeC');
    if(!response.ok && response.status === '401'){
        console.log('Error');   
    }

    const resJson = await response.json();
    console.log(resJson)


    resJson.results.splice(0, 10).forEach(story => {
        console.log(story.title)
    });

}

getTopStories();