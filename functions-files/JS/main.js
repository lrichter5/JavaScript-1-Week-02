/* Main.js
   This is a comment block, enclosed in a slash + asterisk
   and ending with an asterisk + slash
*/
// Demo of calling a function - console is the JavaScript editor enviroment in the browser
// console.log(message);
console.log("main.js is loaded");

// The updateInnerHTMLK function has two parameters:
// - slector - is a string that identifies which DOM element to get/select
// - newValue - is a string that will be the new value for the selectors's .innerHTML
function updateInnerHTML(selector, newValue) {
    document.querySelector(selector).innerHTML = newValue;
  }

  function strong(value) {
    // Combining strings to produce a bnew string is called concatenation
    return '<strong>' + value + '</strong>';
  }