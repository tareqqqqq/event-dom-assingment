document.getElementById('heart').addEventListener('click', function(){
     const heartValue=document.getElementById('heartValue').innerText

    const heartConverter=Number(heartValue)+ Number(1)
    
    document.getElementById('heartValue').innerText=heartConverter
})

document.getElementById('call-btn').addEventListener('click', function(){
    const localTime= new Date().toLocaleString();
    
    const valueDefault=parseInt(document.getElementById('valueDefault').innerText)

    if(valueDefault>Number(20)){
        alert('Fire service Number and number 999')
    }
    if(valueDefault>Number(20)){
       
        let newValue=valueDefault- Number(20)
    document.getElementById('valueDefault').innerText=newValue
    }else{
         alert('You have no enough Coin')
        
  }

  const historyContainer=document.getElementById('history-container')

  const div=document.createElement('div')
  div.innerHTML=` <div class="bg-[#fafafa] mt-3 flex justify-between items-center p-5">
<div class="">
    <h1 class="text-[20px] font-bold">Fire Service number</h1>
<p class="text-[18px] font-medium">999</p>
</div>
<p class="text-[20px font-bold">${localTime}</p>

                </div> `

  historyContainer.appendChild(div)
    


})

document.getElementById('clear').addEventListener('click', function(){
    const historyContainer=document.getElementById('history-container')

    historyContainer.innerText=''
})

document.getElementById('copy-btn').addEventListener('click', function(){
    alert('you have added one count')

     const copyCount=document.getElementById('copy-count').innerText

    const copyConverter=Number(copyCount)+ Number(1)
    
    document.getElementById('copy-count').innerText=copyConverter

    const text =document.getElementById('text').innerText

    
         navigator.clipboard.writeText(text)
            alert('Text copied to clipboard!');
        


})