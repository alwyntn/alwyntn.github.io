var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItem = document.querySelectorAll("li");

function inputValue() {
	return input.value.length;
}

function addList() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}

function toggleLi()
{
	this.classList.toggle("done");
}

for (var i = 0; listItem.length > 0; i++) {
	listItem[i].addEventListener("click", toggleLi());
}

button.addEventListener("click", function(){
	if (inputValue() > 0) {
	addList();
	}
})

input.addEventListener("keypress", function(abc){
	if (inputValue() > 0 && abc.which === 13) {
	addList();
	}
})

