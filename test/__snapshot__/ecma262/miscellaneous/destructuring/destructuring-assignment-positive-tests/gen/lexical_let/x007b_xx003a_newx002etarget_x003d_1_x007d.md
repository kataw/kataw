# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/miscellaneous/destructuring/destructuring-assignment-positive-tests/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/destructuring/destructuring-assignment-positive-tests/gen/lexical_let
> :: test: lexical let
> :: case: { x: new.target = 1 }
## Options

`````js
{}
`````
## Input

`````js
'use strict'; let x, y, z; ({ x: new.target = 1 }= {});
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
                                    "asteriskToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 29,
                                        "end": 31
                                    },
                                    "right": {
                                        "kind": 125,
                                        "left": {
                                            "kind": 211,
                                            "newKeyword": {
                                                "kind": 138477661,
                                                "flags": 96,
                                                "start": 32,
                                                "end": 36
                                            },
                                            "targetIdentifier": {
                                                "kind": 16594,
                                                "flags": 96,
                                                "start": 37,
                                                "end": 43
                                            },
                                            "flags": 96,
                                            "start": 32,
                                            "end": 43
                                        },
                                        "operatorToken": {
                                            "kind": 4125,
                                            "flags": 96,
                                            "start": 43,
                                            "end": 45
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 1,
                                            "rawText": "1",
                                            "flags": 96,
                                            "start": 45,
                                            "end": 47
                                        },
                                        "flags": 32,
                                        "start": 29,
                                        "end": 47
                                    },
                                    "flags": 32,
                                    "start": 29,
                                    "end": 47
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 29,
                            "end": 47
                        },
                        "flags": 48,
                        "start": 28,
                        "end": 49
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "start": 49,
                        "end": 50
                    },
                    "right": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 52,
                            "end": 52
                        },
                        "flags": 48,
                        "start": 50,
                        "end": 53
                    },
                    "flags": 32,
                    "start": 28,
                    "end": 53
                },
                "flags": 26,
                "start": 34,
                "end": 54
            },
            "flags": 16,
            "start": 26,
            "end": 55
        }
    ],
    "isModule": false,
    "source": "'use strict'; let x, y, z; ({ x: new.target = 1 }= {});",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 55
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'new.target' only allowed within functions - start: 32, end: 45
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 43, end: 45
✖ The left-hand side must be a variable or a property access. - start: 28, end: 50

```

