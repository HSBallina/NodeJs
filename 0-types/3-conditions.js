// Conditional op's
// Generally the same as in C#
// if / else / else if / switch / ternary if

switch (new Date().getDay()) {  // <--- expression here
  case 6:                       // <-- never here  
      console.log('Saturday');
      break;
  case 0:                       // <-- or here 
      console.log('Sunday');
  default:                      // Cascades
      console.log('Weekday');
}