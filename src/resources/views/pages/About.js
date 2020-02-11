/* jshint esversion:9 */

let About = {
  render: async () => {
    let view =
      /*html*/
      `
        <section class="section">
            <h1> About  </h1>
            <button id="myBtn"> Button </button>
        </section>
        `;

    return view;
  },
  /* The way to add event-handlers for your page controls is by adding another 
    function to the page object like this */
  after_render: async () => {
    document.getElementById("myBtn").addEventListener("click", () => {
      console.log("Stop Clicking Me");
    });
  }
};

module.exports = About;
