function handleLoadEvent() {
  fetch("https://ddc-web-student.cnm.edu/apis/")
    .then(response => response.json())
    .then(body => {
      let cards = ''

      for(let card of body.data) {
        cards = ` ${cards}
        <div class="col">
            <div class="card">
                <div class="card-body">
                    <h2 class="card-title h-5">${card.title}</h2>
                    <p class="card-text">${card.body}</p>
                </div>
            </div>
        </div> 
        
        `
      }
      document.getElementById("target").innerHTML = cards

    })
}