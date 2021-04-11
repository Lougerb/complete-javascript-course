"use strict";

//Call and Apply Method

//Normal call
const person1 = {
  _name: "Louein",
  _jobPosition: "Web Dev",
  jobPlace: "Makati",
  schedule: "8am-6pm",
  myIntro(personName, job) {
    console.log(`${personName} is working in ${this.jobPlace}`);
    console.log(`Their job is ${job} and working from ${this.schedule}`);
  },
};

//This is normal call
// person1.myIntro("Gerald", "Front End");

//Calling Method function inside the object
//with this. method in it

const person2 = {
  _name: "Jerry",
  _jobPosition: "Back End Deb",
  jobPlace: "QC",
  schedule: "6am-4pm",
};

//Step 1, store the function from the object
const theirIntro = person1.myIntro;

//Did not work
// theirIntro("Jerry", "Mousing");

//This should work, using CALL
//"this" keyword will work as long as they have the same property
//Syntax: func.call([thisArg[, arg1, arg2, ...argN]])
theirIntro.call(person2, person2._name, person2._jobPosition);
