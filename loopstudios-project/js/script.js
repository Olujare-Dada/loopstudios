const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

btn.addEventListener("click", navToggle);

function navToggle() {
  btn.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");
}

/* 
Steps to create Hamburger menu:
1. Make it visible only on small screens.
2. Let the menus be visible on flex row in medium screens and up.
3. Create a button with hamburger class. Give it an ID
4. Define hamburger class in input.css file
5. Define 3 spans in button. These will make up your hamburger menu
6. Name the spans classes with suffixes of top, middle, and bottom.
7. Define the position, width, height of the spans in the input.css
8. Also define an open class for the hamburger menu in the input.css which translates the spans into an "X"
9. Create a javascript file and add it to the top of index.html
10. Use the above code to toggle the hamburger menu

*/
