// This function takes an array and returns a random element from that array.
function randomArrayElement(inputArray) {
  var elementOut = inputArray[Math.floor(inputArray.length * Math.random())];

  // debug
  console.log("randomArrayElement() is working.");
  return elementOut;
}

function gotoWorkout() {
  document
    .getElementById("workoutSection")
    .scrollIntoView({ block: "nearest", behavior: "smooth" });
}

function addWorkout() {
  // get user selection
  var choice = document.getElementById("workouts").value;
  // convert user selection to JS object
  var todaysWorkout = eval(choice);
  document.getElementById("workoutChoice").innerHTML = todaysWorkout.title;
  for (let i = 1; i <= 4; i++) {
    var random = randomArrayElement(
      todaysWorkout.suggestionArray[i - 1].suggestions
    );
    document.getElementById("exName" + i).innerHTML = random;
    document.getElementById("muscleFocus" + i).innerHTML =
      todaysWorkout.suggestionArray[i - 1].muscleGroup;
    document.getElementById("moveType" + i).innerHTML =
      todaysWorkout.suggestionArray[i - 1].moveType;
    document.getElementById("sets" + i).innerHTML =
      todaysWorkout.suggestionArray[i - 1].sets;
    document.getElementById("reps" + i).innerHTML =
      todaysWorkout.suggestionArray[i - 1].reps;
    document.getElementById("rest" + i).innerHTML =
      todaysWorkout.suggestionArray[i - 1].rest;
  }
  document
    .getElementById("workoutInfo")
    .scrollIntoView({ block: "nearest", behavior: "smooth" });
}

// set up collapsible sections
// get array of collapsible button elements
var coll = document.getElementsByClassName("collapsible");
// loop through array to set up functionality
for (let i = 0; i < coll.length; i++) {
  // add click event listener
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    // expand or collapse element depending on current height
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
} // finish loop
