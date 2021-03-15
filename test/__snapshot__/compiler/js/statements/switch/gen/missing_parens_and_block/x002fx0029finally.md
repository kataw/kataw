# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw/test/__snapshot__/compiler/js/statements/switch/autogen.md
- Path: kataw/test/__snapshot__/compiler/js/statements/switch/gen/missing_parens_and_block
> :: test: missing parens and block
> :: case: /)finally
## Input

`````js
switch case /)finally
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "switch case /)finally",
    "filename": "",
    "statements": [
        {
            "kind": 2097362,
            "expression": {
                "kind": 131322,
                "text": "",
                "flags": 3,
                "symbol": null,
                "transformFlags": 0,
                "start": 6,
                "end": 6
            },
            "caseBlock": {
                "kind": 2093,
                "clauses": [
                    {
                        "kind": 46,
                        "expression": {
                            "kind": 4260544,
                            "text": "/)finally",
                            "flags": 1048576,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 11,
                            "end": 21
                        },
                        "statements": [],
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 6,
                        "end": 21
                    }
                ],
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 6,
                "end": 21
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 21
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
            "source": 0,
            "message": "Unterminated regular expression literal",
            "start": 21,
            "length": 1
        },
        {
            "kind": 2,
            "source": 2,
            "message": "':' expected.",
            "start": 12,
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

