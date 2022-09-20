// const x : number = 5
// let y :number
// // y= "marwa"


// function test(x:number, y: string):void{
//     // return "a"
// }

// test(5, "hello")

//oop

//class
//constructor
//read only
//access modifier
//getter and setter
//static
//inhertance
//interface
//abstract

// class Doctor{
//     //public private protected
//     private name:string 
//     age:number
//     email:string
//     spcialize:string

//     constructor(newName:string,  newEmail:string,newAge:number=21, newSpcialize:string = ""){
//         this.name = newName
//         this.age = newAge
//         this.email = newEmail
//         this.spcialize =newSpcialize
//     }

//     //getter
//     get _name():string { return this.name}
//     //setter
//     set _name(val:string){this.name=val}

//     show(){
//         console.log(`name: ${this.name} - age: ${this.age} - email : ${this.email} - spcialize: ${this.spcialize}`)
//     }
// }

// const d1 = new Doctor("nouran","nouran@doc.com")
// d1.show()
// d1._name="marwa"
// console.log(d1._name)


// class User{
//     static c = 0 
//     protected name: string
//     protected age:number
//     protected email:string
//     constructor(name:string, age:number, email:string){
//         User.c++
//         this.age=age
//         this.name=name
//         this.email=email
//     }
// }
// class Student extends User{
//     private className: string
//     constructor(name:string, age:number, email:string, className:string){
//         super(name, age, email)
//         this.className=className
//     }
// }
// class Teacher extends User{

// }

// const s1 = new Student("a", 10, "a@a.com","B")
// // s1.name
// User.c


// interface Size{
//     sizeName:string
//     quant: number
// }

// const s1 : Size = {
//     sizeName:"s",
//     quant:50
// }

// const a1 : number[] = []


/* student, user 

user=> name, age
        show user
        


student name, age, grades = [ { subName:"math", subGrade:12}, .....]
    show user
    add grades
    show grades    

 */

// interface Size{
    
//     sizeName: string

//     quan: number

//     x?:number
// }


// const s : Size = {
//     sizeName:"s",
//     quan:5
// }



// abstract class MyClass{

//     abstract getData(): string

// }

// // const m = new MyClass()

// class X extends MyClass{
//     getData():string{
//         return "hello"
//     }
// }


// class Y{

// }
// interface Size{
//     name:String
// }


// class X extends Y implements Size{
//     name: String = ""
// }


// class Parent{
//     show(){
//         console.log("parent")
//     }
// }


// class Child extends Parent{
//     show(){
//         console.log("child")
//     }
// }

// const c1 = new Child()
// c1.show()
// const c2 = new Parent()

// function show(obj:any){
//     obj.show()
// }

// show(c1)
// show(c2)

interface grade{
    subName: string
    subVal: number
}

class User{
    protected _name: string
    protected _age: number
    constructor(name:string, age:number){
        this._name=name
        this._age=age
    }

    get name(): string{ return this._name}
    get age(): number{ return this._age}
    set name(val:string) { this._name = val }
    set age(val:number) { this._age = val }

    showUser(){
        console.log(` ${this._name} - ${this._age} `)
    }
}
class Student extends User{
    private grades : grade[] 
    constructor(name:string, age:number, grades:grade[]=[]){
        super(name, age)
        this.grades=grades
    }
    addGrade(g:grade){
        this.grades.push(g)
    }
    showGrades(){
        console.log(this.grades)
    }
}

