# Kataw parser test case

## Input

`````js
[...x.list];
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "[...x.list];",
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
                                "kind": 67175096,
                                "member": {
                                    "kind": 196712,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 4,
                                    "end": 5
                                },
                                "expression": {
                                    "kind": 196711,
                                    "text": "list",
                                    "rawText": "list",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 6,
                                    "end": 10
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 5,
                                "end": 10,
                                "period": {
                                    "kind": 255,
                                    "pos": 5,
                                    "end": 6
                                }
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2,
                            "start": 1,
                            "end": 10
                        }
                    ],
                    "trailingComma": false,
                    "multiline": false,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 10
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 11
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 12
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
    "end": 12
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

