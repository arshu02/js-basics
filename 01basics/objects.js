//const tinderuser = new object()//singleton object
 
//const tinderuser= {}
/*
const regularuser={
    email:"sammy@gmail.com",
    userfullname:{
        firstname:"arshu",
        lastname:"singh"
    }

}
 */

const obj1 ={1: "a",2: "b"}
const obj2 ={3:"c",4:"c"}

//const obj3 =Object.assign({},obj1,obj2)
const obj3 ={...obj1,...obj2}
//console.log(obj3);


const course ={
    coursename:"js in hindi",
    price:"999",
    courseinstructor:"hitesh"
}
//course.instructor
 const{courseinstructor:instructor}= course
 //console.log(courseinstructor);
 console.log(instructor);


 