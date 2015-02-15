var fullScreenBackground = document.querySelector('.fullscreenbackground');
var fullScreenImage = document.querySelector('.fullscreenpic');

var zoomLinks = document.querySelectorAll('.zoom');

Array.prototype.forEach.call(zoomLinks, function (node) {
	node.onclick = function (e) {
		e.preventDefault();
		showImage(node.getAttribute("href"));
	};
})

fullScreenBackground.onclick = function(e) {
	fullScreenBackground.classList.remove("show");
}

function showImage(file) {
	fullScreenImage.src = file;
	fullScreenBackground.classList.add("show");	
}