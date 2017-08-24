![banner](https://s3-eu-west-1.amazonaws.com/asaburido/ngx-canaima-github-banner2.png)

# ngx-canaima [![npm version](https://badge.fury.io/js/ngx-canaima.svg)](http://badge.fury.io/js/ngx-canaima) [![npm downloads](https://img.shields.io/npm/dm/ngx-canaima.svg)](https://npmjs.org/ngx-canaima)

Angular 4+ Awesome UI Components 

[![Angular Style Guide](https://mgechev.github.io/angular2-style-guide/images/badge.svg)](https://angular.io/guide/styleguide)
[![Build Status](https://travis-ci.org/valor-software/ngx-canaima.svg?branch=master)](https://travis-ci.org/valor-software/ngx-canaima)
<!-- [![codecov](https://codecov.io/gh/valor-software/ngx-canaima/branch/development/graph/badge.svg)](https://codecov.io/gh/valor-software/ngx-canaima)
[![Dependency Status](https://david-dm.org/valor-software/ngx-canaima.svg)](https://david-dm.org/valor-software/ngx-canaima) -->

[![NPM](https://nodei.co/npm/ngx-canaima.png?downloads=true&downloadRank=true&stars=true)](https://npmjs.org/ngx-canaima)
[![NPM](https://nodei.co/npm-dl/ngx-canaima.png?height=3&months=6)](https://npmjs.org/ngx-canaima)
[![Sauce Test Status](https://saucelabs.com/browser-matrix/valorkin.svg)](https://saucelabs.com/u/valorkin)

## Table of contents
1. [Getting Started](#getting-started)
2. [Installation instructions](#installation-instructions)
3. [Usage & Demo](#usage--demo)
4. [API](#api)
5. [Troubleshooting](#troubleshooting)
6. [Contributing](#contribution)
7. [License](#license)

## Installation instructions

To install this library, run:

```bash
$ npm install ngx-canaima --save
```
You will need bootstrap styles (Bootstrap 3)

```
<!-- index.html -->
<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
```

## Consuming your library

Once you have published your library to npm, you can import your library in any Angular application by running:

```bash
$ npm install ngx-canaima
```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import your library
import { NgxCanaimaModule } from 'ngx-canaima';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxCanaimaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once your library is imported, you can use its components, directives and pipes in your Angular application:

```xml
<!-- You can now use your library component in app.component.html -->
<h1>
  {{title}}
</h1>
<sampleComponent></sampleComponent>
```

## Development

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## License

MIT © [Alvaro Saburido](mailto:alvaro.saburido@gmail.com)
