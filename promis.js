// console.log('hey hai this jscript')

// console.log("cust1 ordered biryani:")
// setTimeout(()=>{
//           console.log("customer-1 received biryani")

// },4000)
// console.log("cust-2 orderes the curd:")
// setTimeout(()=>{
//           console.log("cust-2 received the curd")
// },2000)
// console.log("sut-3 ordered the water bottle:")
// setTimeout(()=>{
//           console.log("cust-3 received the water bottle")
// },1000)

let iamBusy=true;
let callProm= new Promise((fullfull,reject)=>{
          if(iamBusy==true){
                    setTimeout(()=>{
fullfull('iam free you can call me')
                    },100)
          }
          else{
                    setInterval(()=>{
                              reject('iam lite busy we can talk later')
                    })
          }

})
console.log(callProm)

let proposal=true
let love= new Promise((accept,reject)=>{
          if(proposal==false){
                    reject('sorry...')
          }
          else{
                    accept('i love you tooo')
          }
})
console.log(love)

//consumin gthe pormise
//syntax-------->promObject.then().catch()
//then() mehtos is called when promise is fulfilled
//catch () [for catching errors] medthod is called when the promise is rejected
let movie=false
let gngForMovie=new Promise((attending,missing)=>{
          if(movie==true){
                    attending("yahooo iam comming for movie")
          }
          else{
                    missing('i have some work at home')
          }
})
console.log(gngForMovie)

gngForMovie.then((msg)=>{
          console.log("response to other side:",msg)

}).catch((error)=>{
          console.log("message to other side:",error)

})

let tour=true

let tourPlanning=new Promise((success,failed)=>{
          if(tour==true){
                    console.log('yes we are ready to go tour let us select the places')

          }
          else{
                    console.log('my parents are not accepting beacuse of financial prooblem')
          }

})
console.log(tourPlanning)
tourPlanning.then((msg)=>{
          console.log('message to friends:',msg)
}).catch((msg)=>{
          console.log("message to frineds:",msg)
})




