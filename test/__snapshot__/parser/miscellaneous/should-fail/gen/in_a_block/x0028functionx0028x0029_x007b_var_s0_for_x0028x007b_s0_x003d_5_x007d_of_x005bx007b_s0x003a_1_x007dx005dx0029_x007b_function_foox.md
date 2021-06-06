# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/miscellaneous/should-fail/autogen.md
- Path: kataw8/test\__snapshot__\parser\miscellaneous\should-fail\gen\in_a_block
> :: test: in a block
> :: case: (function() { var s0; for ({ s0 = 5 } of [{ s0: 1 }]) { function foo({a = 4, b = { x: 5 }}) {}
## Input

`````js
{ (function() { var s0; for ({ s0 = 5 } of [{ s0: 1 }]) { function foo({a = 4, b = { x: 5 }}) {} }
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 121,
                            "expression": {
                                "kind": 177,
                                "asyncKeyword": null,
                                "functionKeyword": {
                                    "kind": 37822554,
                                    "flags": 64,
                                    "start": 3,
                                    "end": 11
                                },
                                "generatorToken": null,
                                "name": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 11,
                                    "end": 13
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [
                                            {
                                                "kind": 155,
                                                "declareKeyword": null,
                                                "varKeyword": {
                                                    "kind": 37757002,
                                                    "flags": 80,
                                                    "start": 15,
                                                    "end": 19
                                                },
                                                "declarationList": {
                                                    "kind": 156,
                                                    "declarations": [
                                                        {
                                                            "kind": 157,
                                                            "binding": {
                                                                "kind": 134299649,
                                                                "text": "s0",
                                                                "rawText": "s0",
                                                                "flags": 96,
                                                                "start": 19,
                                                                "end": 22
                                                            },
                                                            "optionalToken": null,
                                                            "type": null,
                                                            "initializer": null,
                                                            "flags": 16,
                                                            "start": 19,
                                                            "end": 22
                                                        }
                                                    ],
                                                    "flags": 16,
                                                    "start": 19,
                                                    "end": 22
                                                },
                                                "flags": 16,
                                                "start": 15,
                                                "end": 23
                                            },
                                            {
                                                "kind": 167,
                                                "forKeyword": {
                                                    "kind": 37757017,
                                                    "flags": 80,
                                                    "start": 23,
                                                    "end": 27
                                                },
                                                "awaitKeyword": null,
                                                "initializer": {
                                                    "kind": 220,
                                                    "propertyList": {
                                                        "kind": 218,
                                                        "properties": [
                                                            {
                                                                "kind": 205,
                                                                "left": {
                                                                    "kind": 134299649,
                                                                    "text": "s0",
                                                                    "rawText": "s0",
                                                                    "flags": 96,
                                                                    "start": 30,
                                                                    "end": 33
                                                                },
                                                                "right": {
                                                                    "kind": 201392130,
                                                                    "text": 5,
                                                                    "rawText": "5",
                                                                    "flags": 96,
                                                                    "start": 35,
                                                                    "end": 37
                                                                },
                                                                "flags": 32,
                                                                "start": 30,
                                                                "end": 37
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 16,
                                                        "start": 30,
                                                        "end": 37
                                                    },
                                                    "flags": 48,
                                                    "start": 29,
                                                    "end": 39
                                                },
                                                "ofKeyword": {
                                                    "kind": 16793717,
                                                    "flags": 64,
                                                    "start": 39,
                                                    "end": 42
                                                },
                                                "expression": {
                                                    "kind": 119,
                                                    "elementList": {
                                                        "kind": 270,
                                                        "elements": [
                                                            {
                                                                "kind": 220,
                                                                "propertyList": {
                                                                    "kind": 218,
                                                                    "properties": [
                                                                        {
                                                                            "kind": 219,
                                                                            "generatorToken": null,
                                                                            "left": {
                                                                                "kind": 134299649,
                                                                                "text": "s0",
                                                                                "rawText": "s0",
                                                                                "flags": 96,
                                                                                "start": 45,
                                                                                "end": 48
                                                                            },
                                                                            "right": {
                                                                                "kind": 201392130,
                                                                                "text": 1,
                                                                                "rawText": "1",
                                                                                "flags": 96,
                                                                                "start": 49,
                                                                                "end": 51
                                                                            },
                                                                            "flags": 32,
                                                                            "start": 45,
                                                                            "end": 51
                                                                        }
                                                                    ],
                                                                    "trailingComma": false,
                                                                    "flags": 16,
                                                                    "start": 45,
                                                                    "end": 51
                                                                },
                                                                "flags": 48,
                                                                "start": 44,
                                                                "end": 53
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 44,
                                                        "end": 53
                                                    },
                                                    "flags": 32,
                                                    "start": 42,
                                                    "end": 54
                                                },
                                                "statement": {
                                                    "kind": 124,
                                                    "block": {
                                                        "kind": 249,
                                                        "statements": [
                                                            {
                                                                "kind": 176,
                                                                "declareKeyword": null,
                                                                "asyncKeyword": null,
                                                                "functionKeyword": {
                                                                    "kind": 37822554,
                                                                    "flags": 64,
                                                                    "start": 57,
                                                                    "end": 66
                                                                },
                                                                "generatorToken": null,
                                                                "name": {
                                                                    "kind": 134299649,
                                                                    "text": "foo",
                                                                    "rawText": "foo",
                                                                    "flags": 96,
                                                                    "start": 66,
                                                                    "end": 70
                                                                },
                                                                "formalParameters": {
                                                                    "kind": 214,
                                                                    "formalParameterList": [
                                                                        {
                                                                            "kind": 212,
                                                                            "propertyList": {
                                                                                "kind": 213,
                                                                                "properties": [
                                                                                    {
                                                                                        "kind": 281,
                                                                                        "ellipsisToken": null,
                                                                                        "left": {
                                                                                            "kind": 134299649,
                                                                                            "text": "a",
                                                                                            "rawText": "a",
                                                                                            "flags": 96,
                                                                                            "start": 72,
                                                                                            "end": 73
                                                                                        },
                                                                                        "optionalToken": null,
                                                                                        "type": null,
                                                                                        "right": {
                                                                                            "kind": 201392130,
                                                                                            "text": 4,
                                                                                            "rawText": "4",
                                                                                            "flags": 96,
                                                                                            "start": 75,
                                                                                            "end": 77
                                                                                        },
                                                                                        "flags": 0,
                                                                                        "start": 72,
                                                                                        "end": 77
                                                                                    },
                                                                                    {
                                                                                        "kind": 281,
                                                                                        "ellipsisToken": null,
                                                                                        "left": {
                                                                                            "kind": 134299649,
                                                                                            "text": "b",
                                                                                            "rawText": "b",
                                                                                            "flags": 96,
                                                                                            "start": 78,
                                                                                            "end": 80
                                                                                        },
                                                                                        "optionalToken": null,
                                                                                        "type": null,
                                                                                        "right": {
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
                                                                                                            "start": 84,
                                                                                                            "end": 86
                                                                                                        },
                                                                                                        "right": {
                                                                                                            "kind": 201392130,
                                                                                                            "text": 5,
                                                                                                            "rawText": "5",
                                                                                                            "flags": 96,
                                                                                                            "start": 87,
                                                                                                            "end": 89
                                                                                                        },
                                                                                                        "flags": 32,
                                                                                                        "start": 84,
                                                                                                        "end": 89
                                                                                                    }
                                                                                                ],
                                                                                                "trailingComma": false,
                                                                                                "flags": 16,
                                                                                                "start": 84,
                                                                                                "end": 89
                                                                                            },
                                                                                            "flags": 48,
                                                                                            "start": 82,
                                                                                            "end": 91
                                                                                        },
                                                                                        "flags": 0,
                                                                                        "start": 78,
                                                                                        "end": 91
                                                                                    }
                                                                                ],
                                                                                "trailingComma": false,
                                                                                "flags": 32,
                                                                                "start": 72,
                                                                                "end": 91
                                                                            },
                                                                            "flags": 32,
                                                                            "start": 71,
                                                                            "end": 92
                                                                        }
                                                                    ],
                                                                    "trailingComma": false,
                                                                    "flags": 32,
                                                                    "start": 70,
                                                                    "end": 93
                                                                },
                                                                "contents": {
                                                                    "kind": 216,
                                                                    "functionStatementList": {
                                                                        "kind": 217,
                                                                        "directives": [],
                                                                        "statements": [],
                                                                        "flags": 32,
                                                                        "start": 95,
                                                                        "end": 95
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 93,
                                                                    "end": 96
                                                                },
                                                                "typeParameters": null,
                                                                "returnType": null,
                                                                "flags": 16,
                                                                "start": 57,
                                                                "end": 96
                                                            }
                                                        ],
                                                        "flags": 16,
                                                        "start": 57,
                                                        "end": 96
                                                    },
                                                    "flags": 16,
                                                    "start": 55,
                                                    "end": 98
                                                },
                                                "flags": 16,
                                                "start": 23,
                                                "end": 98
                                            }
                                        ],
                                        "flags": 32,
                                        "start": 15,
                                        "end": 98
                                    },
                                    "flags": 32,
                                    "start": 13,
                                    "end": 98
                                },
                                "typeParameters": null,
                                "returnType": null,
                                "flags": 32,
                                "start": 3,
                                "end": 98
                            },
                            "flags": 32,
                            "start": 1,
                            "end": 98
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 98
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 98
            },
            "flags": 16,
            "start": 0,
            "end": 98
        }
    ],
    "isModule": false,
    "source": "{ (function() { var s0; for ({ s0 = 5 } of [{ s0: 1 }]) { function foo({a = 4, b = { x: 5 }}) {} }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 98
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The parser expected to find a '}' to match the '{' token here - start: 98, end: 98

```

