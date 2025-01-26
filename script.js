var character = 
document.getElementById("character");
var block = document.getElementById("block");
function jump (){
character.classlist.add("animate");
setTimeout(function(){
charcater.classlist.remove("animate");
},500);
}