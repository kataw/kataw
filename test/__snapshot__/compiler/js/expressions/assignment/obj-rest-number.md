# Kataw parser test case

## Input

`````js
result = {...rest} = 69;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "result = {...rest} = 69;",
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
                        "kind": 98984,
                        "propertyList": {
                            "kind": 65722,
                            "properties": [
                                {
                                    "kind": 65741,
                                    "argument": {
                                        "kind": 196712,
                                        "text": "rest",
                                        "rawText": "rest",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 13,
                                        "end": 17
                                    },
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 4104,
                                    "start": 13,
                                    "end": 17
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 10,
                            "end": 17
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 8,
                        "end": 18
                    },
                    "operator": "=",
                    "right": {
                        "kind": 4261540,
                        "text": 69,
                        "rawText": "69",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 20,
                        "end": 23
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 23
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 23
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 24
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
    "end": 24
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

