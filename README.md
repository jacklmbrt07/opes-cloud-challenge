# Coding Challenge
## Instructions
Hello. Below is the OPES CLOUD code challenge. All code is preferably in Javascript, however if
you are more comfortable in another language, we will accept that as well. Remember, we are
looking for how you think. Comment your thought process. If you have any questions, please let
me know.
## Assignment
Your task is to implement the function

```parseAndSortDates(dataArray, delim, isAsc)```

With the following requirements:
1. dataArray is an array of strings.
2. Delim is a string, if it is null / undefined, use the forward slash character, /
3. isAsc is a boolean that, if true, sort the return values in ASCENDING order, if false, then
sort the result in DESCENDING order. If isAsc is null / undefined or not a boolean,
assume isAsc is true
4. The date strings in dataArray are in yyyy{delim}mm{delim}dd format. For example, it can
be in yyyy/mm/dd if delim is /, yyyy-mm-dd if delim is -, yyyy~mm~dd if delim is ~, and
so on..
5. Return an array of Date objects parsed from the dataArray and sorted (ASCENDING or
DESCENDING depending on the isAsc value.
6. If the original dataArray is undefined or empty, just return an empty array.
7. If a date string on the dataArray does not conform to the yyyy{delim}mm{delim}dd
format, disregard it in the final output array.
8. The delivered solution can just be a text or js file

## Example 1
```
var dataArray = [‘2021/01/02’, ‘1990-02-03’,‘2001-03-04’,
‘1990~05~28’,’junk’];
var delim = '-';

var isAsc = true;
var output = parseAndSortDates( dataArray, delim,isAsc );
console.log(JSON.stringify(output));
[
"1990-02-03T00:00:00.000Z",
"2001-03-04T08:00:00.000Z"
]
```
### Notes
Here output should be an array with the 1990 date in the 0th position and the 2001 date in the
1st position (isAsc = true). No other dates are present as they do not conform to the
requirements.

## Example 2
```
var dataArray = [‘2021/01/02’, ‘1990-02-03’,‘2001-03-04’,
‘1990~05~28’,’junk’];
var delim = '-';
var isAsc = false;
var output = parseAndSortDates( dataArray, delim,isAsc);
console.log(JSON.stringify(output));
[
"2001-03-04T00:00:00.000Z",
"1990-02-03T00:00:00.000Z"
]
```
### Notes
Here output should be an array with the 2001 date in the 0th position and the 1990 date in the
1st position and (isAsc = false). No other dates are present as they do not conform to the
requirements.