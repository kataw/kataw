# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-17
- From: kataw/test/__snapshot__/compiler/error-recovery/js/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/js/gen/in_arrow_body
> :: test: in arrow body
> :: case: import m ;;'baz';
## Input

`````js
([ import m ;;'baz'; ]) => {x = {import m ;;'baz';}}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "([ import m ;;'baz'; ]) => {x = {import m ;;'baz';}}",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 66224,
                "expression": {
                    "kind": 98822,
                    "elementList": {
                        "kind": 65605,
                        "elements": [
                            {
                                "kind": 66156,
                                "typeArguments": null,
                                "expression": {
                                    "kind": 196712,
                                    "text": "m",
                                    "rawText": "m",
                                    "flags": 1,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 9,
                                    "end": 11
                                },
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 262152,
                                "start": 2,
                                "end": 11
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 2,
                        "end": 11
                    },
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 11
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 11
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 13
        },
        {
            "kind": 6291526,
            "flags": 33554432,
            "symbol": null,
            "transformFlags": 0,
            "start": 13,
            "end": 14
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 4261583,
                "text": "baz",
                "rawText": "baz",
                "flags": 33554432,
                "symbol": null,
                "transformFlags": 0,
                "start": 14,
                "end": 19
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 14,
            "end": 20
        },
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
                                "start": 28,
                                "end": 29
                            },
                            "operator": "=",
                            "right": {
                                "kind": 98984,
                                "propertyList": {
                                    "kind": 65722,
                                    "properties": [
                                        {
                                            "kind": 196711,
                                            "text": "import",
                                            "rawText": "import",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 33,
                                            "end": 39
                                        },
                                        {
                                            "kind": 196712,
                                            "text": "m",
                                            "rawText": "m",
                                            "flags": 1,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 39,
                                            "end": 41
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 1,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 33,
                                    "end": 41
                                },
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 31,
                                "end": 41
                            },
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 28,
                            "end": 41
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 28,
                        "end": 43
                    },
                    {
                        "kind": 6291526,
                        "flags": 33554432,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 43,
                        "end": 44
                    },
                    {
                        "kind": 2097233,
                        "expression": {
                            "kind": 4261583,
                            "text": "baz",
                            "rawText": "baz",
                            "flags": 33554432,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 44,
                            "end": 49
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 44,
                        "end": 50
                    }
                ],
                "multiline": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 28,
                "end": 50
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 26,
            "end": 51
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 10,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "')' expected.",
            "start": 12,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 21,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 22,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 24,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 40,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 42,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 51,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 52
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

