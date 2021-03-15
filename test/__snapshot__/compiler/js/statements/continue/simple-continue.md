# Kataw parser test case

## Input

`````js
loop: while (x) { break loop; }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "loop: while (x) { break loop; }",
    "filename": "",
    "statements": [
        {
            "kind": 2097292,
            "label": {
                "kind": 196712,
                "text": "loop",
                "rawText": "loop",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 4
            },
            "statement": {
                "kind": 2097399,
                "expression": {
                    "kind": 196712,
                    "text": "x",
                    "rawText": "x",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 13,
                    "end": 14
                },
                "statement": {
                    "kind": 2099237,
                    "block": {
                        "kind": 2084,
                        "statements": [
                            {
                                "kind": 2097193,
                                "label": {
                                    "kind": 196712,
                                    "text": "loop",
                                    "rawText": "loop",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 23,
                                    "end": 28
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 17,
                                "end": 29
                            }
                        ],
                        "multiline": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 17,
                        "end": 29
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 15,
                    "end": 31
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 5,
                "end": 31
            },
            "isWebCompat": true,
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 31
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

