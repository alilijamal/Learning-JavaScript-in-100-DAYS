//OR
//Most of the time, OR || is used in an if statement to test if any of the given conditions is true.
//1.
let hour = 9;

if (hour < 10 || hour > 18) {
  alert( 'The office is closed.' );
}

//2
let houR = 12;
let isWeekend = true;

if (hour < 10 || hour > 18 || isWeekend) {
  alert( 'The office is closed.' ); // it is the weekend
}

//&&(AND)
let hoUr = 12;
let minute = 30;

if (hour == 12 && minute == 30) {
  alert( 'The time is 12:30' );
}

//!(NOT)
alert( !true ); // false
alert( !0 ); // true