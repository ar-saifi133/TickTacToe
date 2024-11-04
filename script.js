let boxes=document.querySelectorAll(".box");
let reset_btn=document.querySelector(".reset");
let new_btn=document.querySelector(".new");
let winner=document.querySelector(".winner");
let main= document.querySelector("#main");
let win=document.querySelector("#win");
let count=0;
const winner_Pattern=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
let turn0=true;

let showWinner=()=>{
    for(pattern of winner_Pattern){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
       let pos3=boxes[pattern[2]].innerText;
                if(pos1!="" && pos2 !="" && pos3 !=""){
            if(pos1===pos2&& pos2===pos3){
               win.innerText= `THE WINNER IS ${pos1}  `;
                winner.classList.remove("hidden");
                main.classList.add("hidden");
            }
            // else if(count>=9){
            // win.innerText= `THE GAME IS DRAW`;
            // winner.classList.remove("hidden");
            //     main.classList.add("hidden");
        //}
    }
    }
}

boxes.forEach((box)=>{
    box.addEventListener("click" ,()=> {
        if(turn0){
           
            box.innerText="O";
            turn0=false;
    
        }
        else{
          
            box.innerText="X";
            turn0=true;
        }  
        box.disabled=true;
        count++
        showWinner();
       
    })
})

reset_btn.addEventListener("click", ()=>{
    turn0=true;
    boxes.forEach((box)=>{
        box.innerText="";
        box.disabled=false
    })

})
new_btn.addEventListener("click",()=>{
    turn0=true;
    boxes.forEach((box)=>{
        box.innerText="";
        box.disabled=false
    })
    winner.classList.add("hidden");
    main.classList.remove("hidden");
}) 


