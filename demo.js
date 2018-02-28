// Take 10 digits and format that in the following style with
// the appropriate symbols: (555) 555-5555

var userNumber = prompt("Please enter your 10 digit number:");

var formatNumber = function (userNumber) {

  // Removes non-numerical and checks for 10 digits
  if (userNumber.replace(/[^0-9]/g, '').length === 10) {

    // Breaks the numbers up by sections
    var areaCode = userNumber.slice(0,3);
    var middle3 = userNumber.slice(3,6);
    var last4 = userNumber.slice(6,10);

    // Formats them for appropriate output
    alert("You've entered (" + areaCode + ") " + middle3 + " - " + last4 );
  } else {
    userNumber = prompt("Invalid entry. Enter a 10 digit number");
    formatNumber(userNumber);
  }
}
formatNumber(userNumber);
