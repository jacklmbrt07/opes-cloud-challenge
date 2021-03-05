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
  var result;
  const dateRegex = new RegExp(
    `([12]\\d{3}${delim}(0[1-9]|1[0-2])${delim}(0[1-9]|[12]\\d|3[01]))`
  );
  // source https://www.regextester.com/96683 but replaced '-' with a literal notation with the delim variable

  let filtered = dataArray.filter((date) => dateRegex.test(date));
  console.log("filtered: ", filtered);

  if (!filtered) return [];

  if (delim == "/" || delim == "-") {
    result = filtered.map((date) => {
      return new Date(date);
    });
  } else {
    let delimRegex = new RegExp(delim, "g");
    result = filtered.map((date) => {
      let newDate = date.replace(delimRegex, "/");
      return new Date(newDate);
    });
  }

  if (isAsc) {
    result = result.sort((a, b) => a - b);
  } else {
    result = result.sort((a, b) => b - a);
  }

  return result;
}

var dataArray = [
  "2021/01/02",
  "1990-02-03",
  "2001-03-04",
  "1990~05~28",
  "junk",
];
console.log(parseAndSortDates(dataArray, "-", false));
