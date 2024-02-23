let myList = {
  monday: {
    morning: {
      task: "go to the gym",
      completed: false,
    },
    lunch: {
      task: "go to the mall",
      completed: false,
    },
    dinner: {
      task: "kill the annoying neighbor",
      completed: false,
    },
    night: {
      task: "read a book",
      completed: false,
    },
    completed: false,
  },
  tuesday: {
    morning: {
      task: "buy gas",

      completed: false,
    },
    lunch: {
      task: "eat at subway",
      completed: false,
    },
    dinner: {
      task: "check the camera",
      completed: false,
    },
    night: {
      task: "read a book",
      completed: false,
    },
    completed: false,
  },
  wednesday: {
    morning: {
      task: "buy gas",
      completed: true,
    },
    lunch: {
      task: "go to the mall",
      completed: false,
    },
    dinner: {
      task: "burn the mall down",
      completed: true,
    },
    night: {
      task: "go to sleep",
      completed: true,
    },
    completed: false,
  },
};

//method to add task
const newTask = (dayName, morning, lunch, dinner, night) => {
  myList[dayName] = {
    morning: {
      task: morning,
      completed: false,
    },
    lunch: {
      task: lunch,
      completed: false,
    },
    dinner: {
      task: dinner,
      completed: false,
    },
    night: {
      task: night,
      completed: false,
    },
    completed: false, // Represents whether all tasks for the day are completed
  };
  console.log(myList);
};
// to create a shallow copy of the myList object.
//This ensures that the original myList object is not modified when the tasks for a day are displayed.

const whatday = (dayName) => {
  myList = { ...myList, [dayName]: { ...myList[dayName] } }; // this display one day at a time
  console.log(myList[dayName]);
  return myList[dayName];
};

// marks the one task at a time
const markTask = (dayName, task, time) => {
  myList[dayName][task] = time; // mark the time of the task assign the properties to time  value passed in parameters
  time.completed = true;
  console.log(myList[dayName]);
};

// // check if the whole day is completed and marks it
const allTaskCompleted = (dayName) => {
  let allCompleted = `all task of ${dayName} are completed`;
  for (const key in myList[dayName]) {
    if (
      Object.hasOwnProperty.call(myList[dayName], key) &&
      myList[dayName][key].task &&
      !myList[dayName][key].completed
    ) {
      allCompleted = `the ${dayName} tasks are not completed`;
      myList[dayName].completed = false;
      //console.log(myList);
      break;
    }
  }
  if (allCompleted === `all task of ${dayName} are completed`) {
    myList[dayName].completed = true;
    console.log(myList);
  }
  console.log(allCompleted);
  return allCompleted;
};
// delete the task from the day object
const removeTask = (dayName, task) => {
  delete myList[dayName][task];
  console.log(myList[dayName]);
};

// newTask("saturday","[eat chocolte,buy drinks]","cook my neighbor","paint my house","go to sleep");
//whatday('monday') ;
//markTask('wednesday','dinner','completed');
//allTaskCompleted("wednesday");
removeTask("monday", "morning");
