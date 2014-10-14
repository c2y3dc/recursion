// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  // your code here
  var result = [];

  function lookup(node) {

    var children = node.children;
    var arr = node.className === undefined ? [] : node.className.split(' ');
    
    _.each(arr, function(element){
      if(element === className) {result.push(node);}
  	});

  	if(children.length){
  		_.each(children, function(element){lookup(element);})
  	}
  }

  lookup(document);
  return result;
};
