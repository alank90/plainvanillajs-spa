const Utils = {
  // ========================================================
  // Parse a url and break it into resource, id and verb
  // =========================================================

  parseRequestURL: () => {
    let url = location.hash.slice(1).toLocaleLowerCase() || "/";
    let r = url.split("/");
    let request = {
      resource: null,
      id: null,
      verb: null
    };
  }
};
