# Kataw parser test case

## Input

`````js
[...[{prop: 1}.prop]] = []
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
                                "kind": 223,
                                "argument": {
                                    "kind": 119,
                                    "elementList": {
                                        "kind": 270,
                                        "elements": [
                                            {
                                                "kind": 129,
                                                "member": {
                                                    "kind": 220,
                                                    "propertyList": {
                                                        "kind": 218,
                                                        "properties": [
                                                            {
                                                                "kind": 219,
                                                                "left": {
                                                                    "kind": 81921,
                                                                    "value": 1,
                                                                    "autofix": 0,
                                                                    "flags": 768,
                                                                    "start": 11,
                                                                    "end": 13
                                                                },
                                                                "right": {
                                                                    "kind": 81921,
                                                                    "value": "prop",
                                                                    "autofix": 0,
                                                                    "flags": 768,
                                                                    "start": 6,
                                                                    "end": 10
                                                                },
                                                                "autofix": 0,
                                                                "flags": 256,
                                                                "start": 6,
                                                                "end": 13
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "multiline": false,
                                                        "autofix": 0,
                                                        "flags": 0,
                                                        "start": 6,
                                                        "end": 13
                                                    },
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 5,
                                                    "end": 14
                                                },
                                                "expression": {
                                                    "kind": 81921,
                                                    "value": "prop",
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 15,
                                                    "end": 19
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 5,
                                                "end": 19
                                            }
                                        ],
                                        "trailingComma": false,
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 5,
                                        "end": 19
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 4,
                                    "end": 20
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 1,
                                "end": 20
                            }
                        ],
                        "trailingComma": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 1,
                        "end": 20
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 0,
                    "end": 21
                },
                "operatorToken": {
                    "kind": 4125,
                    "autofix": 0,
                    "flags": 0,
                    "start": 21,
                    "end": 23
                },
                "right": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [],
                        "trailingComma": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 25,
                        "end": 25
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 23,
                    "end": 26
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 26
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 26
        }
    ],
    "isModule": false,
    "text": "[...[{prop: 1}.prop]] = []",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 26
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

