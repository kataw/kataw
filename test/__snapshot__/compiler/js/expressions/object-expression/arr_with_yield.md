# Kataw parser test case

## Input

`````js
result = [x[yield]] = vals;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "result = [x[yield]] = vals;",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 65550,
                "left": {
                    "kind": 196712,
                    "text": "result",
                    "rawText": "result",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 6
                },
                "operator": "=",
                "right": {
                    "kind": 65550,
                    "left": {
                        "kind": 98822,
                        "elementList": {
                            "kind": 65605,
                            "elements": [
                                {
                                    "kind": 67174980,
                                    "member": {
                                        "kind": 196712,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 10,
                                        "end": 11
                                    },
                                    "expression": {
                                        "kind": 196712,
                                        "text": "yield",
                                        "rawText": "yield",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 12,
                                        "end": 17
                                    },
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 11,
                                    "end": 18
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 10,
                            "end": 18
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 8,
                        "end": 19
                    },
                    "operator": "=",
                    "right": {
                        "kind": 196712,
                        "text": "vals",
                        "rawText": "vals",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 21,
                        "end": 26
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 26
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 26
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 27
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
    "end": 27
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

