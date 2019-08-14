function* gen(x) {
    try{
        var y = yield x + 2;
        return y;
    }
    catch(ex){
        console.error(ex)
    }   
}

var g = gen(1);
console.log(g.next()) 
console.log(g.next(10)) //next传参标识上一个步骤返回的结果
g.throw("Error")
