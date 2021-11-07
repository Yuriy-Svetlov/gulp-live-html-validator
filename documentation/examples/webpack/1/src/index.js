
var $bundle = document.getElementById("bundle");

/*
	[Imgur] https://imgur.com/a/uHGMO17#FXvc3ub
 */

// No Error
$bundle.innerHTML = '<img style="width: 100%;" alt="" src="https://i.imgur.com/EpOOLAC.jpeg">';

// Error
// $bundle.innerHTML = '<img style="width: 100%;" src="https://i.imgur.com/EpOOLAC.jpeg">';

// No Error
// $bundle.innerHTML = '<a href="#">Test link 1</a>';

// Errors
// $bundle.innerHTML = '<a test="#">Link 1</a>';
// $bundle.innerHTML = '<b href="#">Link 1</a>';

// Warning
// $bundle.innerHTML = '<script type="text/javascript"></script>';
