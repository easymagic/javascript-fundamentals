//Promises


///...Promise....using ajax fetches
var url = 'http://127.0.0.1:8000/api/users';

// fetch(url).then(response=>response.json()).then(response=>{
//     console.log(response);
// });

//async await

// async function fget(){
//  var r = await fetch(url).then(response=>response.json());
//  console.log(r);
//  return r;
// }

// var response = fget();

// response.then(res=>{
//     console.log(res,'awaited...');
// });


function delayAfterTime(n){
   
    return new Promise(function(resolve,reject){

        function fn(N){

           if (N > 0){
              setTimeout(function(){
                fn(N - 1);
              },1000); 
              return;
           }
         
           resolve(`Count down reached: ${N}`);

        }

        fn(n);

    });

}


function doAfter3Secs(vl) {
    
    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
          
            resolve(`${vl} resolved after 3 seconds`);

        },3000);

    });

}



function doCoolStuff(){

    return delayAfterTime(7).then(response=>{

        return `<b>Boldened : ${response}</b>`;
    
    }).then(response=>{
    
        return doAfter3Secs(response + ' Did cool stuff...');
    
    }).then(response=>{
    
        return {
            data: response
        };
    
    
    }).then(response=>{
    
       return JSON.stringify(response);
    
    });
    
    // .then(response=>{
    
    //    var el = document.createElement('div');
    //    el.innerHTML = response; 
    
    //    document.querySelector('#console').appendChild(el);
    
    // });
    
}

async function coolFn(){

  var rr = await doCoolStuff();
  
  var el = document.createElement('div');
  el.innerHTML = rr; 

  document.querySelector('#console').appendChild(el);


}


coolFn();
