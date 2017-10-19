(function(){
  let myName = document.getElementById("my-name"); 
  let userName = document.getElementById("user-name"); 
  let getName = document.getElementById("get-name");
  let changeColour = document.getElementById("changeBackgroundCss");
  let nameHeading = document.getElementById("name-heading");
  
  function PerformGreeting() {
    myName.innerHTML = userName.value;
    nameHeading.innerHTML = userName.value;
    event.preventDefault();
    return false;
  }

  /* Task: Try to change the property of another HTML element on the page. Hint: add another event listener that calls a new function */
  function changeBackgroundCss() {    
    let colour = document.querySelector('input[name="colour"]:checked').value;    
    document.body.style.backgroundColor = colour;
    event.preventDefault();
    return false;
  }

  if (typeof event === "undefined") {
    getName.onsubmit = PerformGreeting; //Firefox
    changeColour.onsubmit = changeBackgroundCss;
  } else {
    getName.addEventListener("submit", PerformGreeting);
    changeColour.addEventListener("submit", changeBackgroundCss);
  }
  
}());
