var menu = document.getElementById("menu");
var exit = document.getElementById("close");
exit.style.display = "none"
menu.addEventListener("click", function() {
				menu.style.display = "none";
				exit.style.display = "block"
})
exit.addEventListener("click", function() {
				exit.style.display = "none";
				menu.style.display = "block"
})