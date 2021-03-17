# Kataw parser test case

## Input

`````js
{ let [] = y }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "{ let [] = y }",
    "filename": "",
    "statements": [
        {
            "kind": 2099237,
            "block": {
                "kind": 2084,
                "statements": [
                    {
                        "kind": 142,
                        "binding": {
                            "kind": 31,
                            "bindingList": [
                                {
                                    "kind": 16525,
                                    "binding": {
                                        "kind": 33554437,
                                        "elementList": {
                                            "kind": 29,
                                            "elements": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1,
                                            "start": 7,
                                            "end": 7
                                        },
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1025,
                                        "start": 5,
                                        "end": 8
                                    },
                                    "exclamation": false,
                                    "type": null,
                                    "initializer": {
                                        "kind": 196712,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 10,
                                        "end": 12
                                    },
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 5,
                                    "end": 12
                                }
                            ],
                            "flags": 24,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 1,
                            "end": 12
                        },
                        "flags": 24,
                        "symbol": null,
                        "transformFlags": 769,
                        "start": 1,
                        "end": 12
                    }
                ],
                "multiline": false,
                "flags": 24,
                "symbol": null,
                "transformFlags": 0,
                "start": 1,
                "end": 12
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

