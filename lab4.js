sandbox(function(){
 
     
    var a =  Observable.value(11);
    var b = Observable.value(23);

    a.listen(function(vl){
       
        log('A changed to ', vl);

    });


    a.set(90);

    b.listen(function(vl){
        
        log('B changed to ' , vl);

    });

    b.set(200);




});