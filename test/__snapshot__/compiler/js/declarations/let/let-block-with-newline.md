# Kataw parser test case

## Input

`````js
if (false) {
    L: let // ASI
    {}
}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "if (false) {\n    L: let // ASI\n    {}\n}",
    "filename": "",
    "statements": [
        {
            "kind": 2097257,
            "expression": {
                "kind": 4260391,
                "text": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 4,
                "end": 9
            },
            "consequent": {
                "kind": 2099237,
                "block": {
                    "kind": 2084,
                    "statements": [
                        {
                            "kind": 2097292,
                            "label": {
                                "kind": 196712,
                                "text": "L",
                                "rawText": "L",
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 12,
                                "end": 18
                            },
                            "statement": {
                                "kind": 2097233,
                                "expression": {
                                    "kind": 196712,
                                    "text": "let",
                                    "rawText": "let",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 19,
                                    "end": 23
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 19,
                                "end": 23
                            },
                            "isWebCompat": true,
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 12,
                            "end": 23
                        },
                        {
                            "kind": 2099237,
                            "block": {
                                "kind": 2084,
                                "statements": [],
                                "multiline": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 36,
                                "end": 36
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 23,
                            "end": 37
                        }
                    ],
                    "multiline": true,
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 12,
                    "end": 37
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 10,
                "end": 39
            },
            "alternate": null,
            "isWebCompat": true,
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 39
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 39
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

