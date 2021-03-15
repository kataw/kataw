# Kataw parser test case

## Input

`````js
let { ...x, y, z } = obj;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "let { ...x, y, z } = obj;",
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
                            "kind": 33554598,
                            "propertyList": {
                                "kind": 33,
                                "properties": [
                                    {
                                        "kind": 203,
                                        "ellipsis": true,
                                        "left": {
                                            "kind": 131102,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 5,
                                            "end": 10
                                        },
                                        "right": null,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1024,
                                        "start": 5,
                                        "end": 10
                                    },
                                    {
                                        "kind": 203,
                                        "ellipsis": false,
                                        "left": {
                                            "kind": 131102,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 11,
                                            "end": 13
                                        },
                                        "right": null,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1024,
                                        "start": 11,
                                        "end": 13
                                    },
                                    {
                                        "kind": 203,
                                        "ellipsis": false,
                                        "left": {
                                            "kind": 131102,
                                            "text": "z",
                                            "rawText": "z",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 14,
                                            "end": 16
                                        },
                                        "right": null,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1024,
                                        "start": 14,
                                        "end": 16
                                    }
                                ],
                                "multiline": false,
                                "trailingComma": false,
                                "transformFlags": 1025,
                                "flags": 0,
                                "symbol": null,
                                "start": 5,
                                "end": 16
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 3,
                            "end": 18
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 196712,
                            "text": "obj",
                            "rawText": "obj",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 20,
                            "end": 24
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 3,
                        "end": 24
                    }
                ],
                "flags": 8,
                "symbol": null,
                "transformFlags": 0,
                "start": 3,
                "end": 24
            },
            "flags": 8,
            "symbol": null,
            "transformFlags": 769,
            "start": 0,
            "end": 25
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
    "end": 25
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

