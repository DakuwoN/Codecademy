// This program will generate random sentences each time the user runs the program.

const messageGenerator = () => {
    // Object containing our array of sentences.
    const myObj = {
        
        motivational: [
            'You are going to live for a really long time.',
            'You will become more intelligent as you grow.',
            'You are going to make a lot of money.'
        ],

        advice: [
            'You should learn computer science.',
            'Learning to program can be difficult, but the rewards are great!',
            'You should never give up!'
        ],

        exercise: [
            'Jogging each morning can help with learning new things.',
            'Eating healthy contributes to overall mental health.',
            'Say no to drugs!'
        ]

    };
    // Array used to store the selected sentences
    const combinedSentence = [];
    // Loop through each category in the object
    for (const category in myObj) {
        // Generate a random index within the array's length
        const randomMessage = Math.floor(Math.random() * myObj[category].length);
        // Add the randomly selected sentence to the combinedSentence array
        combinedSentence.push(myObj[category][randomMessage]);
    }
     // Combine the selected sentences into one sentence with spaces in between
    return combinedSentence.join(' ');
    

   
    };
 // Call the messageGenerator function and log the result to the console.
console.log(messageGenerator());

