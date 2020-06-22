// The function groupData() helps you to convert 
// a flat json into a hierarchical json. 

// This is how to use it:
// Parameters:
//       data – an Array of Objects
//       reduceTo – an Array of Strings that are keys in the data Array
//       cumulations – an Array of Objects defining the calculations to perform on the data

let t, dt;
let data = data_long;

console.log('Original Data:')
console.log(data);


// Names of the colums you want to reduce (in the end there 
// will be only one line for each possible combination)
let reduceTo = ['Sex', 'NOC', 'Medal']

// Names of the colums you want to cumulate somehow 
// Possible cumulations: Sum, Average, Min, Max, 
// Median, Percentile (needs 'p' as percentage)
// You can give custom titles for the resulting columns,
// otherwise value+method will be the title. 
let cumulations = [
  { value: 'Weight', method: 'Sum' },
  { value: 'Age', method: 'Average', title: 'AgeAv' },
  { value: 'Weight', method: 'Percentile', p: 0.25, title: 'WeightQ1' },
  { value: 'Weight', method: 'Median' },
  { value: 'Weight', method: 'Percentile', p: 0.75, title: 'WeightQ3' },
  { value: 'Height', method: 'Min' },
  { value: 'Height', method: 'Max' },
]

console.log('-----------------------------')
t = Date.now();
let cumulatedData = cumulateData(data, reduceTo, cumulations);
dt = Date.now() - t;

console.log("Result after cumulating the data:")
console.log(cumulatedData);
console.log('It took ' + (dt / 1000) + " seconds to cumulate the data");


// Just copy this function to your project and use it like described above.
function cumulateData(data, reduceTo, cumulations) {
  let groupedData = {};

  // group all 'rows' of the original data
  for (let i = 0; i < data.length; i++) {
    let key = data[i][reduceTo[0]];
    for (let j = 1; j < reduceTo.length; j++) {
      key += ',' + data[i][reduceTo[j]];
    }

    if (!groupedData[key]) {
      groupedData[key] = [];
    }

    groupedData[key].push(data[i]);
  }

  // convert values of the object to array
  groupedData = Object.values(groupedData);
  // console.log(groupedData);

  let cumulatedData = [];
  for (let i = 0; i < groupedData.length; i++) {
    // prepare an object for the results
    let result = {};
    // put in the keys and values of reduceTo
    for (let j = 0; j < reduceTo.length; j++) {
      result[reduceTo[j]] = groupedData[i][0][reduceTo[j]];
    }
    // add the counter
    result.count = groupedData[i].length;
    // calculate cumulations
    for (let j = 0; j < cumulations.length; j++) {
      let key = cumulations[j].title;
      if (!key) key = cumulations[j].value + cumulations[j].method;
      // collect values to plain array
      result[key] = groupedData[i].map(x => x[cumulations[j].value]);
      // console.log(result[key])

      if (cumulations[j].method == "Sum") {
        result[key] = result[key].reduce((res, x) => res + x);
      }
      if (cumulations[j].method == "Average") {
        result[key] = result[key].reduce((res, x) => res + x) / result.count;
      }
      if (cumulations[j].method == "Min") {
        result[key] = result[key].reduce((res, x) => (res < x ? res : x));
      }
      if (cumulations[j].method == "Max") {
        result[key] = result[key].reduce((res, x) => (res > x ? res : x));
      }
      if (cumulations[j].method == "Median") {
        result[key] = percentile(result[key], 0.5);
      }
      if (cumulations[j].method == "Percentile") {
        result[key] = percentile(result[key], cumulations[j].p);
      }
    }

    cumulatedData.push(result);
  }

  return cumulatedData;

  function percentile(arr, p) {
    arr.sort();
    let l = arr.length - 1;
    let idx = l * p;
    let frac = idx % 1;
    let val0 = arr[Math.floor(idx)];
    let val1 = arr[Math.ceil(idx)];
    let res = val0 + (val1 - val0) * frac;
    return res;
  }
}