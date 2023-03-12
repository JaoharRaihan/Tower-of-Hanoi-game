// Define the stacks
const stacks = [[2, 4, 3, 1], [], []];

// Function to move disks from one stack to another
function move(from, to) {
  // If the move is invalid, return
  if (from === to || stacks[from].length === 0) {
    return;
  }

  // Get the disk to move
  const disk = stacks[from][stacks[from].length - 1];

  // Check if the move is valid
  if (stacks[to].length === 0 || disk < stacks[to][stacks[to].length - 1]) {
    // Move the disk
    stacks[from].pop();
    stacks[to].push(disk);

    // Update the visual display of the stacks
    updateStacks();
  }

  // Check if the game is won
  if (stacks[1].length === 4 || stacks[2].length === 4) {
    alert("Congratulations! You have won the game!");
  }
}

// Function to update the visual display of the stacks
function updateStacks() {
  // Loop over each stack
  for (let i = 0; i < 3; i++) {
    const stackDiv = document.getElementById(`d${i+1}`);

    // Clear the stack
    stackDiv.innerHTML = "";

    // Add the disks to the stack
    for (let j = stacks[i].length - 1; j >= 0; j--) {
      const diskDiv = document.createElement("button");
      diskDiv.classList.add("btn", "btn-large", "btn-block", "btn-primary");
      diskDiv.innerText = stacks[i][j];
      stackDiv.appendChild(diskDiv);
    }
  }
}

// Function to reset the game
function reset() {
  stacks[0] = [2, 4, 3, 1];
  stacks[1] = [];
  stacks[2] = [];
  updateStacks();
}

// Function to check the current state of the game
function check() {
  console.log(stacks);
}

// Event listeners for the move buttons
document.getElementById("1").addEventListener("click", () => { move(0, 1); });
document.getElementById("2").addEventListener("click", () => { move(0, 2); });
document.getElementById("3").addEventListener("click", () => { move(1, 0); });
document.getElementById("4").addEventListener("click", () => { move(2, 0); });
document.getElementById("5").addEventListener("click", () => { move(1, 2); });
document.getElementById("6").addEventListener("click", () => { move(2, 1); });
