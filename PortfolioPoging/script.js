console.log("hello")

var TotoElement = document.querySelector("img")
var EatElement = document.querySelector(".eat")
var DanceElement = document.querySelector(".dance")
var TrainElement = document.querySelector(".train")
var ExpElement = document.querySelector(".exp")
var HealthElement = document.querySelector(".health")
var ValueElement = 100
var ValueExpElement = 0
var HealthDown = setInterval(HealthOmlaag, 6000);
var LabelElement = document.querySelector("label")
var LabelExpElement = document.querySelector(".explabel")
var CongratsElement = document.querySelector("h2")
var ReviveElement = document.querySelector(".revive")
var TotoFoto = ["images/Totodile-Eating-His-Dinner-On-Pokemon-Gif.gif", "images/totodile_dancing.gif", "images/totodile_training.gif", "images/toto_idle.gif", "images/evolving.gif", "images/feraligatr_gif.gif", "images/TotoFainted.png"];

function TotoEten(){
    console.log("etuhhh")
    TotoElement.src = TotoFoto[0]
    setTimeout(function(){
        TotoElement.src = TotoFoto[3];
      }, 2000);
      if (ValueElement <= 90){HealthOmhoog();}
}

function TotoDansen(){
    console.log("dansuhh")
    TotoElement.src = TotoFoto[1]
    setTimeout(function(){
        TotoElement.src = TotoFoto[3];
      }, 2000);
      if (ValueElement <= 90){HealthOmhoog();}
}

function TotoTrainen(){
    console.log("trainuhhh")
    TotoElement.src = TotoFoto[2]
    setTimeout(function(){
        TotoElement.src = TotoFoto[3];
      }, 2000); 
      ExpOmhoog()
      if (ValueExpElement >= 91){Evolutie(); }
}
 


function HealthOmlaag(){
    console.log("omlaag")
    if (ValueElement == 10){GameOver();}
    else {(ValueElement = ValueElement - 10);}
    HealthElement.value = ValueElement
}



function HealthOmhoog(){
    console.log("omhooogg")
    ValueElement = ValueElement + 10;
    HealthElement.value = ValueElement;
    
}


function ExpOmhoog(){
    console.log("omhoog")
    ValueExpElement = ValueExpElement + 10;
    ExpElement.value = ValueExpElement
    
}

function Evolutie(){
    console.log("evooooo")
    
    setTimeout(function(){
        TotoElement.src = TotoFoto[4];
      }, 2000); 
    
    feraligatr()
}


function feraligatr(){
    setTimeout(function(){
        TotoElement.src = TotoFoto[5], 
        CongratsElement.textContent = "Congratulations you won!!";
      }, 5000);
      TrainElement.remove()
    DanceElement.remove()
    EatElement.remove()
    ExpElement.remove()
    HealthElement.remove()
    LabelElement.remove()
    LabelExpElement.remove()
    clearInterval(HealthDown);
    ReviveElement.textContent = "play again?";
    CongratsMessage()
}

function CongratsMessage(){
    setTimeout(function(){
        alert("Your Totodile evolved into a Feraligatr"), ReviveElement.classList.add("appear");
      }, 6000);
    }


function GameOver(){
    TotoElement.src = TotoFoto[6]
    TrainElement.remove()
    DanceElement.remove()
    EatElement.remove()
    ExpElement.remove()
    LabelExpElement.remove()
    clearInterval(HealthDown);
    (ValueElement = 0)
    CongratsElement.textContent = "Sadly your Totodile fainted but you can try again";
    ReviveElement.classList.add("appear");
    DeathMessage()

}

function DeathMessage(){
    setTimeout(function(){
        alert("Your Totodile has fainted");
      }, 1000);
    
}

function Refresh(){
    location.reload();
}


EatElement.addEventListener("click",TotoEten)
DanceElement.addEventListener("click",TotoDansen)
TrainElement.addEventListener("click",TotoTrainen)
ReviveElement.addEventListener("click",Refresh)


//https://aminoapps.com/c/pokemon/page/item/totodile/Rzhv_ILQQqpG1wm2k1bWoM1eWenb1B link van eerste gif//
//https://tumblrgallery.xyz/tumblrblog/gallery/439311/2.html Feraligatr gif//
//https://nl.pinterest.com/pin/176555247866460522/ totodile eten gif//
//https://tenor.com/search/totodile-gifs Totodile dansen gif//
//https://gifer.com/en/9DPj totodile training gif//
//https://www.reddit.com/r/pokemon/comments/1zmcbs/gif_oc_i_animated_a_totodile_evolution_gif/ evolueren gif//
//https://www.deviantart.com/mysteriousmanm788/art/Fainted-Totodile-681113571 fainted//
