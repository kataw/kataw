# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-14
- From: kataw/test/__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/types/gen/in_class
> :: test: in class
> :: case: export var let const function
## Input

`````js
export var let const function class export var let const function { field: export var let const function}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "export var let const function class export var let const function { field: export var let const function}",
    "filename": "",
    "statements": [
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
                                "start": 10,
                                "end": 14
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": null,
                            "flags": 10,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 14
                        }
                    ],
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 10,
                    "end": 14
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 6,
                "end": 14
            },
            "namedExports": null,
            "exportFromClause": null,
            "fromClause": null,
            "isTypeOnly": false,
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 14
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
                "start": 20,
                "end": 20
            },
            "flags": 9,
            "symbol": null,
            "transformFlags": 769,
            "start": 14,
            "end": 20
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
                "start": 29,
                "end": 29
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 29,
                "end": 29
            },
            "type": null,
            "contents": {
                "kind": 91,
                "functionStatementList": {
                    "kind": 94,
                    "statements": [
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
                                                "start": 46,
                                                "end": 50
                                            },
                                            "exclamation": false,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 46,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 0,
                                            "end": 50
                                        }
                                    ],
                                    "flags": 1,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 46,
                                    "end": 50
                                },
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 42,
                                "end": 50
                            },
                            "namedExports": null,
                            "exportFromClause": null,
                            "fromClause": null,
                            "isTypeOnly": false,
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 35,
                            "end": 50
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
                                "start": 56,
                                "end": 56
                            },
                            "flags": 9,
                            "symbol": null,
                            "transformFlags": 769,
                            "start": 50,
                            "end": 56
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
                                "start": 65,
                                "end": 65
                            },
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 65,
                                "end": 65
                            },
                            "type": null,
                            "contents": {
                                "kind": 91,
                                "functionStatementList": {
                                    "kind": 94,
                                    "statements": [
                                        {
                                            "kind": 2097292,
                                            "label": {
                                                "kind": 196712,
                                                "text": "field",
                                                "rawText": "field",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 67,
                                                "end": 73
                                            },
                                            "statement": {
                                                "kind": 2097233,
                                                "expression": {
                                                    "kind": 131322,
                                                    "text": "",
                                                    "flags": 3,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 74,
                                                    "end": 74
                                                },
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 74,
                                                "end": 74
                                            },
                                            "isWebCompat": true,
                                            "flags": 1,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 67,
                                            "end": 74
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
                                                                "start": 85,
                                                                "end": 89
                                                            },
                                                            "exclamation": false,
                                                            "type": null,
                                                            "initializer": null,
                                                            "flags": 85,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 0,
                                                            "end": 89
                                                        }
                                                    ],
                                                    "flags": 1,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 85,
                                                    "end": 89
                                                },
                                                "flags": 1,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 81,
                                                "end": 89
                                            },
                                            "namedExports": null,
                                            "exportFromClause": null,
                                            "fromClause": null,
                                            "isTypeOnly": false,
                                            "flags": 1,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 74,
                                            "end": 89
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
                                                "start": 95,
                                                "end": 95
                                            },
                                            "flags": 9,
                                            "symbol": null,
                                            "transformFlags": 769,
                                            "start": 89,
                                            "end": 95
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
                                                "start": 104,
                                                "end": 104
                                            },
                                            "formalParameters": {
                                                "kind": 90,
                                                "formalParameterList": [],
                                                "trailingComma": false,
                                                "flags": 1,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 104,
                                                "end": 104
                                            },
                                            "type": null,
                                            "contents": null,
                                            "typeParameters": null,
                                            "flags": 1,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 95,
                                            "end": 104
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 1,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 67,
                                    "end": 104
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 65,
                                "end": 105
                            },
                            "typeParameters": null,
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 256,
                            "start": 56,
                            "end": 105
                        }
                    ],
                    "multiline": false,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 35,
                    "end": 105
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 29,
                "end": 105
            },
            "typeParameters": null,
            "flags": 1,
            "symbol": null,
            "transformFlags": 256,
            "start": 20,
            "end": 105
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "The `export` keyword can only be used with the module goal",
            "start": 0,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 15,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 21,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected 'class' is a reserved word that cannot be used here",
            "start": 30,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "The `export` keyword can only be used with the module goal",
            "start": 36,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 51,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 57,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 66,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 75,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 90,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 96,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 104,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 105
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

