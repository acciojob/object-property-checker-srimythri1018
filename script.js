const sampleObject = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };

function hasKey(key) {
	for(let i=0; i< sampleObject.length ;i++){
  if(key == sampleObject[i]){
	  return true;
  }
	else {
		return false;
	}
	}//   write your code here
}

// Do not change the code below
const key = prompt("Enter Key.");
alert(hasKey(key));
