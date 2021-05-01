# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true, module: true }
`````


## Input

`````js
result = [...[x, y]] = vals;
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
                    "kind": 134299649,
                    "original": "result",
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
                                    "kind": 223,
                                    "ellipsisToken": {
                                        "kind": 524302,
                                        "flags": 0,
                                        "start": 10,
                                        "end": 13
                                    },
                                    "argument": {
                                        "kind": 119,
                                        "elementList": {
                                            "kind": 270,
                                            "elements": [
                                                {
                                                    "kind": 134299649,
                                                    "original": "x",
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "start": 14,
                                                    "end": 15
                                                },
                                                {
                                                    "kind": 134299649,
                                                    "original": "y",
                                                    "text": "y",
                                                    "rawText": " y",
                                                    "flags": 96,
                                                    "start": 16,
                                                    "end": 18
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 14,
                                            "end": 18
                                        },
                                        "flags": 32,
                                        "start": 13,
                                        "end": 19
                                    },
                                    "flags": 32,
                                    "start": 10,
                                    "end": 19
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 10,
                            "end": 19
                        },
                        "flags": 32,
                        "start": 8,
                        "end": 20
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 64,
                        "start": 20,
                        "end": 22
                    },
                    "right": {
                        "kind": 134299649,
                        "original": "vals",
                        "text": "vals",
                        "rawText": " vals",
                        "flags": 96,
                        "start": 22,
                        "end": 27
                    },
                    "flags": 32,
                    "start": 8,
                    "end": 27
                },
                "flags": 32,
                "start": 0,
                "end": 27
            },
            "flags": 16,
            "start": 0,
            "end": 28
        }
    ],
    "isModule": true,
    "source": "result = [...[x, y]] = vals;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 28
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

