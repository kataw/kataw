# Kataw parser test case

## Input

`````js
z(z(z(a ? b : c++)));
`````

## Output

### CST

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
                                                    "kind": 197,
                                                    "shortCircuit": {
                                                        "kind": 134299649,
                                                        "text": "a",
                                                        "rawText": "a",
                                                        "flags": 96,
                                                        "start": 6,
                                                        "end": 7
                                                    },
                                                    "questionToken": {
                                                        "kind": 134217750,
                                                        "flags": 0,
                                                        "start": 7,
                                                        "end": 9
                                                    },
                                                    "consequent": {
                                                        "kind": 134299649,
                                                        "text": "b",
                                                        "rawText": "b",
                                                        "flags": 96,
                                                        "start": 9,
                                                        "end": 11
                                                    },
                                                    "colonToken": {
                                                        "kind": 21,
                                                        "flags": 0,
                                                        "start": 11,
                                                        "end": 13
                                                    },
                                                    "alternate": {
                                                        "kind": 127,
                                                        "operandToken": {
                                                            "kind": 196635,
                                                            "flags": 64,
                                                            "start": 15,
                                                            "end": 17
                                                        },
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "c",
                                                            "rawText": "c",
                                                            "flags": 96,
                                                            "start": 13,
                                                            "end": 15
                                                        },
                                                        "flags": 32,
                                                        "start": 13,
                                                        "end": 17
                                                    },
                                                    "flags": 32,
                                                    "start": 6,
                                                    "end": 17
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 6,
                                            "end": 17
                                        },
                                        "flags": 32,
                                        "start": 4,
                                        "end": 18
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 4,
                                "end": 18
                            },
                            "flags": 32,
                            "start": 2,
                            "end": 19
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 2,
                    "end": 19
                },
                "flags": 32,
                "start": 0,
                "end": 20
            },
            "flags": 16,
            "start": 0,
            "end": 21
        }
    ],
    "isModule": false,
    "source": "z(z(z(a ? b : c++)));",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

