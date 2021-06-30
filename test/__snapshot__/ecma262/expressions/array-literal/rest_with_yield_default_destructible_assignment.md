# Kataw parser test case

## Input

`````js
result = [...{ x = yield }] = y;
`````

## Options

### Parser Options

`````js
{}
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
                    "flags": 96,
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
                                        "flags": 64,
                                        "start": 10,
                                        "end": 13
                                    },
                                    "argument": {
                                        "kind": 220,
                                        "propertyList": {
                                            "kind": 218,
                                            "properties": [
                                                {
                                                    "kind": 301,
                                                    "left": {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 96,
                                                        "start": 14,
                                                        "end": 16
                                                    },
                                                    "right": {
                                                        "kind": 134299649,
                                                        "text": "yield",
                                                        "rawText": "yield",
                                                        "flags": 96,
                                                        "start": 18,
                                                        "end": 24
                                                    },
                                                    "flags": 32,
                                                    "start": 14,
                                                    "end": 24
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 16,
                                            "start": 14,
                                            "end": 24
                                        },
                                        "flags": 48,
                                        "start": 13,
                                        "end": 26
                                    },
                                    "flags": 1073741856,
                                    "start": 10,
                                    "end": 26
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 10,
                            "end": 26
                        },
                        "flags": 32,
                        "start": 8,
                        "end": 27
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "start": 27,
                        "end": 29
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "start": 29,
                        "end": 31
                    },
                    "flags": 32,
                    "start": 8,
                    "end": 31
                },
                "flags": 32,
                "start": 0,
                "end": 31
            },
            "flags": 16,
            "start": 0,
            "end": 32
        }
    ],
    "isModule": false,
    "source": "result = [...{ x = yield }] = y;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 32
}
```

### Printed

```javascript

result = [...{ x = yield }] = y;

```

### Diagnostics

```javascript
✔ No errors
```

