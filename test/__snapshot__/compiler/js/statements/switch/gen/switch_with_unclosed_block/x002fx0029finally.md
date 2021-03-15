# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw/test/__snapshot__/compiler/js/statements/switch/autogen.md
- Path: kataw/test/__snapshot__/compiler/js/statements/switch/gen/switch_with_unclosed_block
> :: test: switch with unclosed block
> :: case: /)finally
## Input

`````js
switch {} default(x) { /)finally
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "switch {} default(x) { /)finally",
    "filename": "",
    "statements": [
        {
            "kind": 2097362,
            "expression": {
                "kind": 98984,
                "propertyList": {
                    "kind": 65722,
                    "properties": [],
                    "trailingComma": false,
                    "multiline": false,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 8
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 6,
                "end": 9
            },
            "caseBlock": {
                "kind": 2093,
                "clauses": [
                    {
                        "kind": 65,
                        "statements": [
                            {
                                "kind": 2097233,
                                "expression": {
                                    "kind": 66224,
                                    "expression": {
                                        "kind": 196712,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 18,
                                        "end": 19
                                    },
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 17,
                                    "end": 20
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 17,
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
                                                "kind": 4260544,
                                                "text": "/)finally",
                                                "flags": 1048576,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 22,
                                                "end": 32
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 22,
                                            "end": 32
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 22,
                                    "end": 32
                                },
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 20,
                                "end": 32
                            }
                        ],
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 9,
                        "end": 32
                    }
                ],
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 9,
                "end": 32
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 32
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 7,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "')' expected.",
            "start": 10,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "':' expected.",
            "start": 17,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 21,
            "length": 0
        },
        {
            "kind": 2,
            "source": 0,
            "message": "Unterminated regular expression literal",
            "start": 32,
            "length": 1
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'}' expected.",
            "start": 23,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 32
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

