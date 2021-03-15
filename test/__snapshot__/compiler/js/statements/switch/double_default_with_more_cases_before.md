# Kataw parser test case

## Input

`````js
switch(x) { case y: break; case z: break; default: default: }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "switch(x) { case y: break; case z: break; default: default: }",
    "filename": "",
    "statements": [
        {
            "kind": 2097362,
            "expression": {
                "kind": 196712,
                "text": "x",
                "rawText": "x",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 7,
                "end": 8
            },
            "caseBlock": {
                "kind": 2093,
                "clauses": [
                    {
                        "kind": 46,
                        "expression": {
                            "kind": 196712,
                            "text": "y",
                            "rawText": "y",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 16,
                            "end": 18
                        },
                        "statements": [
                            {
                                "kind": 2097193,
                                "label": null,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 19,
                                "end": 26
                            }
                        ],
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 11,
                        "end": 26
                    },
                    {
                        "kind": 46,
                        "expression": {
                            "kind": 196712,
                            "text": "z",
                            "rawText": "z",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 31,
                            "end": 33
                        },
                        "statements": [
                            {
                                "kind": 2097193,
                                "label": null,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 34,
                                "end": 41
                            }
                        ],
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 26,
                        "end": 41
                    },
                    {
                        "kind": 65,
                        "statements": [],
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 41,
                        "end": 50
                    },
                    {
                        "kind": 65,
                        "statements": [],
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 50,
                        "end": 59
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 9,
                "end": 61
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 61
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
    "end": 61
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

