let schedule = [
  { Title: "Meeting", Description: "intervation for ben", Due: "2000-09-19" },
  { Title: "killing", Description: "my annoying neighbor", Due: "2014-02-25" },
  {
    Title: "Trip",
    Description: "Disneyland trip with the kids",
    Due: "2014-02-19",
  },
  { Title: "celebrating", Description: "Teta's birthday", Due: "2000-02-15" },
];

const newTask = (Title, Description, Due) => {
  let newSchedule = {};
  (newSchedule.Title = Title),
    (newSchedule.Description = Description),
    (newSchedule.Due = Due),
    schedule.push(newSchedule);
  console.log(schedule);
};

const sortByDates = () => {
  schedule.forEach((task) => {
    task.Due = new Date(task.Due); // turn the date that is a string  into an actual date object
  });

  schedule.sort((a, b) => a.Due - b.Due);
  // if dates are equal sort by title
  console.log(schedule);
  return schedule;
};
const updateTask = (scheduleObject, newSchedule) => {
  Object.assign(scheduleObject, newSchedule);
  console.log(schedule);
};

const removePersonAtIndex = (array, index) => {
  array.splice(index, 1);
  console.log(schedule);
};

//newTask('bathe in Blood','charity event for kids','2014-05-19');
//sortByDates();
//updateTask(schedule[0],{Title:'big head',Description:'peed himself', Due:'2023-09-09'});

//removePersonAtIndex(schedule, 2);
