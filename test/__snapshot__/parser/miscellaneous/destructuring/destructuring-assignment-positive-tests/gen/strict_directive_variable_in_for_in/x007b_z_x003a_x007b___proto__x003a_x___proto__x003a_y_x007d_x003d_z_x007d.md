# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/miscellaneous/destructuring/destructuring-assignment-positive-tests/autogen.md
- Path: kataw8/test\__snapshot__\parser\miscellaneous\destructuring\destructuring-assignment-positive-tests\gen\strict_directive_variable_in_for_in
> :: test: strict directive variable in for in
> :: case: { z : { __proto__: x, __proto__: y } = z }
## Input

`````js
'use strict'; var x, y, z; for ({ z : { __proto__: x, __proto__: y } = z } in {});
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
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
                "start": 13,
                "end": 17
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
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
                        "kind": 157,
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
                        "kind": 157,
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
            "flags": 16,
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
                                "start": 33,
                                "end": 35
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
                                                    "start": 39,
                                                    "end": 49
                                                },
                                                "right": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "start": 50,
                                                    "end": 52
                                                },
                                                "flags": 36,
                                                "start": 39,
                                                "end": 52
                                            },
                                            {
                                                "kind": 219,
                                                "generatorToken": null,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "__proto__",
                                                    "rawText": "__proto__",
                                                    "flags": 96,
                                                    "start": 53,
                                                    "end": 63
                                                },
                                                "right": {
                                                    "kind": 134299649,
                                                    "text": "y",
                                                    "rawText": "y",
                                                    "flags": 96,
                                                    "start": 64,
                                                    "end": 66
                                                },
                                                "flags": 36,
                                                "start": 53,
                                                "end": 66
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 20,
                                        "start": 39,
                                        "end": 66
                                    },
                                    "flags": 52,
                                    "start": 37,
                                    "end": 68
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 64,
                                    "start": 68,
                                    "end": 70
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "z",
                                    "rawText": "z",
                                    "flags": 96,
                                    "start": 70,
                                    "end": 72
                                },
                                "flags": 32,
                                "start": 37,
                                "end": 72
                            },
                            "flags": 32,
                            "start": 33,
                            "end": 72
                        }
                    ],
                    "trailingComma": false,
                    "flags": 16,
                    "start": 33,
                    "end": 72
                },
                "flags": 48,
                "start": 32,
                "end": 74
            },
            "inKeyword": {
                "kind": 21006388,
                "flags": 64,
                "start": 74,
                "end": 77
            },
            "expression": {
                "kind": 220,
                "propertyList": {
                    "kind": 218,
                    "properties": [],
                    "trailingComma": false,
                    "flags": 16,
                    "start": 79,
                    "end": 79
                },
                "flags": 48,
                "start": 77,
                "end": 80
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 81,
                "end": 82
            },
            "flags": 16,
            "start": 26,
            "end": 82
        }
    ],
    "isModule": false,
    "source": "'use strict'; var x, y, z; for ({ z : { __proto__: x, __proto__: y } = z } in {});",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 82
}
```

### Printed

```javascript

var x, y, z;
for ({ z: { __proto__: x, __proto__: y } = z } in {});
```

### Diagnostics

```javascript
✔ No errors
```

