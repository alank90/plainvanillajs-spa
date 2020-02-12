/* jshint esversion:9 */

// ========================================
//   Define Data Sources
// ========================================

let getPostsList = async () => {
  const options = {
    method: "Get",
    headers: {
      "Content-Type": "application/json"
    }
  };

  try {
    const response = await fetch(
      `https://5e42dfa7f6128600148adb8a.mockapi.io/api/posts/`,
      options
    );
    const json = await response.json();

    return json;
  } catch (err) {
    console.log(
      "Error getting documents. Is School Firewall blocking .io domain?",
      err
    );
  }
};

let Home = {
  render: async () => {
    let posts = await getPostsList();

    let view =
      /*html*/
      `
        <section class="section">
            <h1> Home </h1>
                <ul> 
                    ${posts
                      .map(
                        post =>
                          /*html*/
                          `<li><a href="#/p/${post.id}"> ${post.title} </a></li>`
                      )
                      .join("\n")
                    }
                  
                </ul>
        </section>

       `;

    return view;
  },
  after_render: async () => {
    // Code for page events (i.e. button clicks) goes here if necessary
  }
};

module.exports = Home;
