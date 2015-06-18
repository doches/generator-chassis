# generator-chassis [![Build Status](https://secure.travis-ci.org/doches/generator-chassis.png?branch=master)](https://travis-ci.org/doches/generator-chassis)

> [Yeoman](http://yeoman.io) generator

A Yeoman generator for scaffolding ready-to-rock webapps, with built-in support for:

    + Live reload for HTML and Javascript, plus automatic CSS injection, using [BrowserSync](http://www.browsersync.io).
    + Coffeescript compilation with `gulp-coffee`.
    + Less compilation, with easy-to-configure includes, using `gulp-less`.
    + [Handlebars](http://handlebarsjs.com) templates.
    + Automatic injection of [Bower](http://bower.io) components into your HTML.
    + PNG opimisation using [OptiPNG](http://optipng.sourceforge.net).

## Getting started

Install yeoman and the chassis generator:

    npm install -g yo generator-chassis

scaffold out your project with:

    yo chassis

Answer a few easy questions, then kick off a development server with:

    gulp dev

\o/

When you're ready to deploy, build a release version of your site with:

    gulp dist
