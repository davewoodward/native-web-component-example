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
