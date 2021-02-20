sandbox(function(){

    var c = 900;

    (function(){

        var a = 90,b = 20;

        function add(){
          return a + b + c;
        }
        
        function test_add(){
            log( `Adding ${a} + ${b}`,add() );
        }
        
        
        test_add();
        
        a = 100;
        
        test_add();  
        
       log('a',a);
        

    })();

    log('a',a);




    //modules

    ///user-module
    (function(){
       
        //todo code goes here
        
    })();



    ///verification-module
    (function(){

        //todo code goes here


    })();


















});



