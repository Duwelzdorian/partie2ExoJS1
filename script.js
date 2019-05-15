var myImage = document.querySelector('img');

function hover() {
  var mySrc = myImage.getAttribute('src');
  if (mySrc == 'images/image1.jpg') {
    myImage.setAttribute('src', 'images/image1_2.jpg');
  } else {
    myImage.setAttribute('src', 'images/image1.jpg');
  }
}

myImage.addEventListener('mouseover', hover);

hover();
});
