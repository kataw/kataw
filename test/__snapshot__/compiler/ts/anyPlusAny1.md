# Kataw parser test case

## Input

`````js
var x;
x.name = "hello";
var z = x + x;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "var x;\nx.name = \"hello\";\nvar z = x + x;",
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
                            "text": "x",
                            "rawText": "x",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 3,
                            "end": 5
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": null,
                        "flags": 3,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 5
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 3,
                "end": 5
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 6
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 65550,
                "left": {
                    "kind": 67175096,
                    "member": {
                        "kind": 196712,
                        "text": "x",
                        "rawText": "x",
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 6,
                        "end": 8
                    },
                    "expression": {
                        "kind": 196711,
                        "text": "name",
                        "rawText": "name",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 9,
                        "end": 13
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 13,
                    "period": {
                        "kind": 255,
                        "pos": 8,
                        "end": 9
                    }
                },
                "operator": "=",
                "right": {
                    "kind": 4261583,
                    "text": "hello",
                    "rawText": "hello",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 15,
                    "end": 23
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 6,
                "end": 23
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 6,
            "end": 24
        },
        {
            "kind": 2097397,
            "declarationList": {
                "kind": 244,
                "declarations": [
                    {
                        "kind": 16627,
                        "binding": {
                            "kind": 131102,
                            "text": "z",
                            "rawText": "z",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 28,
                            "end": 30
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 65563,
                            "left": {
                                "kind": 196712,
                                "text": "x",
                                "rawText": "x",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 34
                            },
                            "operator": "+",
                            "right": {
                                "kind": 196712,
                                "text": "x",
                                "rawText": "x",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 36,
                                "end": 38
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 32,
                            "end": 38
                        },
                        "flags": 28,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 38
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 28,
                "end": 38
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 24,
            "end": 39
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
    "end": 39
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

