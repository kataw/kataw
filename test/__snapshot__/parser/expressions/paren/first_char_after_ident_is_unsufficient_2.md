# Kataw parser test case

## Input

`````js
([void /=g/m.x]);
`````

## Output

### Hybrid CST

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
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 126,
                                "operandToken": {
                                    "kind": 4259887,
                                    "flags": 768,
                                    "start": 2,
                                    "end": 6
                                },
                                "expression": {
                                    "kind": 129,
                                    "member": {
                                        "kind": 221,
                                        "text": "/=g/m",
                                        "flags": 768,
                                        "start": 6,
                                        "end": 12
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 768,
                                        "start": 13,
                                        "end": 14
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 6,
                                    "end": 14
                                },
                                "flags": 256,
                                "start": 2,
                                "end": 14
                            }
                        ],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 2,
                        "end": 14
                    },
                    "flags": 256,
                    "start": 1,
                    "end": 15
                },
                "flags": 256,
                "start": 0,
                "end": 16
            },
            "flags": 128,
            "start": 0,
            "end": 17
        }
    ],
    "isModule": false,
    "text": "([void /=g/m.x]);",
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

