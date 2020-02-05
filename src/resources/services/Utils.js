// src/resources/services/Utils.js
/* jshint esversion:9 */

const Utils = {
  // ========================================================
  // Parse a url and break it into resource, id and verb
  // =========================================================

  parseRequestURL: () => {
    let url = location.hash.slice(1).toLocaleLowerCase() || "/"; // returns hash portion of url sans the #
    let r = url.split("/"); // Divide hash into component parts as an array
    let request = {
      resource: null,
      id: null,
      verb: null
    };
    request.resource = r[1];
    request.id = r[2];
    request.verb = r[3];

    return request;
  },

  // ================================
  // Simple sleep implementation
  // ================================
  sleep: ms => {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
};

module.exports = Utils;
