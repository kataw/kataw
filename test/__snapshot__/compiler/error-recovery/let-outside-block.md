# Kataw parser test case

## Input

`````js
{}let a, b = 42, c;b;;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "{}let a, b = 42, c;b;;",
    "filename": "",
    "statements": [
        {
            "kind": 2099237,
            "block": {
                "kind": 2084,
                "statements": [],
                "multiline": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 1,
                "end": 1
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 2
        },
        {
            "kind": 142,
            "binding": {
                "kind": 31,
                "lexicals": [
                    {
                        "kind": 16525,
                        "binding": {
                            "kind": 131102,
                            "text": "a",
                            "rawText": "a",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 5,
                            "end": 7
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": null,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 5,
                        "end": 7
                    },
                    {
                        "kind": 16525,
                        "binding": {
                            "kind": 131102,
                            "text": "b",
                            "rawText": "b",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 8,
                            "end": 10
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 4261540,
                            "text": 42,
                            "rawText": "42",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 12,
                            "end": 15
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 8,
                        "end": 15
                    },
                    {
                        "kind": 16525,
                        "binding": {
                            "kind": 131102,
                            "text": "c",
                            "rawText": "c",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 16,
                            "end": 18
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": null,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 16,
                        "end": 18
                    }
                ],
                "flags": 24,
                "symbol": null,
                "transformFlags": 0,
                "start": 2,
                "end": 18
            },
            "flags": 8,
            "symbol": null,
            "transformFlags": 769,
            "start": 2,
            "end": 19
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 196712,
                "text": "b",
                "rawText": "b",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 19,
                "end": 20
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 19,
            "end": 21
        },
        {
            "kind": 6291526,
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 21,
            "end": 22
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
    "end": 22
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

