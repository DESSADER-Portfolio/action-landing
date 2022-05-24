/* eslint-disable no-undef */

module.exports = {
  content: ["./build/*.html"],
  css: ["./build/styles/*.css"],
  output: ["./build/styles/"],
  safelist: [/:active/, "no-scroll"],
  defaultExtractor: content => content.match(/[A_Za-z0-9-_:/]+/g)
};