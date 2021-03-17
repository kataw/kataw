# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-17
- From: kataw/test/__snapshot__/compiler/error-recovery/js/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/js/gen/in_arrow_head_and_body
> :: test: in arrow head and body
> :: case: { async *method([[x, y, z] = [4, 5,
## Input

`````js
({ async *method([[x, y, z] = [4, 5,) => {x = {{ async *method([[x, y, z] = [4, 5,}}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "({ async *method([[x, y, z] = [4, 5,) => {x = {{ async *method([[x, y, z] = [4, 5,}}",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 66224,
                "expression": {
                    "kind": 98984,
                    "propertyList": {
                        "kind": 65722,
                        "properties": [
                            {
                                "kind": 18352149,
                                "name": {
                                    "kind": 196711,
                                    "text": "method",
                                    "rawText": "method",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 10,
                                    "end": 16
                                },
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [
                                        {
                                            "kind": 16473,
                                            "ellipsis": false,
                                            "binding": {
                                                "kind": 33554437,
                                                "elementList": {
                                                    "kind": 29,
                                                    "elements": [
                                                        {
                                                            "kind": 16412,
                                                            "ellipsis": false,
                                                            "left": {
                                                                "kind": 33554437,
                                                                "elementList": {
                                                                    "kind": 29,
                                                                    "elements": [
                                                                        {
                                                                            "kind": 16412,
                                                                            "ellipsis": false,
                                                                            "left": {
                                                                                "kind": 131102,
                                                                                "text": "x",
                                                                                "rawText": "x",
                                                                                "flags": 0,
                                                                                "symbol": null,
                                                                                "transformFlags": 1025,
                                                                                "start": 19,
                                                                                "end": 20
                                                                            },
                                                                            "right": null,
                                                                            "flags": 0,
                                                                            "symbol": null,
                                                                            "transformFlags": 1,
                                                                            "start": 19,
                                                                            "end": 20
                                                                        },
                                                                        {
                                                                            "kind": 16412,
                                                                            "ellipsis": false,
                                                                            "left": {
                                                                                "kind": 131102,
                                                                                "text": "y",
                                                                                "rawText": "y",
                                                                                "flags": 0,
                                                                                "symbol": null,
                                                                                "transformFlags": 1025,
                                                                                "start": 21,
                                                                                "end": 23
                                                                            },
                                                                            "right": null,
                                                                            "flags": 0,
                                                                            "symbol": null,
                                                                            "transformFlags": 1,
                                                                            "start": 21,
                                                                            "end": 23
                                                                        },
                                                                        {
                                                                            "kind": 16412,
                                                                            "ellipsis": false,
                                                                            "left": {
                                                                                "kind": 131102,
                                                                                "text": "z",
                                                                                "rawText": "z",
                                                                                "flags": 0,
                                                                                "symbol": null,
                                                                                "transformFlags": 1025,
                                                                                "start": 24,
                                                                                "end": 26
                                                                            },
                                                                            "right": null,
                                                                            "flags": 0,
                                                                            "symbol": null,
                                                                            "transformFlags": 1,
                                                                            "start": 24,
                                                                            "end": 26
                                                                        }
                                                                    ],
                                                                    "trailingComma": false,
                                                                    "flags": 0,
                                                                    "symbol": null,
                                                                    "transformFlags": 1,
                                                                    "start": 19,
                                                                    "end": 26
                                                                },
                                                                "flags": 0,
                                                                "symbol": null,
                                                                "transformFlags": 1025,
                                                                "start": 18,
                                                                "end": 27
                                                            },
                                                            "right": {
                                                                "kind": 98822,
                                                                "elementList": {
                                                                    "kind": 65605,
                                                                    "elements": [
                                                                        {
                                                                            "kind": 4261540,
                                                                            "text": 4,
                                                                            "rawText": "4",
                                                                            "flags": 0,
                                                                            "symbol": null,
                                                                            "transformFlags": 0,
                                                                            "start": 31,
                                                                            "end": 32
                                                                        },
                                                                        {
                                                                            "kind": 4261540,
                                                                            "text": 5,
                                                                            "rawText": "5",
                                                                            "flags": 0,
                                                                            "symbol": null,
                                                                            "transformFlags": 0,
                                                                            "start": 33,
                                                                            "end": 35
                                                                        }
                                                                    ],
                                                                    "trailingComma": false,
                                                                    "multiline": false,
                                                                    "flags": 0,
                                                                    "symbol": null,
                                                                    "transformFlags": 0,
                                                                    "start": 31,
                                                                    "end": 36
                                                                },
                                                                "flags": 1,
                                                                "symbol": null,
                                                                "transformFlags": 0,
                                                                "start": 29,
                                                                "end": 36
                                                            },
                                                            "flags": 1,
                                                            "symbol": null,
                                                            "transformFlags": 1,
                                                            "start": 18,
                                                            "end": 36
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 1,
                                                    "symbol": null,
                                                    "transformFlags": 1,
                                                    "start": 18,
                                                    "end": 36
                                                },
                                                "flags": 1,
                                                "symbol": null,
                                                "transformFlags": 1025,
                                                "start": 17,
                                                "end": 36
                                            },
                                            "isOptional": false,
                                            "type": null,
                                            "initializer": null,
                                            "decorators": null,
                                            "accessModifier": null,
                                            "isReadOnly": false,
                                            "flags": 1,
                                            "symbol": null,
                                            "transformFlags": 1,
                                            "start": 17,
                                            "end": 36
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 1,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 17,
                                    "end": 37
                                },
                                "isSetter": false,
                                "isGetter": false,
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
                                                            "kind": 2097233,
                                                            "expression": {
                                                                "kind": 65550,
                                                                "left": {
                                                                    "kind": 196712,
                                                                    "text": "x",
                                                                    "rawText": "x",
                                                                    "flags": 0,
                                                                    "symbol": null,
                                                                    "transformFlags": 0,
                                                                    "start": 42,
                                                                    "end": 43
                                                                },
                                                                "operator": "=",
                                                                "right": {
                                                                    "kind": 98984,
                                                                    "propertyList": {
                                                                        "kind": 65722,
                                                                        "properties": [],
                                                                        "trailingComma": false,
                                                                        "multiline": false,
                                                                        "flags": 0,
                                                                        "symbol": null,
                                                                        "transformFlags": 0,
                                                                        "start": 47,
                                                                        "end": 47
                                                                    },
                                                                    "flags": 1,
                                                                    "symbol": null,
                                                                    "transformFlags": 0,
                                                                    "start": 45,
                                                                    "end": 47
                                                                },
                                                                "flags": 1,
                                                                "symbol": null,
                                                                "transformFlags": 0,
                                                                "start": 42,
                                                                "end": 47
                                                            },
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 42,
                                                            "end": 47
                                                        },
                                                        {
                                                            "kind": 2099237,
                                                            "block": {
                                                                "kind": 2084,
                                                                "statements": [
                                                                    {
                                                                        "kind": 2097233,
                                                                        "expression": {
                                                                            "kind": 65563,
                                                                            "left": {
                                                                                "kind": 196712,
                                                                                "text": "async",
                                                                                "rawText": "async",
                                                                                "flags": 0,
                                                                                "symbol": null,
                                                                                "transformFlags": 0,
                                                                                "start": 48,
                                                                                "end": 54
                                                                            },
                                                                            "operator": "*",
                                                                            "right": {
                                                                                "kind": 1073807915,
                                                                                "expression": {
                                                                                    "kind": 196712,
                                                                                    "text": "method",
                                                                                    "rawText": "method",
                                                                                    "flags": 0,
                                                                                    "symbol": null,
                                                                                    "transformFlags": 0,
                                                                                    "start": 56,
                                                                                    "end": 62
                                                                                },
                                                                                "typeArguments": null,
                                                                                "argumentList": {
                                                                                    "kind": 3,
                                                                                    "elements": [
                                                                                        {
                                                                                            "kind": 98822,
                                                                                            "elementList": {
                                                                                                "kind": 65605,
                                                                                                "elements": [
                                                                                                    {
                                                                                                        "kind": 65550,
                                                                                                        "left": {
                                                                                                            "kind": 98822,
                                                                                                            "elementList": {
                                                                                                                "kind": 65605,
                                                                                                                "elements": [
                                                                                                                    {
                                                                                                                        "kind": 196712,
                                                                                                                        "text": "x",
                                                                                                                        "rawText": "x",
                                                                                                                        "flags": 0,
                                                                                                                        "symbol": null,
                                                                                                                        "transformFlags": 0,
                                                                                                                        "start": 65,
                                                                                                                        "end": 66
                                                                                                                    },
                                                                                                                    {
                                                                                                                        "kind": 196712,
                                                                                                                        "text": "y",
                                                                                                                        "rawText": "y",
                                                                                                                        "flags": 0,
                                                                                                                        "symbol": null,
                                                                                                                        "transformFlags": 0,
                                                                                                                        "start": 67,
                                                                                                                        "end": 69
                                                                                                                    },
                                                                                                                    {
                                                                                                                        "kind": 196712,
                                                                                                                        "text": "z",
                                                                                                                        "rawText": "z",
                                                                                                                        "flags": 0,
                                                                                                                        "symbol": null,
                                                                                                                        "transformFlags": 0,
                                                                                                                        "start": 70,
                                                                                                                        "end": 72
                                                                                                                    }
                                                                                                                ],
                                                                                                                "trailingComma": false,
                                                                                                                "multiline": false,
                                                                                                                "flags": 0,
                                                                                                                "symbol": null,
                                                                                                                "transformFlags": 0,
                                                                                                                "start": 65,
                                                                                                                "end": 72
                                                                                                            },
                                                                                                            "flags": 0,
                                                                                                            "symbol": null,
                                                                                                            "transformFlags": 0,
                                                                                                            "start": 64,
                                                                                                            "end": 73
                                                                                                        },
                                                                                                        "operator": "=",
                                                                                                        "right": {
                                                                                                            "kind": 98822,
                                                                                                            "elementList": {
                                                                                                                "kind": 65605,
                                                                                                                "elements": [
                                                                                                                    {
                                                                                                                        "kind": 4261540,
                                                                                                                        "text": 4,
                                                                                                                        "rawText": "4",
                                                                                                                        "flags": 0,
                                                                                                                        "symbol": null,
                                                                                                                        "transformFlags": 0,
                                                                                                                        "start": 77,
                                                                                                                        "end": 78
                                                                                                                    },
                                                                                                                    {
                                                                                                                        "kind": 4261540,
                                                                                                                        "text": 5,
                                                                                                                        "rawText": "5",
                                                                                                                        "flags": 0,
                                                                                                                        "symbol": null,
                                                                                                                        "transformFlags": 0,
                                                                                                                        "start": 79,
                                                                                                                        "end": 81
                                                                                                                    }
                                                                                                                ],
                                                                                                                "trailingComma": false,
                                                                                                                "multiline": false,
                                                                                                                "flags": 0,
                                                                                                                "symbol": null,
                                                                                                                "transformFlags": 0,
                                                                                                                "start": 77,
                                                                                                                "end": 82
                                                                                                            },
                                                                                                            "flags": 1,
                                                                                                            "symbol": null,
                                                                                                            "transformFlags": 0,
                                                                                                            "start": 75,
                                                                                                            "end": 82
                                                                                                        },
                                                                                                        "flags": 1,
                                                                                                        "symbol": null,
                                                                                                        "transformFlags": 0,
                                                                                                        "start": 64,
                                                                                                        "end": 82
                                                                                                    }
                                                                                                ],
                                                                                                "trailingComma": false,
                                                                                                "multiline": false,
                                                                                                "flags": 1,
                                                                                                "symbol": null,
                                                                                                "transformFlags": 0,
                                                                                                "start": 64,
                                                                                                "end": 82
                                                                                            },
                                                                                            "flags": 1,
                                                                                            "symbol": null,
                                                                                            "transformFlags": 0,
                                                                                            "start": 63,
                                                                                            "end": 82
                                                                                        }
                                                                                    ],
                                                                                    "trailingComma": false,
                                                                                    "transformFlags": 0,
                                                                                    "flags": 1,
                                                                                    "symbol": null,
                                                                                    "start": 64,
                                                                                    "end": 82
                                                                                },
                                                                                "flags": 1,
                                                                                "symbol": null,
                                                                                "transformFlags": 0,
                                                                                "start": 62,
                                                                                "end": 82
                                                                            },
                                                                            "flags": 1,
                                                                            "symbol": null,
                                                                            "transformFlags": 0,
                                                                            "start": 48,
                                                                            "end": 82
                                                                        },
                                                                        "flags": 0,
                                                                        "symbol": null,
                                                                        "transformFlags": 0,
                                                                        "start": 48,
                                                                        "end": 82
                                                                    }
                                                                ],
                                                                "multiline": false,
                                                                "flags": 1,
                                                                "symbol": null,
                                                                "transformFlags": 0,
                                                                "start": 48,
                                                                "end": 82
                                                            },
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 47,
                                                            "end": 83
                                                        }
                                                    ],
                                                    "multiline": false,
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 42,
                                                    "end": 83
                                                },
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 40,
                                                "end": 84
                                            }
                                        ],
                                        "multiline": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 40,
                                        "end": 84
                                    },
                                    "flags": 1,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 37,
                                    "end": 84
                                },
                                "decorators": null,
                                "type": null,
                                "accessModifier": null,
                                "typeParameters": null,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097160,
                                "start": 16,
                                "end": 84
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 2,
                        "end": 84
                    },
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 84
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 84
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 84
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "']' expected.",
            "start": 82,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'}' expected.",
            "start": 83,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 84
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

