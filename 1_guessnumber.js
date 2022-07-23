let computerrandom;
let userguess=[];
let audio = new Audio('./music1.mp3')
const init = ()=>{
    // console.log(123);
    computerrandom = Math.floor(Math.random()*100);
    // console.log(computerrandom);
    document.getElementById("newgamearea").style.display="none";
    document.getElementById("gamearea").style.display="none";
};
// init();

const startgame=()=>{
    document.getElementById("gamearea").style.display="block";
    document.getElementById("welcome").style.display="none";
}

const newgamebegin = ()=>{
    audio.play();
    setInterval(() => {
        window.location.reload();
    }, 2000);
    
};
// logic of our app
const startnewgame = ()=>{
    usernumberupdate.setAttribute("disabled", true);
    document.getElementById("newgamearea").style.display="block";

}

const compareguess=()=>
{
    const usernumberupdate = document.getElementById("inputBox");
    const userguessupdate = document.getElementById("textoutput");
    const number=Number(document.getElementById('inputBox').value);
    console.log(number);
    userguess=[...userguess, number];

    document.getElementById('guess').innerHTML = userguess;
    console.log(computerrandom);
    console.log(userguess);
    // check the value low or high
    if(userguess.length<maxguess)
    {
        if(computerrandom<number)
        {
            userguessupdate.innerHTML = "Your guess is High😲"
            usernumberupdate.value="";
        }
        else    
        if(computerrandom>number){
            userguessupdate.innerHTML = "Your guess is low😛"
            usernumberupdate.value="";
        }
    else
        if(computerrandom=number)
    {
        userguessupdate.innerHTML = "it's correct😀"
        usernumberupdate.value="";
        startnewgame();
    }
}
else{
    if(computerrandom<number)
    {
        userguessupdate.innerHTML = `Your loose!! correct number was ${computerrandom}`;
        usernumberupdate.value="";
        startnewgame();
    }
    else    
    if(computerrandom>number){
        userguessupdate.innerHTML =  `Your loose!! correct number was ${computerrandom}`;
        usernumberupdate.value="";
        startnewgame();
    }
    else
        if(computerrandomnumber)
    {
        userguessupdate.innerHTML = "it's correct😀"
        usernumberupdate.value="";
        startnewgame();
    }
}
    document.getElementById('attempts').innerHTML=userguess.length;
};

const easymode=()=>{
    maxguess= 10;
    audio.play();
    startgame();
}

const hardmode=()=>{
    audio.play();
    maxguess= 5;
    startgame();
}