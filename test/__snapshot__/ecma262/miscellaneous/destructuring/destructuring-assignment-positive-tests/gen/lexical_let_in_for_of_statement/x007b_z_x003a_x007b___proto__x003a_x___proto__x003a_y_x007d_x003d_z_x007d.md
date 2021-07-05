# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/miscellaneous/destructuring/destructuring-assignment-positive-tests/autogen.md
- Path: kataw/test/__snapshot__/ecma262/miscellaneous/destructuring/destructuring-assignment-positive-tests/gen/lexical_let_in_for_of_statement
> :: test: lexical let in for of statement
> :: case: { z : { __proto__: x, __proto__: y } = z }
## Options

`````js
{}
`````
## Input

`````js
'use strict'; let x, y, z; for (x of { z : { __proto__: x, __proto__: y } = z } = {});
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
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 80,
                "start": 13,
                "end": 17
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 17,
                            "end": 19
                        },
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 17,
                        "end": 19
                    },
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 20,
                            "end": 22
                        },
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 20,
                        "end": 22
                    },
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "z",
                            "rawText": "z",
                            "flags": 96,
                            "start": 23,
                            "end": 25
                        },
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 23,
                        "end": 25
                    }
                ],
                "flags": 16,
                "start": 17,
                "end": 25
            },
            "flags": 33554448,
            "start": 13,
            "end": 26
        },
        {
            "kind": 167,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "start": 26,
                "end": 30
            },
            "awaitKeyword": null,
            "initializer": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 32,
                "end": 33
            },
            "ofKeyword": {
                "kind": 16793717,
                "flags": 64,
                "start": 33,
                "end": 36
            },
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 219,
                                "asteriskToken": null,
                                "left": {
                                    "kind": 134299649,
                                    "text": "z",
                                    "rawText": "z",
                                    "flags": 96,
                                    "start": 38,
                                    "end": 40
                                },
                                "right": {
                                    "kind": 125,
                                    "left": {
                                        "kind": 220,
                                        "propertyList": {
                                            "kind": 218,
                                            "properties": [
                                                {
                                                    "kind": 219,
                                                    "asteriskToken": null,
                                                    "left": {
                                                        "kind": 134299649,
                                                        "text": "__proto__",
                                                        "rawText": "__proto__",
                                                        "flags": 96,
                                                        "start": 44,
                                                        "end": 54
                                                    },
                                                    "right": {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 96,
                                                        "start": 55,
                                                        "end": 57
                                                    },
                                                    "flags": 36,
                                                    "start": 44,
                                                    "end": 57
                                                },
                                                {
                                                    "kind": 219,
                                                    "asteriskToken": null,
                                                    "left": {
                                                        "kind": 134299649,
                                                        "text": "__proto__",
                                                        "rawText": "__proto__",
                                                        "flags": 96,
                                                        "start": 58,
                                                        "end": 68
                                                    },
                                                    "right": {
                                                        "kind": 134299649,
                                                        "text": "y",
                                                        "rawText": "y",
                                                        "flags": 96,
                                                        "start": 69,
                                                        "end": 71
                                                    },
                                                    "flags": 36,
                                                    "start": 58,
                                                    "end": 71
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 20,
                                            "start": 44,
                                            "end": 71
                                        },
                                        "flags": 52,
                                        "start": 42,
                                        "end": 73
                                    },
                                    "operatorToken": {
                                        "kind": 4125,
                                        "flags": 96,
                                        "start": 73,
                                        "end": 75
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "z",
                                        "rawText": "z",
                                        "flags": 96,
                                        "start": 75,
                                        "end": 77
                                    },
                                    "flags": 32,
                                    "start": 42,
                                    "end": 77
                                },
                                "flags": 32,
                                "start": 38,
                                "end": 77
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 38,
                        "end": 77
                    },
                    "flags": 48,
                    "start": 36,
                    "end": 79
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 79,
                    "end": 81
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 83,
                        "end": 83
                    },
                    "flags": 48,
                    "start": 81,
                    "end": 84
                },
                "flags": 32,
                "start": 36,
                "end": 84
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 85,
                "end": 86
            },
            "flags": 80,
            "start": 26,
            "end": 86
        }
    ],
    "isModule": false,
    "source": "'use strict'; let x, y, z; for (x of { z : { __proto__: x, __proto__: y } = z } = {});",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 86
}
```

### Printed

```javascript

'\'use strict\'';
let x, y, z;
for (x of {z: {__proto__: x, __proto__: y} = z} = {});

```

### Diagnostics

```javascript
✔ No errors
```

