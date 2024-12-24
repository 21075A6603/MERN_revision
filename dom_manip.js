console.log("dom manipulation ")
console.log('accessing elements')
let h1=document.getElementById("first")
console.log(h1)
let paragraph=document.getElementById("para")
console.log(paragraph)


// this is to get the element
let parag=document.querySelector('p')
console.log(parag)
//this is to get the class
let heading=document.querySelector('.heading')
console.log(heading)
//this is to get the id
let base=document.querySelector('#base')
console.log(base)


let btn=document.querySelector("button")
console.log(btn)

btn.addEventListener(('click'),()=>{
          console.log("button is clicked")
          //content manipulation
          h1.textContent="welcome DOM"
          //style manipulation
          h1.style.color="pink"
          h1.style.backgroundColor="black"
          //remove elements using remove method
          parag.remove()
})
base.addEventListener(('click'),()=>{
          console.log("base is clicked")
          base.style.color="green"

})
let ip=document.querySelector('#ip')
let btn2=document.querySelector(".btn2")
console.log(btn2)

btn2.addEventListener(('click'),()=>{
console.log(ip.value)
})

//calsi

let ip1=document.querySelector('#ip1')
let ip2=document.querySelector('#ip2')
let addbtn=document.querySelector('.addbtn')
let res=document.querySelector('.result')

addbtn.addEventListener(('click'),()=>{
          let one=ip1.value
          let two=ip2.value
          let sum=(+one)+(+two)
          res.textContent=sum
          console.log("sum of two numbers:",sum)
})
let num=document.querySelector('#calsi')
let nums=[10,20,30,40,83,484,9874,90874,897]

for(let x of nums){
          let h1=document.createElement("num")
          h1.textContent=x
          num.appendChild(h1)
}



