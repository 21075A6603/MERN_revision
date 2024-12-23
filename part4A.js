//assyncronous java script: no blocing using the timer functions
//syncrinius: blovking taksing


console.log("this beforw function")

setTimeout(()=>{
          console.log('stmt1')},3000)
console.log('stmt2')


console.log('hotel scenario:')
console.log("cust-1 orders biryanii")
setTimeout(() => {
       console.log("received birani")   
}, 4000);
console.log('cust2 ordered the water bottel')
setTimeout(()=>{
          console.log("received water bottle")
},1000)
console.log("cust3 ordered the curd rice")
setTimeout(()=>{
          console.log('received curd rice:')
},3000)

//setInterval(()=>{
    //      console.log('2 sec completed:---->')1000//
//})////
console.log('intervel completed:')




