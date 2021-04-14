# Kataw parser test case

## Input

`````js
[ok.v] = 20;
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
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 129,
                                "member": {
                                    "kind": 81921,
                                    "text": "ok",
                                    "rawText": "ok",
                                    "flags": 768,
                                    "start": 1,
                                    "end": 3
                                },
                                "expression": {
                                    "kind": 81921,
                                    "text": "v",
                                    "rawText": "v",
                                    "flags": 768,
                                    "start": 4,
                                    "end": 5
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 1,
                                "end": 5
                            }
                        ],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 1,
                        "end": 5
                    },
                    "flags": 256,
                    "start": 0,
                    "end": 6
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 768,
                    "start": 6,
                    "end": 8
                },
                "right": {
                    "kind": 81921,
                    "text": 20,
                    "rawText": "20",
                    "flags": 768,
                    "start": 8,
                    "end": 11
                },
                "flags": 256,
                "start": 0,
                "end": 11
            },
            "flags": 128,
            "start": 0,
            "end": 12
        }
    ],
    "isModule": false,
    "text": "[ok.v] = 20;",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 12
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

