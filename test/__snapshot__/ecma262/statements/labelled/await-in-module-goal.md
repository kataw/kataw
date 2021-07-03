# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
'use strict'; protecte\u0064: 0
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [
        {
            "kind": 201392131,
            "text": "use strict",
            "rawText": "'use strict'",
            "flags": 4194400,
            "start": 0,
            "end": 12
        }
    ],
    "statements": [
        {
            "kind": 163,
            "label": {
                "kind": 134299649,
                "text": "protected",
                "rawText": "protecte\\u0064",
                "flags": 16480,
                "start": 13,
                "end": 28
            },
            "colonToken": {
                "kind": 21,
                "flags": 64,
                "start": 28,
                "end": 29
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "0",
                    "flags": 96,
                    "start": 29,
                    "end": 31
                },
                "flags": 16,
                "start": 29,
                "end": 31
            },
            "flags": 16400,
            "start": 13,
            "end": 31
        }
    ],
    "isModule": true,
    "source": "'use strict'; protecte\\u0064: 0",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 31
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected. Reserved word in strict mode - start: 13, end: 28

```

