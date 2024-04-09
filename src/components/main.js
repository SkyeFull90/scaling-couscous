const url = `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
          console.log(data)
          if(data.media_type === "image"){
            document.getElementById('starfield').style.width = '100%'
            document.getElementById('starfield').style.height = '99.99%'
            document.querySelector('img').src = data.hdurl
            document.querySelector('img').alt = data.title
      }
          else{
            document.getElementById('starfield').style.width = '100%'
            document.getElementById('starfield').style.height = '99.99%'
            document.querySelector('img').src = 'https://apod.nasa.gov/apod/image/2404/Comet12pTails_ShengyuLi_3000.jpg'
          }
      })
      .catch(err => {
          console.log(`error ${err}`)
      }
      );