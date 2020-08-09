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
function adult( age ){
    let person = people.filter(function(elm){
        return elm.age >= age;
    });
    return person;
}
console.log( adult(19) );

//2. 김씨성을 가진 사람들 찾기
function whoKims( name ){
    let person = people.filter(function(elm){
        if ( elm.name.indexOf(name) == 0 ) {
            return elm.name;
        }
    });
    return person;
}
console.log( whoKims('김') );

//3. 이름이 박지성인 사람 객체 찾기
function whoPark( name ){
    let findPerson = people.find(function(elm){
        return elm.name ==  name;
    });
    return findPerson;
}
console.log(whoPark("박지성"));

//4. 이름이 박지성인 사람의 index 찾기
function parkIdx( name ){
    const findPersonIdx = people.findIndex(function(elm){
        return elm.name == name;
    });
    return findPersonIdx;
}
console.log(parkIdx('박지성'));
