# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/miscellaneous/should-fail/autogen.md
- Path: kataw/test/__snapshot__/ecma262/miscellaneous/should-fail/gen/stand-alone
> :: test: stand-alone
> :: case: (function() { var s0; for ({ s0 = 5 } of [{ s0: 1 }]) { function foo({a = 4, b = { x: 5 }}) {}
## Options

`````js
{}
`````
## Input

`````js
(function() { var s0; for ({ s0 = 5 } of [{ s0: 1 }]) { function foo({a = 4, b = { x: 5 }}) {}
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
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
                        "transformFlags": 0,
                        "start": 1,
                        "end": 9
                    },
                    "asteriskToken": null,
                    "name": null,
                    "typeParameters": null,
                    "formalParameterList": {
                        "kind": 214,
                        "formalParameters": [],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 10,
                        "end": 10
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
                                        "transformFlags": 0,
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
                                                    "text": "s0",
                                                    "rawText": "s0",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 17,
                                                    "end": 20
                                                },
                                                "type": null,
                                                "initializer": null,
                                                "flags": 16,
                                                "transformFlags": 4224,
                                                "start": 17,
                                                "end": 20
                                            }
                                        ],
                                        "flags": 16,
                                        "transformFlags": 0,
                                        "start": 17,
                                        "end": 20
                                    },
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 13,
                                    "end": 21
                                },
                                {
                                    "kind": 167,
                                    "forKeyword": {
                                        "kind": 37757017,
                                        "flags": 80,
                                        "transformFlags": 0,
                                        "start": 21,
                                        "end": 25
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
                                                        "transformFlags": 0,
                                                        "start": 28,
                                                        "end": 31
                                                    },
                                                    "right": {
                                                        "kind": 201392130,
                                                        "text": 5,
                                                        "rawText": "5",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 33,
                                                        "end": 35
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 28,
                                                    "end": 35
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 16,
                                            "transformFlags": 0,
                                            "start": 28,
                                            "end": 35
                                        },
                                        "flags": 48,
                                        "transformFlags": 8,
                                        "start": 27,
                                        "end": 37
                                    },
                                    "ofKeyword": {
                                        "kind": 16793717,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 37,
                                        "end": 40
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
                                                                "asteriskToken": null,
                                                                "left": {
                                                                    "kind": 134299649,
                                                                    "text": "s0",
                                                                    "rawText": "s0",
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 43,
                                                                    "end": 46
                                                                },
                                                                "right": {
                                                                    "kind": 201392130,
                                                                    "text": 1,
                                                                    "rawText": "1",
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 47,
                                                                    "end": 49
                                                                },
                                                                "flags": 32,
                                                                "transformFlags": 128,
                                                                "start": 43,
                                                                "end": 49
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 16,
                                                        "transformFlags": 0,
                                                        "start": 43,
                                                        "end": 49
                                                    },
                                                    "flags": 48,
                                                    "transformFlags": 8,
                                                    "start": 42,
                                                    "end": 51
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 42,
                                            "end": 51
                                        },
                                        "flags": 32,
                                        "transformFlags": 8,
                                        "start": 40,
                                        "end": 52
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
                                                        "transformFlags": 0,
                                                        "start": 55,
                                                        "end": 64
                                                    },
                                                    "asteriskToken": null,
                                                    "name": {
                                                        "kind": 134299649,
                                                        "text": "foo",
                                                        "rawText": "foo",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 64,
                                                        "end": 68
                                                    },
                                                    "typeParameters": null,
                                                    "formalParameterList": {
                                                        "kind": 214,
                                                        "formalParameters": [
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
                                                                                "transformFlags": 0,
                                                                                "start": 70,
                                                                                "end": 71
                                                                            },
                                                                            "optionalToken": null,
                                                                            "type": null,
                                                                            "right": {
                                                                                "kind": 201392130,
                                                                                "text": 4,
                                                                                "rawText": "4",
                                                                                "flags": 96,
                                                                                "transformFlags": 0,
                                                                                "start": 73,
                                                                                "end": 75
                                                                            },
                                                                            "flags": 0,
                                                                            "transformFlags": 4096,
                                                                            "start": 70,
                                                                            "end": 75
                                                                        },
                                                                        {
                                                                            "kind": 281,
                                                                            "ellipsisToken": null,
                                                                            "left": {
                                                                                "kind": 134299649,
                                                                                "text": "b",
                                                                                "rawText": "b",
                                                                                "flags": 96,
                                                                                "transformFlags": 0,
                                                                                "start": 76,
                                                                                "end": 78
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
                                                                                            "asteriskToken": null,
                                                                                            "left": {
                                                                                                "kind": 134299649,
                                                                                                "text": "x",
                                                                                                "rawText": "x",
                                                                                                "flags": 96,
                                                                                                "transformFlags": 0,
                                                                                                "start": 82,
                                                                                                "end": 84
                                                                                            },
                                                                                            "right": {
                                                                                                "kind": 201392130,
                                                                                                "text": 5,
                                                                                                "rawText": "5",
                                                                                                "flags": 96,
                                                                                                "transformFlags": 0,
                                                                                                "start": 85,
                                                                                                "end": 87
                                                                                            },
                                                                                            "flags": 32,
                                                                                            "transformFlags": 128,
                                                                                            "start": 82,
                                                                                            "end": 87
                                                                                        }
                                                                                    ],
                                                                                    "trailingComma": false,
                                                                                    "flags": 16,
                                                                                    "transformFlags": 0,
                                                                                    "start": 82,
                                                                                    "end": 87
                                                                                },
                                                                                "flags": 48,
                                                                                "transformFlags": 8,
                                                                                "start": 80,
                                                                                "end": 89
                                                                            },
                                                                            "flags": 0,
                                                                            "transformFlags": 4096,
                                                                            "start": 76,
                                                                            "end": 89
                                                                        }
                                                                    ],
                                                                    "trailingComma": false,
                                                                    "flags": 32,
                                                                    "transformFlags": 0,
                                                                    "start": 70,
                                                                    "end": 89
                                                                },
                                                                "flags": 32,
                                                                "transformFlags": 0,
                                                                "start": 69,
                                                                "end": 90
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 69,
                                                        "end": 90
                                                    },
                                                    "contents": {
                                                        "kind": 216,
                                                        "functionStatementList": {
                                                            "kind": 217,
                                                            "directives": [],
                                                            "statements": [],
                                                            "flags": 32,
                                                            "transformFlags": 0,
                                                            "start": 93,
                                                            "end": 93
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 91,
                                                        "end": 94
                                                    },
                                                    "returnType": null,
                                                    "flags": 16,
                                                    "transformFlags": 0,
                                                    "start": 55,
                                                    "end": 94
                                                }
                                            ],
                                            "flags": 16,
                                            "transformFlags": 0,
                                            "start": 55,
                                            "end": 94
                                        },
                                        "flags": 16,
                                        "transformFlags": 0,
                                        "start": 53,
                                        "end": 94
                                    },
                                    "flags": 80,
                                    "transformFlags": 0,
                                    "start": 21,
                                    "end": 94
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 13,
                            "end": 94
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 11,
                        "end": 94
                    },
                    "returnType": null,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 94
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 0,
                "end": 94
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 94
        }
    ],
    "isModule": false,
    "source": "(function() { var s0; for ({ s0 = 5 } of [{ s0: 1 }]) { function foo({a = 4, b = { x: 5 }}) {}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 94
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The parser expected to find a '}' to match the '{' token here - start: 93, end: 94

```

