# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-14
- From: kataw/test/__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/types/gen/in_async_arrow_head
> :: test: in async arrow head
> :: case: x function y (string: void
## Input

`````js
async ([ x function y (string: void , x: x function y (string: void ]) => {}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "async ([ x function y (string: void , x: x function y (string: void ]) => {}",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 81936,
                "typeParameters": null,
                "parameters": {
                    "kind": 81929,
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
                                            "kind": 4325406,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 8,
                                            "end": 10
                                        },
                                        {
                                            "kind": 8456285,
                                            "name": {
                                                "kind": 131102,
                                                "text": "y",
                                                "rawText": "y",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 1025,
                                                "start": 19,
                                                "end": 21
                                            },
                                            "formalParameters": {
                                                "kind": 90,
                                                "formalParameterList": [
                                                    {
                                                        "kind": 16473,
                                                        "ellipsis": false,
                                                        "binding": {
                                                            "kind": 131102,
                                                            "text": "string",
                                                            "rawText": "string",
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 1025,
                                                            "start": 23,
                                                            "end": 29
                                                        },
                                                        "isOptional": false,
                                                        "type": {
                                                            "kind": 4202742,
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 2097152,
                                                            "start": 30,
                                                            "end": 35
                                                        },
                                                        "initializer": null,
                                                        "decorators": null,
                                                        "accessModifier": null,
                                                        "isReadOnly": false,
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 1,
                                                        "start": 23,
                                                        "end": 35
                                                    },
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
                                                            "start": 37,
                                                            "end": 39
                                                        },
                                                        "isOptional": false,
                                                        "type": {
                                                            "kind": 134226156,
                                                            "typeName": {
                                                                "kind": 196711,
                                                                "text": "x",
                                                                "rawText": "x",
                                                                "flags": 0,
                                                                "symbol": null,
                                                                "transformFlags": 0,
                                                                "start": 40,
                                                                "end": 42
                                                            },
                                                            "typeArguments": null,
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 2097152,
                                                            "start": 40,
                                                            "end": 51
                                                        },
                                                        "initializer": null,
                                                        "decorators": null,
                                                        "accessModifier": null,
                                                        "isReadOnly": false,
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 1,
                                                        "start": 37,
                                                        "end": 42
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 1,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 23,
                                                "end": 51
                                            },
                                            "contents": {
                                                "kind": 91,
                                                "functionStatementList": {
                                                    "kind": 94,
                                                    "statements": [],
                                                    "multiline": false,
                                                    "flags": 1,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 42,
                                                    "end": 42
                                                },
                                                "flags": 1,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 42,
                                                "end": 42
                                            },
                                            "typeParameters": null,
                                            "type": null,
                                            "flags": 1,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 10,
                                            "end": 42
                                        },
                                        {
                                            "kind": 8456285,
                                            "name": {
                                                "kind": 131102,
                                                "text": "y",
                                                "rawText": "y",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 1025,
                                                "start": 51,
                                                "end": 53
                                            },
                                            "formalParameters": {
                                                "kind": 90,
                                                "formalParameterList": [
                                                    {
                                                        "kind": 16473,
                                                        "ellipsis": false,
                                                        "binding": {
                                                            "kind": 131102,
                                                            "text": "string",
                                                            "rawText": "string",
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 1025,
                                                            "start": 55,
                                                            "end": 61
                                                        },
                                                        "isOptional": false,
                                                        "type": {
                                                            "kind": 4202742,
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 2097152,
                                                            "start": 62,
                                                            "end": 67
                                                        },
                                                        "initializer": null,
                                                        "decorators": null,
                                                        "accessModifier": null,
                                                        "isReadOnly": false,
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 1,
                                                        "start": 55,
                                                        "end": 67
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 1,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 55,
                                                "end": 69
                                            },
                                            "contents": {
                                                "kind": 91,
                                                "functionStatementList": {
                                                    "kind": 94,
                                                    "statements": [],
                                                    "multiline": false,
                                                    "flags": 1,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 67,
                                                    "end": 67
                                                },
                                                "flags": 1,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 67,
                                                "end": 67
                                            },
                                            "typeParameters": null,
                                            "type": null,
                                            "flags": 1,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 42,
                                            "end": 67
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 1,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 8,
                                    "end": 67
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 7,
                                "end": 69
                            },
                            "isOptional": false,
                            "type": null,
                            "initializer": null,
                            "decorators": null,
                            "accessModifier": null,
                            "isReadOnly": false,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1,
                            "start": 7,
                            "end": 70
                        }
                    ],
                    "type": null,
                    "accessModifier": null,
                    "trailingComma": false,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 70
                },
                "contents": {
                    "kind": 91,
                    "functionStatementList": {
                        "kind": 94,
                        "statements": [],
                        "multiline": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 75,
                        "end": 75
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 73,
                    "end": 76
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 76
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 76
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 11,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Expression or comma expected.",
            "start": 43,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Expression or comma expected.",
            "start": 68,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 76
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

