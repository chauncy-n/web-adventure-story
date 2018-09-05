
function newText(){
  document.getElementById("test").innerHTML = story;
}
//input = document.getElementById("answer");
function story(){
	var text = document.getElementById('answer').value;
  
// here is where I can add my story functions

  if(text === 'nothing'){
  	document.getElementById("test").innerHTML = "that sounds boring";
  }
  else{
  	document.getElementById("test").innerHTML = "hmm, that sounds interesting";
  }
}
