// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// Problem 1
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error"

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute the max and min temperatures?
// - What's a sensor error? And what to do when one occurs?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temperature array
// - Find min value in temperature array
// - Subtract min from max (amplitude) and return it

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max);
  console.log(min);
  return max - min;
};

//calcTempAmplitude([3, 7, 4, 1, 8]);
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// Problem 2:
// Function should now receive two arrays of temperatures

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays

// 2) Breaking up into sub-problems
// - How to merge 2 arrays?

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max);
  console.log(min);
  return max - min;
};

//calcTempAmplitude([3, 7, 4, 1, 8]);
const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);

const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celcius",

    // C) FIX THE BUG
    //value: Number(prompt("Degrees celsius:")),
    value: 10,
  };

  //   B) FIND THE BUG
  console.log(measurement);
  console.table(measurement);

  console.log(measurement.value);
  //   console.warn(measurement.value);
  //   console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};
// A) IDENTIFY THE BUG
console.log(measureKelvin());

// USING A DEBUGGER

const calcTempAmplitudeNewBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = 0;
  let min = 0;

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    // CALLING DEBUGGER FROM THE CONSOLE
    //debugger;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max);
  console.log(min);
  return max - min;
};

//calcTempAmplitude([3, 7, 4, 1, 8]);
const amplitudeNewBug = calcTempAmplitudeNewBug([3, 5, 1], [9, 4, 5]);
// A) IDENTIFY THE BUG
console.log(amplitudeNewBug);

// CODING CHALLENGE #1
/**
 * Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.
 *
 * Example: [17, 21, 23] will print "... 17C in 1 days ... 21C in 2 days ... 23C in 3 days ..."
 * Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.
 *
 * Use the problem-solving framework: Understand the problem and break it up into sub-problems!
 *
 * TEST DATA 1: [17, 21, 23]
 * TESt DATA 2: [12, 5, -5, 0, 4]
 */

const arr1 = [17, 21, 23];
const arr2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let string = "";

  for (let i = 0; i < arr.length; i++) {
    string += `${arr[i]}C in ${i + 1} days ... `;
  }
  console.log("... " + string);

  return string;
};

printForecast(arr1);
printForecast(arr2);

// CODING CHALLENGE - SOLVING IT WITH AI LECTURE

/**
 * Let's say you're building a time tracking application for freelancers. At some point in building this app, you need a function that receives daily work hours for a certain week, and returns:
 *
 * 1. Total hours worked
 * 2. Average daily hours
 * 3. The day with the most hours worked
 * 4. Number of days worked
 * 5. Whether the week was full-time (worked 35 hours or more)
 */

// Wrote this myself

const hoursWorked = [7.5, 8, 6.5, 0, 8.5, 4, 0];

const timeTracking = function (hoursWorked) {
  const daysOfTheWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  let totalHoursWorked = 0;
  let mostHoursWorkedDay = hoursWorked[0];
  let whichDay;
  let daysWorked = 0;

  for (let i = 0; i < hoursWorked.length; i++) {
    totalHoursWorked += hoursWorked[i];

    if (hoursWorked[i] > mostHoursWorkedDay) {
      mostHoursWorkedDay = hoursWorked[i];
      whichDay = hoursWorked.indexOf(hoursWorked[i]);
    }

    if (hoursWorked[i] > 0) {
      daysWorked++;
    }
  }
  const averageDailyHours = totalHoursWorked / 7;
  const isFullTime = totalHoursWorked >= 35 ? "full" : "part";

  return `Total hours worked: ${totalHoursWorked}, average daily hours: ${averageDailyHours}, most hours worked ${mostHoursWorkedDay} hours on ${daysOfTheWeek[whichDay]}; worked for a total of ${daysWorked} days; and they worked ${isFullTime}-time`;
};

console.log(timeTracking(hoursWorked));
