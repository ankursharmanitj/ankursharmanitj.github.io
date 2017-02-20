var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Avyan1.png') {
	    myImage.setAttribute ('src','images/Avyan2.png');
    }	
	else if(mySrc === 'images/Avyan2.png') {		
		myImage.setAttribute ('src','images/Avyan3.png');
	}
	else {
		myImage.setAttribute ('src','images/Avyan1.png');
	}
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');    
  myHeading.textContent = "Welcome " + myName + " to Avayan's portal";
};

myButton.onclick = function() {
  setUserName();
}
