var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Avyan1.JPG') {
	    myImage.setAttribute ('src','images/Avyan2.JPG');
    }	
	else if(mySrc === 'images/Avyan2.JPG') {		
		myImage.setAttribute ('src','images/Avyan3.JPG');
	}
	else {
		myImage.setAttribute ('src','images/Avyan1.JPG');
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
