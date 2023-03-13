function moveElement() {
  // get the element to be moved
  const element = document.querySelector("#d1 button");

  // get the div where the element will be moved to
  const targetDiv = document.getElementById("d2");

  // check if the element and target div exist
  if (element && targetDiv) {
    // remove the element from its current div
    element.parentNode.removeChild(element);

    // append the element to the target div
    targetDiv.appendChild(element);
  }
}

function two3() {
  // get the element to be moved
  const element = document.querySelector("#d2 button");

  // get the div where the element will be moved to
  const targetDiv = document.getElementById("d3");

  // check if the element and target div exist
  if (element && targetDiv) {
    // remove the element from its current div
    element.parentNode.removeChild(element);

    // append the element to the target div
    targetDiv.appendChild(element);
  }
}
function threeto1() {
  // get the element to be moved
  const element = document.querySelector("#d3 button");

  // get the div where the element will be moved to
  const targetDiv = document.getElementById("d1");

  // check if the element and target div exist
  if (element && targetDiv) {
    // remove the element from its current div
    element.parentNode.removeChild(element);

    // append the element to the target div
    targetDiv.appendChild(element);
  }
}

function twoto3() {
  // get the element to be moved
  const element = document.querySelector("#d2 button");

  // get the div where the element will be moved to
  const targetDiv = document.getElementById("d3");

  // check if the element and target div exist
  if (element && targetDiv) {
    // remove the element from its current div
    element.parentNode.removeChild(element);

    // append the element to the target div
    targetDiv.appendChild(element);
  }
}

function threeto2() {
  // get the element to be moved
  const element = document.querySelector("#d3 button");

  // get the div where the element will be moved to
  const targetDiv = document.getElementById("d2");

  // check if the element and target div exist
  if (element && targetDiv) {
    // remove the element from its current div
    element.parentNode.removeChild(element);

    // append the element to the target div
    targetDiv.appendChild(element);
  }
}
function twoto1() {
  // get the element to be moved
  const element = document.querySelector("#d2 button");

  // get the div where the element will be moved to
  const targetDiv = document.getElementById("d1");

  // check if the element and target div exist
  if (element && targetDiv) {
    // remove the element from its current div
    element.parentNode.removeChild(element);

    // append the element to the target div
    targetDiv.appendChild(element);
  }
}
function oneto3() {
  // get the element to be moved
  const element = document.querySelector("#d1 button");

  // get the div where the element will be moved to
  const targetDiv = document.getElementById("d3");

  // check if the element and target div exist
  if (element && targetDiv) {
    // remove the element from its current div
    element.parentNode.removeChild(element);

    // append the element to the target div
    targetDiv.appendChild(element);
  }
}

function randomizeElements(divId) {
  // get the div element by its ID
  const div = document.getElementById(divId);

  // get an array of the child nodes in the div
  const children = Array.from(div.childNodes);

  // shuffle the array of child nodes using the Fisher-Yates algorithm
  for (let i = children.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [children[i], children[j]] = [children[j], children[i]];
  }

  // append the shuffled child nodes back to the div in their new order
  for (let i = 0; i < children.length; i++) {
    div.appendChild(children[i]);
  }
}


function resetForm() {
  document.getElementById("d1").reset();
}