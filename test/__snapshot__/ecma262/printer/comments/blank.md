# Kataw parser test case

## Input

`````js
// This file only
// has comments. This comment
// should still exist
//
// when printed.

/**
 * @typedef {DataDrivenMapping|ConstantMapping} Mapping
 */
/**
 * @typedef {Object.<String, Mapping>} ConfigurationMapping
 */

/**
 * @typedef {Function} D3Scale - a D3 scale
 * @property {Function} ticks
 * @property {Function} tickFormat
 */
// comment

// comment
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [],
    "isModule": false,
    "source": "// This file only\n// has comments. This comment\n// should still exist\n//\n// when printed.\n\n/**\n * @typedef {DataDrivenMapping|ConstantMapping} Mapping\n */\n/**\n * @typedef {Object.<String, Mapping>} ConfigurationMapping\n */\n\n/**\n * @typedef {Function} D3Scale - a D3 scale\n * @property {Function} ticks\n * @property {Function} tickFormat\n */\n// comment\n\n// comment",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 363
}
```

### Printed

```javascript


```

### Diagnostics

```javascript
✔ No errors
```

