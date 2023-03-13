// Get the div elements where disks can be moved to
const d1 = document.getElementById("d1");
const d2 = document.getElementById("d2");
const d3 = document.getElementById("d3");

// Get the buttons for moving disks
const button12 = document.querySelector("#div4 button:nth-of-type(1)");
const button23 = document.querySelector("#div4 button:nth-of-type(2)");
const button31 = document.querySelector("#div4 button:nth-of-type(3)");
const button32 = document.querySelector("#div4 button:nth-of-type(4)");
const button21 = document.querySelector("#div4 button:nth-of-type(5)");
const button13 = document.querySelector("#div4 button:nth-of-type(6)");
function shuffleArray(array) 
{
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}
// Keep track of which disk is selected
let selectedDisk = null;

// Add click event listeners to disks to select them
const disks = document.querySelectorAll(".div1 button");
disks.forEach((disk) => {
  disk.addEventListener("click", () => {
    selectedDisk = disk;
  });
});

// Add click event listeners to buttons to move disks
button12.addEventListener("click", () => {
  if (selectedDisk && d1.contains(selectedDisk)) {
    d2.appendChild(selectedDisk);
    selectedDisk = null;
  }
});

button23.addEventListener("click", () => {
  if (selectedDisk && d2.contains(selectedDisk)) {
    d3.appendChild(selectedDisk);
    selectedDisk = null;
  }
});

button31.addEventListener("click", () => {
  if (selectedDisk && d3.contains(selectedDisk)) {
    d1.appendChild(selectedDisk);
    selectedDisk = null;
  }
});

button32.addEventListener("click", () => {
  if (selectedDisk && d3.contains(selectedDisk)) {
    d2.appendChild(selectedDisk);
    selectedDisk = null;
  }
});

button21.addEventListener("click", () => {
  if (selectedDisk && d2.contains(selectedDisk)) {
    d1.appendChild(selectedDisk);
    selectedDisk = null;
  }
});

button13.addEventListener("click", () => {
  if (selectedDisk && d1.contains(selectedDisk)) {
    d3.appendChild(selectedDisk);
    selectedDisk = null;
  }
});
