function greet(user){
    
    console.log("Hi my name is " +user.names+" and i am "+user.age+" year old "+" and my gender is "+ user.gender);
}
let user = {
    names: "ullas",
    age: 21,
    gender: "male"
};

if (user.gender === "male") {
    user.names = "Mr " + user.names;
}else{
    user.names="Ms" + user.names;
}
if(user.age>=18){
    user.age="eligible to vote "+ user.age;
}else{
    user.age="not eligible to vote and "+user.age;
}
 greet(user);