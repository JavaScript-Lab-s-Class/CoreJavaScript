var user = {
    name : 'Jaenam',
    urls : {
        portfolio: 'http://github.com/abc',
        blog : 'http://blog.com',
        facebook : 'facebook.com/abc'
    }
};

var user2 = copyObject(user);
user2.urls = copyObject(user.urls);

user.urls.portfolio = 'http://portfolio.com'; //false

user2.urls.blog = '';
console.log(user.urls.blog === user2.urls.blog); //false

//객체의 깊은 복사를 수행하는 범용 함수
var copyObjectDeep = function(target){
    var result = {};
    if(typeof target === 'object' && target != null){
        for(var prop in target){
            result[prop] = copyObjectDeep(target[prop]);
        }
    }else{
        result = target;
    }
    return result;
};

//깊은 복사 결과 확인
var obj = {
    a : 1,
    b : {
        c : null,
        d : [1,2]
    }
};

var obj2 = copyObjectDeep(obj);
obj2.a = 3;
obj2.b.c = 4;
obj.b.d[1] = 3;

console.log(obj);
console.log(obj2);