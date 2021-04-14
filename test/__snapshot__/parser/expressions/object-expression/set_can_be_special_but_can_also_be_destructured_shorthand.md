# Kataw parser test case

## Input

`````js
wrap({set} = x);
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 81921,
                    "text": "wrap",
                    "rawText": "wrap",
                    "flags": 768,
                    "start": 0,
                    "end": 4
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 125,
                            "left": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [
                                        {
                                            "kind": 81921,
                                            "text": "set",
                                            "rawText": "set",
                                            "flags": 768,
                                            "start": 6,
                                            "end": 9
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 0,
                                    "start": 6,
                                    "end": 9
                                },
                                "flags": 256,
                                "start": 5,
                                "end": 10
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 768,
                                "start": 10,
                                "end": 12
                            },
                            "right": {
                                "kind": 81921,
                                "text": "x",
                                "rawText": "x",
                                "flags": 768,
                                "start": 12,
                                "end": 14
                            },
                            "flags": 256,
                            "start": 5,
                            "end": 14
                        }
                    ],
                    "trailingComma": false,
                    "flags": 256,
                    "start": 5,
                    "end": 14
                },
                "flags": 256,
                "start": 0,
                "end": 15
            },
            "flags": 128,
            "start": 0,
            "end": 16
        }
    ],
    "isModule": false,
    "text": "wrap({set} = x);",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 16
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

