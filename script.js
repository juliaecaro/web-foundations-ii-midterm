//Julia Caro
//March 8, 2023

// Defines what category we're choosing and updates the webpage with this. 
// ********************************
// 1. Customize these with your own category and items! 
// ********************************
let what = "cocktail"; //CATEGORY - Change me!
//Changing what from "cocktail" to "fun activity". The word let is not used again because it will not redeclare in the same scope.
		what = "fun activity";
document.querySelector("#what").innerText = what;

// Defines our options to choose from - change these Strings in the array to something you want to choose from!
let options = [
  "Intro to Aperol",
  "Margarita",
  "Champagne cocktail",
  "Gin and soda",
  "Old fashioned",
  "Paloma",
  "Sazerac"
];
// The options strings have been changed from various cocktails to fun activities people might want to do; again, the word let is not used because it will not redeclare in the same scope.
		options = [
	"see a movie", 
  "go bowling", 
  "read a book", 
  "watch television", 
  "play video games", 
  "play a board game", 
  "listen to music"
];
const optionsList = document.querySelector("#options");

// ********************************
// 2. Alphabetize the options list 
// ********************************
// Your code here:
// Alphabetizing the options, should end up with ['go bowling', 'listen to music', 'play a board game','play video games','read a book','see a movie','watch television']
options.sort(function (a, b) {
// If a is less than b
  if (a < b) {
		// Return -1
    return -1;
  }
// If a is greater than b
  if (a > b) {
		// Return 1
    return 1;
  }
// If neither of the above statements are true, return 0
  return 0;
});

// ********************************
// 3. Make the options list use title case 
// ********************************
// The first letter of each word should be capitalized. For 2 bonus points: Make it skip words like "and", "a", "the", "to", etc.
// Your code here:
//Making the first letter of each string from the array capitalized using a function and two nested for loops, i.e. making the options list use title case for each word
function titleCase(array) {
// Looping through the array provided
	for (let i = 0; i < array.length; i++) {
	// Turning the different elements in the array to strings and splitting them into pieces
		let splitString = array[i].toString().split(" ");
		// Looping through the string received from the most recent equation
			for (let j = 0; j < splitString.length; j++) {
			// Taking each piece of the currently addressed string and making only the first letter of that string uppercase
				splitString[j] = splitString[j].charAt(0).toUpperCase() + splitString[j].slice(1);
				// Using an if statement to make the options list skip words like "to", "the", "a", etc.
					if (splitString[j] == 'A' ||
							splitString[j] == 'An' ||
							splitString[j] == 'The' || 
							splitString[j] == 'And' || 
							splitString[j] == 'But' || 
							splitString[j] == 'Or' || 
							splitString[j] == 'As' || 
							splitString[j] == 'At' || 
							splitString[j] == 'By' || 
							splitString[j] == 'In' || 
							splitString[j] == 'Of' || 
							splitString[j] == 'To') {
						// If any of the string pieces in the currently addressed string are any of these words, it will become completely lowercase
						splitString[j] = splitString[j].charAt(0).toLowerCase() + splitString[j].slice(1);
					} // The else statement is not needed so it is not written out.
		}
		// Combining all of the pieces of the string into a complete string again
		let wholeString = splitString.join(" ");
		// Splicing the newly completed string back into the array in question at the index the original string was taken from and deleting the original string 
		array.splice(i, 1, wholeString);
	}
	// Returning the array in question
	return array;
}

// Calling the above function specifically on the options array
titleCase(options);

// Don't code #3 past this point.
// This forEach loop renders our options in the webpage. It creates <li></li> elements, assigns them an id, :
options.forEach((option, index) => {
  const listItem = document.createElement("li");
  listItem.innerText = option;
  listItem.id = `item-${index}`;
  optionsList.append(listItem);
});

// Declares a variable equal to our button
const button = document.querySelector("button");

// ********************************
// 4. Write a function that accepts a max numbers as a parameter and returns a random number between 0 and that number. This function used properly will help you in part five! 
// ********************************
// Your code here:
// Function to generate a random number between 0 and a specific number
function getRandomNumber(min, max) {
	// Minimum number of this function
	min = Math.ceil(min);
	// Maximum number of this function
  max = Math.floor(max);
// Generating a random number with Math.random() that is rounded down to the nearest number by Math.floor(). The min and max from the above function parameters will provide the required min and max numbers. The resulting number is also immediately returned
	return randomNumberResult = Math.floor(Math.random() * (max - min + 1) + min);
}

// ********************************
// 5. Make it so that when someone clicks the "choose" button, a random item in the list gets highlighted with a different background color. Hint: you might want to keep in mind #4, take a peak at the forEach loop and how it renders our options 
// ********************************
// Your code here:
// A function to choose a random element in the list to highlight with the specified color
function randomHighlight() {
	// Getting all of the "li" elements within the document, as created by the forEach loop specified above
	let lis = document.getElementsByTagName("li");
	// Selecting a random number from the length of the list, using the getRandomNumber function created above
	let randomOption = lis.item(getRandomNumber(0,6));

// Looping through the list of "li" elements
for (let i = 0; i < lis.length; i++) {
	// If the "li" element is not the same index number as the randomly chosen number
	if (lis[i] != randomOption) {
		// Make the background color of that "li" element go back to normal
		lis[i].style.backgroundColor = "";
	} else { // If the above statement is not true, and the "li" element has the same index number as the randomly chosen number
		// Make the "li" element have the stated background color
		lis[i].style.backgroundColor = "#008000";
		}
	}
};

// ********************************
// 6. (Optional Bonus) Oops! Refactor your code to not update the background color directly but to instead add/remove the class "choice" so that each time the button is clicked, the previously chosen item returns to normal, and a new item is selected (10 bonus points).
// ********************************
// Your code here:
// Rewriting the above function to add and remove the class "choice" respectively, instead of changing the background color automatically
function randomHighlight() {
// Getting all of the "li" elements within the document, as created by the forEach loop specified above
	let lis = document.getElementsByTagName("li");
// Selecting a random number from the length of the list, using the getRandomNumber function created above
	let randomOption = lis.item(getRandomNumber(0,6));

// Looping through the list of "li" elements
for (let i = 0; i < lis.length; i++) {
	// If the "li" element is not the same index number as the randomly chosen number
	if (lis[i] != randomOption) {
		// Remove the class "choice" from that "li" element
		lis[i].classList.remove("choice");
	} else { // If the above statement is not true, and the "li" element has the same index number as the randomly chosen number
		// Add the class "choice" to the "li" element
		lis[i].classList.add("choice");
		}
	}
};

// Making the button on the page listen for a click action on said button, upon which it will run the above (second) randomHighlight function
button.addEventListener("click", randomHighlight);