# Kataw parser test case

## Input

`````js
([{x = y}]).z
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
                "kind": 129,
                "member": {
                    "kind": 121,
                    "expression": {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [
                                {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 205,
                                                "left": {
                                                    "kind": 81921,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 768,
                                                    "start": 3,
                                                    "end": 4
                                                },
                                                "right": {
                                                    "kind": 81921,
                                                    "text": "y",
                                                    "rawText": "y",
                                                    "flags": 768,
                                                    "start": 6,
                                                    "end": 8
                                                },
                                                "flags": 256,
                                                "start": 3,
                                                "end": 8
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": false,
                                        "flags": 0,
                                        "start": 3,
                                        "end": 8
                                    },
                                    "flags": 256,
                                    "start": 2,
                                    "end": 9
                                }
                            ],
                            "trailingComma": false,
                            "flags": 256,
                            "start": 2,
                            "end": 9
                        },
                        "flags": 256,
                        "start": 1,
                        "end": 10
                    },
                    "flags": 256,
                    "start": 0,
                    "end": 11
                },
                "expression": {
                    "kind": 81921,
                    "text": "z",
                    "rawText": "z",
                    "flags": 768,
                    "start": 12,
                    "end": 13
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 13
            },
            "flags": 128,
            "start": 0,
            "end": 13
        }
    ],
    "isModule": false,
    "text": "([{x = y}]).z",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 13
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

