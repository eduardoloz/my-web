
// All items we'd like to add
var navItems = [
    {href: '/../pages/about.html', text: 'Home'},
    {href: '/../index.html', text: 'Projects'},
    {href: '/../pages/about.html', text: 'About'},
    {href: '/../pages/contact.html', text: 'Contact'}
];

// create our div to put the links in
const navDiv = document.createElement("div");
navDiv.classList.add("nav-links");

//get the nav element from the HTML
const navBar = document.getElementById("navBar");
console.log(navDiv)
console.log(navBar)

//insert our div after nav
navBar.insertBefore(navDiv, navBar.children[0]);
//add all the navItems to our navDiv

var navItem, navLink;

for (var i = 0; i < navItems.length; i++) {
    navLink = document.createElement("a");

    // Set properties on anchor
    navLink.href = navItems[i].href;
    navLink.innerHTML = navItems[i].text;

    // Add anchor to list item, and list item to list
    navDiv.appendChild(navLink);
}