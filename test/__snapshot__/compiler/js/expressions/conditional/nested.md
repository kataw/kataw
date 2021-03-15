# Kataw parser test case

## Input

`````js
z(z(z(a ? b : c++)));
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "z(z(z(a ? b : c++)));",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 1073807915,
                "expression": {
                    "kind": 196712,
                    "text": "z",
                    "rawText": "z",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 1
                },
                "typeArguments": null,
                "argumentList": {
                    "kind": 3,
                    "elements": [
                        {
                            "kind": 1073807915,
                            "expression": {
                                "kind": 196712,
                                "text": "z",
                                "rawText": "z",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 2,
                                "end": 3
                            },
                            "typeArguments": null,
                            "argumentList": {
                                "kind": 3,
                                "elements": [
                                    {
                                        "kind": 1073807915,
                                        "expression": {
                                            "kind": 196712,
                                            "text": "z",
                                            "rawText": "z",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 4,
                                            "end": 5
                                        },
                                        "typeArguments": null,
                                        "argumentList": {
                                            "kind": 3,
                                            "elements": [
                                                {
                                                    "kind": 65592,
                                                    "shortCircuit": {
                                                        "kind": 196712,
                                                        "text": "a",
                                                        "rawText": "a",
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 6,
                                                        "end": 7
                                                    },
                                                    "consequent": {
                                                        "kind": 196712,
                                                        "text": "b",
                                                        "rawText": "b",
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 9,
                                                        "end": 11
                                                    },
                                                    "alternate": {
                                                        "kind": 65714,
                                                        "operator": "++",
                                                        "operand": {
                                                            "kind": 196712,
                                                            "text": "c",
                                                            "rawText": "c",
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 13,
                                                            "end": 15
                                                        },
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 13,
                                                        "end": 17
                                                    },
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 6,
                                                    "end": 17
                                                }
                                            ],
                                            "trailingComma": false,
                                            "transformFlags": 0,
                                            "flags": 0,
                                            "symbol": null,
                                            "start": 7,
                                            "end": 18
                                        },
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 5,
                                        "end": 18
                                    }
                                ],
                                "trailingComma": false,
                                "transformFlags": 0,
                                "flags": 0,
                                "symbol": null,
                                "start": 5,
                                "end": 19
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 19
                        }
                    ],
                    "trailingComma": false,
                    "transformFlags": 0,
                    "flags": 0,
                    "symbol": null,
                    "start": 3,
                    "end": 20
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 1,
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

