# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-14
- From: kataw/test/__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/types/gen/lexical_const
> :: test: lexical const
> :: case: export var let const function
## Input

`````js
const x: export var let const function= {x:export var let const function}:export var let const function
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "const x: export var let const function= {x:export var let const function}:export var let const function",
    "filename": "",
    "statements": [
        {
            "kind": 142,
            "isConst": true,
            "binding": {
                "kind": 31,
                "bindingList": [
                    {
                        "kind": 16525,
                        "binding": {
                            "kind": 131102,
                            "text": "x",
                            "rawText": "x",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 5,
                            "end": 7
                        },
                        "exclamation": false,
                        "type": {
                            "kind": 134226156,
                            "typeName": {
                                "kind": 196711,
                                "text": "export",
                                "rawText": "export",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 8,
                                "end": 15
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 8,
                            "end": 19
                        },
                        "initializer": null,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 5,
                        "end": 15
                    }
                ],
                "flags": 9,
                "symbol": null,
                "transformFlags": 0,
                "start": 5,
                "end": 15
            },
            "flags": 9,
            "symbol": null,
            "transformFlags": 769,
            "start": 0,
            "end": 15
        },
        {
            "kind": 2097397,
            "declarationList": {
                "kind": 244,
                "declarations": [
                    {
                        "kind": 16627,
                        "binding": {
                            "kind": 131102,
                            "text": "let",
                            "rawText": "let",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 19,
                            "end": 23
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": null,
                        "flags": 19,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 23
                    }
                ],
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 19,
                "end": 23
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 15,
            "end": 23
        },
        {
            "kind": 142,
            "isConst": true,
            "binding": {
                "kind": 31,
                "bindingList": [],
                "flags": 8,
                "symbol": null,
                "transformFlags": 0,
                "start": 29,
                "end": 29
            },
            "flags": 9,
            "symbol": null,
            "transformFlags": 769,
            "start": 23,
            "end": 29
        },
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "",
                "rawText": "",
                "flags": 1,
                "symbol": null,
                "transformFlags": 1025,
                "start": 38,
                "end": 38
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 38,
                "end": 38
            },
            "type": null,
            "contents": {
                "kind": 91,
                "functionStatementList": {
                    "kind": 94,
                    "statements": [
                        {
                            "kind": 2099237,
                            "block": {
                                "kind": 2084,
                                "statements": [
                                    {
                                        "kind": 2097292,
                                        "label": {
                                            "kind": 196712,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 41,
                                            "end": 42
                                        },
                                        "statement": {
                                            "kind": 2097233,
                                            "expression": {
                                                "kind": 131322,
                                                "text": "",
                                                "flags": 3,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 43,
                                                "end": 43
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 43,
                                            "end": 43
                                        },
                                        "isWebCompat": true,
                                        "flags": 1,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 41,
                                        "end": 43
                                    },
                                    {
                                        "kind": 76,
                                        "declaration": {
                                            "kind": 2097397,
                                            "declarationList": {
                                                "kind": 244,
                                                "declarations": [
                                                    {
                                                        "kind": 16627,
                                                        "binding": {
                                                            "kind": 131102,
                                                            "text": "let",
                                                            "rawText": "let",
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 1025,
                                                            "start": 53,
                                                            "end": 57
                                                        },
                                                        "exclamation": false,
                                                        "type": null,
                                                        "initializer": null,
                                                        "flags": 53,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 0,
                                                        "end": 57
                                                    }
                                                ],
                                                "flags": 1,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 53,
                                                "end": 57
                                            },
                                            "flags": 1,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 49,
                                            "end": 57
                                        },
                                        "namedExports": null,
                                        "exportFromClause": null,
                                        "fromClause": null,
                                        "isTypeOnly": false,
                                        "flags": 1,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 43,
                                        "end": 57
                                    },
                                    {
                                        "kind": 142,
                                        "isConst": true,
                                        "binding": {
                                            "kind": 31,
                                            "bindingList": [],
                                            "flags": 8,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 63,
                                            "end": 63
                                        },
                                        "flags": 9,
                                        "symbol": null,
                                        "transformFlags": 769,
                                        "start": 57,
                                        "end": 63
                                    },
                                    {
                                        "kind": 264284,
                                        "name": {
                                            "kind": 131102,
                                            "text": "",
                                            "rawText": "",
                                            "flags": 1,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 72,
                                            "end": 72
                                        },
                                        "formalParameters": {
                                            "kind": 90,
                                            "formalParameterList": [],
                                            "trailingComma": false,
                                            "flags": 1,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 72,
                                            "end": 72
                                        },
                                        "type": null,
                                        "contents": null,
                                        "typeParameters": null,
                                        "flags": 1,
                                        "symbol": null,
                                        "transformFlags": 2097152,
                                        "start": 63,
                                        "end": 72
                                    }
                                ],
                                "multiline": false,
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 41,
                                "end": 72
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 39,
                            "end": 73
                        }
                    ],
                    "multiline": false,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 39,
                    "end": 73
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 38,
                "end": 73
            },
            "typeParameters": null,
            "flags": 1,
            "symbol": null,
            "transformFlags": 256,
            "start": 29,
            "end": 73
        },
        {
            "kind": 76,
            "declaration": {
                "kind": 2097397,
                "declarationList": {
                    "kind": 244,
                    "declarations": [
                        {
                            "kind": 16627,
                            "binding": {
                                "kind": 131102,
                                "text": "let",
                                "rawText": "let",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 1025,
                                "start": 84,
                                "end": 88
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": null,
                            "flags": 84,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 88
                        }
                    ],
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 84,
                    "end": 88
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 80,
                "end": 88
            },
            "namedExports": null,
            "exportFromClause": null,
            "fromClause": null,
            "isTypeOnly": false,
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 74,
            "end": 88
        },
        {
            "kind": 142,
            "isConst": true,
            "binding": {
                "kind": 31,
                "bindingList": [],
                "flags": 8,
                "symbol": null,
                "transformFlags": 0,
                "start": 94,
                "end": 94
            },
            "flags": 9,
            "symbol": null,
            "transformFlags": 769,
            "start": 88,
            "end": 94
        },
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "",
                "rawText": "",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 103,
                "end": 103
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 103,
                "end": 103
            },
            "type": null,
            "contents": null,
            "typeParameters": null,
            "flags": 1,
            "symbol": null,
            "transformFlags": 2097152,
            "start": 94,
            "end": 103
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 16,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 24,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 30,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 38,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 43,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 58,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 64,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 72,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'}' expected.",
            "start": 73,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "The `export` keyword can only be used with the module goal",
            "start": 74,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 89,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 95,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 103
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

