console.log("hello azar")
var a
console.log("variable of a is:",a)
a=20
console.log("varaible of  a is dicalred:",a)

a=30
console.log("variable of a is changed:",a)

const b=10

console.log('this is the constant varaible:',b)

//checkig for the type of the variable

var x=10
var y='azar'
var z='123'
var p='a'
var q=a
var r='@azar'
var s='@#$'


console.log('data type of the particular variable:')
console.log(typeof x)
console.log(typeof y)
console.log(typeof z)
console.log(typeof p)
console.log(typeof q)
console.log(typeof r)
console.log(typeof s)

console.log('functions')
console.log("_________")
console.log('type one basic:')
function checking(x , y){
          return x+y
}
var result=checking(10,20)
console.log('result of the function:',result)

var res=function(x,y){
          return x**y
}
console.log('result of the fucntion type2:',res(10,5))

var res=(x,y)=>{
          x+=x
          y+=y
          x=x+y
          return x
}
var ans=res(100,200)
console.log('finel ans of the operation using type 3 functions:',ans)

//control statements:

var p=10

for(var x=0;x<=p;x++){
          console.log(p,'',x,'=',p*x)
}

if(10>20){
          console.log('compsarision operator:',true)

}
else{
          console.log(false)
}

10>9?console.log(true):console.log(false)



 var arr=[10,20,30,40,50,60]
 for(var i=0;i<arr.length;i++)
 {
          console.log(i,"value: ",arr[i])
 }
 console.log("accesssing direct values of array:")
 for(var x of arr){
          console.log(x)
 }
 console.log(typeof arr)
 console.log("array operations:")
 console.log('iseriting at front:')
 arr.unshift(100,200)
 for(var x of arr){
          console.log(x)
 }
 console.log('inserting at end:')
 arr.push(1,2,3)
 for(var x of arr){
          console.log(x)
 }

 console.log("inserting at desired location of the array:")
 arr.splice(3,2,234)
 for(var x of arr){
          console.log(x)
 }

 console.log('deletion operaions from the arry:')
 console.log("delete form the front of the aray:")
 //only one of the element will be removed from the array dicalred
 arr.shift()
 for(var x of arr){
          console.log(x)
 }

console.log('delete from the end of the array')
var poped=arr.pop()
for(var x of arr)
{
          console.log(x)
}
console.log('delted value form the array:',poped)

console.log('remove elemetns from the required index of the array:')
arr.splice(1,2)
console.log('index 0 and 1 had been remved from the array:',arr)








