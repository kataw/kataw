# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-17
- From: kataw/test/__snapshot__/compiler/error-recovery/js/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/js/gen/in_destructuring_assignment_as_shorthand
> :: test: in destructuring assignment as shorthand
> :: case: { async *method([[x, y, z] = [4, 5,
## Input

`````js
[ { async *method([[x, y, z] = [4, 5, ] = x
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "[ { async *method([[x, y, z] = [4, 5, ] = x",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 98822,
                "elementList": {
                    "kind": 65605,
                    "elements": [
                        {
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
                                            "start": 11,
                                            "end": 17
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
                                                                                        "start": 20,
                                                                                        "end": 21
                                                                                    },
                                                                                    "right": null,
                                                                                    "flags": 0,
                                                                                    "symbol": null,
                                                                                    "transformFlags": 1,
                                                                                    "start": 20,
                                                                                    "end": 21
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
                                                                                        "start": 22,
                                                                                        "end": 24
                                                                                    },
                                                                                    "right": null,
                                                                                    "flags": 0,
                                                                                    "symbol": null,
                                                                                    "transformFlags": 1,
                                                                                    "start": 22,
                                                                                    "end": 24
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
                                                                                        "start": 25,
                                                                                        "end": 27
                                                                                    },
                                                                                    "right": null,
                                                                                    "flags": 0,
                                                                                    "symbol": null,
                                                                                    "transformFlags": 1,
                                                                                    "start": 25,
                                                                                    "end": 27
                                                                                }
                                                                            ],
                                                                            "trailingComma": false,
                                                                            "flags": 0,
                                                                            "symbol": null,
                                                                            "transformFlags": 1,
                                                                            "start": 20,
                                                                            "end": 27
                                                                        },
                                                                        "flags": 0,
                                                                        "symbol": null,
                                                                        "transformFlags": 1025,
                                                                        "start": 19,
                                                                        "end": 28
                                                                    },
                                                                    "right": {
                                                                        "kind": 65550,
                                                                        "left": {
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
                                                                                        "start": 32,
                                                                                        "end": 33
                                                                                    },
                                                                                    {
                                                                                        "kind": 4261540,
                                                                                        "text": 5,
                                                                                        "rawText": "5",
                                                                                        "flags": 0,
                                                                                        "symbol": null,
                                                                                        "transformFlags": 0,
                                                                                        "start": 34,
                                                                                        "end": 36
                                                                                    }
                                                                                ],
                                                                                "trailingComma": true,
                                                                                "multiline": false,
                                                                                "flags": 0,
                                                                                "symbol": null,
                                                                                "transformFlags": 0,
                                                                                "start": 32,
                                                                                "end": 37
                                                                            },
                                                                            "flags": 0,
                                                                            "symbol": null,
                                                                            "transformFlags": 0,
                                                                            "start": 30,
                                                                            "end": 39
                                                                        },
                                                                        "operator": "=",
                                                                        "right": {
                                                                            "kind": 196712,
                                                                            "text": "x",
                                                                            "rawText": "x",
                                                                            "flags": 0,
                                                                            "symbol": null,
                                                                            "transformFlags": 0,
                                                                            "start": 41,
                                                                            "end": 43
                                                                        },
                                                                        "flags": 0,
                                                                        "symbol": null,
                                                                        "transformFlags": 0,
                                                                        "start": 30,
                                                                        "end": 43
                                                                    },
                                                                    "flags": 0,
                                                                    "symbol": null,
                                                                    "transformFlags": 1,
                                                                    "start": 19,
                                                                    "end": 43
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 1,
                                                            "symbol": null,
                                                            "transformFlags": 1,
                                                            "start": 19,
                                                            "end": 43
                                                        },
                                                        "flags": 1,
                                                        "symbol": null,
                                                        "transformFlags": 1025,
                                                        "start": 18,
                                                        "end": 43
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
                                                    "start": 18,
                                                    "end": 43
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 1,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 18,
                                            "end": 43
                                        },
                                        "isSetter": false,
                                        "isGetter": false,
                                        "contents": null,
                                        "decorators": null,
                                        "type": null,
                                        "accessModifier": null,
                                        "typeParameters": null,
                                        "flags": 1,
                                        "symbol": null,
                                        "transformFlags": 2097160,
                                        "start": 17,
                                        "end": 43
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 3,
                                "end": 43
                            },
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 1,
                            "end": 43
                        }
                    ],
                    "trailingComma": false,
                    "multiline": false,
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 43
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 43
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 43
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 42,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 43
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

