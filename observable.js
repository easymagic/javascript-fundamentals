var Observable = {};
(function(obs){

    

    obs.value = function($vl){


        var listeners = [];
    
        var vl = $vl;
        
        function trigger(){
            listeners.forEach(function(item,key){
                item(vl);
            });
        }


        // vl = $vl;
        
        return {
          set(newVal){
             vl = newVal;
             trigger();
          },
          get(){
           return vl;
          },
          listen(cb){
            listeners.push(cb);
            trigger();
          }
        }
         
    };

    obs.computed = function(cb,observables){

        var $obs = Observable.value(0);


        observables.forEach(function(item,key){
            
            item.listen(function(){

                $obs.set(cb());


            });

        })


        return $obs;

    };

})(Observable);



