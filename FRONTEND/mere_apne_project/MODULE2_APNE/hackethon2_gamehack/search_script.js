async function  dataAPI(e) {
   e.preventDefault();

   let query = document.getElementById('query').value ;
   
   let response = await fetch("https://api.rawg.io/api/games?key=5c14b272c6594eb7857bb4a774e32aef&search="+ query )

   let data = await response.json()
   document.getElementById('gameData').innerHTML= ''


   let container = document.getElementById('gameData')


   for (i = 0;i < data.results.length;i++){

   let gameCard = `
   <div class="card" style="width: 20rem;">
    <img src='${data.results[i].background_image}' class="card-img-top">
    <div class="card-body">
    <h5 class="card-title">${data.results[i].name} </h5>
    <h5 class="btn btn-primary">${data.results[i].rating} &#9734;</h5>
    </div>
</div>
`
   container.innerHTML += gameCard
   }

}