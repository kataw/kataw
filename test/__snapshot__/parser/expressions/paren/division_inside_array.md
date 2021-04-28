# Kataw parser test case

## Input

`````js
([a / b]);

([a / b], ([a / b]));
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
                "kind": 121,
                "expression": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 768,
                                    "start": 2,
                                    "end": 3
                                },
                                "operatorToken": {
                                    "kind": 35640,
                                    "flags": 768,
                                    "start": 3,
                                    "end": 5
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 768,
                                    "start": 5,
                                    "end": 7
                                },
                                "flags": 256,
                                "start": 2,
                                "end": 7
                            }
                        ],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 2,
                        "end": 7
                    },
                    "flags": 256,
                    "start": 1,
                    "end": 8
                },
                "flags": 256,
                "start": 0,
                "end": 9
            },
            "flags": 128,
            "start": 0,
            "end": 10
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "expressions": [
                        {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 198,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 768,
                                            "start": 14,
                                            "end": 15
                                        },
                                        "operatorToken": {
                                            "kind": 35640,
                                            "flags": 768,
                                            "start": 15,
                                            "end": 17
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 768,
                                            "start": 17,
                                            "end": 19
                                        },
                                        "flags": 256,
                                        "start": 14,
                                        "end": 19
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 256,
                                "start": 14,
                                "end": 19
                            },
                            "flags": 256,
                            "start": 13,
                            "end": 20
                        },
                        {
                            "kind": 121,
                            "expression": {
                                "kind": 119,
                                "elementList": {
                                    "kind": 270,
                                    "elements": [
                                        {
                                            "kind": 198,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 768,
                                                "start": 24,
                                                "end": 25
                                            },
                                            "operatorToken": {
                                                "kind": 35640,
                                                "flags": 768,
                                                "start": 25,
                                                "end": 27
                                            },
                                            "right": {
                                                "kind": 134299649,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 768,
                                                "start": 27,
                                                "end": 29
                                            },
                                            "flags": 256,
                                            "start": 24,
                                            "end": 29
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "start": 24,
                                    "end": 29
                                },
                                "flags": 256,
                                "start": 23,
                                "end": 30
                            },
                            "flags": 256,
                            "start": 21,
                            "end": 31
                        }
                    ],
                    "flags": 256,
                    "start": 10,
                    "end": 31
                },
                "flags": 256,
                "start": 10,
                "end": 32
            },
            "flags": 128,
            "start": 10,
            "end": 33
        }
    ],
    "isModule": false,
    "text": "([a / b]);\n\n([a / b], ([a / b]));",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 33
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

