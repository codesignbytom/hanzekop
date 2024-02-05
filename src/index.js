import "./main.scss";

// Import all files from /js folder
function importAll(r) {
  r.keys().forEach(r);
}
importAll(require.context("./js/", true, /\.js$/));
