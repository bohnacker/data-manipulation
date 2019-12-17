// The function groupData() helps you to convert 
// a flat json into a hierarchical json. 

// This is how to use it:
// Parameters:
//       data – an Array of objects
//       keys – an Array of Strings that are keys in the data Array

var result = groupData(data, ['NOC', 'Sex', 'Medal']);

console.log('Original Data:')
console.log(data);
console.log("Result after building groups on ['NOC', 'Sex', 'Medal']:")
console.log(result);


// Just copy this function to your project and use it like described above.
function groupData(data, keys) {
  var result = {};
  // group on the first key from the given array
  var key = keys.shift();
  for (var i = 0; i < data.length; i++) {
    var dat = data[i];
    // make an array for every unique value for that key
    // and fill it with every row that has that value
    var val = dat[key];
    if (!result[val]) {
      result[val] = []
    }
    result[val].push(dat);
  }

  // as long as there are keys for grouping ...
  if (keys.length > 0) {
    // group every entry on the next key
    var groups = Object.entries(result);
    for (var i = 0; i < groups.length; i++) {
      res = groupData(groups[i][1], [...keys]);
      result[groups[i][0]] = res;
    }
  }

  return result;
}

