let story = 'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a glorious 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';

// We convert the story variable into an array, so we can make edits.
let storyWords = story.split(' ');
let unnecessaryWord = 'literally';
let misspelledWord = 'beautifull';
let badWord = 'freaking';

// console.log(storyWords);

// Count variable to track the count of words.
let count = 0;

// Checks if every word is less than 10 character long 
let lengthCheck = storyWords.every(word => {
  return word.length <= 10;
});

console.log(lengthCheck);

// Checks if any words are considered a bad word 
badWordIndex = storyWords.findIndex(word => {
if (word === badWord) {
  // return word;
  return storyWords[80] = 'really';
  }
  
});

// Spell checker 
storyWords = storyWords.map(word => {
  if (word === misspelledWord) {
    return 'beautiful';
  } else {
    return word;
  }
});

// Checks if the word is unnecessaryWord and returns that word 
storyWords = storyWords.filter(word => {
  if (word !== unnecessaryWord) {
    return word;
  }
});

// Filter method to check for words that are less than 10 characters in length 
storyWords.filter(word => {
  if (word.length > 10) {
    // story.word = 'glorious';
    return word 
  }
});

// Counts each word in the array 
storyWords.forEach(word => {
  
  count++;
});

console.log(storyWords);
console.log(count);
console.log(badWordIndex);
console.log(storyWords.join(' '));

