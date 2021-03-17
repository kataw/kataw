# Kataw parser test case

## Input

`````js
\\u{FFZ}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "\\\\u{FFZ}",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 196712,
                "text": "u",
                "rawText": "u",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 2,
                "end": 3
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 2,
            "end": 3
        },
        {
            "kind": 2099237,
            "block": {
                "kind": 2084,
                "statements": [
                    {
                        "kind": 2097233,
                        "expression": {
                            "kind": 196712,
                            "text": "FFZ",
                            "rawText": "FFZ",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 4,
                            "end": 7
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 4,
                        "end": 7
                    }
                ],
                "multiline": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 4,
                "end": 7
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 3,
            "end": 8
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 0,
            "message": "Invalid character",
            "start": 0,
            "length": 0
        },
        {
            "kind": 2,
            "source": 0,
            "message": "Invalid character",
            "start": 1,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 3,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 8
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

