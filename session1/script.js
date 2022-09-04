// let a
// var x
// let a = 5
// while(true){
//     let a = 6
//     console.log(a); //6
//     if(a==6) break
// }
// console.log(a); //5


// var x = 5
// while(true){
//     var x = 6
//     console.log(x); //6
//     if(x==6) break
// }
// console.log(x); //6
// let a= 5
// var x = 6

// function f1(){
//     x = 3
//     a =4
//     console.log(x) //3
//     console.log(a) //4
// }

// f1()
// console.log(x) //3
// console.log(a) //5

// let a = 5
// a = 6
//break
// for(;;){}
// while(true){}

//prompt
// let x = prompt("x=")
/*
user input => 2
add
sub 
div
mul
*/

function userInput(msg="please add your value", returnType="String"){
    return returnType=="Number"? +prompt(msg) : prompt(msg)
}
function operation(operator, ...nums){
    if(nums.length<2) return "please add minmum 2 values"
    if(operator=="/" && nums.length>2) return "cann't divide"
    let result = nums[0]
    nums.forEach(function(n, i){ 
        if(i!=0){
            switch(operator){
                case '+': result += n; break;
                case '-': result -= n; break;
                case '*': result *= n; break;
                case '/': result = nums[0]/nums[1]; break;
                default : result= "invalid operator"; 
            }
        }
    } )
    return result
}
console.log(operation("9", 3,4,5))
// add, sub, mul
// let x = userInput(" x = ", "Number")
// let y = userInput(" y = ", "Number")
// let z = userInput()

// console.log(typeof x)
// console.log(typeof z)


















