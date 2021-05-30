# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-30
- From: kataw7/test\__snapshot__/parser/expressions/assignment/destructuring-assignment-negative-tests/autogen.md
- Path: kataw7/test\__snapshot__\parser\expressions\assignment\destructuring-assignment-negative-tests\gen\variable_in_for_in
> :: test: variable in for in
> :: case: { x: async function() {} }
## Input

`````js
var x, y, z; for (x in { x: async function() {} } = {});
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
            "kind": 166,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "start": 12,
                "end": 16
            },
            "initializer": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 18,
                "end": 19
            },
            "inKeyword": {
                "kind": 21006388,
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
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 24,
                                    "end": 26
                                },
                                "right": {
                                    "kind": 177,
                                    "asyncKeyword": {
                                        "kind": 82031,
                                        "flags": 64,
                                        "start": 27,
                                        "end": 33
                                    },
                                    "functionKeyword": {
                                        "kind": 37822554,
                                        "flags": 64,
                                        "start": 33,
                                        "end": 42
                                    },
                                    "generatorToken": null,
                                    "name": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 42,
                                        "end": 44
                                    },
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "start": 46,
                                            "end": 46
                                        },
                                        "flags": 32,
                                        "start": 44,
                                        "end": 47
                                    },
                                    "typeParameters": null,
                                    "returnType": null,
                                    "flags": 160,
                                    "start": 27,
                                    "end": 47
                                },
                                "flags": 32,
                                "start": 24,
                                "end": 47
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 24,
                        "end": 47
                    },
                    "flags": 48,
                    "start": 22,
                    "end": 49
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 49,
                    "end": 51
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 53,
                        "end": 53
                    },
                    "flags": 48,
                    "start": 51,
                    "end": 54
                },
                "flags": 32,
                "start": 22,
                "end": 54
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 55,
                "end": 56
            },
            "flags": 16,
            "start": 12,
            "end": 56
        }
    ],
    "isModule": false,
    "source": "var x, y, z; for (x in { x: async function() {} } = {});",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 56
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The left-hand side must be a variable or a property access. - start: 49, end: 51

```

