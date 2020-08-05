const people = [{
    name: "김수호",
    age: 36
}, {
    name: "홍길동",
    age: 70
}, {
    name: "김영희",
    age: 15
}, {
    name: "김철수",
    age: 18
}, {
    name: "박지성",
    age: 37
}, {
    name: "김태희",
    age: 38
}, {
    name: "정지훈",
    age: 41
}];

/**
 * Array 메소드 연습
 * 1. 19살 이상인 사람들 찾기
 * 2. 김씨성을 가진 사람들 찾기
 * 3. 이름이 박지성인 사람 객체 찾기 
 * 4. 이름이 박지성인 사람의 index 찾기
 */

//1. 19살 이상인 사람들 찾기
const arr1= [];
for (let i = 0; i < people.length; i++) {
    if( people[i].age >= 19 ) {
       // console.log(people[i].name);
        arr1.push(people[i].name);
    }
 }
 console.log(arr1);


//2. 김씨성을 가진 사람들 찾기
const arr2 = [];
for (let i = 0; i < people.length; i++) {
    if( people[i].name.indexOf('김') == 0 ) {
       // console.log( people[i].name );
        arr2.push(people[i].name);
    }
}
console.log(arr2);

//3. 이름이 박지성인 사람 객체 찾기 
console.log( people[4] );


//4. 이름이 박지성인 사람의 index 찾기
const arr3 = [ ];
let getIndex = 0;
for (let i = 0; i < people.length; i++) {
   if( people[i].name === "박지성"){
        getIndex = i;
    }
} 
console.log(getIndex);
