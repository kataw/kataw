# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-17
- From: kataw/test/__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/types/gen/in_async_arrow_head
> :: test: in async arrow head
> :: case: { [index: number]:
## Input

`````js
async ([ { [index: number]: , x: { [index: number]: ]) => {}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "async ([ { [index: number]: , x: { [index: number]: ]) => {}",
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
                                            "kind": 33554598,
                                            "propertyList": {
                                                "kind": 33,
                                                "properties": [
                                                    {
                                                        "kind": 16412,
                                                        "left": {
                                                            "kind": 65591,
                                                            "expression": {
                                                                "kind": 196712,
                                                                "text": "index",
                                                                "rawText": "index",
                                                                "flags": 0,
                                                                "symbol": null,
                                                                "transformFlags": 0,
                                                                "start": 12,
                                                                "end": 17
                                                            },
                                                            "flags": 1,
                                                            "symbol": null,
                                                            "transformFlags": 131073,
                                                            "start": 10,
                                                            "end": 17
                                                        },
                                                        "right": {
                                                            "kind": 196712,
                                                            "text": "number",
                                                            "rawText": "number",
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 18,
                                                            "end": 25
                                                        },
                                                        "accessModifier": null,
                                                        "decorators": null,
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 10,
                                                        "end": 25
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "multiline": false,
                                                "flags": 1,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 10,
                                                "end": 25
                                            },
                                            "flags": 1,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 8,
                                            "end": 25
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 1,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 8,
                                    "end": 25
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 7,
                                "end": 26
                            },
                            "isOptional": false,
                            "type": {
                                "kind": 134226156,
                                "typeName": {
                                    "kind": 131322,
                                    "text": "",
                                    "flags": 3,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 27,
                                    "end": 27
                                },
                                "typeArguments": null,
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 27,
                                "end": 29
                            },
                            "initializer": null,
                            "decorators": null,
                            "accessModifier": null,
                            "isReadOnly": false,
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 1,
                            "start": 7,
                            "end": 27
                        },
                        {
                            "kind": 16473,
                            "ellipsis": false,
                            "binding": {
                                "kind": 4325406,
                                "text": "x",
                                "rawText": "x",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 29,
                                "end": 31
                            },
                            "isOptional": false,
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
                                                            "start": 36,
                                                            "end": 41
                                                        },
                                                        "isOptional": false,
                                                        "type": {
                                                            "kind": 4202657,
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 2097152,
                                                            "start": 42,
                                                            "end": 49
                                                        },
                                                        "initializer": null,
                                                        "accessModifier": null,
                                                        "isReadOnly": false,
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 1,
                                                        "start": 36,
                                                        "end": 49
                                                    }
                                                ],
                                                "trailingcomma": false,
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 2097152,
                                                "start": 36,
                                                "end": 49
                                            },
                                            "returnType": {
                                                "kind": 134226156,
                                                "typeName": {
                                                    "kind": 131322,
                                                    "text": "",
                                                    "flags": 3,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 51,
                                                    "end": 51
                                                },
                                                "typeArguments": null,
                                                "flags": 1,
                                                "symbol": null,
                                                "transformFlags": 2097152,
                                                "start": 51,
                                                "end": 53
                                            },
                                            "isStatic": false,
                                            "isReadOnly": false,
                                            "flags": 1,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 36,
                                            "end": 51
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 1,
                                    "symbol": null,
                                    "transformFlags": 2097152,
                                    "start": 34,
                                    "end": 51
                                },
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 32,
                                "end": 51
                            },
                            "initializer": null,
                            "decorators": null,
                            "accessModifier": null,
                            "isReadOnly": false,
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 1,
                            "start": 29,
                            "end": 51
                        }
                    ],
                    "trailingComma": false,
                    "transformFlags": 0,
                    "flags": 1,
                    "symbol": null,
                    "start": 8,
                    "end": 51
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 5,
                "end": 51
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 51
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
                "start": 59,
                "end": 59
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 57,
            "end": 60
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Type expected",
            "start": 52,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 53,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 55,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 60
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

