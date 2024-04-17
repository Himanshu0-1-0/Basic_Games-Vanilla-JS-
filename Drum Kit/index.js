 let a = document.getElementsByClassName("drum");
 for(let x of a){
    x.addEventListener("click",()=>{
        if(x.classList.contains("w")){
            let a =new Audio("sounds/crash.mp3");
            a.play();
        }else if(x.classList.contains("a")){
            let a =new Audio("sounds/kick-bass.mp3");
            a.play();
        }else if(x.classList.contains("s")){
            let a =new Audio("sounds/snare.mp3");
            a.play();
        }else if(x.classList.contains("d")){
            let a =new Audio("sounds/tom-1.mp3");
            a.play();
        }else if(x.classList.contains("j")){
            let a =new Audio("sounds/tom-2.mp3");
            a.play();
        }else if(x.classList.contains("k")){
            let a =new Audio("sounds/tom-3.mp3");
            a.play();
        }else{
            let a =new Audio("sounds/tom-4.mp3");
            a.play();
        }
    })
 }

 for(let x of a){
    x.addEventListener("keypress",(e)=>{
        if(e.key=="w"){
            let a =new Audio("sounds/crash.mp3");
            a.play();
        }else if(e.key=="a"){
            let a =new Audio("sounds/kick-bass.mp3");
            a.play();
        }else if(e.key=="s"){
            let a =new Audio("sounds/snare.mp3");
            a.play();
        }else if(e.key=="d"){
            let a =new Audio("sounds/tom-1.mp3");
            a.play();
        }else if(e.key=="j"){
            let a =new Audio("sounds/tom-2.mp3");
            a.play();
        }else if(e.key=="k"){
            let a =new Audio("sounds/tom-3.mp3");
            a.play();
        }else if(e.key=="l"){
            let a =new Audio("sounds/tom-4.mp3");
            a.play();
        }
    })
 }

 


