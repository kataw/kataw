# Kataw parser test case

## Input

`````js
([[x, y] = z]);
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
                                "kind": 125,
                                "left": {
                                    "kind": 119,
                                    "elementList": {
                                        "kind": 270,
                                        "elements": [
                                            {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 3,
                                                "end": 4
                                            },
                                            {
                                                "kind": 134299649,
                                                "text": "y",
                                                "rawText": " y",
                                                "flags": 96,
                                                "start": 5,
                                                "end": 7
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 3,
                                        "end": 7
                                    },
                                    "flags": 32,
                                    "start": 2,
                                    "end": 8
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 64,
                                    "start": 8,
                                    "end": 10
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "z",
                                    "rawText": " z",
                                    "flags": 96,
                                    "start": 10,
                                    "end": 12
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
                    "start": 1,
                    "end": 13
                },
                "flags": 32,
                "start": 0,
                "end": 14
            },
            "flags": 16,
            "start": 0,
            "end": 15
        }
    ],
    "isModule": false,
    "source": "([[x, y] = z]);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 15
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

