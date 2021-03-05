function parseAndSortDates(dataArray, delim = "/", isAsc = true) {
  // data Array is an array of strings
  // delim is a string, '/' if null. the character that seperates year, month, and day
  // isAsc boolean. true for ascending order, false for descending, assume true.
  // return an array of date objects parsed and sorted in ascending value
  // if data array is undefined, return the empty array
  // if a value in data array does not follow yyyymmdd format, delete it
  // solution can be text or js file

  // 1) first check if all the values are valid in dataArray, and remove it if it is not
  //    1a) valid value would be in 'yyyy{delim}mm{delim}dd
  // 2) if dataArray is empty, return []
  // 3) add each value from dataArray into a newArray that is in datetime format
  //    3a) if the datetime value doesnt exist, remove it also, for example 2020-12-32 should return an error

  let newArray = [];
  const dateRegex = /^(\d{4})(\/|-)(\d{2})(\/|-)(\d{2})$/;
  dataArray.forEach((date) => {
    dateValue = dateRegex.test(date)
    console.log(dateValue);
  });

  return "Hello World";
}

var dataArray = [
  "2021/01/02",
  "1990-02-03",
  "2001-03-04",
  "1990~05~28",
  "junk",
];
var delim = "-";
console.log(parseAndSortDates(dataArray));
