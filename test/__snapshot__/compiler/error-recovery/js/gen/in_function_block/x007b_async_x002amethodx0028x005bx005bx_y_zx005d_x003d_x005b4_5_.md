# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-17
- From: kataw/test/__snapshot__/compiler/error-recovery/js/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/js/gen/in_function_block
> :: test: in function block
> :: case: { async *method([[x, y, z] = [4, 5,
## Input

`````js
function x() {{ async *method([[x, y, z] = [4, 5,}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "function x() {{ async *method([[x, y, z] = [4, 5,}",
    "filename": "",
    "statements": [
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "x",
                "rawText": "x",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 8,
                "end": 10
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 11,
                "end": 12
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
                                                "start": 15,
                                                "end": 21
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
                                                    "start": 23,
                                                    "end": 29
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
                                                                                        "start": 32,
                                                                                        "end": 33
                                                                                    },
                                                                                    {
                                                                                        "kind": 196712,
                                                                                        "text": "y",
                                                                                        "rawText": "y",
                                                                                        "flags": 0,
                                                                                        "symbol": null,
                                                                                        "transformFlags": 0,
                                                                                        "start": 34,
                                                                                        "end": 36
                                                                                    },
                                                                                    {
                                                                                        "kind": 196712,
                                                                                        "text": "z",
                                                                                        "rawText": "z",
                                                                                        "flags": 0,
                                                                                        "symbol": null,
                                                                                        "transformFlags": 0,
                                                                                        "start": 37,
                                                                                        "end": 39
                                                                                    }
                                                                                ],
                                                                                "trailingComma": false,
                                                                                "multiline": false,
                                                                                "flags": 0,
                                                                                "symbol": null,
                                                                                "transformFlags": 0,
                                                                                "start": 32,
                                                                                "end": 39
                                                                            },
                                                                            "flags": 0,
                                                                            "symbol": null,
                                                                            "transformFlags": 0,
                                                                            "start": 31,
                                                                            "end": 40
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
                                                                                        "start": 44,
                                                                                        "end": 45
                                                                                    },
                                                                                    {
                                                                                        "kind": 4261540,
                                                                                        "text": 5,
                                                                                        "rawText": "5",
                                                                                        "flags": 0,
                                                                                        "symbol": null,
                                                                                        "transformFlags": 0,
                                                                                        "start": 46,
                                                                                        "end": 48
                                                                                    }
                                                                                ],
                                                                                "trailingComma": false,
                                                                                "multiline": false,
                                                                                "flags": 0,
                                                                                "symbol": null,
                                                                                "transformFlags": 0,
                                                                                "start": 44,
                                                                                "end": 49
                                                                            },
                                                                            "flags": 1,
                                                                            "symbol": null,
                                                                            "transformFlags": 0,
                                                                            "start": 42,
                                                                            "end": 49
                                                                        },
                                                                        "flags": 1,
                                                                        "symbol": null,
                                                                        "transformFlags": 0,
                                                                        "start": 31,
                                                                        "end": 49
                                                                    }
                                                                ],
                                                                "trailingComma": false,
                                                                "multiline": false,
                                                                "flags": 1,
                                                                "symbol": null,
                                                                "transformFlags": 0,
                                                                "start": 31,
                                                                "end": 49
                                                            },
                                                            "flags": 1,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 30,
                                                            "end": 49
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "transformFlags": 0,
                                                    "flags": 1,
                                                    "symbol": null,
                                                    "start": 31,
                                                    "end": 49
                                                },
                                                "flags": 1,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 29,
                                                "end": 49
                                            },
                                            "flags": 1,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 15,
                                            "end": 49
                                        },
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 15,
                                        "end": 49
                                    }
                                ],
                                "multiline": false,
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 15,
                                "end": 49
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 14,
                            "end": 50
                        }
                    ],
                    "multiline": false,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 14,
                    "end": 50
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 12,
                "end": 50
            },
            "typeParameters": null,
            "flags": 0,
            "symbol": null,
            "transformFlags": 256,
            "start": 0,
            "end": 50
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "']' expected.",
            "start": 49,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 50
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

