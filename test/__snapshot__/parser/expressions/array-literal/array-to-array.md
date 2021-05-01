# Kataw parser test case

## Input

`````js
[a, b] = [b, a];
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
                "kind": 125,
                "left": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 1,
                                "end": 2
                            },
                            {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": " b",
                                "flags": 96,
                                "start": 3,
                                "end": 5
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 1,
                        "end": 5
                    },
                    "flags": 32,
                    "start": 0,
                    "end": 6
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 6,
                    "end": 8
                },
                "right": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 96,
                                "start": 10,
                                "end": 11
                            },
                            {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": " a",
                                "flags": 96,
                                "start": 12,
                                "end": 14
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 10,
                        "end": 14
                    },
                    "flags": 32,
                    "start": 8,
                    "end": 15
                },
                "flags": 32,
                "start": 0,
                "end": 15
            },
            "flags": 16,
            "start": 0,
            "end": 16
        }
    ],
    "isModule": false,
    "source": "[a, b] = [b, a];",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 16
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

