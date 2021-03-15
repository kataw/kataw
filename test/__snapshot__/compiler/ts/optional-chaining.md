# Kataw parser test case

## Input

`````js
example.inner?.greet<string>()
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "example.inner?.greet<string>()",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 1073807915,
                "expression": {
                    "kind": 65708,
                    "member": {
                        "kind": 67175096,
                        "member": {
                            "kind": 196712,
                            "text": "example",
                            "rawText": "example",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 7
                        },
                        "expression": {
                            "kind": 196711,
                            "text": "inner",
                            "rawText": "inner",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 8,
                            "end": 13
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 7,
                        "end": 13,
                        "period": {
                            "kind": 255,
                            "pos": 7,
                            "end": 8
                        }
                    },
                    "chain": {
                        "kind": 65707,
                        "chain": {
                            "kind": 67174583,
                            "chain": null,
                            "expression": {
                                "kind": 196711,
                                "text": "greet",
                                "rawText": "greet",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 15,
                                "end": 20
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 32,
                            "start": 15,
                            "end": 20
                        },
                        "flags": 0,
                        "pos": 15,
                        "end": 20
                    },
                    "flags": 0,
                    "pos": 13,
                    "end": 20
                },
                "typeArguments": {
                    "kind": 8419,
                    "typeArgumentsList": [
                        {
                            "kind": 4202702,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 21,
                            "end": 27
                        }
                    ],
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 2097152,
                    "start": 21,
                    "end": 28
                },
                "argumentList": {
                    "kind": 3,
                    "elements": [],
                    "trailingComma": false,
                    "transformFlags": 0,
                    "flags": 0,
                    "symbol": null,
                    "start": 29,
                    "end": 29
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 20,
                "end": 30
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 30
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
    "end": 30
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

