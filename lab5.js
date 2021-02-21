var credentials = {
    email: Observable.value('username@domain.com'),
    password: Observable.value('password')
};


function notifyResult(){
    
    document.querySelector('#result').innerHTML = `
      Currently typing : <br />
      Email : ${credentials.email.get()} <br />
      Password: ${credentials.password.get()}
    `;
     
}

var $obEmail = Observable.bindInput('#email',credentials.email).listen(function(vl){

    notifyResult();

});

var $obPassword = Observable.bindInput('#password',credentials.password).listen(function(vl) {
    
    notifyResult();

});

