
sandbox(function(){



    ///prototypes
    ///classes
    function Foo(a,b){
      this.a = a;
      this.b = b;
    }

    Foo.prototype.add = function(){
      return this.a + this.b;
    };

    Foo.prototype.sub = function(){
       return this.a - this.b;
    };


    $obj = new Foo(1,3);

    log($obj.add());
    log($obj.sub());



    class Foo1{

        constructor(a,b){
          this.a = a;
          this.b = b;
        }

        add(){
         return this.a + this.b;
        }


        sub(){
         return this.a - this.b;
        }

        addN(...a){
            var sum = 0;
            // a.forEach(function(item,k){
            //     sum = sum + item;
            // });
            sum = a.reduce(function(acc,item){
                return acc+item;
            },0);
         log('sum-N',sum);
        }


    }



    var $obj2 = new Foo1(11,21);

    log('Addition from Foo1 ',$obj2.add());

    $obj2.addN(1,23,4);


});