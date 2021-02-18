var list  =document.getElementById("item_list")
function addItem(){
        ////////creating Add Button..////
    
    var input = document.getElementById("todo_item")
    var li = document.createElement("li")
    var liText = document.createTextNode(input.value) 
    li.appendChild(liText)
    list.appendChild(li)

    ///////////DELETE Button...////
    var delBtn = document.createElement("button")
    var delText = document.createTextNode("DELETE")
    delBtn.appendChild(delText)
    li.appendChild(delBtn)
    delBtn.setAttribute("onCLick","delItem(this)")
    delBtn.setAttribute("class","delitem")
    delBtn.innerHTML = '<i class="fas fa-minus-circle"></i>'


    ////////Edit Button....

    var editBtn = document.createElement("button")
    var editText = document.createTextNode("EDIT")
    editBtn.appendChild(editText)
    li.appendChild(editBtn)
    editBtn.setAttribute("onCLick" , "edititem(this)")
    editBtn.setAttribute("class","edititem")
    editBtn.innerHTML = '<i class="fas fa-pen-square"></i>'

    ///Input Clean..///
    input.value = ""

    // console.log(editBtn)

}


function delItem(e){
    e.parentNode.remove()
     

}

function delAll(){
    list.innerHTML = ""
}

function edititem(e){
    var editBox = prompt("Enter Edit Value" , e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = editBox
    // console.log(e.parentNode.firstChild.nodeValue)
}