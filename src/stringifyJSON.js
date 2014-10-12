// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  // your code goes here
  if (typeof(obj) === "function" || typeof(obj)=== "undefined") {
    return undefined; 
  }else if (typeof(obj) === "boolean" || typeof(obj) === "number") {
    return obj.toString();
  }else if (typeof(obj) === "string") {
    return "\"" + obj + "\"";
  }else if (obj === null ) {
    return "null";
  }else  if (Array.isArray(obj)) {
    return "[" + _.map(obj, function(item) { return stringifyJSON(item); }).join(",") + "]";
  }else{ return "{" + _.map(obj, function(value, key) {
      var str = stringifyJSON(value);
      if (str) {
        return stringifyJSON(key) + ":" + str + ",";
      }else{
        return undefined;
      }
    }).join("").slice(0, -1) + "}";
  }
};
