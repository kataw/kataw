# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-17
- From: kataw/test/__snapshot__/compiler/error-recovery/js/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/js/gen/stand-alone
> :: test: stand-alone
> :: case: import m ;;'baz';
## Input

`````js
[ import m ;;'baz'; ]
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "[ import m ;;'baz'; ]",
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
                            "kind": 66156,
                            "typeArguments": null,
                            "expression": {
                                "kind": 196712,
                                "text": "m",
                                "rawText": "m",
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 8,
                                "end": 10
                            },
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 262152,
                            "start": 1,
                            "end": 10
                        }
                    ],
                    "trailingComma": false,
                    "multiline": false,
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 10
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 10
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 12
        },
        {
            "kind": 6291526,
            "flags": 33554432,
            "symbol": null,
            "transformFlags": 0,
            "start": 12,
            "end": 13
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
                "start": 13,
                "end": 18
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 13,
            "end": 19
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 9,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "')' expected.",
            "start": 11,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 20,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

