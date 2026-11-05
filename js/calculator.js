function toScreen(buttonValue){
    screen=document.getElementById("display");
    screen.value += buttonValue;
}
function calculate(){
    if( screen.value === "" || screen.value === undefined ) {
        screen.value = "0";
    }
    else{
        screen.value = eval(screen.value);
    }
}


function remember(){
    memory = document.getElementById("memory"); 
    if(memory.value){
        toScreen(memory.value);
    }
    else if(screen.value != ''){
        memory.value = screen.value;
        screen.value = "";
    }
}


function clearScreen(){
    screen.value =""; 
}


function clearMemory(){
    memory.value = "";
}
function switchSign(){
    //screen.value = screen.value * -1;
    screen.value *=-1;
}
function toPercent(){
    if(screen.value){
        screen.value = screen.value / 100;
    }
}