# Kataw parser test case

## Input

`````js
`X${a => b + {}}Y`
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "`X${a => b + {}}Y`",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 66261,
                "spans": [
                    {
                        "kind": 66263,
                        "rawText": "X",
                        "text": "X",
                        "expression": {
                            "kind": 83976,
                            "typeParameters": null,
                            "parameters": {
                                "kind": 4325406,
                                "text": "a",
                                "rawText": "a",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 4,
                                "end": 5
                            },
                            "contents": {
                                "kind": 65563,
                                "left": {
                                    "kind": 196712,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 8,
                                    "end": 10
                                },
                                "operator": "+",
                                "right": {
                                    "kind": 98984,
                                    "propertyList": {
                                        "kind": 65722,
                                        "properties": [],
                                        "trailingComma": false,
                                        "multiline": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 14,
                                        "end": 14
                                    },
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 12,
                                    "end": 15
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 8,
                                "end": 15
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 4,
                            "end": 15
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 0,
                        "end": 15
                    }
                ],
                "tail": {
                    "kind": 4260568,
                    "rawText": "Y",
                    "text": "Y",
                    "literal": false,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 1,
                    "start": 15,
                    "end": 18
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 1,
                "start": 0,
                "end": 18
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 18
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
    "end": 18
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

