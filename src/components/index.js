// Component library tree shaker

// This technique is used to bring import components only as they are needed
// as it allows Webpack to analyze this code before including it thus preventing
// unused components from being imported. It also allows for named imports when
// these components are used elsewhere
export { default as Jumbotron } from './jumbotron'
export { default as Footer } from './footer'