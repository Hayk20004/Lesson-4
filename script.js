function main() {
    var socket = io();
    var chatDiv = document.getElementById('chat');
    var input = document.getElementById('message');
    var button = document.getElementById('submit');
    var button1 = document.getElementById('delete');
    function handleDelete(evt) {
        socket.emit("Delete message");
    }
    function handleSubmit(evt) {
        var val = input.value;
        if (val != "") {
            socket.emit("send message", val);
        }
    }
    button1.onclick = handleDelete;
    button.onclick = handleSubmit;
    function handleMessage(msg) {
        var p = document.createElement('p');
        p.innerText = msg;
        chatDiv.appendChild(p);
        input.value = "";
    }
    function DeleteFromDom() {
        var p = document.getElementsByTagName("p");
        for(var i in p){
            
            if(p.length > 0)
            chatDiv.removeChild(p[0]);
        }

    }




    socket.on('de jnjeq', DeleteFromDom);
    socket.on('display message', handleMessage);
} // main closing bracket

window.onload = main;
