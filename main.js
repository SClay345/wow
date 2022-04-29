document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
fetch("https://owen-wilson-wow-api.herokuapp.com/wows/random")
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        let str = data[0].full_line
        str = str.replace(/Wow/gi, `<span>Wow</span>`)
        document.querySelector("h3").innerText = data[0].movie
        document.querySelector("audio").src = data[0].audio
        document.querySelector("h1").innerHTML = `"${str}"` +  "\n \n - "  + data[0].character 
        document.querySelector("p").innerText = 'Timestamp: ' + data[0].timestamp
        document.querySelector("h2").innerText = 'Total Wows in movie: ' +data[0].total_wows_in_movie
        document.querySelector("img").src = data[0].poster
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}