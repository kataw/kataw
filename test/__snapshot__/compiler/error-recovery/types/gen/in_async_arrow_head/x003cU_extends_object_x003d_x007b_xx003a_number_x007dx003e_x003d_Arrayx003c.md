# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-14
- From: kataw/test/__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/types/gen/in_async_arrow_head
> :: test: in async arrow head
> :: case: <U extends object = { x: number }> = Array<
## Input

`````js
async ([ <U extends object = { x: number }> = Array< , x: <U extends object = { x: number }> = Array< ]) => {}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "async ([ <U extends object = { x: number }> = Array< , x: <U extends object = { x: number }> = Array< ]) => {}",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 1073807915,
                "expression": {
                    "kind": 196712,
                    "text": "async",
                    "rawText": "async",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 5
                },
                "typeArguments": null,
                "argumentList": {
                    "kind": 3,
                    "elements": [
                        {
                            "kind": 16473,
                            "ellipsis": false,
                            "binding": {
                                "kind": 33554437,
                                "elementList": {
                                    "kind": 29,
                                    "elements": [
                                        {
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
                                                            "start": 10,
                                                            "end": 11
                                                        },
                                                        "constraint": {
                                                            "kind": 4202663,
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 2097152,
                                                            "start": 19,
                                                            "end": 26
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
                                                                            "start": 30,
                                                                            "end": 32
                                                                        },
                                                                        "isOptional": false,
                                                                        "accessModifier": null,
                                                                        "type": {
                                                                            "kind": 4202657,
                                                                            "flags": 0,
                                                                            "symbol": null,
                                                                            "transformFlags": 2097152,
                                                                            "start": 33,
                                                                            "end": 40
                                                                        },
                                                                        "isStatic": false,
                                                                        "isReadOnly": false,
                                                                        "initializer": null,
                                                                        "flags": 0,
                                                                        "symbol": null,
                                                                        "transformFlags": 2097152,
                                                                        "start": 30,
                                                                        "end": 40
                                                                    }
                                                                ],
                                                                "multiline": false,
                                                                "flags": 0,
                                                                "symbol": null,
                                                                "transformFlags": 2097152,
                                                                "start": 30,
                                                                "end": 42
                                                            },
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 2097152,
                                                            "start": 28,
                                                            "end": 42
                                                        },
                                                        "expression": null,
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 2097152,
                                                        "start": 10,
                                                        "end": 42
                                                    }
                                                ],
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 2097152,
                                                "start": 10,
                                                "end": 42
                                            },
                                            "parameters": {
                                                "kind": 131322,
                                                "text": "",
                                                "flags": 3,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 43,
                                                "end": 43
                                            },
                                            "contents": {
                                                "kind": 65590,
                                                "expressions": [
                                                    {
                                                        "kind": 65550,
                                                        "left": {
                                                            "kind": 131322,
                                                            "text": "",
                                                            "flags": 3,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 43,
                                                            "end": 43
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
                                                                "start": 45,
                                                                "end": 51
                                                            },
                                                            "operator": "<",
                                                            "right": {
                                                                "kind": 131322,
                                                                "text": "",
                                                                "flags": 3,
                                                                "symbol": null,
                                                                "transformFlags": 0,
                                                                "start": 52,
                                                                "end": 52
                                                            },
                                                            "flags": 1,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 45,
                                                            "end": 52
                                                        },
                                                        "flags": 1,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 43,
                                                        "end": 52
                                                    },
                                                    {
                                                        "kind": 196712,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 54,
                                                        "end": 56
                                                    }
                                                ],
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 43,
                                                "end": 56
                                            },
                                            "flags": 1073741824,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 8,
                                            "end": 56
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 1,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 8,
                                    "end": 56
                                },
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 7,
                                "end": 56
                            },
                            "isOptional": false,
                            "type": {
                                "kind": 8287,
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
                                    "kind": 134226095,
                                    "parameterList": [],
                                    "trailingcomma": false,
                                    "flags": 1,
                                    "symbol": null,
                                    "transformFlags": 2097152,
                                    "start": 92,
                                    "end": 92
                                },
                                "returnType": {
                                    "kind": 134226156,
                                    "typeName": {
                                        "kind": 196712,
                                        "text": "",
                                        "rawText": "",
                                        "flags": 1,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 92,
                                        "end": 92
                                    },
                                    "typeArguments": null,
                                    "flags": 1,
                                    "symbol": null,
                                    "transformFlags": 2097152,
                                    "start": 92,
                                    "end": 94
                                },
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 57,
                                "end": 92
                            },
                            "initializer": {
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
                            "decorators": null,
                            "accessModifier": null,
                            "isReadOnly": false,
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 1,
                            "start": 7,
                            "end": 101
                        }
                    ],
                    "trailingComma": false,
                    "transformFlags": 0,
                    "flags": 1,
                    "symbol": null,
                    "start": 8,
                    "end": 101
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 5,
                "end": 101
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 101
        },
        {
            "kind": 2099237,
            "block": {
                "kind": 2084,
                "statements": [],
                "multiline": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 109,
                "end": 109
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 107,
            "end": 110
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 102,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 103,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 105,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 110
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

