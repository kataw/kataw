# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/misc/destructuring/destructuring-assignment-positive-tests/autogen.md
- Path: kataw8/test\__snapshot__\parser\misc\destructuring\destructuring-assignment-positive-tests\gen\variable
> :: test: variable
> :: case: { x: new.target = 1 }
## Input

`````js
var x, y, z; ({ x: new.target = 1 } = {});
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
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 15,
                                        "end": 17
                                    },
                                    "right": {
                                        "kind": 125,
                                        "left": {
                                            "kind": 211,
                                            "newKeyword": {
                                                "kind": 138477661,
                                                "flags": 96,
                                                "start": 18,
                                                "end": 22
                                            },
                                            "targetIdentifier": {
                                                "kind": 16594,
                                                "flags": 96,
                                                "start": 23,
                                                "end": 29
                                            },
                                            "flags": 96,
                                            "start": 18,
                                            "end": 29
                                        },
                                        "operatorToken": {
                                            "kind": 4125,
                                            "flags": 64,
                                            "start": 29,
                                            "end": 31
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 1,
                                            "rawText": "1",
                                            "flags": 96,
                                            "start": 31,
                                            "end": 33
                                        },
                                        "flags": 32,
                                        "start": 15,
                                        "end": 33
                                    },
                                    "flags": 32,
                                    "start": 15,
                                    "end": 33
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 15,
                            "end": 33
                        },
                        "flags": 48,
                        "start": 14,
                        "end": 35
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 64,
                        "start": 35,
                        "end": 37
                    },
                    "right": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 39,
                            "end": 39
                        },
                        "flags": 48,
                        "start": 37,
                        "end": 40
                    },
                    "flags": 32,
                    "start": 14,
                    "end": 40
                },
                "flags": 32,
                "start": 12,
                "end": 41
            },
            "flags": 16,
            "start": 12,
            "end": 42
        }
    ],
    "isModule": false,
    "source": "var x, y, z; ({ x: new.target = 1 } = {});",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 42
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'new.target' only allowed within functions - start: 18, end: 31
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 29, end: 31
✖ The left-hand side must be a variable or a property access. - start: 14, end: 37

```

