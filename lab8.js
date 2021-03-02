// fetch('http://127.0.0.1:8000/api/users',{
//     method:'GET'
// }).then(response=>response.json()).then(response=>{
//     console.log(response , 'Called first');
//     return response;
// }).then(response=>{
//     document.querySelector('#console').innerHTML = JSON.stringify(response);
// });

// console.log('Called second..');

function logToConsole(data){
    var $el = document.createElement('div');
    $el.innerHTML = data;
    document.querySelector('#console').appendChild($el);
}

function fetchUsers(){

   return fetch('http://127.0.0.1:8000/api/users',{
     method:'GET'
    }).then(response=>response.json()).then(response=>{
     return response;
    });

}



function getUser($email,token){
  return fetch(`http://127.0.0.1:8000/api/get-user/${$email}?token=${token}`,{
      method:'GET'
  }).then(response=>response.json());
}

function convertUserToB64($userJson,token){
 //json-b64
 var formData = new FormData;
 formData.append('json',JSON.stringify($userJson));
 return fetch(`http://127.0.0.1:8000/api/json-b64?token=${token}`,{
     method:'POST',
     body:formData
 }).then(response=>response.json());

}

function convertB64ToCsv($b64,token){
   return fetch(`http://127.0.0.1:8000/api/b64-csv/${$b64}?token=${token}`,{
       method:'GET'
   }).then(response=>response.json());
}


var $promise = new Promise(function(resolve,reject){

    //  resolve(100);
    // reject('-10');
    // setTimeout(function(){
     
    //     resolve(200);

    // },5000);

    resolve(auth());

});


function auth(){
    return fetch('http://127.0.0.1:8000/api/authorize',{
        method:'GET'
    }).then(res=>res.json());
}


$promise.then(response=>{


    return response.token;


}).then(token=>{

   return getUser('admin2@domain.com',token);

}).then(users=>{

    // console.log(users);

  return convertUserToB64(users,users.token);

}).then(response=>{

  return convertB64ToCsv(response.encoded,response.token); 


}).then(response=>{

    console.log(response);

    return JSON.stringify(response);

}).then(response=>{

     logToConsole(`Converted to CSV format : ${response}`);


}).catch(error=>{

    logToConsole(error);

});

var $el = document.querySelector('#clk');

var $promise2 = new Promise((resolve,reject)=>{

     var i = 0;
  
      $el.addEventListener('click',(event)=>{
        
        i+=1; 
        resolve(`clicked ${i} times. `);
        return false;

      },false);


});


$promise2.then(response=>{

  logToConsole(response);

});



// logToConsole('Tesing...');