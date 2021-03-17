# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-14
- From: kataw/test/__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/types/gen/in_function_param_with_block
> :: test: in function param with block
> :: case: <U extends object = { x: number }> = Array<
## Input

`````js
function ( <U extends object = { x: number }> = Array< ) {<U extends object = { x: number }> = Array<}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "function ( <U extends object = { x: number }> = Array< ) {<U extends object = { x: number }> = Array<}",
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
                "end": 12
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
                                "text": "U",
                                "rawText": "U",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 12,
                                "end": 13
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 12,
                            "end": 13
                        }
                    ],
                    "multiline": false,
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 12,
                    "end": 13
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 10,
                "end": 13
            },
            "typeParameters": null,
            "flags": 1,
            "symbol": null,
            "transformFlags": 256,
            "start": 0,
            "end": 13
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 65550,
                "left": {
                    "kind": 196712,
                    "text": "object",
                    "rawText": "object",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 21,
                    "end": 28
                },
                "operator": "=",
                "right": {
                    "kind": 65550,
                    "left": {
                        "kind": 65563,
                        "left": {
                            "kind": 98984,
                            "propertyList": {
                                "kind": 65722,
                                "properties": [
                                    {
                                        "kind": 65721,
                                        "left": {
                                            "kind": 196711,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 32,
                                            "end": 34
                                        },
                                        "right": {
                                            "kind": 196712,
                                            "text": "number",
                                            "rawText": "number",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 35,
                                            "end": 42
                                        },
                                        "accessModifier": null,
                                        "decorators": null,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 32,
                                        "end": 42
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 42
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 30,
                            "end": 44
                        },
                        "operator": ">",
                        "right": {
                            "kind": 131322,
                            "text": "",
                            "flags": 3,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 45,
                            "end": 45
                        },
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 30,
                        "end": 45
                    },
                    "operator": "=",
                    "right": {
                        "kind": 65563,
                        "left": {
                            "kind": 196712,
                            "text": "Array",
                            "rawText": "Array",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 47,
                            "end": 53
                        },
                        "operator": "<",
                        "right": {
                            "kind": 131322,
                            "text": "",
                            "flags": 3,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 54,
                            "end": 54
                        },
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 47,
                        "end": 54
                    },
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 30,
                    "end": 54
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 21,
                "end": 54
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 21,
            "end": 54
        },
        {
            "kind": 2099237,
            "block": {
                "kind": 2084,
                "statements": [
                    {
                        "kind": 2097233,
                        "expression": {
                            "kind": 83976,
                            "typeParameters": {
                                "kind": 134226153,
                                "typeParameterList": [
                                    {
                                        "kind": 134226152,
                                        "name": {
                                            "kind": 196711,
                                            "text": "U",
                                            "rawText": "U",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 59,
                                            "end": 60
                                        },
                                        "constraint": {
                                            "kind": 4202663,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 68,
                                            "end": 75
                                        },
                                        "defaultType": {
                                            "kind": 536879334,
                                            "objectTypeMembers": {
                                                "kind": 536871081,
                                                "members": [
                                                    {
                                                        "kind": 8380,
                                                        "name": {
                                                            "kind": 196711,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 79,
                                                            "end": 81
                                                        },
                                                        "isOptional": false,
                                                        "accessModifier": null,
                                                        "type": {
                                                            "kind": 4202657,
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 2097152,
                                                            "start": 82,
                                                            "end": 89
                                                        },
                                                        "isStatic": false,
                                                        "isReadOnly": false,
                                                        "initializer": null,
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 2097152,
                                                        "start": 79,
                                                        "end": 89
                                                    }
                                                ],
                                                "multiline": false,
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 2097152,
                                                "start": 79,
                                                "end": 91
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 77,
                                            "end": 91
                                        },
                                        "expression": null,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 2097152,
                                        "start": 59,
                                        "end": 91
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 59,
                                "end": 91
                            },
                            "parameters": {
                                "kind": 131322,
                                "text": "",
                                "flags": 3,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 92,
                                "end": 92
                            },
                            "contents": {
                                "kind": 65550,
                                "left": {
                                    "kind": 131322,
                                    "text": "",
                                    "flags": 3,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 92,
                                    "end": 92
                                },
                                "operator": "=",
                                "right": {
                                    "kind": 65563,
                                    "left": {
                                        "kind": 196712,
                                        "text": "Array",
                                        "rawText": "Array",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 94,
                                        "end": 100
                                    },
                                    "operator": "<",
                                    "right": {
                                        "kind": 131322,
                                        "text": "",
                                        "flags": 3,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 101,
                                        "end": 101
                                    },
                                    "flags": 1,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 94,
                                    "end": 101
                                },
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 92,
                                "end": 101
                            },
                            "flags": 1073741825,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 58,
                            "end": 101
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 58,
                        "end": 101
                    }
                ],
                "multiline": false,
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 58,
                "end": 101
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 56,
            "end": 102
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 101,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 102
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

