// The function groupData() helps you to convert 
// a flat json into a hierarchical json. 

// This is how to use it:
// Parameters:
//       data – an Array of objects
//       keys – an Array of Strings that are keys in the data Array

let t, dt;
let data = data_short;

console.log('Original Data:')
console.log(data);

console.log('-----------------------------')
t = Date.now();
let groupedData = groupData(data, ['NOC', 'Sex', 'Medal']);
dt = Date.now() - t;

console.log("Result after building groups on ['NOC', 'Sex', 'Medal']:")
console.log(groupedData);
console.log('It took ' + (dt / 1000) + " seconds to group the data");


// Just copy this function to your project and use it like described above.
function groupData(data, keys) {
  let result = {};
  // group on the first key from the given array
  let key = keys.shift();
  for (let i = 0; i < data.length; i++) {
    let dat = data[i];
    // make an array for every unique value for that key
    // and fill it with every row that has that value
    let val = dat[key];
    if (!result[val]) {
      result[val] = []
    }
    result[val].push(dat);
  }

  // as long as there are keys for grouping ...
  if (keys.length > 0) {
    // group every entry on the next key
    let groups = Object.entries(result);
    for (let i = 0; i < groups.length; i++) {
      res = groupData(groups[i][1], [...keys]);
      result[groups[i][0]] = res;
    }
  }

  return result;
}

