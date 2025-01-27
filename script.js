let currentDoor = null;
let openingDoor = false;


document.addEventListener("DOMContentLoaded", function() {
    let door3 = document.querySelector("#door3");

    door3.addEventListener("click", function() {
        selectDoor(this); 
    });

    document.querySelector("#sliderHeight").addEventListener("input", function() {
        if(currentDoor != null){
            let currentScale = currentDoor.getAttribute("scale");
            let scale = this.value;
            currentScale.y = scale;
            currentDoor.setAttribute("scale", `${currentScale.x} ${currentScale.y} ${currentScale.z}`);
            document.querySelector(`#${currentDoor.id}-selected`).setAttribute("scale", `${currentScale.x} ${currentScale.y + 0.05} ${currentScale.z + 0.05}`);
        }
    });

    document.querySelector("#sliderWidth").addEventListener("input", function() {
        if(currentDoor != null){
            let currentScale = currentDoor.getAttribute("scale");
            let scale = this.value;
            currentScale.z = scale;
            currentDoor.setAttribute("scale", `${currentScale.x} ${currentScale.y} ${currentScale.z}`);
            document.querySelector(`#${currentDoor.id}-selected`).setAttribute("scale", `${currentScale.x + 0.05} ${currentScale.y} ${currentScale.z + 0.05}`);
        }
    });

    document.querySelector('#openDoor').addEventListener("click", function() {
        if(currentDoor != null){
            openDoor();
        }
    });
});

function deselectDoor(){
    if(currentDoor != null){
        document.querySelector(`#${currentDoor.id}-selected`).setAttribute("opacity", "0");
    }
}

function selectDoor(element){
    if(currentDoor != element){
      deselectDoor();
      document.querySelector("#selectedDoor").innerHTML = element.id;
      document.querySelector(`#${element.id}-selected`).setAttribute("opacity", "0.1");
      currentDoor = element;
    }else{
      deselectDoor();
      currentDoor = null;
      document.querySelector("#selectedDoor").innerHTML = "None";
    }
}

function openDoor() {
    let currentRotation = currentDoor.getAttribute("rotation");
    let targetRotation = currentRotation.y - 90; 
    let step = -1; 

    function animateRotation() {
      if (currentRotation.y > targetRotation) {
        openingDoor = true;
        currentRotation.y += step; 
        currentDoor.setAttribute("rotation", `${currentRotation.x} ${currentRotation.y} ${currentRotation.z}`);
        setTimeout(animateRotation, 10); 
      }else{
        openingDoor = false;
      }
    }

    if(openingDoor == false){
        animateRotation();
    }
}
