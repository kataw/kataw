# Kataw parser test case

## Input

`````js
`${y,0}`
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "`${y,0}`",
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
                            "kind": 65590,
                            "expressions": [
                                {
                                    "kind": 196712,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 3,
                                    "end": 4
                                },
                                {
                                    "kind": 4261540,
                                    "text": 0,
                                    "rawText": "0",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 5,
                                    "end": 6
                                }
                            ],
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 6
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 0,
                        "end": 6
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
                    "start": 6,
                    "end": 8
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 1,
                "start": 0,
                "end": 8
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 8
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
    "end": 8
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

