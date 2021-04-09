# Kataw parser test case

## Input

`````js
({ responseText: text } = res);
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
                                    "left": {
                                        "kind": 81921,
                                        "value": "text",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 16,
                                        "end": 21
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "value": "responseText",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 2,
                                        "end": 15
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 2,
                                    "end": 21
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "autofix": 0,
                            "flags": 0,
                            "start": 2,
                            "end": 21
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 1,
                        "end": 23
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "autofix": 0,
                        "flags": 0,
                        "start": 23,
                        "end": 25
                    },
                    "right": {
                        "kind": 81921,
                        "value": "res",
                        "autofix": 0,
                        "flags": 768,
                        "start": 25,
                        "end": 29
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 1,
                    "end": 29
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 30
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 31
        }
    ],
    "isModule": false,
    "text": "({ responseText: text } = res);",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 31
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

