# Kataw parser test case

## Input

`````js
`${name}`;
{
    /* TODO comment comment comment */
    1 + 1;
}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "`${name}`;\n{\n    /* TODO comment comment comment */\n    1 + 1;\n}",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 66261,
                "spans": [
                    {
                        "kind": 66263,
                        "rawText": "",
                        "text": "",
                        "expression": {
                            "kind": 196712,
                            "text": "name",
                            "rawText": "name",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 7
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 0,
                        "end": 7
                    }
                ],
                "tail": {
                    "kind": 4260568,
                    "rawText": "",
                    "text": "",
                    "literal": false,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 1,
                    "start": 7,
                    "end": 9
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 1,
                "start": 0,
                "end": 9
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 10
        },
        {
            "kind": 2099237,
            "block": {
                "kind": 2084,
                "statements": [
                    {
                        "kind": 2097233,
                        "expression": {
                            "kind": 65563,
                            "left": {
                                "kind": 4261540,
                                "text": 1,
                                "rawText": "1",
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 12,
                                "end": 57
                            },
                            "operator": "+",
                            "right": {
                                "kind": 4261540,
                                "text": 1,
                                "rawText": "1",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 59,
                                "end": 61
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 12,
                            "end": 61
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 12,
                        "end": 62
                    }
                ],
                "multiline": true,
                "flags": 32768,
                "symbol": null,
                "transformFlags": 0,
                "start": 12,
                "end": 62
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 10,
            "end": 64
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
    "end": 64
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

