# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-14
- From: kataw/test/__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/types/gen/in_function_param_with_block
> :: test: in function param with block
> :: case: export var let const function
## Input

`````js
function ( export var let const function ) {export var let const function}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "function ( export var let const function ) {export var let const function}",
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
                "start": 8,
                "end": 8
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 10,
                "end": 17
            },
            "type": null,
            "contents": {
                "kind": 91,
                "functionStatementList": {
                    "kind": 94,
                    "statements": [
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
                                            "start": 21,
                                            "end": 25
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": null,
                                        "flags": 21,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 25
                                    }
                                ],
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 21,
                                "end": 25
                            },
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 17,
                            "end": 25
                        },
                        {
                            "kind": 142,
                            "binding": {
                                "kind": 31,
                                "bindingList": [],
                                "flags": 40,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 25,
                                "end": 31
                            },
                            "flags": 41,
                            "symbol": null,
                            "transformFlags": 769,
                            "start": 25,
                            "end": 31
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
                                "start": 40,
                                "end": 40
                            },
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 40,
                                "end": 40
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
                                                                            "start": 54,
                                                                            "end": 58
                                                                        },
                                                                        "exclamation": false,
                                                                        "type": null,
                                                                        "initializer": null,
                                                                        "flags": 54,
                                                                        "symbol": null,
                                                                        "transformFlags": 0,
                                                                        "start": 0,
                                                                        "end": 58
                                                                    }
                                                                ],
                                                                "flags": 1,
                                                                "symbol": null,
                                                                "transformFlags": 0,
                                                                "start": 54,
                                                                "end": 58
                                                            },
                                                            "flags": 1,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 50,
                                                            "end": 58
                                                        },
                                                        "namedExports": null,
                                                        "exportFromClause": null,
                                                        "fromClause": null,
                                                        "isTypeOnly": false,
                                                        "flags": 1,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 44,
                                                        "end": 58
                                                    },
                                                    {
                                                        "kind": 142,
                                                        "binding": {
                                                            "kind": 31,
                                                            "bindingList": [],
                                                            "flags": 40,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 58,
                                                            "end": 64
                                                        },
                                                        "flags": 41,
                                                        "symbol": null,
                                                        "transformFlags": 769,
                                                        "start": 58,
                                                        "end": 64
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
                                                            "start": 73,
                                                            "end": 73
                                                        },
                                                        "formalParameters": {
                                                            "kind": 90,
                                                            "formalParameterList": [],
                                                            "trailingComma": false,
                                                            "flags": 1,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 73,
                                                            "end": 73
                                                        },
                                                        "type": null,
                                                        "contents": null,
                                                        "typeParameters": null,
                                                        "flags": 41,
                                                        "symbol": null,
                                                        "transformFlags": 2097152,
                                                        "start": 64,
                                                        "end": 73
                                                    }
                                                ],
                                                "multiline": false,
                                                "flags": 1,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 44,
                                                "end": 73
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 42,
                                            "end": 74
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 42,
                                    "end": 74
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 40,
                                "end": 74
                            },
                            "typeParameters": null,
                            "flags": 41,
                            "symbol": null,
                            "transformFlags": 256,
                            "start": 31,
                            "end": 74
                        }
                    ],
                    "multiline": false,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 17,
                    "end": 74
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 10,
                "end": 74
            },
            "typeParameters": null,
            "flags": 0,
            "symbol": null,
            "transformFlags": 256,
            "start": 0,
            "end": 74
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 65,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 73,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 74
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

