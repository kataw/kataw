# Kataw parser test case

## Input

`````js
[.../x//yield]
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "[.../x//yield]",
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
                            "kind": 65740,
                            "argument": {
                                "kind": 65563,
                                "left": {
                                    "kind": 4260544,
                                    "text": "/x/",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 4,
                                    "end": 7
                                },
                                "operator": "/",
                                "right": {
                                    "kind": 196712,
                                    "text": "yield",
                                    "rawText": "yield",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 8,
                                    "end": 13
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 4,
                                "end": 13
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2,
                            "start": 1,
                            "end": 13
                        }
                    ],
                    "trailingComma": false,
                    "multiline": false,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 13
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 14
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 14
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
    "end": 14
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

