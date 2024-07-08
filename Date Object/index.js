/* 
const today = new Date();

// To get the year:
const year = today.getFullYear();
console.log(year, typeof year);

// To get the month:
// Only the month starts with 0, So:
const month = today.getMonth();
console.log(month, typeof month, "month") 


// To get the day of the month:
const day = today.getDate();
console.log(day, typeof day, "day of the month");


// To get the day of the week:
const dayOfWeek = today.getDay();
console.log(dayOfWeek, typeof dayOfWeek, "day of the week");

// To get the hour
const hour = today.getHours();
console.log(hour, typeof hour, "hour");

// To get minutes
const minutes = today.getMinutes();
console.log(minutes, typeof minutes, "minutes");

// To get seconds
const seconds = today.getSeconds();
console.log(seconds, typeof seconds, "seconds");


// Set Date
today.setFullYear(2025);
today.setMonth(0);
today.setDate(1);
today.setHours(2);
today.setMinutes(3);
today.setSeconds(4);
console.log(today);

 */

// Compare dates

const date1 = new Date("2025-12-31");
const date2 = new Date("2026-01-01");


console.log(date1 < date2);