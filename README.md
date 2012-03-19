# placehold.js 
### A simple placeholder polyfill...

 - Copyright 2012: Joe Giuffrida, http://www.josephgiuffrida.com
 - Dual licensed under the MIT or GPL Version 2 licenses. 

The goal of this script is provide a simple method of enabling the placeholder attribute in browsers without native support. 

Usage Instructions
======

1. Include jQuery (jQuery version 1.7+ required) and placehold.jquery.ugly.js on page
2. $('input').placehold();
3. See your glorious placeholders working in some not so glorious browsers.


Technical Details
======
First we test if the browser natively supports, if it does, great, do nothing. If there is no browser support we then wrap the input with a span which is relatively positioned and append a second span which is absolutely positioned on top of the input. We then attach some events to hide/show and get out of the way.
