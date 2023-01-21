const numberEl= document.getElementById('number')
const messageEl= document.getElementById('message')
const labelEl = document.getElementById('label-score')
const scoreEl = document.getElementById('high-score')
const btncheck= document.getElementById('btn')
const btnagain= document.getElementById('btn-again')




let score = 10;
let compnumber = Math.trunc(Math.random()*99);
const highscore = 0;
const init = function(){
    labelEl.innerText=score;
    scoreEl.innerText=highscore;
    
}

console.log(compnumber)





btncheck.addEventListener('click', ()=>{
    let guess =Number( numberEl.value);
    if (score>1) {
        if (!guess || guess<0) {
            messageEl.style.color=('#FF0000');
            messageEl.innerText= 'enter a valid input'
            numberEl.value=null
        }else{
            if (guess === compnumber ) {
                messageEl.style.color=('#ffff');
                messageEl.innerText='you won'
            
                numberEl.value=null
                labelEl.innerText=score;
                
                
                
            }
            else if (guess > compnumber){
                messageEl.style.color=('#FFfff');
                messageEl.innerText='high'
                score= score-1;
                labelEl.innerText=score;
                numberEl.value=null
                messageEl.value=null
            }
            else if(guess<compnumber){
                messageEl.style.color=('#fffff');
                messageEl.innerText='low'
                score= score-1;
                labelEl.innerText=score;
                numberEl.value=null
                messageEl.value=null
            }
        }
    }else{
        messageEl.style.color=('#Fffff');
            messageEl.innerText= 'try again'
            numberEl.value=null
    }})

    btnagain.addEventListener('click',()=>{
        labelEl.innerText=10;
     compnumber = Math.trunc(Math.random()*11);
        messageEl.innerText= 'play again'
    })
init()