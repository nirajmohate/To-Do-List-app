function addlist(){
    var input = document.getElementById("input").value ;
    var li = document.createElement('li');
    li.textContent = input;
// edit option code--
    var editbtn = document.createElement('p');
    editbtn.innerText = 'Edit';
    editbtn.id = 'edit'
    editbtn.onclick = function(){
        let newtask = prompt('edit your task' , input);
        if (newtask){
            li.firstChild.nodeValue = newtask;
        }
    };
    li.appendChild(editbtn);

    // delete option code--
      let deletebtn = document.createElement('p');
      deletebtn.innerText = 'Delete';
      deletebtn.id = 'delete'
      deletebtn.onclick = function(){
          li.remove();
      };
      li.appendChild(deletebtn);
      

     
    // if else condition--
    if(input =='' || input ==''){
        alert("please write any item");
    }
    else{
        alert("one item are added succesfully");
    }

    if (input == li) {
        alert("this item is already exist")
    }
    
    
    document.getElementById("alllist").appendChild(li);
    document.getElementById("input").value ;
}