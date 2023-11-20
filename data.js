const lowerBodyCompoundMovements = [
  "Barbell Squats",
  "Leg Press",
  "Deadlift",
  "Heavy RDL",
];
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

const lowerBodyAccessoryMuscles = [
  "Quads",
  "Hamstrings",
  "Glutes",
  "Adductor + Groin Muscles",
  "Calves",
];

const upperBodyCompoundPushMovements = [
  "Barbell Bench Press",
  "Dumbell Bench Press",
  "Dumbell Shoulder Press",
  "Barbell Overhead Press",
  "DB Incline Bench Press",
];

const upperBodyCompoundPullMovements = [
  "Chin Up",
  "Pull Up",
  "Cable Row Machine",
  "Lat Pulldown Machine",
  "Barbell Bent Over Row",
  "Dumbell Bent Over Row",
];

const upperBodyPushMachine = [
  "Chest Press Machine",
  "Shoulder Press Machine",
  "Dip Machine (or Tricep Extension Machine)",
  "Heavy Tricep Cable Pushdown",
];

const upperBodyPullMachine = [
  "Lat Pulldown",
  "Cable Row (any grip)",
  "Assisted Pull Up",
  "Assisted Chin Up",
  "Vertical Pulldown Machine",
];

const upperBodyStrengthMovements = upperBodyCompoundPushMovements.concat(
  upperBodyCompoundPullMovements
);

const upperBodyDumbellPush = [
  "Dumbell Bench Press",
  "Dumbell Incline Bench Press",
  "Dumbell Seated Shouler Press",
  "Dumbell Standing Shoulder Press",
  "Dumbell Single-Arm Shoulder Press",
];

const upperBodyPullSuperset = [
  "Lat Pulldown + DB Side Raise",
  "DB row + DB Shrugs",
  "Lat Pulldown + DB Shrugs",
  "DB Row + DB side raise",
];

const upperBodyArmSuperset = [
  "Cable bar Tricep Pushdown + Cable Bar Curl",
  "Cable Rope Tricep Pushdown + Cabl Rope Curl",
  "DB Bicep curls + DB Overhead Tricep extension",
  "DB seated curls + DB seated Overhead Tricep Extension",
];

// defining workout objects

// Lower Body strength workout
var lowerBodyStrength = {
  title: "Lower Body Strength Workout",
  containerType: "suggestions",
  suggestionArray: [
    {
      moveType: "Strength Movement",
      muscleGroup: "Glutes / Quads / Hamstrings",
      suggestions: lowerBodyCompoundMovements,
      sets: "4",
      reps: "4-6",
      rest: "3 mins",
    },
    {
      moveType: "Unilateral Movement",
      muscleGroup: "Glutes / Quads",
      suggestions: lowerBodyUnilateralMovements,
      sets: "4",
      reps: "8-12",
      rest: "60-90 secs",
    },
    {
      moveType: "Posterior Chain",
      muscleGroup: "Glutes / Hamstrings",
      suggestions: lowerBodyPosteriorChainMovements,
      sets: "4",
      reps: "8-10",
      rest: "60-90 secs",
    },
    {
      moveType: "Accessories",
      muscleGroups: "Quad / Glutes / Hamstrings",
      suggestions: lowerBodyAccessoryMachines,
      sets: "4",
      reps: "8-12",
      rest: "60 secs",
    },
  ],
};

// Lower Body volume workout
var lowerBodyVolume = {
  title: "Lower Body Volume Workout",
  containerType: "suggestions",
  suggestionArray: [
    {
      moveType: "Strength Movement",
      muscleGroup: "Glutes / Quads / Hamstrings",
      suggestions: lowerBodyCompoundMovements,
      sets: "4",
      reps: "6-8",
      rest: "2 mins",
    },
    {
      moveType: "Unilateral Movement",
      muscleGroup: "Glutes / Quads",
      suggestions: lowerBodyUnilateralMovements,
      sets: "4",
      reps: "10-15",
      rest: "60 secs",
    },
    {
      moveType: "Posterior Chain",
      muscleGroup: "Glutes / Hamstrings",
      suggestions: lowerBodyPosteriorChainMovements,
      sets: "4",
      reps: "15-20",
      rest: "60 secs",
    },
    {
      moveType: "Accessories",
      muscleGroups: lowerBodyAccessoryMuscles,
      suggestions: lowerBodyAccessoryMachines,
      sets: "4",
      reps: "12-15",
      rest: "60 secs",
    },
  ],
};

// Upper Body strength workout
var upperBodyStrength = {
  title: "Upper Body Strength Workout",
  containerType: "suggestions",
  suggestionArray: [
    {
      moveType: "Strength Movement - Push Focus",
      muscleGroup: "Chest / Shoulders / Triceps",
      suggestions: upperBodyCompoundPushMovements,
      sets: "4",
      reps: "4-6",
      rest: "3 mins",
    },
    {
      moveType: "Strength Movement - Pull Focus",
      muscleGroup: "Back / Biceps",
      suggestions: upperBodyCompoundPullMovements,
      sets: "4",
      reps: "4-6",
      rest: "3 mins",
    },
    {
      moveType: "Isolation Movement - Push Focus",
      muscleGroup: "Chest / Shoulders / Triceps",
      suggestions: upperBodyPushMachine,
      sets: "4",
      reps: "8-12",
      rest: "60 secs",
    },
    {
      moveType: "Isolation Movement - Pull Focus",
      muscleGroup: "Back / Biceps",
      suggestions: upperBodyPullMachine,
      sets: "4",
      reps: "8-12",
      rest: "60 secs",
    },
  ],
};

// Upper Body Volume workout
var upperBodyVolume = {
  title: "Upper Body Volume Workout",
  containerType: "suggestions",
  suggestionArray: [
    {
      moveType: "Strength Movement - Any",
      muscleGroup: "Chest / Shoulders / Back",
      suggestions: upperBodyStrengthMovements,
      sets: "4",
      reps: "4-6",
      rest: "3 mins",
    },
    {
      moveType: "High Rep Dumbell Movement",
      muscleGroup: "Chest / Shoulders",
      suggestions: upperBodyDumbellPush,
      sets: "4",
      reps: "4-6",
      rest: "3 mins",
    },
    {
      moveType: "Pulling / Shoulder Superset",
      muscleGroup: "Back / Shoulders",
      suggestions: upperBodyPullSuperset,
      sets: "4 supersets",
      reps: "8-12 each",
      rest: "90 secs",
    },
    {
      moveType: "Arms Superset",
      muscleGroup: "Triceps / Biceps",
      suggestions: upperBodyArmSuperset,
      sets: "4 supersets",
      reps: "8-12 each",
      rest: "90 secs",
    },
  ],
};
