# Kataw parser test case

## Input

`````js
async({c=3} = {})
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 131,
            "expression": {
                "kind": 81921,
                "text": "async",
                "rawText": "async",
                "flags": 768,
                "start": 0,
                "end": 5
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
                                        "kind": 205,
                                        "left": {
                                            "kind": 81921,
                                            "text": "c",
                                            "rawText": "c",
                                            "flags": 768,
                                            "start": 7,
                                            "end": 8
                                        },
                                        "right": {
                                            "kind": 81921,
                                            "text": 3,
                                            "rawText": "3",
                                            "flags": 768,
                                            "start": 9,
                                            "end": 10
                                        },
                                        "flags": 256,
                                        "start": 7,
                                        "end": 10
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "start": 7,
                                "end": 10
                            },
                            "flags": 256,
                            "start": 6,
                            "end": 11
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "flags": 768,
                            "start": 11,
                            "end": 13
                        },
                        "right": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "start": 15,
                                "end": 15
                            },
                            "flags": 256,
                            "start": 13,
                            "end": 16
                        },
                        "flags": 256,
                        "start": 6,
                        "end": 16
                    }
                ],
                "trailingComma": false,
                "flags": 256,
                "start": 0,
                "end": 0
            },
            "flags": 256,
            "start": 0,
            "end": 17
        }
    ],
    "isModule": false,
    "text": "async({c=3} = {})",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 17
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

