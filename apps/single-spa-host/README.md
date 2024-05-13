# single-spa-root

![](https://img.shields.io/badge/NodeJS-20.13.1-blue?logo=nodedotjs)
![](https://img.shields.io/badge/npm-10.2.3-green?logo=npm)
![](https://img.shields.io/badge/create--single--spa-4.1.5-yellow)
![](https://img.shields.io/badge/single--spa-5.9.5-darkred)
![](https://img.shields.io/badge/single--spa--layout-2.2.0-red)
![](https://img.shields.io/badge/primeng-17.16.0-lightblue)

## Description

Host app created with `npx create-single-spa`. Single-spa-layout has been added after creation (not using option in create-single-spa process).

## Files

- index.ejs: declares html structure for microfrontends, and imports all relevant Javascript files
- root-config.js: uses [layout-engine, AKA single-spa-layout](https://single-spa.js.org/docs/layout-overview/) to read html template and inject all microfrontends

## Local Deployment

Just run `npm start`on terminal. Process starts on port 9000

## Configuration

Use [webpack.config.js](webpack.config.js) to add and configure plugins.

## Layout

We are going to rely on a free PrimeNg template called [Sakai](https://sakai.primeng.org/).
