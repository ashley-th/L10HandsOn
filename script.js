$(document).ready(function () {
    $(".socMed").hover(function(){
        $(this).css({"height": "50px", "width": "50px"});
    },
    function(){
        $(this).css({"height": "40px", "width": "40px"});
    });
});


let newRequest = new XMLHttpRequest();
newRequest.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
        let myObj = JSON.parse(this.responseText);
        for(var i=0; i < myObj.length; i++) {
            addRepo(myObj[i].name);
        }
    }
};

newRequest.open("GET", "https://api.github.com/users/ashley-th/repos", true);
newRequest.send();

function addRepo(name) {
    var node = document.createElement("li");
    var textNode = document.createTextNode(name);
    node.appendChild(textNode);
    document.getElementById("repoList").appendChild(node);
}