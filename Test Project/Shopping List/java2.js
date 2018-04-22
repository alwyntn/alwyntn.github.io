var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItem = document.querySelectorAll("li");


function inputValue() {
	return input.value.length;
}

function addList() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value + "  "));
	ul.appendChild(li);
	input.value = "";
	
	// Create delete button
	var delButton = document.createElement("button");
	var txtButton = document.createTextNode("delete");
	delButton.appendChild(txtButton);
	li.appendChild(delButton);
	delButton.addEventListener("click", function(){
	ul.removeChild(li);
	})

	// Strikethrough list item
	listItem = document.querySelectorAll("li");
	var listItemCount = listItem.length;
	for (var i = 0; i < listItemCount; i++){
		listItem[i].addEventListener("click", function(){
		this.classList.toggle("done");
		})
	}

}

button.addEventListener("click", function(){
	if (inputValue() > 0) {
	addList();
	}
})

input.addEventListener("keypress", function(event){
	if (inputValue() > 0 && event.which === 13) {
	addList();
	}
})





