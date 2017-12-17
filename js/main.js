// When the page has loaded
$(function () {

	// Whe user clicks an image
	$ ('img').on('click', askQuestions);

	// Whe user clicks an h3
	$ ('h3').on('click', function () {

		// toggle the next element 
		$(this).next().slideToggle(200);

	});	
});

function askQuestions() {
var firstName = prompt("What is your first name?");
var lastName = prompt("What is your last name?");
var fullName = firstName + " " + lastName;
var age = prompt("How old are you?");
age = parseInt(age);
var location = prompt("Where do you live?");
futureAge = age + 33
if (firstName.toLowerCase() === "rebecca") {
	console.log("Oh hi cutie!")
}

if (age >= 18) {
	console.log("Heeey! You\'re a baby!");
} else if (age >= 13) {
	console.log("You are a teenager");
} else {
	console.log("You are now a child")
}

console.log("MMM so here's the thing, " + fullName);

if (location.toLowerCase() === "london") {
	console.log("Oh! You live in London! Thank god");
} else if (location.toLowerCase() !=="london") {
	console.log(":( " + location + " is pretty far away. Wish you were here" );
}



 


/*
	If the user's first name is "General" and their last name is NOT "Assembly", then greet the general!
	(Hint: use console.log)
	To test:
	Luke Skywalker
	General Assembly
	General Solo
*/

} 


