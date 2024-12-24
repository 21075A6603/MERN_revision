let ip1=document.querySelector("#ip1")
let ip2=document.querySelector("#ip2")
let addbtn=document.querySelector('#addbtn')
let subbtn=document.querySelector("#subbtn")
let mulbtn=document.querySelector("#mulbtn")
let divbtn=document.querySelector("#divbtn")
let sqrbtn=document.querySelector('#sqrbtn')
let modbtn=document.querySelector('#modbtn')
let result=document.querySelector('#res')


addbtn.addEventListener(('click'),()=>{
          let v1=ip1.value
          let v2=ip2.value
          let sum=(+v1)+(+v2)
          result.textContent=sum
          console.log(sum)
})
subbtn.addEventListener(('click'),()=>{
          let v1=ip1.value
          let v2=ip2.value
          let sum=(+v1)-(+v2)
          result.textContent=sum
})
mulbtn.addEventListener(('click'),()=>{

          let v1=ip1.value
          let v2=ip2.value
          let sum=(+v1)*(+v2)
          result.textContent=sum
})
divbtn.addEventListener(('click'),()=>{
          let v1=ip1.value
          let v2=ip2.value
          let sum=(+v1)/(+v2)
          result.textContent=sum
})
sqrbtn.addEventListener(('click'),()=>{
          let v1=ip1.value
          let v2=ip2.value
          let sum=(+v1)**(+v2)
          result.textContent=sum
})
modbtn.addEventListener(('click'),()=>{
          let v1=ip1.value
          let v2=ip2.value
          let sum=(+v1) % (+v2)
          console.log(sum)
          
          result.textContent=sum
          
})



let even=document.querySelector('#even')
let evendefi=document.querySelector('#evendefi')
let evenip=document.querySelector('#evenip')
let evenres=document.querySelector('#evenres')
let evensubmit=document.querySelector('#evensubmit')

even.addEventListener(('click'),()=>{
          console.log('even heading is clicked')
          evendefi.textContent='the number wich is divible by 2 is called even numbers'
          evendefi.style.color='blue'
})

evensubmit.addEventListener(('click'),()=>{
          console.log("evencheck is clicked:")
          let x=evenip.value
          if((+x)%2==0){
                    evenres.textContent='given num is even'
          }
          else{
                    evenres.textContent="odd num, not div by 2"
          }
         
})







