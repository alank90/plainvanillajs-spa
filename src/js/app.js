// src/js/app.js

/* jshint esversion:9 */
// List of supported routes. Any url other than these will throw a 404 error
const routes = {
  "/": Home,
  "/about": About,
  "/p/:id": PostShow,
  "/register": Register
};

// The router code. takes a URL,checks against the list of supported routes and renders the corresponding content page.
const router = async () => {
  //Lazy Load view element:
  const content = null || document.getElementById("page_container");

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
  content.innerHTML = await page.render();
  await page.after_render();
}; //end router function

// Listen oh hash change:
window.addEventListener("hashchange", router);

// Listen on page load:
window.addEventListener("load", router);
