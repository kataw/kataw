# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/misc/destructuring/destructuring-assignment-positive-tests/autogen.md
- Path: kataw8/test\__snapshot__\parser\misc\destructuring\destructuring-assignment-positive-tests\gen\variable_in_for_of
> :: test: variable in for of
> :: case: { z : { __proto__: x, __proto__: y } = z }
## Input

`````js
var x, y, z; for (x of { z : { __proto__: x, __proto__: y } = z } = {});
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
                "start": 0,
                "end": 3
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
                            "start": 3,
                            "end": 5
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 3,
                        "end": 5
                    },
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 6,
                            "end": 8
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 6,
                        "end": 8
                    },
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "z",
                            "rawText": "z",
                            "flags": 96,
                            "start": 9,
                            "end": 11
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 9,
                        "end": 11
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 11
            },
            "flags": 16,
            "start": 0,
            "end": 12
        },
        {
            "kind": 167,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "start": 12,
                "end": 16
            },
            "awaitKeyword": null,
            "initializer": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 18,
                "end": 19
            },
            "ofKeyword": {
                "kind": 16793717,
                "flags": 64,
                "start": 19,
                "end": 22
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
                                "generatorToken": null,
                                "left": {
                                    "kind": 134299649,
                                    "text": "z",
                                    "rawText": "z",
                                    "flags": 96,
                                    "start": 24,
                                    "end": 26
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
                                                        "start": 30,
                                                        "end": 40
                                                    },
                                                    "right": {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 96,
                                                        "start": 41,
                                                        "end": 43
                                                    },
                                                    "flags": 36,
                                                    "start": 30,
                                                    "end": 43
                                                },
                                                {
                                                    "kind": 219,
                                                    "generatorToken": null,
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
                                                        "text": "y",
                                                        "rawText": "y",
                                                        "flags": 96,
                                                        "start": 55,
                                                        "end": 57
                                                    },
                                                    "flags": 36,
                                                    "start": 44,
                                                    "end": 57
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 20,
                                            "start": 30,
                                            "end": 57
                                        },
                                        "flags": 52,
                                        "start": 28,
                                        "end": 59
                                    },
                                    "operatorToken": {
                                        "kind": 4125,
                                        "flags": 64,
                                        "start": 59,
                                        "end": 61
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "z",
                                        "rawText": "z",
                                        "flags": 96,
                                        "start": 61,
                                        "end": 63
                                    },
                                    "flags": 32,
                                    "start": 28,
                                    "end": 63
                                },
                                "flags": 32,
                                "start": 24,
                                "end": 63
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 24,
                        "end": 63
                    },
                    "flags": 48,
                    "start": 22,
                    "end": 65
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 65,
                    "end": 67
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 69,
                        "end": 69
                    },
                    "flags": 48,
                    "start": 67,
                    "end": 70
                },
                "flags": 32,
                "start": 22,
                "end": 70
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 71,
                "end": 72
            },
            "flags": 16,
            "start": 12,
            "end": 72
        }
    ],
    "isModule": false,
    "source": "var x, y, z; for (x of { z : { __proto__: x, __proto__: y } = z } = {});",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 72
}
```

### Printed

```javascript

var x, y, z;
for (x of { z: { __proto__: x, __proto__: y } = z } = {});
```

### Diagnostics

```javascript
✔ No errors
```

