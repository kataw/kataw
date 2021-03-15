# Kataw parser test case

## Input

`````js
let z = {...x}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "let z = {...x}",
    "filename": "",
    "statements": [
        {
            "kind": 142,
            "isConst": false,
            "binding": {
                "kind": 31,
                "bindingList": [
                    {
                        "kind": 16525,
                        "binding": {
                            "kind": 131102,
                            "text": "z",
                            "rawText": "z",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 3,
                            "end": 5
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 98984,
                            "propertyList": {
                                "kind": 65722,
                                "properties": [
                                    {
                                        "kind": 65741,
                                        "argument": {
                                            "kind": 196712,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 12,
                                            "end": 13
                                        },
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 4104,
                                        "start": 12,
                                        "end": 13
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 9,
                                "end": 13
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 7,
                            "end": 14
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 3,
                        "end": 14
                    }
                ],
                "flags": 8,
                "symbol": null,
                "transformFlags": 0,
                "start": 3,
                "end": 14
            },
            "flags": 8,
            "symbol": null,
            "transformFlags": 769,
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

