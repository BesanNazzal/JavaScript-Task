//Create a function that will display the smallest value in the array.
function findSmallest(array){
    let smallest=array[0]
    for(let i = 0 ; i <array.length ; i++ ){
        if(array[i]<smallest){
            smallest=array[i]
        }
    }
    return smallest
}

let array = [30 ,45 ,60 ,7]
console.log("The smallest value in array = " ,findSmallest(array));
 console.log("----------------------------------------------");
// Function that will return your string in Alphabetical order 
function alphabeticalOrder(string){
return string.split('').sort().join('')
}

let string = "hello"
console.log("The alphabeticalOrder of word hello  : ",alphabeticalOrder(string));
console.log("----------------------------------------------");
function factorial (n) {
    let fact=1
    for ( let i=1 ; i<=n ;i++){
        fact*=i
    }
    return fact ;
}

console.log("The factorial of number 8 = " ,factorial(8));
console.log("----------------------------------------------");
 
function EvenOdd (num) {
    if(num%2==0){
        return "The number"+num+ "Even"
    }
    else{
        return "The number "+num+ " Odd"
    }
}
console.log(EvenOdd(9));
console.log("----------------------------------------------");

function addUp(x){
    let sum = 0;
    for(let i=0 ; i<=x ; i++){
        sum+=i
    }
    return sum
}

console.log("The summation of all numbers from given number to 0 =  ", addUp(8));
console.log("----------------------------------------------");

function MinMaxLengthAverage(array){
    let newArray =[]
    let sortArray=array.sort((a, b) => a - b);
    newArray[0]=sortArray[0]
    newArray[1]=sortArray[sortArray.length-1]
    newArray[2]=sortArray.length
    let sum = 0 
    for(let i = 0 ; i<sortArray.length ; i++){
        sum+=sortArray[i]
    }
    newArray[3]=sum/sortArray.length
    return newArray

}
let array1=[7,13,3,77,100]
console.log( "the new array = ",MinMaxLengthAverage(array1));
console.log("----------------------------------------------");

function wordCount (str){
    let arr = str.split(" ")
    let sum = 0
    for(let i = 0 ; i< arr.length ; i++){
       sum++
    }
    return sum
}
let str = "Hello From CodingAcademy"
console.log(" The number of word in string : " ,wordCount(str));

console.log("----------------------------------------------");
 function arrayMultiply (arr) {
    for(let i=0 ; i< arr.length ; i++){
        arr[i]*=arr.length
    }
    return arr
 }
 let arr =[4,2,5]
 console.log("array after multiply element by its length  = " ,arrayMultiply(arr));
 console.log("----------------------------------------------");

 function stringEnds (str1,str2) {
    if(str1.endsWith(str2)){
        return true
    }
    else{
        return false 
    }
 }
 let str1 = "codingschool"
 let str2 = "Ac"
console.log(" The result of compare string 1 with string 2  : ",stringEnds(str1,str2) );
console.log("----------------------------------------------");

function repeat (string) {
    let string2 = ""
    for(let i = 0; i<string.length ; i++ ){
       string2+=string[i]+string[i]
    }
return string2
}
let string2 ="coding"
console.log("the string after repeate : " , repeat(string2));
console.log("----------------------------------------------");

function searchElkement (arr,element){
    for(let i=0 ; i<arr.length ; i++)
    {
        if (arr[i]==element)
            return i+1
    }
}
let namesArray = ["ali","mazen","ayham","murad"]
console.log("the location index in names array for ali : ", searchElkement(namesArray,"ali"));

