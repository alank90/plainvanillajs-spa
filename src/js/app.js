// src/js/app.js

/* jshint esversion:9 */

// ************************************************
// *********** Module Imports *********************
// ************************************************
const Home = require("../resources/views/pages/Home");
const About = require("../resources/views/pages/About");
const Error404 = require("../resources/views/pages/Error404");
const PostShow = require("../resources/views/pages/PostShow");
const Register = require("../resources/views/pages/Register");

const Navbar = require("../resources/views/components/Navbar");
const Bottombar = require("../resources/views/components/Bottombar");

const Utils = require("../resources/services/Utils");
// ****************************************************
// ************** End Module Imports ******************
// ****************************************************


// ************************************************************************
// ************** Router for App ******************************************
// ************************************************************************
// Define the supported routes. Any url other than these will throw a 404 error
const routes = {
  "/": Home,
  "/about": About,
  "/p/:id": PostShow,
  "/register": Register
};

// The router function. Takes a URL, checks against the list of supported routes and renders the corresponding content page.
const router = async () => {
  // Lazy Load view element:
  const header = null || document.getElementById("header_container");
  const content = null || document.getElementById("page_container");
  const footer = null || document.getElementById("footer_container");

  // Render the Header and Footer of the page
  header.innerHTML = await Navbar.render();
  await Navbar.after_render();
  footer.innerHTML = await Bottombar.render();
  await Bottombar.after_render();

  // Get the parsed URL from the addressbar
  let request = Utils.parseRequestURL();
  
  // Parse the URL and if it has an id part, change it with the string ":id"
  let parsedURL =
    (request.resource ? "/" + request.resource : "/") +
    (request.id ? "/:id" : "") +
    (request.verb ? "/" + request.verb : "");

  // Get the page from our hash of supported routes.
  // If the parsed url is not in our list of supported routes, select the 404 page instead
  let page = routes[parsedURL] ? routes[parsedURL] : Error404;
  content.innerHTML = await page.render(); // Render page in addressbar

  await page.after_render(); // perform any post render activities like e.g., event handler for button click
}; 
// ======= End router() function ==========================

// *****************************************************************
// ********* End of Router for App *********************************
// *****************************************************************

// Listen on hash change:
window.addEventListener("hashchange", router);

// Listen on page load:
window.addEventListener("load", router);
