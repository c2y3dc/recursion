// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  // your code here
  var result = [];

  function lookup(element) {
	var node;
  	if(!element){
  		element = document.body;
  		result.push(element);
  	}
  	for(var i=0; i < element.childNodes.length; i++) {
  		node = element.childNodes[i];
  		if(node.hasChildNodes()){
  			lookup(node);
  		}
  		if(node.classList && node.classList.contains(className)){
  			result.push(node)
  		}
  	}
  }
  	/*
    var children = node.children;
    var arr = node.className === undefined ? [] : node.className.split(' ');
    
    _.each(arr, function(element){
      if(element === className) {result.push(node);}
  	});

  	if(children.length){
  		_.each(children, function(element){lookup(element);})
  	}
  }
  lookup(document)
*/
  lookup();
  return result;
};
