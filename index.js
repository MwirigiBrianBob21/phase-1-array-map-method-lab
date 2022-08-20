const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map((tutorialLine) => {
    const tokens = tutorialLine.split(" "); // specified separator for the message  and returns the characters as arrays
    
    const upperCasedTokens = tokens.map( (token) =>
      token.charAt(0).toUpperCase() + token.slice(1)
    ); // returns the character at index 0 in uppercase and also slices it to 1
    const message = upperCasedTokens.join(" ");
    return message;
  });
}
