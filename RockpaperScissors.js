let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");

let yourscore = document.querySelector("#Myscore");
let compscore = document.querySelector("#cscore");

let userscore=0;
let cscore=0;

yourscore.innerText=0;
compscore.innerText=0;

let cchoice = (num)=>{
    if(num==1){
        return "rock";
    }else if(num==2){
        return "hand"
    }else{
        return "scissors"
    }
}

let result = document.querySelector("h2");
//num=1 ->rock , num=2-> hand , num=3-> scissors

let randomNum = ()=>{
    return Math.floor(Math.random()*3) +1;
}

btn1.addEventListener("click",()=>{  //rock
    let num= randomNum();
    let c = cchoice(num);
    if(num==1){
        result.innerText = `Game Draws \nComputer Choice: ${c}`;
    }else if(num==2){
        result.innerText = `Computer wins \nComputer Choice: ${c} `;
        cscore++;
        compscore.innerText=cscore;
    }else{
        result.innerText = `You win \nComputer Choice: ${c}`;
        userscore++;
        yourscore.innerText=userscore
    }
})

btn2.addEventListener("click",()=>{ //hand
    let num= randomNum();
    let c = cchoice(num);
    if(num==1){
        result.innerText = `You win \nComputer Choice: ${c}`;
        userscore++;
        yourscore.innerText=userscore;
    }else if(num==2){
        result.innerText = `Game Draws \nComputer Choice: ${c}`;
    }else{
        result.innerText = `Computer wins \nComputer Choice: ${c}`;
        cscore++;
        compscore.innerText=cscore;
    }
})

btn3.addEventListener("click",()=>{ //scissors
    let num= randomNum();
    let c = cchoice(num);
    if(num==1){
        result.innerText = `Computer wins \nComputer Choice: ${c}`;
        cscore++;
        compscore.innerText=cscore;
    }else if(num==2){
        result.innerText = `You win \nComputer Choice: ${c}`;
        userscore++;
        yourscore.innerText=userscore;
    }else{
        result.innerText = `Game Draws \nComputer Choice: ${c}`;
    }
})