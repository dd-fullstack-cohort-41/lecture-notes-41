console.log("Is this thing on?")
function onButtonClick() {
  console.log("I have been clicked")
  const button = document.getElementById('target')
  console.log(button)
  if(button.innerHTML=== "Click me" || button.innerHTML === "Click me again"){
    button.innerHTML = "I have been clicked"
  } else if(button.innerHTML === "I have been clicked") {
    button.innerHTML = "Click me again"
  }
}