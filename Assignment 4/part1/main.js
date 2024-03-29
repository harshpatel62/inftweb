 /*
 * Name - harsh Patel
 * Assignment - 4 part 1
 * JS file
 * Date 29 March 2024
 * */ 
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}


// Store the first set of three strings inside an array called insertX
var insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];

// Store the second set of three strings inside an array called insertY
var insertY = ["the soup kitchen", "Disneyland", "the White House"];

// Store the third set of three strings inside an array called insertZ
var insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

var storyText = "It was 94 fahrenheit outside, so "+insertX+ "went for a walk. When they got to "+insertY+", they stared in horror for a few moments, then "+insertZ+". Bob saw the whole thing, but was not surprised "+insertX+"  weighs 300 pounds, and it was a hot day."


randomize.addEventListener('click', result);

function result() {

  let newStory = storyText;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:', xItem);
  newStory = newStory.replace(':inserty:', yItem);
  newStory = newStory.replace(':insertz:', zItem);



  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace("Bob",name)
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300 * 0.071429) + ' stone';
    const temperature = Math.round((94 - 32) * 5 / 9) + ' centigrade';
    
    // Replace '94 fahrenheit' with the contents of the temperature variable
    newStory = newStory.replace('94 fahrenheit', temperature);
    // Replace '300 pounds' with the contents of the weight variable
    newStory = newStory.replace('300 pounds', weight);

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
