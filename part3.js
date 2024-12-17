console.log('objects literals and complex objetcs:')
std1={
          name:'azar',
          clg:'vnr',
          skills:['python','machine Learning'],
          address:{
                    street:'kdpt',
                    pin:500043,
                    city:'hyd'
          },
          getInfo:function(){
                    console.log('tis funciton is at the inside the object')
                    console.log('street of the studetn is:',address.street)
          }
}
console.log(std1)
console.log(std1.getInfo)

console.log("here define for constructor:")


function Employee(name,street,role,skills){
          this.name=name,
          this.street=street,
          this.role=role,
          this.skills=skills
}
       Employee.prototype.getInfo=function()   {
          console.log("name of the employee:",this.name)
       }
       Employee.prototype.getLocation=function(){
          console.log('conpamy location:',this.street.pin)
       }


let obj1=new Employee('azar',{loc:'hyd',pin:'50043',cel:857878},'associtae software engineer',['prob solve','java','testing'])
console.log(obj1)
console.log('calling the method of the employee:',obj1.getInfo)
console.log("area of the employement:",obj1.getLocation)

let obj2=new Employee('ameer','hyd','machine design',['cad','mchanics'])

console.log(obj2)
console.log(obj2.getInfo)
console.log(obj2.getLocation)


class students{
          //this is calleda utomatically when a new object is cretaed:
          constructor(roll,branch,grade){
                    this.roll=roll,
                    this.branch=branch,
                    this,grade=grade
          }
          getBranch(){
                    return this.branch
          }
}
let obj3=new students(123,'cse','A')
console.log(obj3)


class Emp{
          constructor(name,basic,loaction){
                    this.name=name,
                    this.basic=basic,
                    this.loaction=loaction
          }
          getsalary(){
                    let salary=this.basic*0.5*0.15;
                    return salary
          }
}
let emp=new Emp('azar',50000,'hyd')
console.log(emp.getsalary())