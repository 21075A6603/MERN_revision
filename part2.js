console.log('advanced methods of the javascript:')
console.log('higher order functions:')
console.log('call back function')


console.log("----call back function----")
//function calling anothoer by sending parameter as the onother function
function test1(){
          return "test1 called"
}
function test2(a){
          console.log(a())
}

test2(test1)

console.log("this will be work on the arrys")
arr=[10,73,42,84,53,654,13,4,-2,-40]

let ans=arr.filter(value=>value>50)
console.log(ans)
let ans2=arr.filter(value=>value%3)
let reduseAns=arr.reduce((acc,ele)=>acc+ele)
console.log(reduseAns)

let changed=arr.map(ele=>ele+10)
console.log(changed)

arr.forEach((ele,ind)=>{
          console.log('valueat index',ind,ele)
})
//finding the biggents num in arr

let big=arr.reduce((acc,val)=>acc<val?acc:val)
console.log(big)

let res=arr.find(ele=>ele==53)
console.log(res)
let res2=arr.find(ele=>ele==-10)
console.log(res2)
let ind=arr.findIndex(ele=>ele==4)
console.log(ind)



a=[10,47,53,94,3,123,543,98]
//find
console.log(a.find(ele=>ele==47))
console.log(a.find(ele=>ele==1))
console.log(a.findIndex(ele=>ele==53))
console.log(a.findIndex(ele=>ele==98))
console.log(a.reduce((acc,ele)=>acc+ele))
console.log(a.filter(ele=>ele%2==0))
console.log(a.map(ele=>ele+100))


//objects:

std={}
console.log(typeof std)

std={
          nmae:'azar',
          clg:'vnr',
          branch:'cse'
}
console.log(std.nmae)
console.log(std.clg)
console.log(std['branch'])
std.grade='A'
std.pin=6603
console.log(std)
delete std.pin
console.log(std)






