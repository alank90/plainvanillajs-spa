/* jshint esversion:9 */

let About = {
  render: async () => {
    let view =
      /*html*/
      `
        <section class="section">
            <h1> About  </h1>
        </section>
        `;

    return view;
  },
  after_render: async () => {}
};

module.exports = About;
