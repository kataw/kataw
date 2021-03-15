# Kataw parser test case

## Input

`````js
{ let {x} = y }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "{ let {x} = y }",
    "filename": "",
    "statements": [
        {
            "kind": 2099237,
            "block": {
                "kind": 2084,
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
                                        "kind": 33554598,
                                        "propertyList": {
                                            "kind": 33,
                                            "properties": [
                                                {
                                                    "kind": 203,
                                                    "ellipsis": false,
                                                    "left": {
                                                        "kind": 131102,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 1025,
                                                        "start": 7,
                                                        "end": 8
                                                    },
                                                    "right": null,
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 1024,
                                                    "start": 7,
                                                    "end": 8
                                                }
                                            ],
                                            "multiline": false,
                                            "trailingComma": false,
                                            "transformFlags": 1025,
                                            "flags": 0,
                                            "symbol": null,
                                            "start": 7,
                                            "end": 8
                                        },
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1025,
                                        "start": 5,
                                        "end": 9
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
                                        "start": 11,
                                        "end": 13
                                    },
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 5,
                                    "end": 13
                                }
                            ],
                            "flags": 8,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 5,
                            "end": 13
                        },
                        "flags": 8,
                        "symbol": null,
                        "transformFlags": 769,
                        "start": 1,
                        "end": 13
                    }
                ],
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
            "end": 15
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
    "end": 15
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

