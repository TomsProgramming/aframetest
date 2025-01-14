let currentDoor = null;

document.addEventListener("DOMContentLoaded", function() {
    currentDoor = document.querySelector("#door3");
    let door3 = document.querySelector("#door3");

    door3.addEventListener("click", function() {
        console.log("De deur is geselecteerd!");
        selectDoor(this); 
    });

    document.querySelector("#slider1").addEventListener("input", function() {
        let door3Scale = document.querySelector("#door3").getAttribute("scale");
        door3Scale.z = this.value;
        document.querySelector("#door3").setAttribute("scale", door3Scale);
    });
});

function selectDoor(element){
    console.log("De deur is geselecteerd!");
    currentDoor = element;
}

function openDoor() {
    let currentRotation = currentDoor.getAttribute("rotation"); // Get current rotation of the currentDoor
    let targetRotation = currentRotation.y - 90; // Rotate 90 degrees (adjust as needed)
    let step = -1; // Rotation step

    function animateRotation() {
      if (currentRotation.y > targetRotation) {
        currentRotation.y += step; // Decrease the rotation
        currentDoor.setAttribute("rotation", `${currentRotation.x} ${currentRotation.y} ${currentRotation.z}`);
        setTimeout(animateRotation, 10); // Smooth animation
      }
    }

    animateRotation();
  }
