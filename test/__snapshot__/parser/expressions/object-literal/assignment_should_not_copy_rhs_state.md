# Kataw parser test case

## Input

`````js
({a: x = true} = y)
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
                "kind": 121,
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 219,
                                    "generatorToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "start": 2,
                                        "end": 3
                                    },
                                    "right": {
                                        "kind": 125,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 4,
                                            "end": 6
                                        },
                                        "operatorToken": {
                                            "kind": 4125,
                                            "flags": 64,
                                            "start": 6,
                                            "end": 8
                                        },
                                        "right": {
                                            "kind": 134,
                                            "text": true,
                                            "flags": 96,
                                            "start": 8,
                                            "end": 13
                                        },
                                        "flags": 32,
                                        "start": 2,
                                        "end": 13
                                    },
                                    "flags": 32,
                                    "start": 2,
                                    "end": 13
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 2,
                            "end": 13
                        },
                        "flags": 32,
                        "start": 1,
                        "end": 14
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 64,
                        "start": 14,
                        "end": 16
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "start": 16,
                        "end": 18
                    },
                    "flags": 32,
                    "start": 1,
                    "end": 18
                },
                "flags": 32,
                "start": 0,
                "end": 19
            },
            "flags": 16,
            "start": 0,
            "end": 19
        }
    ],
    "isModule": false,
    "source": "({a: x = true} = y)",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 19
}
```

### Printed

```javascript

({ a: x = true } = y);
```

### Diagnostics

```javascript
✔ No errors
```

