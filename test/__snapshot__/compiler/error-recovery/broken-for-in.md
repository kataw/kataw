# Kataw parser test case

## Input

`````js
for((1 + 1) in list) process(x);
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "for((1 + 1) in list) process(x);",
    "filename": "",
    "statements": [
        {
            "kind": 2099286,
            "initializer": {
                "kind": 66224,
                "expression": {
                    "kind": 65563,
                    "left": {
                        "kind": 4261540,
                        "text": 1,
                        "rawText": "1",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 5,
                        "end": 6
                    },
                    "operator": "+",
                    "right": {
                        "kind": 4261540,
                        "text": 1,
                        "rawText": "1",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 8,
                        "end": 10
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 5,
                    "end": 10
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 4,
                "end": 11
            },
            "expression": {
                "kind": 196712,
                "text": "list",
                "rawText": "list",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 14,
                "end": 19
            },
            "statement": {
                "kind": 2097233,
                "expression": {
                    "kind": 1073807915,
                    "expression": {
                        "kind": 196712,
                        "text": "process",
                        "rawText": "process",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 20,
                        "end": 28
                    },
                    "typeArguments": null,
                    "argumentList": {
                        "kind": 3,
                        "elements": [
                            {
                                "kind": 196712,
                                "text": "x",
                                "rawText": "x",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 29,
                                "end": 30
                            }
                        ],
                        "trailingComma": false,
                        "transformFlags": 0,
                        "flags": 0,
                        "symbol": null,
                        "start": 30,
                        "end": 31
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 28,
                    "end": 31
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 20,
                "end": 32
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 32
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
    "end": 32
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

