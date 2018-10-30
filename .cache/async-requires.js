// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-app-js": () => import("/Users/edo/Documents/git/rebekahrhodes.github.io/src/pages/App.js" /* webpackChunkName: "component---src-pages-app-js" */),
  "component---src-pages-index-js": () => import("/Users/edo/Documents/git/rebekahrhodes.github.io/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */)
}

exports.data = () => import("/Users/edo/Documents/git/rebekahrhodes.github.io/.cache/data.json")

