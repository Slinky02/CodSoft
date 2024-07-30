function filterSelection(category) {
    var elements = document.getElementsByClassName("column");
    if (category === "all") category = "";
    
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.display = elements[i].className.indexOf(category) > -1 ? "block" : "none";
    }
    
    var buttons = document.getElementsByClassName("btn");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove("active");
    }
    event.target.classList.add("active");
  }