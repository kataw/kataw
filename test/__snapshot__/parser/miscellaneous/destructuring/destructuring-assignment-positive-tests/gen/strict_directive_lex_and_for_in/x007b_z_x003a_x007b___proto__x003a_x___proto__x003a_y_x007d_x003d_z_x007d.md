# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/miscellaneous/destructuring/destructuring-assignment-positive-tests/autogen.md
- Path: kataw8/test\__snapshot__\parser\miscellaneous\destructuring\destructuring-assignment-positive-tests\gen\strict_directive_lex_and_for_in
> :: test: strict directive lex and for in
> :: case: { z : { __proto__: x, __proto__: y } = z }
## Input

`````js
'use strict'; let x, y, z; for (x in x = { z : { __proto__: x, __proto__: y } = z } = z = {});
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
            "kind": 166,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "start": 26,
                "end": 30
            },
            "initializer": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 32,
                "end": 33
            },
            "inKeyword": {
                "kind": 21006388,
                "flags": 64,
                "start": 33,
                "end": 36
            },
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 36,
                    "end": 38
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
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
                                    "generatorToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "z",
                                        "rawText": "z",
                                        "flags": 96,
                                        "start": 42,
                                        "end": 44
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
                                                            "start": 48,
                                                            "end": 58
                                                        },
                                                        "right": {
                                                            "kind": 134299649,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 96,
                                                            "start": 59,
                                                            "end": 61
                                                        },
                                                        "flags": 36,
                                                        "start": 48,
                                                        "end": 61
                                                    },
                                                    {
                                                        "kind": 219,
                                                        "generatorToken": null,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "__proto__",
                                                            "rawText": "__proto__",
                                                            "flags": 96,
                                                            "start": 62,
                                                            "end": 72
                                                        },
                                                        "right": {
                                                            "kind": 134299649,
                                                            "text": "y",
                                                            "rawText": "y",
                                                            "flags": 96,
                                                            "start": 73,
                                                            "end": 75
                                                        },
                                                        "flags": 36,
                                                        "start": 62,
                                                        "end": 75
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 20,
                                                "start": 48,
                                                "end": 75
                                            },
                                            "flags": 52,
                                            "start": 46,
                                            "end": 77
                                        },
                                        "operatorToken": {
                                            "kind": 4125,
                                            "flags": 64,
                                            "start": 77,
                                            "end": 79
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "z",
                                            "rawText": "z",
                                            "flags": 96,
                                            "start": 79,
                                            "end": 81
                                        },
                                        "flags": 32,
                                        "start": 46,
                                        "end": 81
                                    },
                                    "flags": 32,
                                    "start": 42,
                                    "end": 81
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 42,
                            "end": 81
                        },
                        "flags": 48,
                        "start": 40,
                        "end": 83
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 64,
                        "start": 83,
                        "end": 85
                    },
                    "right": {
                        "kind": 125,
                        "left": {
                            "kind": 134299649,
                            "text": "z",
                            "rawText": "z",
                            "flags": 96,
                            "start": 85,
                            "end": 87
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "flags": 64,
                            "start": 87,
                            "end": 89
                        },
                        "right": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 91,
                                "end": 91
                            },
                            "flags": 48,
                            "start": 89,
                            "end": 92
                        },
                        "flags": 32,
                        "start": 85,
                        "end": 92
                    },
                    "flags": 32,
                    "start": 40,
                    "end": 92
                },
                "flags": 32,
                "start": 36,
                "end": 92
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 93,
                "end": 94
            },
            "flags": 80,
            "start": 26,
            "end": 94
        }
    ],
    "isModule": false,
    "source": "'use strict'; let x, y, z; for (x in x = { z : { __proto__: x, __proto__: y } = z } = z = {});",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 94
}
```

### Printed

```javascript

let x, y, z;
for (x in x = { z: { __proto__: x, __proto__: y } = z } = z = {});
```

### Diagnostics

```javascript
✔ No errors
```

