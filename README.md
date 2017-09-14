# Native Web Component Example

## Overview
This project demonstrates a native "plain vanilla" composite web component that uses attributes, event handling, binding, and calls a REST API.  "Plain vanilla" is meant to indicate that it does not use a web component library such as Polymer to provide binding and facilitate attribute and event handling.  "Composite" is meant to indicate that it demonstrates a web component, which itself contains an embedded web component.

## Prerequisites
* [Git](https://git-scm.com/)
* [NodeJS](https://nodejs.org)
* [Yarn](https://yarnpkg.com/en/)

## Setup

    $ git clone https://github.com/davewoodward/native-web-component-example.git
    $ yarn install
    $ yarn start


Once the previous setup steps have been executed you should be able to browse the example by pointing your browser to [http://localhost/](http://localhost/).  By default, the express server launched listens on port 80.  However, this can be overridden by setting the "PORT" environment variable to another value.

## Why web components?
* They are built to work with the web platform instead of doing their own thing on top of it, which has several positive side-effects...
* No build tools required!
* Easier to debug (i.e. no source maps required).
* They are performant.
* They are your best hope for reuse across a wide-variety of front-end frameworks.  _Try to plug an Angular Directive into a React application or a React component into an Angular application and see what happens._
* As a w3c standard, they provide a stable foundation for building reusable components.
* Even for those browsers that don't support the full specification yet the polyfill is very small; much smaller than would be required to develop components using other frameworks.

Undoubtedly there are more, but these are the ones that sold me on using web components.  Web components will never be a replacement for a full front-end framework.  However, they can be a nice addition to your toolbelt if you want to share front-end components across applications.  Check-out [Custom Elements Everywhere](https://custom-elements-everywhere.com/) to get the latest on front-end framework interoperability with custom elements.
