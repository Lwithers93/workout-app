// var workouts = [
//   "lowerBodyStrength",
//   "upperBodyStrength",
//   "lowerBodyVolume",
//   "upperBodyVolume",
// ];

const lowerBodyCompoundMovements = ["Barbell Squats", "Leg Press", "Deadlift"];
const lowerBodyUnilateralMovements = [
  "DB Front Lunge",
  "DB Reverse Lunge",
  "DB Bulgarian Split Squats",
  "DB Split Squats",
];
const lowerBodyPosteriorChainMovements = [
  "DB Romanian Deadlifts",
  "Barbell Romanian Deadlifts",
  "Barbell Good Mornings",
];
const lowerBodyAccessoryMachines = [
  "Leg Extension",
  "Leg Curl",
  "Abductor",
  "Adductor",
  "Calf raise",
];

var upperBodyStrength = [];
var lowerBodyVolume = [];
var upperBodyVolume = [];

var lowerBodyStrength = {
  title: "Lower Body Strength Workout",
  containerType: "suggestions",
  suggestionArray: [
    {
      label: "Strength Movement",
      suggestions: lowerBodyCompoundMovements,
      guidance: "5x5 reps",
    },
    {
      label: "Unilateral Movement",
      suggestions: lowerBodyUnilateralMovements,
      guidance: "4 sets of 8 - 12 reps",
    },
    {
      label: "Posterior Chain",
      suggestions: lowerBodyPosteriorChainMovements,
      guidance: "5x5 reps",
    },
    {
      label: "Accessories",
      suggestions: lowerBodyAccessoryMachines,
      guidance: "5x5 reps",
    },
  ],
};

// this function sets the innerHTML of a specified node
// function setInnerHTML(node, i) {
//   node.innerHTML =
//     suggestionsObject.suggestionArray[i].label +
//     " | " +
//     randomArrayElement(suggestionsObject.suggestionArray[i].suggestions);
// }

// This function takes an array and returns a random element from that array.
function randomArrayElement(inputArray) {
  var elementOut = inputArray[Math.floor(inputArray.length * Math.random())];

  // debug
  console.log("randomArrayElement() is working.");
  return elementOut;
}

function createWorkout() {
  // get user selection
  var choice = document.getElementById("workouts").value;
  // convert user selection to JS object
  var todaysWorkout = eval(choice);
  // overwrite content if exists
  var section = document.getElementById("workoutSection");
  section.innerHTML = "";
  // set new title from user's selection
  var newTitle = document.createElement("H2");
  newTitle.innerHTML = todaysWorkout.title;
  section.appendChild(newTitle);

  // loop through to create elements for the workout
  for (let i = 1; i <= 4; i++) {
    var ele = document.createElement("div");
    var thisId = "movement" + i;
    ele.setAttribute("id", thisId);
    ele.className = "container";
    var ele2 = document.createElement("div");
    ele2.classList.add("content");
    var node = document.createElement("H3");
    node.innerHTML = todaysWorkout.suggestionArray[i - 1].label;
    var node2 = document.createElement("p");
    var random = randomArrayElement(
      todaysWorkout.suggestionArray[i - 1].suggestions
    );
    node2.innerHTML = random;
    var node3 = document.createElement("p");
    node3.innerHTML = todaysWorkout.suggestionArray[i - 1].guidance;
    var btn = document.createElement("button");
    btn.setAttribute("type", "button");
    btn.className = "collapsible";
    btn.innerHTML = "expand";
    section.appendChild(ele);
    ele.appendChild(node);
    ele.appendChild(node2);
    ele.appendChild(btn);
    ele.appendChild(ele2);
    ele2.appendChild(node3);
  } //end loop

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
}
