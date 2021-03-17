# Kataw parser test case

## Input

`````js
(a, (b)) => 42
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "(a, (b)) => 42",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 66224,
                "expression": {
                    "kind": 65590,
                    "expressions": [
                        {
                            "kind": 196712,
                            "text": "a",
                            "rawText": "a",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 1,
                            "end": 2
                        },
                        {
                            "kind": 66224,
                            "expression": {
                                "kind": 196712,
                                "text": "b",
                                "rawText": "b",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 5,
                                "end": 6
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 7
                        }
                    ],
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 7
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 8
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 8
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 4261540,
                "text": 42,
                "rawText": "42",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 11,
                "end": 14
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 11,
            "end": 14
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 9,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 14
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

