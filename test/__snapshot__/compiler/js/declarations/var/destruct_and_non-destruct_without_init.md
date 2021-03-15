# Kataw parser test case

## Input

`````js
var [foo] = arr, bar;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "var [foo] = arr, bar;",
    "filename": "",
    "statements": [
        {
            "kind": 2097397,
            "declarationList": {
                "kind": 244,
                "declarations": [
                    {
                        "kind": 16627,
                        "binding": {
                            "kind": 33554437,
                            "elementList": {
                                "kind": 29,
                                "elements": [
                                    {
                                        "kind": 16412,
                                        "ellipsis": false,
                                        "left": {
                                            "kind": 131102,
                                            "text": "foo",
                                            "rawText": "foo",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 5,
                                            "end": 8
                                        },
                                        "right": null,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1,
                                        "start": 5,
                                        "end": 8
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 1,
                                "start": 5,
                                "end": 8
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 3,
                            "end": 9
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 196712,
                            "text": "arr",
                            "rawText": "arr",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 11,
                            "end": 15
                        },
                        "flags": 3,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 15
                    },
                    {
                        "kind": 16627,
                        "binding": {
                            "kind": 131102,
                            "text": "bar",
                            "rawText": "bar",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 16,
                            "end": 20
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 20
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 3,
                "end": 20
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 21
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
    "end": 21
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

