/* jshint esversion:9 */

const Utils = require("../../services/Utils");

let getPost = async id => {
  const options = {
    method: "Get",
    headers: {
      "Content-type": "application/json"
    }
  };

  try {
    const response = await fetch(
      `https://5bb634f6695f8d001496c082.mockapi.io/api/posts/` + id,
      options
    );
    const json = await response.json();
    console.log(json);

    return json;
  } catch (err) {
    console.log(" Error getting documents", err);
  }
};

let PostShow = {
  render: async () => {
    let request = Utils.parseRequestURL();
    let post = await getPost(request.id);

    return /*html*/ `
                <section class="section">
                    <h1> Post Id : ${post.id} </h1>
                    <p> Post Titile : ${post.id} </p>
                    <p> Post Content : ${post.content} </p>
                    <p> Post Author : ${post.name} </p>
                </section>
            `;
  },
  after_render: async () => {}
};

module.exports = PostShow;
