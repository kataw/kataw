# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw15/test\__snapshot__\compiler\error-recovery\types\gen\in_lhs
> :: test: in lhs
> :: case: export var let const function
## Input

`````js
 function (x:export var let const function = export var let const function) {}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": " function (x:export var let const function = export var let const function) {}",
    "filename": "",
    "statements": [
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "",
                "rawText": "",
                "flags": 1,
                "symbol": null,
                "transformFlags": 1025,
                "start": 9,
                "end": 9
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [
                    {
                        "kind": 16473,
                        "ellipsis": false,
                        "binding": {
                            "kind": 131102,
                            "text": "x",
                            "rawText": "x",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 11,
                            "end": 12
                        },
                        "isOptional": false,
                        "type": {
                            "kind": 134226156,
                            "typeName": {
                                "kind": 196711,
                                "text": "export",
                                "rawText": "export",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 13,
                                "end": 19
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 13,
                            "end": 23
                        },
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 11,
                        "end": 19
                    }
                ],
                "trailingComma": false,
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 11,
                "end": 23
            },
            "type": null,
            "contents": {
                "kind": 91,
                "functionStatementList": {
                    "kind": 94,
                    "statements": [
                        {
                            "kind": 2097233,
                            "expression": {
                                "kind": 196712,
                                "text": "let",
                                "rawText": "let",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 23,
                                "end": 27
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 23,
                            "end": 27
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
                                "start": 33,
                                "end": 33
                            },
                            "flags": 9,
                            "symbol": null,
                            "transformFlags": 769,
                            "start": 27,
                            "end": 33
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
                                "start": 42,
                                "end": 42
                            },
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 42,
                                "end": 42
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
                                                                "start": 55,
                                                                "end": 59
                                                            },
                                                            "exclamation": false,
                                                            "type": null,
                                                            "initializer": null,
                                                            "flags": 55,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 0,
                                                            "end": 59
                                                        }
                                                    ],
                                                    "flags": 1,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 55,
                                                    "end": 59
                                                },
                                                "flags": 1,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 51,
                                                "end": 59
                                            },
                                            "namedExports": null,
                                            "exportFromClause": null,
                                            "fromClause": null,
                                            "isTypeOnly": false,
                                            "flags": 1,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 44,
                                            "end": 59
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
                                                "start": 65,
                                                "end": 65
                                            },
                                            "flags": 9,
                                            "symbol": null,
                                            "transformFlags": 769,
                                            "start": 59,
                                            "end": 65
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
                                                "start": 74,
                                                "end": 74
                                            },
                                            "formalParameters": {
                                                "kind": 90,
                                                "formalParameterList": [],
                                                "trailingComma": false,
                                                "flags": 1,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 74,
                                                "end": 74
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
                                                                "statements": [],
                                                                "multiline": false,
                                                                "flags": 0,
                                                                "symbol": null,
                                                                "transformFlags": 0,
                                                                "start": 77,
                                                                "end": 77
                                                            },
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 75,
                                                            "end": 78
                                                        }
                                                    ],
                                                    "multiline": false,
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 75,
                                                    "end": 78
                                                },
                                                "flags": 1,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 74,
                                                "end": 78
                                            },
                                            "typeParameters": null,
                                            "flags": 1,
                                            "symbol": null,
                                            "transformFlags": 256,
                                            "start": 65,
                                            "end": 78
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 1,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 44,
                                    "end": 78
                                },
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 42,
                                "end": 78
                            },
                            "typeParameters": null,
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 256,
                            "start": 33,
                            "end": 78
                        }
                    ],
                    "multiline": false,
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 23,
                    "end": 78
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 19,
                "end": 78
            },
            "typeParameters": null,
            "flags": 1,
            "symbol": null,
            "transformFlags": 256,
            "start": 0,
            "end": 78
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 28,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 34,
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
            "message": "The `export` keyword can only be used with the module goal",
            "start": 45,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 60,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 66,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 74,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'}' expected.",
            "start": 77,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 78
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

