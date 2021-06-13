# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-11
- From: kataw/test/__snapshot__/parser/miscellaneous/should-fail/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/should-fail/gen/with_strict_directive
> :: test: with strict directive
> :: case: (function() { var s0; for ({ s0 = 5 } of [{ s0: 1 }]) { function foo({a = 4, b = { x: 5 }}) {}
## Options

`````js
{}
`````
## Input

`````js
"use strict"; (function() { var s0; for ({ s0 = 5 } of [{ s0: 1 }]) { function foo({a = 4, b = { x: 5 }}) {}
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
            "rawText": "\"use strict\"",
            "flags": 96,
            "start": 0,
            "end": 12
        }
    ],
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
                        "start": 15,
                        "end": 23
                    },
                    "generatorToken": null,
                    "name": null,
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 23,
                        "end": 25
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
                                        "start": 27,
                                        "end": 31
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
                                                    "start": 31,
                                                    "end": 34
                                                },
                                                "optionalToken": null,
                                                "type": null,
                                                "initializer": null,
                                                "flags": 16,
                                                "start": 31,
                                                "end": 34
                                            }
                                        ],
                                        "flags": 16,
                                        "start": 31,
                                        "end": 34
                                    },
                                    "flags": 16,
                                    "start": 27,
                                    "end": 35
                                },
                                {
                                    "kind": 167,
                                    "forKeyword": {
                                        "kind": 37757017,
                                        "flags": 80,
                                        "start": 35,
                                        "end": 39
                                    },
                                    "awaitKeyword": null,
                                    "initializer": {
                                        "kind": 220,
                                        "propertyList": {
                                            "kind": 218,
                                            "properties": [
                                                {
                                                    "kind": 301,
                                                    "left": {
                                                        "kind": 134299649,
                                                        "text": "s0",
                                                        "rawText": "s0",
                                                        "flags": 96,
                                                        "start": 42,
                                                        "end": 45
                                                    },
                                                    "right": {
                                                        "kind": 201392130,
                                                        "text": 5,
                                                        "rawText": "5",
                                                        "flags": 96,
                                                        "start": 47,
                                                        "end": 49
                                                    },
                                                    "flags": 32,
                                                    "start": 42,
                                                    "end": 49
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 16,
                                            "start": 42,
                                            "end": 49
                                        },
                                        "flags": 48,
                                        "start": 41,
                                        "end": 51
                                    },
                                    "ofKeyword": {
                                        "kind": 16793717,
                                        "flags": 64,
                                        "start": 51,
                                        "end": 54
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
                                                                    "start": 57,
                                                                    "end": 60
                                                                },
                                                                "right": {
                                                                    "kind": 201392130,
                                                                    "text": 1,
                                                                    "rawText": "1",
                                                                    "flags": 96,
                                                                    "start": 61,
                                                                    "end": 63
                                                                },
                                                                "flags": 32,
                                                                "start": 57,
                                                                "end": 63
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 16,
                                                        "start": 57,
                                                        "end": 63
                                                    },
                                                    "flags": 48,
                                                    "start": 56,
                                                    "end": 65
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 56,
                                            "end": 65
                                        },
                                        "flags": 32,
                                        "start": 54,
                                        "end": 66
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
                                                        "start": 69,
                                                        "end": 78
                                                    },
                                                    "generatorToken": null,
                                                    "name": {
                                                        "kind": 134299649,
                                                        "text": "foo",
                                                        "rawText": "foo",
                                                        "flags": 96,
                                                        "start": 78,
                                                        "end": 82
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
                                                                                "start": 84,
                                                                                "end": 85
                                                                            },
                                                                            "optionalToken": null,
                                                                            "type": null,
                                                                            "right": {
                                                                                "kind": 201392130,
                                                                                "text": 4,
                                                                                "rawText": "4",
                                                                                "flags": 96,
                                                                                "start": 87,
                                                                                "end": 89
                                                                            },
                                                                            "flags": 0,
                                                                            "start": 84,
                                                                            "end": 89
                                                                        },
                                                                        {
                                                                            "kind": 281,
                                                                            "ellipsisToken": null,
                                                                            "left": {
                                                                                "kind": 134299649,
                                                                                "text": "b",
                                                                                "rawText": "b",
                                                                                "flags": 96,
                                                                                "start": 90,
                                                                                "end": 92
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
                                                                                                "start": 96,
                                                                                                "end": 98
                                                                                            },
                                                                                            "right": {
                                                                                                "kind": 201392130,
                                                                                                "text": 5,
                                                                                                "rawText": "5",
                                                                                                "flags": 96,
                                                                                                "start": 99,
                                                                                                "end": 101
                                                                                            },
                                                                                            "flags": 32,
                                                                                            "start": 96,
                                                                                            "end": 101
                                                                                        }
                                                                                    ],
                                                                                    "trailingComma": false,
                                                                                    "flags": 16,
                                                                                    "start": 96,
                                                                                    "end": 101
                                                                                },
                                                                                "flags": 48,
                                                                                "start": 94,
                                                                                "end": 103
                                                                            },
                                                                            "flags": 0,
                                                                            "start": 90,
                                                                            "end": 103
                                                                        }
                                                                    ],
                                                                    "trailingComma": false,
                                                                    "flags": 32,
                                                                    "start": 84,
                                                                    "end": 103
                                                                },
                                                                "flags": 32,
                                                                "start": 83,
                                                                "end": 104
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 82,
                                                        "end": 105
                                                    },
                                                    "contents": {
                                                        "kind": 216,
                                                        "functionStatementList": {
                                                            "kind": 217,
                                                            "directives": [],
                                                            "statements": [],
                                                            "flags": 32,
                                                            "start": 107,
                                                            "end": 107
                                                        },
                                                        "flags": 32,
                                                        "start": 105,
                                                        "end": 108
                                                    },
                                                    "typeParameters": null,
                                                    "returnType": null,
                                                    "flags": 16,
                                                    "start": 69,
                                                    "end": 108
                                                }
                                            ],
                                            "flags": 16,
                                            "start": 69,
                                            "end": 108
                                        },
                                        "flags": 16,
                                        "start": 67,
                                        "end": 108
                                    },
                                    "flags": 80,
                                    "start": 35,
                                    "end": 108
                                }
                            ],
                            "flags": 32,
                            "start": 27,
                            "end": 108
                        },
                        "flags": 32,
                        "start": 25,
                        "end": 108
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "flags": 32,
                    "start": 15,
                    "end": 108
                },
                "flags": 32,
                "start": 13,
                "end": 108
            },
            "flags": 16,
            "start": 13,
            "end": 108
        }
    ],
    "isModule": false,
    "source": "\"use strict\"; (function() { var s0; for ({ s0 = 5 } of [{ s0: 1 }]) { function foo({a = 4, b = { x: 5 }}) {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 108
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The parser expected to find a '}' to match the '{' token here - start: 107, end: 108

```

