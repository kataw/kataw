# Auto-generated test cases ( Kataw )
<<<<<<< HEAD
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw15/test\__snapshot__\compiler\error-recovery\types\gen\in_class
=======
- Regenerated: 2021-03-14
- From: kataw/test/__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/types/gen/in_class
>>>>>>> chore: autogen & update snapshots
> :: test: in class
> :: case: /aaaaaaaaa
## Input

`````js
/aaaaaaaaa class /aaaaaaaaa { field: /aaaaaaaaa}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "/aaaaaaaaa class /aaaaaaaaa { field: /aaaaaaaaa}",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 4260544,
                "text": "/aaaaaaaaa class /aaaaaaaaa",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 27
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 27
        },
        {
            "kind": 2099237,
            "block": {
                "kind": 2084,
                "statements": [
                    {
                        "kind": 2097292,
                        "label": {
                            "kind": 196712,
                            "text": "field",
                            "rawText": "field",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 29,
                            "end": 35
                        },
                        "statement": {
                            "kind": 2097233,
                            "expression": {
                                "kind": 4260544,
                                "text": "/aaaaaaaaa}",
                                "flags": 1048576,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 36,
                                "end": 48
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 36,
                            "end": 48
                        },
                        "isWebCompat": true,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 29,
                        "end": 48
                    }
                ],
                "multiline": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 29,
                "end": 48
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 27,
            "end": 48
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 0,
            "message": "Unknown regular expression flag",
            "start": 18,
            "length": 1
        },
        {
            "kind": 2,
            "source": 0,
            "message": "Unknown regular expression flag",
            "start": 19,
            "length": 1
        },
        {
            "kind": 2,
            "source": 0,
            "message": "Unknown regular expression flag",
            "start": 20,
            "length": 1
        },
        {
            "kind": 2,
            "source": 0,
            "message": "Unknown regular expression flag",
            "start": 21,
            "length": 1
        },
        {
            "kind": 2,
            "source": 0,
            "message": "Unknown regular expression flag",
            "start": 22,
            "length": 1
        },
        {
            "kind": 2,
            "source": 0,
            "message": "Unknown regular expression flag",
            "start": 23,
            "length": 1
        },
        {
            "kind": 2,
            "source": 0,
            "message": "Unknown regular expression flag",
            "start": 24,
            "length": 1
        },
        {
            "kind": 2,
            "source": 0,
            "message": "Unknown regular expression flag",
            "start": 25,
            "length": 1
        },
        {
            "kind": 2,
            "source": 0,
            "message": "Unknown regular expression flag",
            "start": 26,
            "length": 1
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 28,
            "length": 0
        },
        {
            "kind": 2,
            "source": 0,
            "message": "Unterminated regular expression literal",
            "start": 48,
            "length": 1
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'}' expected.",
            "start": 37,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 48
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

