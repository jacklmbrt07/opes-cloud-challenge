function parseAndSortDates(dataArray, delim = "/", isAsc = true) {
  // 1) Declare variables, result will be returned, delim and isAsc are initialized as optional parameters.
  var result;

  /* 2) We need to define a Regular Expression in order to filter  values with the format yyyy{delim}mm{delim}dd.
    This regex will ONLY allow the years 1000 to 2999, the months 01 - 12 and days 01 - 31.
    In case the delimeter is defined to other than '/', then we use interpolation to add ${delim} like a variable inside the RegExp. This is with ES6 only. 
    To use variables in a regex, you must use the RegExp constructor, and replace /regex/ with `regex` and replace backslash '\' with a double backslash '\\'.

    // source https://www.regextester.com/96683 but replaced '-' with a literal notation with the delim variable
  */
  const dateRegex = new RegExp(
    `([12]\\d{3}${delim}(0[1-9]|1[0-2])${delim}(0[1-9]|[12]\\d|3[01]))`
  );

  // 3) DataArray needs to be filtered out, so if the string does not pass the regex test, it will be removed. stored in a new variable called filtered.
  let filtered = dataArray.filter((date) => dateRegex.test(date));

  // 4) if none of the values in dataArray pass, leaving filtered undefined or 0, we can immediately return an empty array.
  if (!filtered) return [];

  // 5) "new Date()" constructor allows us to convert a string into a Date String.
  // However, the string must have a delimeter of '/' or '-' in order to work, wo we use an if/else.
  if (delim == "/" || delim == "-") {
    result = filtered.map((date) => {
      return new Date(date);
    });
  } else {
    // we use another regex in order to replace any improper delims with '/'. The "g" (global) will replace all instances.
    let delimRegex = new RegExp(delim, "g");
    result = filtered.map((date) => {
      let newDate = date.replace(delimRegex, "/");
      return new Date(newDate);
    });
  }

  // 6) We sort the result array into ascending or descending order.
  if (isAsc) {
    result.sort((a, b) => a - b);
  } else {
    result.sort((a, b) => b - a);
  }

  // 7) Finally, we return the array.
  return result;
}

var dataArray = [
  "2021/01/02",
  "1990-02-03",
  "2001-03-04",
  "1990~05~28",
  "junk",
];

console.log(parseAndSortDates(dataArray, "-", true));
