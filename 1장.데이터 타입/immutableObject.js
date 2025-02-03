//객체의 가변성에 따른 문제점

var user = {
    name : 'Jaenam',
    gender : 'male'
};

var chageName = function(user,newName){
    var newUser = user;
    newUser.name = newName;
    return newUser;
}

var user2 = chageName(user, 'Jung');

if(user !== user2){
    console.log('유저 정보가 변경되었습니다.');
}

console.log(user.name,user2.name); //Jung Jung
console.log(user === user2); //true

//객체의 가변성에 따른 문제점의 해결 방안
var user = {
    name : 'Jaenum',
    gender : 'male'
};

var changeName = function(user, newName){
    return{
        name : newName,
        gender : user.gender
    };
};

var user2 = changeName(user, 'Jung');

if(user !== user2){
    console.log('유저 정보가 변경되었습니다.'); //유저 정보가 변경되었습니다.
}

console.log(user.name, user2.name); //Jaenum Jung
console.log(user === user2); //false

//기존 정보를 복사해서 새로운 객체를 반환하는 함수(얕은 복사)
var copyObject = function(target){
    var result = {};
    for(var prop in target){
        result[prop] = target[prop];
    }
    return result;
};


//copyObject를 이용한 객체 복사
var user = {
    name : 'Jaenam',
    gender: 'male'
};

var user2 = copyObject(user);
user2.name = 'Jung';

if(user !== user2){
    console.log('유저 정보가 변경되었습니다.'); //유저 정보가 변경되었습니다.
}

console.log(user.name,user2.name); //Jaenam Jung
console.log(user === user2); //f