/* jshint esversion:9 */

let Error404 = {
  render: async () => {
    let view =
      /*html*/
      `
        <section class="section">
            <h1> 404 Error. Please recheck your address.
        </section>
        `;

    return view;
  },
  after_render: async () => {}
};

module.exports = Error404;
