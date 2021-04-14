# Kataw parser test case

## Input

`````js
wrap({set:b});
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
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 219,
                                        "left": {
                                            "kind": 81921,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 768,
                                            "start": 10,
                                            "end": 11
                                        },
                                        "right": {
                                            "kind": 81921,
                                            "text": "set",
                                            "rawText": "set",
                                            "flags": 768,
                                            "start": 6,
                                            "end": 9
                                        },
                                        "flags": 256,
                                        "start": 6,
                                        "end": 11
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "start": 6,
                                "end": 11
                            },
                            "flags": 256,
                            "start": 5,
                            "end": 12
                        }
                    ],
                    "trailingComma": false,
                    "flags": 256,
                    "start": 5,
                    "end": 12
                },
                "flags": 256,
                "start": 0,
                "end": 13
            },
            "flags": 128,
            "start": 0,
            "end": 14
        }
    ],
    "isModule": false,
    "text": "wrap({set:b});",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 14
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

