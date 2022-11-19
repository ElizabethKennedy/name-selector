    //grab hat div
    let hat= document.getElementById("hat")
    let messageText = document.getElementById("message");
    //selecting input name so we can use it in our query
    let inputName = document.querySelector("#inputName");

    //list of potential spirit animals
    let spiritAnimals = ["dog", "cat", "moose", "platypus", "cow", "fox", "owl", "chicken", "sloth", "elephant", "porcupine", "possum", "capybara", "mole", "koala"];

    //spirit animal image selector
    let spiritAnimalImg = document.querySelector("#spiritAnimalImg");

    //selecting name
    let parent = document.querySelector("#name");

    //select text paragraphs
    let p1 = document.querySelector("#p1");
    let p2 = document.querySelector("#p2");
    let p3 = document.querySelector("#p3");

     //array of names
     let names = ['Hunter Andersen', 'Harrison Fangmeier', 'Seth Bowman', 
     'Tyson Lind', 'Luis Cazares', 'Elizabeth Kennedy', 'Jason Thomas', 'Aiyana Urbina-Hudson', 
     'Colin Kyger', 'Reece Martin', 'Luke Schuering', 
    'Alex Minnelli', 'Denis Pugliese', 'Luke Dixon', 'Joshua Paul', 'Thomas Williams', 
    'Hasheem Reddick', 'Sofia Abbas', 'Darian Southerland']

    //an array of adjectives for the spirit animal
    let adjectives = ['glorious', 'mighty', 'brave', 'unstoppable', 'speedy', 'lazy', 'meticulous'];

function shakeAndRender(){
 
    //remove prev message
    if(messageText != null){
     messageText.parentNode.removeChild(messageText);
    }
    
    //css animation
    hat.classList.add("shake");
 
    //remove shake class
    setTimeout(function(){ hat.classList.remove("shake"); }, 1500);
    
    //call the getName function
    setTimeout(function(){ getNameAndSpiritAnimal(); }, 1500);
 }
 
 
 //generate randomized drawing of a name
 function getNameAndSpiritAnimal(){
       //capture the user name input value
       let nameValue = inputName.value;
       //convert it to an indexable number
       let stringRoulette = nameValue.length;

    //assign them an adjective
    let adjectiveRoulette = nameValue.length;

    //make sure the index can be found inside of spiritAdj
    for (let i = 0; adjectiveRoulette > adjectives.length - 1; i++){
        adjectiveRoulette -= adjectives.length;
    };
    //assign spiritAdj as an adjective based on the name
    let spiritAdj = adjectives[adjectiveRoulette];
 
     //get a random name
     let name = names[Math.floor(Math.random()*names.length)];
 
    //make sure the index can be found inside of spiritAnimals
        for (let i = 0; stringRoulette > spiritAnimals.length - 1; i++){
            stringRoulette -= spiritAnimals.length;
        };
    
    //declare spirit animal
    let spiritAnimal = spiritAnimals[stringRoulette];
    //call GIPHY API to get our spirit animal image url
    getGIPHY(spiritAnimal);

    p1.textContent = `Hi, ${nameValue}, right now you're vibing with: ${name}`;
    p2.textContent = `Your spirit animal is:`;
    p3.textContent = `The ${spiritAdj} ${spiritAnimal}!`;
 }

 async function getGIPHY (query){
    //fetch the giphy data
    let res = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=bKU6BUVB00GBtKZxYXBWGSiQOI0hQBbP&q=${query}&limit=1&offset=0&rating=g&lang=en`, { mode: "cors"});
    //convert it to json
    let giphyJSON = await res.json();
    //grab just the url we want to display
    let giphySrc = giphyJSON.data[0].images.downsized.url;
    //set it as the src of our image
    spiritAnimalImg.src = giphySrc;
    //change the display from none to block so it shows
    spiritAnimalImg.style.display = 'block';

    //reset input
    inputName.value = "";
 }
