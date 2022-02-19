const adviceText = document.querySelector(".advice"),
adviceIdText = document.querySelector(".adviceId"),
newAdviceBtn= document.querySelector(".button")

function randomQuote(){
  
    fetch("	https://api.adviceslip.com/advice").then(res => res.json()).then(result =>{
        adviceIdText.innerText = result.slip.id;
        adviceText.innerText =`"${result.slip.advice}"`;
        
    })
}

window.onload = ()=>{
    randomQuote();
}
newAdviceBtn.addEventListener("click", randomQuote);