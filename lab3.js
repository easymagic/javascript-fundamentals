sandbox(function(){




  ///modules pattern introduced
  var App = {};
  
  (function($r,ONE){

    var a = 2,b = 10;

     $r.add = function(){
         return a + b + ONE;
     }

  })(App,1);


  log('App is',App.add()); 

  














});