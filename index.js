function log(...data){

    // label = label || 'Message';

    var acc = [];

    var $console = document.getElementById('console');
    var $el = document.createElement('div');
    $el.style = 'color:yellow';


    data.forEach(function(item,k){
     
          if (typeof(item) == 'object'){
            item = JSON.stringify(item);
           }
          
           if (typeof(item) == 'undefined'){
            item = undefined;
           }

           acc.push(item);
      
    });

    
    // console.log(label);

    $el.innerHTML =  acc.join(' '); //  "'" + label + "' : " + data;
    $console.append($el);
    
}

function error(...data){

    // label = label || 'Message';

    var acc = [];

    var $console = document.getElementById('console');
    var $el = document.createElement('div');
    $el.style = 'color:red';


    data.forEach(function(item,k){
     
          if (typeof(item) == 'object'){
            item = JSON.stringify(item);
           }
          
           if (typeof(item) == 'undefined'){
            item = undefined;
           }

           acc.push(item);
      
    });

    
    // console.log(label);

    $el.innerHTML =  acc.join(' '); //  "'" + label + "' : " + data;
    $console.append($el);
    
}


function sandbox(cb){

    try{
       cb();
    }catch($message){
       error("Error",$message.message);
    }


}




