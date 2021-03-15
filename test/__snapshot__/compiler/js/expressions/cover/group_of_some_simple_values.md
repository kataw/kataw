# Kataw parser test case

## Input

`````js
(a, 1, "c", d, e, f);
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "(a, 1, \"c\", d, e, f);",
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
                            "kind": 4261540,
                            "text": 1,
                            "rawText": "1",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 5
                        },
                        {
                            "kind": 4261583,
                            "text": "c",
                            "rawText": "c",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 6,
                            "end": 10
                        },
                        {
                            "kind": 196712,
                            "text": "d",
                            "rawText": "d",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 11,
                            "end": 13
                        },
                        {
                            "kind": 196712,
                            "text": "e",
                            "rawText": "e",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 14,
                            "end": 16
                        },
                        {
                            "kind": 196712,
                            "text": "f",
                            "rawText": "f",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 17,
                            "end": 19
                        }
                    ],
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 19
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
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

