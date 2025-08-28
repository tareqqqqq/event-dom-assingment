const heartBtns = document.getElementsByClassName("heart");
for (const heartBtn of heartBtns){

heartBtn.addEventListener('click', function(){

   
    const heartValue=document.getElementById('heartValue').innerText

    const heartConverter=Number(heartValue)+ Number(1)
    
    document.getElementById('heartValue').innerText=heartConverter

})

}  


const callBtns = document.getElementsByClassName("call-btn");
for (const callBtn of callBtns){

callBtn.addEventListener('click', function(e){

    // const h1=e.target.parentNode.parentNode.childNodes[3].querySelector("h1").innerText
    const h1=e.target.parentNode.parentNode.querySelector('.heading-h1').querySelector("h1").innerText
   
    const h2=e.target.parentNode.parentNode.querySelector('.heading-h2').querySelector("h2").innerText
    
const localTime= new Date().toLocaleString();
    
    const valueDefault=parseInt(document.getElementById('valueDefault').innerText)

    if(valueDefault>Number(20)){
        alert(h1+ " "+h2)
    }
    if(valueDefault<Number(20)){
        alert('You have no enough Coin')
    }else{
        let newValue=valueDefault- Number(20)
    document.getElementById('valueDefault').innerText=newValue


    const historyContainer=document.getElementById('history-container')

  const div=document.createElement('div')
  div.innerHTML=` <div class="bg-[#fafafa] mt-3 flex justify-between items-center p-5 box-shadow">
<div class="">
    <h1 class="text-[20px] font-bold">${h1}</h1>
<p class="text-[18px] font-medium">${h2}</p>
</div>
<p class="text-[20px font-bold">${localTime}</p>

                </div> `

  historyContainer.appendChild(div)
    
  }

  




})
}


// clear

document.getElementById('clear').addEventListener('click', function(){
    const historyContainer=document.getElementById('history-container')

    historyContainer.innerText=''
})


// copy 


const copyBtns = document.getElementsByClassName("copy-btn");
for (const copyBtn of copyBtns){

copyBtn.addEventListener('click', function(e){
  

    alert('you have added one count')

     const copyCount=document.getElementById('copy-count').innerText

    const copyConverter=Number(copyCount)+ Number(1)
    
    document.getElementById('copy-count').innerText=copyConverter

    // const text =document.getElementById('text').innerText
const text=e.target.parentNode.parentNode.querySelector('.heading-h2').querySelector("h2").innerText
    
         navigator.clipboard.writeText(text)
            alert('Text copied to clipboard!');
        



})
}



