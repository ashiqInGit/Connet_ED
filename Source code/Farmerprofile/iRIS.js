window.onload=function(){
  const voice = document.querySelector(".voice");

const voicetotext=document.querySelector(".voicetotext");
 var city;
var ctemp;
var weatherType;
var h;
var windSpeed;
var con;

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition();;
const recorder = new SpeechRecognition();


function addHumanText(text){
  const chatContainer=document.createElement("div");
  chatContainer.classList.add("chat-container");
  const chatBox=document.createElement("p");
  chatBox.classList.add("voice2text");
  const chatText=document.createTextNode(text);
  chatBox.appendChild(chatText);
  chatContainer.appendChild(chatBox);
  return chatContainer;
}


function addBotText(text) {
  const chatContainer1 = document.createElement("div");
  chatContainer1.classList.add("chat-container");
  chatContainer1.classList.add("darker");
  const chatBox1 = document.createElement("p");
  chatBox1.classList.add("voice2text");
  const chatText1 = document.createTextNode(text);
  chatBox1.appendChild(chatText1);
  chatContainer1.appendChild(chatBox1);
  return chatContainer1;
}






function botVoice(message)
{
    const speech= new SpeechSynthesisUtterance();
  if(navigator.geolocation)
    {
      navigator.geolocation.getCurrentPosition(function(position){
         long=position.coords.longitude; 
         lat=position.coords.latitude;
       var api = "https://fcc-weather-api.glitch.me/api/current?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude;
       
  $.getJSON(api, function(data){
      city=data.name;
     h=data.main.humidity;
     weatherType=data.weather[0].description;
     ctemp=data.main.temp;
     windSpeed=data.wind.speed;
    con=data.sys.country;
    console.log(city);
    console.log(con);
  })
      })}
      speech.text="Sorry! I didn't get that.";
  if(message.includes("hello"))
    {
      speech.text="Hi!I'm iRIS Your Voice Assistant. How are you?";
    }
   if(message.includes("hai"))
    {
      speech.text="Hello! I'm iRIS Your Voice Assistant. how are you?";
    }
  if(message.includes('how are you')){
    speech.text="I am fine, thanks. How are you?";
  }
  if(message.includes('fine')){
    speech.text='Nice to hear that. Do you want to know your local weather report?';
  }
      if(message.includes('good')){
    speech.text='Nice to hear that. Do you want to know your local weather report?';
  }
       if(message.includes('yes'))
    {
      speech.text="Your Curent location is "+city+" and country is India.Here's your local report: Temperature is "+ctemp +" degree celcius. Weather type is "+weatherType +". Humidity is "+h+". Wind speed is "+windSpeed+"km/hr";
    }
  if(message.includes('weather'))
    {
     speech.text="Your Curent location is "+city+" and country is "+con+" Here's your local report: Temperature is "+ctemp +" degree celcius weather type is "+weatherType +" humidity is "+h+" wind speed is "+windSpeed+" km/hr";
    }
    if(message.includes('love'))
      {
        speech.text="Nice! I am very happy to hear that!";
      }
    if(message.includes("add item"))
      {
        speech.text=" You must seek the help of WALL-E";
      }
    if(message.includes("what should I do as a farmer"))
      {
        speech.text=" Kindly Sign up and then sign in to view your profile!";
      }  
     if(message.includes("what should I do as a consumer"))
      {
        speech.text="Kindly Sign up and then sign in to view your profile!";
      }    
       if(message.includes("what should i do in my profile page as a consumer"))
      {
        speech.text="You can provide your details Scroll down to view the organic veggies available search the farmers by saying the places with the help of Atom.Know your Farmer and text them with the help of WALL-E.";
      }  
       if(message.includes("who are you"))
      {
        speech.text=" I'm iRIS your BOT Assistant";
      }  
       if(message.includes("who is Wall E"))
      {
        speech.text="Your personal chat bot he will be around you very soon just take a tour";
      }  
       if(message.includes("who is atom"))
      {
        speech.text="Your personal voice bot he will be around you very soon just take a tour ";
      }   
      if(message.includes("virtual schematics"))
      {
        speech.text="Love to hear that from you";
      }  
      if(message.includes("who are virtual schematics"))
      {
        speech.text="They are the strong team pursuing BCA n KG college of Arts and Science";
      }  
       if(message.includes("thanks"))
      {
        speech.text="It's my pleasure!"
      }  
      if(message.includes("Thank you"))
      {
        speech.text="It's my pleasure!"
      }  
      if(message.includes("Thanks"))
      {
        speech.text="It's my pleasure!"
      }  
      if(message.includes("thank you"))
      {
        speech.text="It's my pleasure!"
      }  
    
  speech.volume=1;
  speech.rate=1;
  speech.pitch=1;
  window.speechSynthesis.speak(speech);
  var element=document.getElementById("container");
  element.appendChild(addBotText(speech.text));
}



recorder.onstart = ()=>{
  console.log('Voice is activated');
};
recorder.onresult=(event) => {
  const resultIndex=event.resultIndex;
  const transcript=event.results[resultIndex][0].transcript;
  var element = document.getElementById("container");
  element.appendChild(addHumanText(transcript));
  botVoice(transcript);
};
voice.addEventListener('click',()=>{
  recorder.start();
});


function myFunction() {
  var txt;
  var person = prompt("Please enter your product name:", "Potatoes");
  var price = prompt("Please enter the Price for 1 kg", "20");
  if (person == null || person == "") {
    txt = "";
  } else {
    txt = "Successfully you created your bot for storing your data";
  }
  document.getElementById("demo").innerHTML = txt;
}


}

  function openFunction(){
                    document.getElementById("menu").style.width="100%";
                         document.getElementById("mainbox").style.marginLeft="300px";
                          }
                  function closeFunction(){
                   document.getElementById("menu").style.width="0px";
                 document.getElementById("mainbox").style.marginLeft="0px";
                    document.getElementById("mainbox").innerHTML.style='background-image:url("Images/chat.png")';
               }

                var know = {
            "hello":"HI",
            "how are you?":"GOOD",
            
            "Could you contact Support Team":"YEAH SURE",
            "Can you store the list of my products":"YEAH SURE,THAT'S MY PLEASURE",
            "Share my list of Products":"Your products are<br/> 1.Mushroom<br/>2.Tomatoes<br/>3.Potatoes<br/>",
            "Who are you?":"I'm WALL-E,Your Personal ChatBot",
            "List out the price of my Products":"Tomato:10;<br/>Potatoes:8;<br/>Mushroom:25;<br/>Beans:25",
            "Can you contact with Alan":"Yeah!!Sure",
            "List out the Price of each Product of Alan":"Tomato:10;<br/>Potatoes:8;<br/>Mushroom:25;<br/>Beans:25",
            "Place Order of Tomatoes 2Kg":"Yeah Sure..Soon Alan will Contact you with the help of iRIS"

            // You Can Add More Stuff Here - It is customizable. - you can add more than 3 
        };
        function talk() {
             var user =document.getElementById("userBox") .value;           
             document.getElementById("chatLog").innerHTML +=user+"<br>";            
            if(user in know){
                document.getElementById("chatLog").innerHTML += know[user]+"<br>";
            } else{
                document.getElementById("chatLog").innerHTML+="I am not a genius , ask me something that I know!<br>";}}
	