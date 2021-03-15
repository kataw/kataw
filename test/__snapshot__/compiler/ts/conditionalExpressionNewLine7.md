# Kataw parser test case

## Input

`````js
var v = a ?
  b :
  c;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "var v = a ?\n  b :\n  c;",
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
                            "kind": 131102,
                            "text": "v",
                            "rawText": "v",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 3,
                            "end": 5
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 65592,
                            "shortCircuit": {
                                "kind": 196712,
                                "text": "a",
                                "rawText": "a",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 7,
                                "end": 9
                            },
                            "consequent": {
                                "kind": 196712,
                                "text": "b",
                                "rawText": "b",
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 11,
                                "end": 15
                            },
                            "alternate": {
                                "kind": 196712,
                                "text": "c",
                                "rawText": "c",
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 17,
                                "end": 21
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 7,
                            "end": 21
                        },
                        "flags": 3,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 21
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 3,
                "end": 21
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 22
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
    "end": 22
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

