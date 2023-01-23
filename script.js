let warmHugs = "Hi, I'm Olaf and I like warm hugs.";
console.log(warmHugs);

console.log(warmHugs.toUpperCase());

warmHugs = warmHugs.replace("like", "love");
console.log(warmHugs);

let beenImpaled = "Oh, look at that. I've been impaled.";
console.log(beenImpaled);

console.log(beenImpaled.slice(18, 36));

const dotDotDot = "...";
console.log(dotDotDot);

let skullBones = `I don't have a skull${dotDotDot}or bones.`
console.log(skullBones);

console.log(Math.PI);

let randomNumber = Math.floor(Math.random() * 3) + 1;
console.log(randomNumber); 


// bonus

let itGo = (((" Let It Go!").slice(1, 12).toUpperCase()) + " ").repeat(2); 
console.log(itGo);

let reindeers = "Reindeers are better than people.";
reindeers = reindeers.replace(" ", "_").replace(" ", "_").replace(" ", "_").replace(" ", "_");
console.log(reindeers);

console.log(Math.SQRT2);

let newRandomNumber = Math.floor(Math.random() * 17)+ 7;
console.log(newRandomNumber);