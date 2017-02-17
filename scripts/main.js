var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
	    myImage.setAttribute ('src','images/chrome-icon.png');
    }	
	else if(mySrc === 'images/chrome-icon.png') {		
		myImage.setAttribute ('src','images/safari-icon.png');
	}
	else if(mySrc === 'images/safari-icon.png') {		
		myImage.setAttribute ('src','images/ie-icon.png');
	}
	else {
		myImage.setAttribute ('src','images/firefox-icon.png');
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
