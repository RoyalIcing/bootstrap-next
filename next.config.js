// next.config.js
module.exports = {
  exportPathMap: function () {
    return {
      "/": { page: "/" },
      "/library/components": { page: "/library/components" },
      "/repos/react": { page: "/repos", query: { term: "react", language: "javascript" } },
      "/repos/swift": { page: "/repos", query: { term: "swift" } },
      "/repos/elm/gl": { page: "/repos", query: { term: "gl", language: "elm" } }
    }
  },
}