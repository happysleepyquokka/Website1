var x = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < x.length; i++) {

	x[i].addEventListener("click", function(){
		// this allows the panel colour to change when hovered over
		this.classList.toggle("active");
		// this toggels between showing and hiding the chosen panel
		var panel = this.nextElementSibling;
		if(panel.style.maxHeight){
			panel.style.maxHeight = null;
		}else{
			panel.style.maxHeight = panel.scrollHeight + "px";
		}
	});
}