var $todoList = Observable.array([]);
var $todo = Observable.value('Sample Todo.');

Observable.bindInput('#todo',$todo).listen(function(){


    document.querySelector('#chars').innerHTML = ' ' + $todo.get().length + ` char${$todo.get().length > 1? 's' : ''}`;


});



document.querySelector('#add').addEventListener('click',function(evt) {
    
     $todoList.append({
         todo:$todo.get()
     });

});


function loadList(){
  
  var $result = document.querySelector('#list');
  
  var arr = $todoList.get();

  document.querySelector('#todo-count').innerHTML = arr.length;

//   console.log(arr);

  $result.innerHTML = '';

  arr.forEach(function(item,key){

     $result.innerHTML+=`
       
     <div>
        
         ${key + 1} . ${item.$value.get().todo}
       
         <button onclick="todoRemove(${item.$index})">X</button>
     </div>
       
     
     `;

    //  console.log($result.innerHTML,'html - added.');


  });
     

}


function todoRemove(index){
    $todoList.get()[index].remove();
}

$todoList.listen(function(arr){

    loadList();

});

