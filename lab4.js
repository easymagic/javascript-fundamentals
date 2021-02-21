sandbox(function(){
 
    // throw {
    //     message:'New error!'
    // };
     
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

    var $counter = Observable.value(0);


    $counter.listen(function(vl){

         
        document.getElementById('counter').value = vl;


    });


    setInterval(function(){
       
        $counter.set($counter.get() + 1);

    },100);



});