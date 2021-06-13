var ul=document.getElementById("ul");
var btn = document.getElementById("start-btn");

function startGame(){
    btn.style.visibility = "hidden";
    
    if(btn.value === "again-start"){
        ul.innerHTML = "";
    }
    var gamestart=document.getElementById("game-start-text");
    gamestart.innerHTML="Game Started";

    var petrolpumps=[];
    do {
        const randomNumber = Math
            .floor(Math.random() * 100) + 1
      
        if (!petrolpumps.includes(randomNumber)) {
            petrolpumps.push(randomNumber);
        }
      
    } while (petrolpumps.length < 5);

    addLi( `Petrol pumps generated at ${petrolpumps.toString()}` );
    

    var position=0;
    var move=1;
    var petrolremining=30;
    
    do{
        var random=Math.floor((Math.random() * 6) + 1);
        
        position = position + random;
        petrolremining = petrolremining - random;
        if(petrolpumps.includes(position)){
            petrolremining = petrolremining + 20;
        }
        var output = `Move ${move} - Car at ${position}, petrol remaining ${petrolremining <= 0 ? '0' : petrolremining}`;

        addLi( output );
        move++;
    } while(position < 100 && petrolremining > 0);

    if(petrolremining > 0){
        addLi( 'reached' );
        againStartGame();
    } else {
        addLi( 'game over' );
        againStartGame();
    }
}

function addLi( text ){
    var li=document.createElement("li");
    var textNode=document.createTextNode(text)
    li.appendChild(textNode);
    ul.appendChild(li);
}

function againStartGame(){
    btn.innerHTML = "Again start game";
    btn.style.visibility = "visible";
    btn.value = "again-start";
}
