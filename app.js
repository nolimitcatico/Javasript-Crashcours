let people = [18, 20, 16, 15, 21,];

// Create a new empty array called adults
let adults = [];

for (let i = 0; i < people.length; i++) {
    // Check if the person is an adult
    if (people[i] >= 18) {
        // Add the person to the adults array
        adults.push(people[i]);
    } // FALSE - Do nothing
    // TRUE - Add element to the new array
}