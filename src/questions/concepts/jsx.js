/* 
JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like code inside JavaScript. 
It makes React components more readable and expressive.
It must be compiled (using Babel) before browsers understand it.

✅ Easier to write and understand
✅ Looks like HTML but is JavaScript
✅ Prevents XSS (Cross-Site Scripting) automatically
✅ Works with JavaScript expressions inside {}
*/

//JSX
const element = <h1>Hello, JSX!</h1>;

// JS
const element2 = React.createElement("h1", null, "Hello, JSX!");
