console.log('script file ran')

fetch('https://baconipsum.com/api/?type=meat-and-filler')
  .then((response) => response.json())
  .then((arrayOfBaconIpsumParagraphs) => {

    let targetDiv = document.getElementById('target')
    console.log(targetDiv)

    console.log(arrayOfBaconIpsumParagraphs)

    for(let paragraph of arrayOfBaconIpsumParagraphs){
      console.log(paragraph)

      let pTag = document.createElement('p')
      pTag.innerText = paragraph
      targetDiv.appendChild(pTag)

      // targetDiv.innerHTML = targetDiv.innerHTML + '<p>' + paragraph + '</p>'
    }

  });