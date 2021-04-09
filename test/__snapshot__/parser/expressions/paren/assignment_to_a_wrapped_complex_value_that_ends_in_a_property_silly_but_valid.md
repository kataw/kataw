# Kataw parser test case

## Input

`````js
(a.b().c().d) += 1;
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
                    "kind": 121,
                    "expression": {
                        "kind": 129,
                        "member": {
                            "kind": 131,
                            "expression": {
                                "kind": 129,
                                "member": {
                                    "kind": 131,
                                    "expression": {
                                        "kind": 129,
                                        "member": {
                                            "kind": 81921,
                                            "value": "a",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 1,
                                            "end": 2
                                        },
                                        "expression": {
                                            "kind": 81921,
                                            "value": "b",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 3,
                                            "end": 4
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 0,
                                        "end": 4
                                    },
                                    "argumentList": {
                                        "kind": 256,
                                        "elements": [],
                                        "trailingComma": false,
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 5,
                                        "end": 5
                                    },
                                    "flags": 256,
                                    "start": 0,
                                    "end": 6
                                },
                                "expression": {
                                    "kind": 81921,
                                    "value": "c",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 7,
                                    "end": 8
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 0,
                                "end": 8
                            },
                            "argumentList": {
                                "kind": 256,
                                "elements": [],
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 9,
                                "end": 9
                            },
                            "flags": 256,
                            "start": 0,
                            "end": 10
                        },
                        "expression": {
                            "kind": 81921,
                            "value": "d",
                            "autofix": 0,
                            "flags": 768,
                            "start": 11,
                            "end": 12
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 0,
                        "end": 12
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 0,
                    "end": 13
                },
                "operatorToken": {
                    "kind": 67174402,
                    "autofix": 0,
                    "flags": 0,
                    "start": 0,
                    "end": 16
                },
                "right": {
                    "kind": 81921,
                    "value": 1,
                    "autofix": 0,
                    "flags": 768,
                    "start": 16,
                    "end": 18
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 18
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 19
        }
    ],
    "isModule": false,
    "text": "(a.b().c().d) += 1;",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 19
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

