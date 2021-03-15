# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw15/test\__snapshot__\compiler\error-recovery\types\gen\lexical_let
> :: test: lexical let
> :: case: { [index: number]:
## Input

`````js
let x: { [index: number]: { [index: number]:
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "let x: { [index: number]: { [index: number]:",
    "filename": "",
    "statements": [
        {
            "kind": 142,
            "isConst": false,
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
                            "start": 3,
                            "end": 5
                        },
                        "exclamation": false,
                        "type": {
                            "kind": 536879334,
                            "objectTypeMembers": {
                                "kind": 536871081,
                                "members": [
                                    {
                                        "kind": 73844,
                                        "accessModifier": null,
                                        "parameters": {
                                            "kind": 134226095,
                                            "parameterList": [
                                                {
                                                    "kind": 134226094,
                                                    "ellipsis": false,
                                                    "binding": {
                                                        "kind": 131102,
                                                        "text": "index",
                                                        "rawText": "index",
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 1025,
                                                        "start": 10,
                                                        "end": 15
                                                    },
                                                    "isOptional": false,
                                                    "type": {
                                                        "kind": 4202657,
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 2097152,
                                                        "start": 16,
                                                        "end": 23
                                                    },
                                                    "initializer": null,
                                                    "accessModifier": null,
                                                    "isReadOnly": false,
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 1,
                                                    "start": 10,
                                                    "end": 23
                                                }
                                            ],
                                            "trailingcomma": false,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 10,
                                            "end": 23
                                        },
                                        "returnType": {
                                            "kind": 536879334,
                                            "objectTypeMembers": {
                                                "kind": 536871081,
                                                "members": [
                                                    {
                                                        "kind": 73844,
                                                        "accessModifier": null,
                                                        "parameters": {
                                                            "kind": 134226095,
                                                            "parameterList": [
                                                                {
                                                                    "kind": 134226094,
                                                                    "ellipsis": false,
                                                                    "binding": {
                                                                        "kind": 131102,
                                                                        "text": "index",
                                                                        "rawText": "index",
                                                                        "flags": 0,
                                                                        "symbol": null,
                                                                        "transformFlags": 1025,
                                                                        "start": 29,
                                                                        "end": 34
                                                                    },
                                                                    "isOptional": false,
                                                                    "type": {
                                                                        "kind": 4202657,
                                                                        "flags": 0,
                                                                        "symbol": null,
                                                                        "transformFlags": 2097152,
                                                                        "start": 35,
                                                                        "end": 42
                                                                    },
                                                                    "initializer": null,
                                                                    "accessModifier": null,
                                                                    "isReadOnly": false,
                                                                    "flags": 0,
                                                                    "symbol": null,
                                                                    "transformFlags": 1,
                                                                    "start": 29,
                                                                    "end": 42
                                                                }
                                                            ],
                                                            "trailingcomma": false,
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 2097152,
                                                            "start": 29,
                                                            "end": 42
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
                                                                "start": 44,
                                                                "end": 44
                                                            },
                                                            "typeArguments": null,
                                                            "flags": 1,
                                                            "symbol": null,
                                                            "transformFlags": 2097152,
                                                            "start": 44,
                                                            "end": 44
                                                        },
                                                        "isStatic": false,
                                                        "isReadOnly": false,
                                                        "flags": 1,
                                                        "symbol": null,
                                                        "transformFlags": 2097152,
                                                        "start": 29,
                                                        "end": 44
                                                    }
                                                ],
                                                "multiline": false,
                                                "flags": 1,
                                                "symbol": null,
                                                "transformFlags": 2097152,
                                                "start": 27,
                                                "end": 44
                                            },
                                            "flags": 1,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 25,
                                            "end": 44
                                        },
                                        "isStatic": false,
                                        "isReadOnly": false,
                                        "flags": 1,
                                        "symbol": null,
                                        "transformFlags": 2097152,
                                        "start": 10,
                                        "end": 44
                                    }
                                ],
                                "multiline": false,
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 8,
                                "end": 44
                            },
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 6,
                            "end": 44
                        },
                        "initializer": null,
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 3,
                        "end": 44
                    }
                ],
                "flags": 9,
                "symbol": null,
                "transformFlags": 0,
                "start": 3,
                "end": 44
            },
            "flags": 9,
            "symbol": null,
            "transformFlags": 769,
            "start": 0,
            "end": 44
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Type expected",
            "start": 43,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 44
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

