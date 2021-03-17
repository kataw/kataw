# Kataw parser test case

## Input

`````js
1 + { t:t,
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "1 + { t:t,",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 65563,
                "left": {
                    "kind": 4261540,
                    "text": 1,
                    "rawText": "1",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 1
                },
                "operator": "+",
                "right": {
                    "kind": 98984,
                    "propertyList": {
                        "kind": 65722,
                        "properties": [
                            {
                                "kind": 65721,
                                "left": {
                                    "kind": 196711,
                                    "text": "t",
                                    "rawText": "t",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 5,
                                    "end": 7
                                },
                                "right": {
                                    "kind": 196712,
                                    "text": "t",
                                    "rawText": "t",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 8,
                                    "end": 9
                                },
                                "accessModifier": null,
                                "decorators": null,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 5,
                                "end": 9
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 5,
                        "end": 10
                    },
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 3,
                    "end": 10
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 10
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 10
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "'}' expected.",
            "start": 9,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 10
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

