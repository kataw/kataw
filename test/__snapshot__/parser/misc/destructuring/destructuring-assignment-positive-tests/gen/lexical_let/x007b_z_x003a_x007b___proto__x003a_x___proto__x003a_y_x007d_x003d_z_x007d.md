# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/misc/destructuring/destructuring-assignment-positive-tests/autogen.md
- Path: kataw8/test\__snapshot__\parser\misc\destructuring\destructuring-assignment-positive-tests\gen\lexical_let
> :: test: lexical let
> :: case: { z : { __proto__: x, __proto__: y } = z }
## Input

`````js
'use strict'; let x, y, z; ({ z : { __proto__: x, __proto__: y } = z }= {});
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
                        "optionalToken": null,
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
                        "optionalToken": null,
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
                        "optionalToken": null,
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
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 219,
                                    "generatorToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "z",
                                        "rawText": "z",
                                        "flags": 96,
                                        "start": 29,
                                        "end": 31
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
                                                        "generatorToken": null,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "__proto__",
                                                            "rawText": "__proto__",
                                                            "flags": 96,
                                                            "start": 35,
                                                            "end": 45
                                                        },
                                                        "right": {
                                                            "kind": 134299649,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 96,
                                                            "start": 46,
                                                            "end": 48
                                                        },
                                                        "flags": 36,
                                                        "start": 35,
                                                        "end": 48
                                                    },
                                                    {
                                                        "kind": 219,
                                                        "generatorToken": null,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "__proto__",
                                                            "rawText": "__proto__",
                                                            "flags": 96,
                                                            "start": 49,
                                                            "end": 59
                                                        },
                                                        "right": {
                                                            "kind": 134299649,
                                                            "text": "y",
                                                            "rawText": "y",
                                                            "flags": 96,
                                                            "start": 60,
                                                            "end": 62
                                                        },
                                                        "flags": 36,
                                                        "start": 49,
                                                        "end": 62
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 20,
                                                "start": 35,
                                                "end": 62
                                            },
                                            "flags": 52,
                                            "start": 33,
                                            "end": 64
                                        },
                                        "operatorToken": {
                                            "kind": 4125,
                                            "flags": 64,
                                            "start": 64,
                                            "end": 66
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "z",
                                            "rawText": "z",
                                            "flags": 96,
                                            "start": 66,
                                            "end": 68
                                        },
                                        "flags": 32,
                                        "start": 33,
                                        "end": 68
                                    },
                                    "flags": 32,
                                    "start": 29,
                                    "end": 68
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 29,
                            "end": 68
                        },
                        "flags": 48,
                        "start": 28,
                        "end": 70
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 64,
                        "start": 70,
                        "end": 71
                    },
                    "right": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 73,
                            "end": 73
                        },
                        "flags": 48,
                        "start": 71,
                        "end": 74
                    },
                    "flags": 32,
                    "start": 28,
                    "end": 74
                },
                "flags": 32,
                "start": 26,
                "end": 75
            },
            "flags": 16,
            "start": 26,
            "end": 76
        }
    ],
    "isModule": false,
    "source": "'use strict'; let x, y, z; ({ z : { __proto__: x, __proto__: y } = z }= {});",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 76
}
```

### Printed

```javascript

let x, y, z;
({ z: { __proto__: x, __proto__: y } = z } = {});
```

### Diagnostics

```javascript
✔ No errors
```

