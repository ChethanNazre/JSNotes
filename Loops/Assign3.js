//Write a JavaScript program to convert temperatures to and from celsius, fahrenheit. [ Use the formula : c/5 = (f-32)/9, where c = temperature in celsius and f = temperature in fahrenheit]

function convert_temp(temp, scale) {
  switch (scale) {
    case "celsius":
      return (temp * 9/5) + 32;
    case "fahrenheit":
      return (temp - 32) * 5/9;
    default:
      return "Invalid scale";
  }
}
// Test the function
console.log(convert_temp(0, "celsius"));  // Output: 32
console.log(convert_temp(32, "fahrenheit"));  // Output: 0