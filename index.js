//document.querySelector("button").addEventListener("click",handleIt);

function handleIt()
{
    var happen = this.innerHTML;   
    handleKey(happen);
}

for(var i=0;i<7;i++)
{
    document.querySelectorAll("button")[i].addEventListener("click",handleIt);
}


function handleKey(key)
{
    switch(key)
    {
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case "j":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case "k":
            var kic = new Audio('sounds/crash.mp3');
            kic.play();
            break;
        case "l":
            var car = new Audio('sounds/kick-bass.mp3');
            car.play();
            break;
        default: console.log(key);

    }
}

document.addEventListener("keydown",function(event){
    handleKey(event.key);
});
