# Kataw parser test case

## Input

`````js
z(z(z(a&&=)));
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "original": "z",
                    "text": "z",
                    "rawText": "z",
                    "flags": 96,
                    "start": 0,
                    "end": 1
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 131,
                            "expression": {
                                "kind": 134299649,
                                "original": "z",
                                "text": "z",
                                "rawText": "z",
                                "flags": 96,
                                "start": 2,
                                "end": 3
                            },
                            "argumentList": {
                                "kind": 256,
                                "elements": [
                                    {
                                        "kind": 131,
                                        "expression": {
                                            "kind": 134299649,
                                            "original": "z",
                                            "text": "z",
                                            "rawText": "z",
                                            "flags": 96,
                                            "start": 4,
                                            "end": 5
                                        },
                                        "argumentList": {
                                            "kind": 256,
                                            "elements": [
                                                {
                                                    "kind": 125,
                                                    "left": {
                                                        "kind": 134299649,
                                                        "original": "a",
                                                        "text": "a",
                                                        "rawText": "a",
                                                        "flags": 96,
                                                        "start": 6,
                                                        "end": 7
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4139,
                                                        "flags": 64,
                                                        "start": 7,
                                                        "end": 10
                                                    },
                                                    "right": {
                                                        "kind": 16637,
                                                        "text": "",
                                                        "flags": 68,
                                                        "start": 10,
                                                        "end": 10
                                                    },
                                                    "flags": 32,
                                                    "start": 6,
                                                    "end": 10
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 6,
                                            "end": 10
                                        },
                                        "flags": 32,
                                        "start": 4,
                                        "end": 11
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 4,
                                "end": 11
                            },
                            "flags": 32,
                            "start": 2,
                            "end": 12
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 2,
                    "end": 12
                },
                "flags": 32,
                "start": 0,
                "end": 13
            },
            "flags": 16,
            "start": 0,
            "end": 14
        }
    ],
    "isModule": false,
    "source": "z(z(z(a&&=)));",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 14
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expression expected - start: 10, end: 11

```

