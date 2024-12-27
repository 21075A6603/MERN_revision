console.log('well come java script')
let x=10
var y=20
const z=30
console.log('x value',x)
console.log('y value',y)
console.log('z value',z)

x=40
console.log('x values changed:',x)
y=50
console.log('y value changed:',y)
// z=70
console.log('z value changed raised error bcz err:',z)
//functions
console.log('------------functions-----------')

//3 types of functions
//type one

function getFeild(x,y){
          return x+y
}
//type 2
var s=function(p,q){return  p*q}

console.log(s(10,20))
//type 3
var res=(x,y)=>{return x+y }

console.log(res(10,20))

console.log('-----------for loop---------')
let p=[10,20,30,40,50,60,770,8]
console.log('size of an array:',p.length)
for(var i=0;i<p.length;i++){
          console.log(p[i])
}
console.log('---for of loop---')
for(var v of p){
          console.log(v)
}


console.log('checking type of array:->',typeof p)

console.log('operation of the arrays:')
console.log('inserting elements')

p.push(111,222)
console.log(p)

//inserting values at 2nd position without deleting any value
p.splice(2,0,44)
console.log(p)

//inserting at 6th index bydeleting 3 values
p.splice(6,3,666,777,888)
console.log(p)

//inserting at beginning:

p.unshift(1,2,3)
console.log('after inserting elements at beggining:',p)

//inserting at eng of the array:
p.push(98,78,68)
console.log('array after inserting at ened of an array:',p)


//deleting at front of an array:
console.log('deleting only one value at front:',p.shift())
console.log(p)
//last element removed:
let popedEle=p.pop()
console.log('ele delted from last of the array:',popedEle)

//removing elements from middle or desired index:
p.splice(0,3)
console.log('arr after deleting the 3 elements from front',p)

p.splice(5,1)
console.log(p)


// comparision and assignment operator:
let a=20
let b='20'
console.log('type of a',typeof a)
console.log('type of b',typeof b)

console.log('comparing with == operators:(called equal)',a==b)
console.log('comparing with === operators:(called strict equal)',a===b)

//callback function-->a function can send another funciton as a argument to another funciton:


console.log('--------call back function-------')
function test1(){
          console.log("test1 called")
}
function test2(a){
          console.log(a)
}

test2(test1)


console.log('--------highorder function--------')
let arr=[3465,432,7689,8574,567,567325,789,68,657]

let eleFiltered=arr.filter(ele=>ele>1000)
console.log('elements filtered',eleFiltered)

let eleReduced=arr.reduce((acc,ele)=>acc+ele)
console.log('elements reduced',eleReduced)

let eleMapped=arr.map(ele=>ele+10)
console.log('elements mapping:',eleMapped)


console.log('finding particular (68) values using find method:',arr.find(ele=>ele==68))

let ind=arr.findIndex(ele=>ele==68)
console.log('return index values of the 68:',ind)

arr.forEach((ele,ind)=>{
          console.log('ele',ele,'ind',ind)
})

console.log('---------------object literals----------')

let student={
          name:'azar',
          code:6603,
          city:'hyd',
          pin:'506352',
          location:{
                    street:'gandi',
                    hostel:'jeevan',
                    room:203
          }
}

console.log('accesing the elemtns form the stduent object:')
console.log(student.name)
console.log(student.code)
console.log(student.city)
console.log(student.pin)
console.log(student.location)
console.log(student.location.street)
console.log(student.location.room)
console.log(student.location.hostel)

console.log('adding record to the objects:')
student['branch']='AIML'
console.log(student)
student['grade']='B'
console.log(student.grade)

student.pin=500047
console.log(student.pin)

console.log(student)

console.log('funcition in the object literal')

let std={
          name:'amir',
          roll:104,
          skill:['c','c++','python'],
          loc:{
                    street:'jntuh',
                    hostel:'gouthami',
                    room:104
          },
          getInfo:function(){
                    return this.name

          }
}
console.log('name of the studnet:',std.getInfo())

//constructor function takes the paramenters to initialize the variables:

function Emp(name,clg,branch){
          this.name=name
          this.clg=clg
          this.branch=branch
}

Emp.prototype.getInfo=function(){
          console.log(name)
          console.log(clg)
          console.log(branch)
}

let obj1=new Emp('azar','vnr','cseAIML')
obj1.getInfo()
