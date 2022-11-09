function shake(){

    let hat= document.getElementById("hat")
    let messageText = document.getElementById("message")
 
    //remove prev message
    if(messageText != null){
     messageText.parentNode.removeChild(messageText);
    }
    
    //css animation
    hat.classList.add("shake");
 
    //remove shake class
    setTimeout(function(){ hat.classList.remove("shake"); }, 1500);
    
    //call the getName function
    setTimeout(function(){ getName(); }, 1500);
 }
 
 
 //generate randomized drawing of a name
 function getName(){
     //array of names
     let names = ['Hunter Andersen', 'Harrison Fangmeier', 'Seth Bowman', 'Tyson Lind', 'Luis Cazares', 'Elizabeth Kennedy', 'Jason Thomas', 'Aiyana Urbina-Hudson', 'Colin Kyger', 'Reece Martin', 'Luke Schuering', 
    'Alex Minnelli', 'Denis Pugliese', 'Luke Dixon', 'Joshua Paul', 'Thomas Williams', 
    'Hasheem Reddick', 'Sofia Abbas', 'Darian Southerland']
 
     //get a random name
     let name = names[Math.floor(Math.random()*names.length)];
 
     //display the name
     let parent = document.getElementById("name");
     let newMessage = document.createElement("div");
     newMessage.setAttribute('id', "message");
     newMessage.innerHTML = "\""+name+"\"";
     parent.appendChild(newMessage);

 }

 
