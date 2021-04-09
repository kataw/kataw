# Kataw parser test case

## Input

`````js
result = {...rest} = 69;
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
                "kind": 125,
                "left": {
                    "kind": 81921,
                    "value": "result",
                    "autofix": 0,
                    "flags": 768,
                    "start": 0,
                    "end": 6
                },
                "operatorToken": {
                    "kind": 268501004,
                    "autofix": 0,
                    "flags": 0,
                    "start": 0,
                    "end": 8
                },
                "right": {
                    "kind": 125,
                    "left": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 224,
                                    "argument": {
                                        "kind": 81921,
                                        "value": "rest",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 13,
                                        "end": 17
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 10,
                                    "end": 17
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "autofix": 0,
                            "flags": 0,
                            "start": 10,
                            "end": 17
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 8,
                        "end": 18
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "autofix": 0,
                        "flags": 0,
                        "start": 18,
                        "end": 20
                    },
                    "right": {
                        "kind": 81921,
                        "value": 69,
                        "autofix": 0,
                        "flags": 768,
                        "start": 20,
                        "end": 23
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 8,
                    "end": 23
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 23
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 24
        }
    ],
    "isModule": false,
    "text": "result = {...rest} = 69;",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 24
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

