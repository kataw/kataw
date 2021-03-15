# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw15/test\__snapshot__\compiler\error-recovery\types\gen\in_arrow_head
> :: test: in arrow head
> :: case: x function y (string: void
## Input

`````js
([ x function y (string: void , x: x function y (string: void ]) => {}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "([ x function y (string: void , x: x function y (string: void ]) => {}",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 83976,
                "typeParameters": null,
                "arrowParameters": {
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
                                            "start": 2,
                                            "end": 4
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
                                                "start": 13,
                                                "end": 15
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
                                                            "start": 17,
                                                            "end": 23
                                                        },
                                                        "isOptional": false,
                                                        "type": {
                                                            "kind": 4202742,
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 2097152,
                                                            "start": 24,
                                                            "end": 29
                                                        },
                                                        "initializer": null,
                                                        "decorators": null,
                                                        "accessModifier": null,
                                                        "isReadOnly": false,
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 1,
                                                        "start": 17,
                                                        "end": 29
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
                                                            "start": 31,
                                                            "end": 33
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
                                                                "start": 34,
                                                                "end": 36
                                                            },
                                                            "typeArguments": null,
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 2097152,
                                                            "start": 34,
                                                            "end": 45
                                                        },
                                                        "initializer": null,
                                                        "decorators": null,
                                                        "accessModifier": null,
                                                        "isReadOnly": false,
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 1,
                                                        "start": 31,
                                                        "end": 36
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 1,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 17,
                                                "end": 45
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
                                                    "start": 36,
                                                    "end": 36
                                                },
                                                "flags": 1,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 36,
                                                "end": 36
                                            },
                                            "typeParameters": null,
                                            "type": null,
                                            "flags": 1,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 4,
                                            "end": 36
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
                                                "start": 45,
                                                "end": 47
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
                                                            "start": 49,
                                                            "end": 55
                                                        },
                                                        "isOptional": false,
                                                        "type": {
                                                            "kind": 4202742,
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 2097152,
                                                            "start": 56,
                                                            "end": 61
                                                        },
                                                        "initializer": null,
                                                        "decorators": null,
                                                        "accessModifier": null,
                                                        "isReadOnly": false,
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 1,
                                                        "start": 49,
                                                        "end": 61
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 1,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 49,
                                                "end": 63
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
                                                    "start": 61,
                                                    "end": 61
                                                },
                                                "flags": 1,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 61,
                                                "end": 61
                                            },
                                            "typeParameters": null,
                                            "type": null,
                                            "flags": 1,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 36,
                                            "end": 61
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 1,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 2,
                                    "end": 61
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 1,
                                "end": 63
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
                            "start": 0,
                            "end": 64
                        }
                    ],
                    "type": null,
                    "accessModifier": null,
                    "trailingComma": false,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 64
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
                        "start": 69,
                        "end": 69
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 67,
                    "end": 70
                },
                "flags": 1073741824,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 70
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 70
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 5,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Expression or comma expected.",
            "start": 37,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Expression or comma expected.",
            "start": 62,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 70
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

