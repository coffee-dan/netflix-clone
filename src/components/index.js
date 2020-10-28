// Component library tree shaker

// This technique is used to bring import components only as they are needed
// as it allows Webpack to analyze this code before including it thus preventing
// unused components from being imported. It also allows for named imports when
// these components are used elsewhere
export { default as Accordion } from './accordion'
export { default as Jumbotron } from './jumbotron'
export { default as Footer } from './footer'
export { default as OptForm } from './opt-form'
export { default as Header } from './header'
export { default as Feature } from './feature'
export { default as Form } from './form'
export { default as Profiles } from './profiles'
