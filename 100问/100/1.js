
    function Foo() {
        Foo.a = function () {
            console.log(1)
        }
        // new 过程
        this.a = function () {
            console.log(2)
        }

    }
    //原型链
    Foo.prototype.a = function () {
        console.log(3)
    }
    //属性覆盖
    Foo.a = function () {
        console.log(4)
    }
    Foo.a(); //4
    let obj = new Foo();
    obj.a(); //2
    Foo.a();//1
    
