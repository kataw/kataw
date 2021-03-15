# Kataw parser test case

## Input

`````js
const ranges = test.rangesByText().get("#foo");
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "const ranges = test.rangesByText().get(\"#foo\");",
    "filename": "",
    "statements": [
        {
            "kind": 142,
            "isConst": true,
            "binding": {
                "kind": 31,
                "bindingList": [
                    {
                        "kind": 16525,
                        "binding": {
                            "kind": 131102,
                            "text": "ranges",
                            "rawText": "ranges",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 5,
                            "end": 12
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 1073807915,
                            "expression": {
                                "kind": 67175096,
                                "member": {
                                    "kind": 1073807915,
                                    "expression": {
                                        "kind": 67175096,
                                        "member": {
                                            "kind": 196712,
                                            "text": "test",
                                            "rawText": "test",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 14,
                                            "end": 19
                                        },
                                        "expression": {
                                            "kind": 196711,
                                            "text": "rangesByText",
                                            "rawText": "rangesByText",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 20,
                                            "end": 32
                                        },
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 19,
                                        "end": 32,
                                        "period": {
                                            "kind": 255,
                                            "pos": 19,
                                            "end": 20
                                        }
                                    },
                                    "typeArguments": null,
                                    "argumentList": {
                                        "kind": 3,
                                        "elements": [],
                                        "trailingComma": false,
                                        "transformFlags": 0,
                                        "flags": 0,
                                        "symbol": null,
                                        "start": 34,
                                        "end": 34
                                    },
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 32,
                                    "end": 34
                                },
                                "expression": {
                                    "kind": 196711,
                                    "text": "get",
                                    "rawText": "get",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 35,
                                    "end": 38
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 34,
                                "end": 38,
                                "period": {
                                    "kind": 255,
                                    "pos": 34,
                                    "end": 35
                                }
                            },
                            "typeArguments": null,
                            "argumentList": {
                                "kind": 3,
                                "elements": [
                                    {
                                        "kind": 4261583,
                                        "text": "#foo",
                                        "rawText": "#foo",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 39,
                                        "end": 45
                                    }
                                ],
                                "trailingComma": false,
                                "transformFlags": 0,
                                "flags": 0,
                                "symbol": null,
                                "start": 45,
                                "end": 46
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 38,
                            "end": 46
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 5,
                        "end": 46
                    }
                ],
                "flags": 8,
                "symbol": null,
                "transformFlags": 0,
                "start": 5,
                "end": 46
            },
            "flags": 8,
            "symbol": null,
            "transformFlags": 769,
            "start": 0,
            "end": 47
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
    "end": 47
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

