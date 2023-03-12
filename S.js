// Define the variables and arrays
let discs = [2, 4, 3, 1];
let source = document.getElementById("d1");
let destination = document.getElementById("d2");
let auxiliary = document.getElementById("d3");
let moves = 0;

// Display the discs on the source pole
for (let i = 0; i < discs.length; i++) {
  let disc = document.createElement("button");
  disc.innerHTML = discs[i];
  disc.setAttribute("class", "btn btn-large btn-block btn-primary");
  disc.setAttribute("id", i);
  disc.setAttribute("onclick", "play(this.id)");
  source.appendChild(disc);
}

// Function to move the discs
function moveDisc(from, to) {
  let disc = from.lastChild;
  let discValue = disc.innerHTML;
  let destinationDisc = to.lastChild;

  // Check if the move is valid
  if (destinationDisc == null || destinationDisc.innerHTML > discValue) {
    to.appendChild(from.removeChild(disc));
    moves++;
    document.getElementById("moveCount").innerHTML = moves;
  } else {
    alert("Invalid move!");
  }
}

// Function to play the game
function play(discID) {
  let disc = document.getElementById(discID);
  let sourceDisc = source.lastChild;

  // Check if the move is valid
  if (sourceDisc == disc) {
    alert("Invalid move!");
  } else {
    // Move the disc to the destination pole
    moveDisc(source, destination);
  }
}

// Function to reset the game
function reset() {
  // Empty all the poles
  source.innerHTML = "";
  destination.innerHTML = "";
  auxiliary.innerHTML = "";

  // Re-populate the source pole
  for (let i = 0; i < discs.length; i++) {
    let disc = document.createElement("button");
    disc.innerHTML = discs[i];
    disc.setAttribute("class", "btn btn-large btn-block btn-primary");
    disc.setAttribute("id", i);
    disc.setAttribute("onclick", "play(this.id)");
    source.appendChild(disc);
  }

  // Reset the move count
  moves = 0;
  document.getElementById("moveCount").innerHTML = moves;
}

// Function to check if the game is won
function check() {
  if (destination.childElementCount == discs.length) {
    alert("Congratulations! You have won the game in " + moves + " moves.");
  } else {
    alert("The game is not yet won.");
  }
}
function moveDisc(from, to) {
  const fromDisc = from.lastElementChild;
  const toDisc = to.lastElementChild;

  if (!toDisc || toDisc.offsetWidth > fromDisc.offsetWidth) {
      to.appendChild(fromDisc);
  }
}
