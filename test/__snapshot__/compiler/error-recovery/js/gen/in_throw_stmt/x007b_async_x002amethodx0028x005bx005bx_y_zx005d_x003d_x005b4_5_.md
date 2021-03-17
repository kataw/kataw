# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-17
- From: kataw/test/__snapshot__/compiler/error-recovery/js/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/js/gen/in_throw_stmt
> :: test: in throw stmt
> :: case: { async *method([[x, y, z] = [4, 5,
## Input

`````js
throw { async *method([[x, y, z] = [4, 5,
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "throw { async *method([[x, y, z] = [4, 5,",
    "filename": "",
    "statements": [
        {
            "kind": 2097373,
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
                                "start": 15,
                                "end": 21
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
                                                                            "start": 24,
                                                                            "end": 25
                                                                        },
                                                                        "right": null,
                                                                        "flags": 0,
                                                                        "symbol": null,
                                                                        "transformFlags": 1,
                                                                        "start": 24,
                                                                        "end": 25
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
                                                                            "start": 26,
                                                                            "end": 28
                                                                        },
                                                                        "right": null,
                                                                        "flags": 0,
                                                                        "symbol": null,
                                                                        "transformFlags": 1,
                                                                        "start": 26,
                                                                        "end": 28
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
                                                                            "start": 29,
                                                                            "end": 31
                                                                        },
                                                                        "right": null,
                                                                        "flags": 0,
                                                                        "symbol": null,
                                                                        "transformFlags": 1,
                                                                        "start": 29,
                                                                        "end": 31
                                                                    }
                                                                ],
                                                                "trailingComma": false,
                                                                "flags": 0,
                                                                "symbol": null,
                                                                "transformFlags": 1,
                                                                "start": 24,
                                                                "end": 31
                                                            },
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 1025,
                                                            "start": 23,
                                                            "end": 32
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
                                                                        "start": 36,
                                                                        "end": 37
                                                                    },
                                                                    {
                                                                        "kind": 4261540,
                                                                        "text": 5,
                                                                        "rawText": "5",
                                                                        "flags": 0,
                                                                        "symbol": null,
                                                                        "transformFlags": 0,
                                                                        "start": 38,
                                                                        "end": 40
                                                                    }
                                                                ],
                                                                "trailingComma": false,
                                                                "multiline": false,
                                                                "flags": 0,
                                                                "symbol": null,
                                                                "transformFlags": 0,
                                                                "start": 36,
                                                                "end": 41
                                                            },
                                                            "flags": 1,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 34,
                                                            "end": 41
                                                        },
                                                        "flags": 1,
                                                        "symbol": null,
                                                        "transformFlags": 1,
                                                        "start": 23,
                                                        "end": 41
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 1,
                                                "symbol": null,
                                                "transformFlags": 1,
                                                "start": 23,
                                                "end": 41
                                            },
                                            "flags": 1,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 22,
                                            "end": 41
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
                                        "start": 22,
                                        "end": 41
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 22,
                                "end": 41
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
                            "start": 21,
                            "end": 41
                        }
                    ],
                    "trailingComma": false,
                    "multiline": false,
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 7,
                    "end": 41
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 5,
                "end": 41
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 41
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "']' expected.",
            "start": 40,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 41
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

