const userName = "Dark Heart";


// Get first char
const firstLetter = userName.charAt(0);


// Get the index of char
const firstIndex = userName.indexOf(" ");
const lastIndex = userName.lastIndexOf(" ")

// Get length
const length = userName.length;

// Trim
const trimmed = userName.trim();

// Make upper/lower cased
const allUppercased = userName.toUpperCase();
const allLowercased = userName.toLowerCase();

// Check if word starts/ends with char
const startsWith = userName.startsWith("D");
const endsWith = userName.endsWith("D");

// Check word includes with char
const includes = userName.includes(" ");




const phoneNumber = "123-456-789";

// Remove chars from string
const dashesRemoved = phoneNumber.replaceAll("-", "");

// Add chars to the string till it becomes given length
const addSomethingToStart = phoneNumber.padStart(25, "7");
const addSomethingToEnd = phoneNumber.padEnd(25, "7");

