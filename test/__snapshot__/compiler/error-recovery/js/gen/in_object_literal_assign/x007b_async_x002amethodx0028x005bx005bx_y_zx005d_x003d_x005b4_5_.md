# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-17
- From: kataw/test/__snapshot__/compiler/error-recovery/js/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/js/gen/in_object_literal_assign
> :: test: in object literal assign
> :: case: { async *method([[x, y, z] = [4, 5,
## Input

`````js
x = { x = { async *method([[x, y, z] = [4, 5,}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "x = { x = { async *method([[x, y, z] = [4, 5,}",
    "filename": "",
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
                    "start": 0,
                    "end": 1
                },
                "operator": "=",
                "right": {
                    "kind": 98984,
                    "propertyList": {
                        "kind": 65722,
                        "properties": [
                            {
                                "kind": 65597,
                                "left": {
                                    "kind": 196712,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 5,
                                    "end": 7
                                },
                                "isOptional": false,
                                "exclamation": false,
                                "right": {
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
                                                    "start": 19,
                                                    "end": 25
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
                                                                                                "start": 28,
                                                                                                "end": 29
                                                                                            },
                                                                                            "right": null,
                                                                                            "flags": 0,
                                                                                            "symbol": null,
                                                                                            "transformFlags": 1,
                                                                                            "start": 28,
                                                                                            "end": 29
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
                                                                                                "start": 30,
                                                                                                "end": 32
                                                                                            },
                                                                                            "right": null,
                                                                                            "flags": 0,
                                                                                            "symbol": null,
                                                                                            "transformFlags": 1,
                                                                                            "start": 30,
                                                                                            "end": 32
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
                                                                                                "start": 33,
                                                                                                "end": 35
                                                                                            },
                                                                                            "right": null,
                                                                                            "flags": 0,
                                                                                            "symbol": null,
                                                                                            "transformFlags": 1,
                                                                                            "start": 33,
                                                                                            "end": 35
                                                                                        }
                                                                                    ],
                                                                                    "trailingComma": false,
                                                                                    "flags": 0,
                                                                                    "symbol": null,
                                                                                    "transformFlags": 1,
                                                                                    "start": 28,
                                                                                    "end": 35
                                                                                },
                                                                                "flags": 0,
                                                                                "symbol": null,
                                                                                "transformFlags": 1025,
                                                                                "start": 27,
                                                                                "end": 36
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
                                                                                            "start": 40,
                                                                                            "end": 41
                                                                                        },
                                                                                        {
                                                                                            "kind": 4261540,
                                                                                            "text": 5,
                                                                                            "rawText": "5",
                                                                                            "flags": 0,
                                                                                            "symbol": null,
                                                                                            "transformFlags": 0,
                                                                                            "start": 42,
                                                                                            "end": 44
                                                                                        }
                                                                                    ],
                                                                                    "trailingComma": false,
                                                                                    "multiline": false,
                                                                                    "flags": 0,
                                                                                    "symbol": null,
                                                                                    "transformFlags": 0,
                                                                                    "start": 40,
                                                                                    "end": 45
                                                                                },
                                                                                "flags": 1,
                                                                                "symbol": null,
                                                                                "transformFlags": 0,
                                                                                "start": 38,
                                                                                "end": 45
                                                                            },
                                                                            "flags": 1,
                                                                            "symbol": null,
                                                                            "transformFlags": 1,
                                                                            "start": 27,
                                                                            "end": 45
                                                                        }
                                                                    ],
                                                                    "trailingComma": false,
                                                                    "flags": 1,
                                                                    "symbol": null,
                                                                    "transformFlags": 1,
                                                                    "start": 27,
                                                                    "end": 45
                                                                },
                                                                "flags": 1,
                                                                "symbol": null,
                                                                "transformFlags": 1025,
                                                                "start": 26,
                                                                "end": 45
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
                                                            "start": 26,
                                                            "end": 45
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 1,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 26,
                                                    "end": 46
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
                                                "start": 25,
                                                "end": 45
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": false,
                                        "flags": 1,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 11,
                                        "end": 45
                                    },
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 9,
                                    "end": 46
                                },
                                "accessModifier": null,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 1,
                                "start": 5,
                                "end": 46
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 5,
                        "end": 46
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 3,
                    "end": 46
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 46
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 46
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "']' expected.",
            "start": 45,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 46
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

