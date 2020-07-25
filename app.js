var u_list = document.getElementById("add_list");

function add(){
    var todo_item=document.getElementById("todo_item");
    var list =document.createElement("li");
    var list_text= document.createTextNode(todo_item.value);

    list.appendChild(list_text);

    var edit_btn = document.createElement("button");
    var edit_txt = document.createTextNode("Edit");
    var edit_fun =edit_btn.setAttribute("onclick" , "editfun(this)");
    var edit_class =edit_btn.setAttribute("class" , " add_btn shadow p-2 mb-2 bg-white rounded");
    edit_btn.appendChild(edit_txt);
    

     
    var del_btn = document.createElement("button");
    var btn_txt = document.createTextNode("Delete");
    var del_fun =del_btn.setAttribute("onclick" , "delfun(this)");
    var del_class =del_btn.setAttribute("class" , "add_btn  shadow p-2 mb-2 bg-white rounded");
    del_btn.appendChild(btn_txt);

    list.appendChild(edit_btn);
    list.appendChild(del_btn);

  

    u_list.appendChild(list);

    todo_item.value = "";

}
function delfun(d){
    d.parentNode.remove();

}
function clearAll(){
    u_list.innerHTML = "" ;
}

function editfun(e){
    var val = e.parentNode.firstChild.nodeValue;
    var editValue = prompt("Entre Edit Value.." , val);
    e.parentNode.firstChild.nodeValue = editValue;

}