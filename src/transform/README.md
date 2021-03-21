# Transformers

This files and folders contains the files needed to transform Javascript / Typescript source code to older ECMA versions.

## API

```js

// parse script
transformScript('a ?? b, [es2020], { OPTIONS});');

// parse with module goal

transformModule('a ?? b, [es2020], { OPTIONS});');

```

## Available transformers

As of now this transformers are available. The others are still WIP.

- ES2020
- ES2019
- ES2016
