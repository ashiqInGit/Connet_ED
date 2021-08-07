const hamberger=document.querySelector('.nav-cont');
const navyBar=document.querySelector('.navy');
const singInBtn=document.querySelector('.signUp-butn');
const line1=document.querySelector('.ln1');
const line2=document.querySelector('.ln2');
const line3=document.querySelector('.ln3');

const botImg=document.querySelector('.bot-iris');

hamberger.addEventListener('click',()=>{

    navyBar.classList.toggle('show');

    singInBtn.classList.toggle('pull-down');

    line1.classList.toggle('ln-1');
    line2.classList.toggle('ln-2');
    line3.classList.toggle('ln-3');
    
    botImg.classList.toggle('pull-iris');

});

const signInBtn=document.querySelector('.signUp-butn');
const screenCover=document.querySelector('.overlay');
const popUpDude=document.querySelector('.popUp-cont');

singInBtn.addEventListener('click',popUp);

function popUp(){

    screenCover.classList.toggle('active-overlay');
    popUpDude.classList.toggle('active-popUp');

    singInBtn.classList.toggle('pull-little');
}

const closeBtn =document.querySelector('.close');

closeBtn.addEventListener('click',closeThings);

function closeThings(){

    screenCover.classList.add('close-overlay');
    popUpDude.classList.add('close-popUp');
    document.location.reload();

}



var botText1=document.querySelector('.readit1');
var botText2=document.querySelector('.readit2');

var voiveBotText=botText1.innerText;
var chatBotText=botText2.innerText;

// console.log(voiveBotText);
// console.log(chatBotText);

const bttn1=document.getElementById('btnbtn1');
const bttn2=document.getElementById('btnbtn2');



bttn1.addEventListener('click',()=>{
    

    setTimeout(readThis,700,voiveBotText);


})

bttn2.addEventListener('click',()=>{
    
    setTimeout(readThis,700,chatBotText);

    
})


 
function readThis(msg){
    const speech=new SpeechSynthesisUtterance();
    speech.text=msg;
    speech.rate=0.7;
    window.speechSynthesis.speak(speech);
}




// kgdfkdzjfckjdzshfjk



