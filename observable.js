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


    obs.bindInput = function(inputEl,observable){

        var $el = document.querySelector(inputEl);


        $el.addEventListener('keyup',function(params) {
            
            observable.set(this.value);

        },false);
       
       $el.value = observable.get(); 

       return observable;

    };


    obs.array = function(arr){

        var convertedArray = [];

        var $obs = Observable.value();

        function convert(vl){
          return {
            $value:Observable.value(vl),
            $index:0,
            remove:function(){
                convertedArray.splice(this.$index,1);
                realignIndex();
                $obs.set(convertedArray);
            }
          };
        }

        function realignIndex(){
           convertedArray.forEach(function(item,key){
               item.$index = key;
           }); 
        }

        arr.forEach(function(item,key){

           convertedArray.push(convert(item));

        });

        realignIndex();

        $obs.set(convertedArray);

        $obs.append = function(vl){
          convertedArray.push(convert(vl));
          realignIndex();
          $obs.set(convertedArray);
        };

        // $obs.remove = function(obj){
        //    convertedArray.splice(obj.$index,1);
        //    realignIndex();
        // }

        $obs.getByPosition = function(pos) {
            
            if (pos > convertedArray.length - 1) return;

            return convertedArray[pos].$value.get();

        }

        return $obs;
        
    };





})(Observable);



