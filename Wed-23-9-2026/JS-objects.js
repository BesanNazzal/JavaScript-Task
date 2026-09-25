console.log("---------------Question one--------------");
const Info = {
    name : "Adam",
    age  :  25,
   gender:  "male"
}
console.log("the personal information : ", Info);

console.log("---------------Question two--------------");
const addInfo ={
    name : "Besan",
    age  : 21,
}
console.log("The object befor add new key&value : ", addInfo);

addInfo.gender = "Female "
console.log("The object after add new key&value : ", addInfo);

console.log("---------------Question three--------------");
console.log(" the name of user : ", addInfo.name);

console.log("---------------Question four--------------");
 const numberArray = [1,2,3,4,5]
 numberArray.forEach(element => {
    console.log(element);

 });

 console.log("---------------Question five--------------");
 const stringArray = ["cherry" , "banana","apple"]
 console.log("array befor sorting ", stringArray);
  console.log("array after sorting ", stringArray.sort());

  console.log("---------------Question six--------------");

 const array1 = [1,2,3]
 const array2 = [4,5,6]
 console.log("the two array afetr combination : " ,array1.concat(array2));
  
  console.log("---------------Question seven--------------");
  const sliceArray = [1,2,3,4,5,6]
  console.log("array after slice : ",sliceArray.slice(0,2).concat(sliceArray.slice(4,6)));
  
    console.log("---------------Question eight--------------");
    console.log ( sliceArray.splice(2,1))
    console.log("the array after remove index number 2 ",sliceArray);

    console.log("---------------Question nine--------------"); 
    console.log("the index of number 4 in array : " ,sliceArray.indexOf(4));
    
        console.log("---------------Question ten--------------");
        const stringArray2 = ["hi",",","welcome","to ","our","team"] 
        console.log("the array after invert to string ",  stringArray2.join(" "));
        
            console.log("---------------Question eleven--------------");
            const str = "hello every one"
            console.log("the string after convert into array : ",str.split(" ") );

                console.log("---------------Question twelve--------------"); 
                console.log("the number of element in array using length  property : ",sliceArray.length," element ");
                
                console.log("---------------Question thirteen--------------"); 

                console.log("to insure if the given ogject is array or not usin isArray : " ,Array.isArray(sliceArray));
                