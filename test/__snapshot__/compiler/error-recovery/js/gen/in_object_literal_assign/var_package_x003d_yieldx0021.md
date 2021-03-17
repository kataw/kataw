# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-17
- From: kataw/test/__snapshot__/compiler/error-recovery/js/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/js/gen/in_object_literal_assign
> :: test: in object literal assign
> :: case: var package = yield!
## Input

`````js
x = { x = var package = yield!}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "x = { x = var package = yield!}",
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
                                    "kind": 131322,
                                    "text": "",
                                    "flags": 3,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 9,
                                    "end": 9
                                },
                                "accessModifier": null,
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 1,
                                "start": 5,
                                "end": 9
                            },
                            {
                                "kind": 196711,
                                "text": "var",
                                "rawText": "var",
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 9,
                                "end": 13
                            },
                            {
                                "kind": 65597,
                                "left": {
                                    "kind": 196712,
                                    "text": "package",
                                    "rawText": "package",
                                    "flags": 1,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 13,
                                    "end": 21
                                },
                                "isOptional": false,
                                "exclamation": false,
                                "right": {
                                    "kind": 74398,
                                    "expression": {
                                        "kind": 196712,
                                        "text": "yield",
                                        "rawText": "yield",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 23,
                                        "end": 29
                                    },
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 2097152,
                                    "start": 29,
                                    "end": 30
                                },
                                "accessModifier": null,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 1,
                                "start": 13,
                                "end": 30
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 5,
                        "end": 30
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 3,
                    "end": 31
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 31
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 31
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 10,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 14,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 31
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

