# Kataw parser test case

## Input

`````js
result = [x[yield]] = vals;
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
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "result",
                    "rawText": "result",
                    "flags": 96,
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
                    "kind": 125,
                    "left": {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [
                                {
                                    "kind": 130,
                                    "member": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 10,
                                        "end": 11
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "yield",
                                        "rawText": "yield",
                                        "flags": 96,
                                        "start": 12,
                                        "end": 17
                                    },
                                    "flags": 32,
                                    "start": 10,
                                    "end": 18
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 10,
                            "end": 18
                        },
                        "flags": 32,
                        "start": 8,
                        "end": 19
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 64,
                        "start": 19,
                        "end": 21
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "vals",
                        "rawText": "vals",
                        "flags": 96,
                        "start": 21,
                        "end": 26
                    },
                    "flags": 32,
                    "start": 8,
                    "end": 26
                },
                "flags": 32,
                "start": 0,
                "end": 26
            },
            "flags": 16,
            "start": 0,
            "end": 27
        }
    ],
    "isModule": false,
    "source": "result = [x[yield]] = vals;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 27
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

