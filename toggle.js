


const buttonGroup = document.getElementById("button-group");

const buttonGroupPressed = (e) => {
  const isButton = e.target.nodeName === 'BUTTON';
  if(!isButton) {
     return
   }
  document.body.style.backgroundColor = e.target.value;
  e.target.style.backgroundColor =  e.target.value;
  
}

buttonGroup.addEventListener('click', buttonGroupPressed);


let solidBar = false;

let toggleBar = function() {
  let getSidebar = document.querySelector('.button-group');
  let getSidebarButton = document.querySelectorAll('.button-group button');
  if (solidBar === false) {
    
    getSidebar.style.width = "75px";

    let arraylength = getSidebarButton.length;
    for (let i = 0; i < arraylength; i++) {
      getSidebarButton[i].style.opacity = "1";

    }
    solidBar = true;
  }
  else if (solidBar === true) {
    getSidebarButton.style.visibility = "visible";
    getSidebar.style.width = "75px";

    let arraylength = getSidebarButton.length;
    for (let i = 0; i < arraylength; i++) {
      getSidebarButton[i].style.opacity = "0";

    }
    getSidebarButton.style.visibility = "hidden";
    
    solidBar = false;
  }
}