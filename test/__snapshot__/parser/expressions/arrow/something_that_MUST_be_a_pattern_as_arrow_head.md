# Kataw parser test case

## Input

`````js
([{x = y}]) => z
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
                "kind": 271,
                "typeParameters": null,
                "parameters": [
                    {
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
                                                    "value": "x",
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 3,
                                                    "end": 4
                                                },
                                                "right": {
                                                    "kind": 81921,
                                                    "value": "y",
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 6,
                                                    "end": 8
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 3,
                                                "end": 8
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": false,
                                        "autofix": 0,
                                        "flags": 0,
                                        "start": 3,
                                        "end": 8
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 2,
                                    "end": 9
                                }
                            ],
                            "trailingComma": false,
                            "autofix": 0,
                            "flags": 256,
                            "start": 2,
                            "end": 9
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 1,
                        "end": 10
                    }
                ],
                "asyncToken": false,
                "returnType": null,
                "contents": {
                    "kind": 81921,
                    "value": "z",
                    "autofix": 0,
                    "flags": 768,
                    "start": 14,
                    "end": 16
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 16
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 16
        }
    ],
    "isModule": false,
    "text": "([{x = y}]) => z",
    "fileName": "__root__",
    "autofix": 0,
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

