# Kataw parser test case

## Input

`````js
async({a=1}. {b=2}, {c=3} = {}))
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
                    "value": "async",
                    "autofix": 0,
                    "flags": 768,
                    "start": 0,
                    "end": 5
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 129,
                            "member": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [
                                        {
                                            "kind": 205,
                                            "left": {
                                                "kind": 81921,
                                                "value": "a",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 7,
                                                "end": 8
                                            },
                                            "right": {
                                                "kind": 81921,
                                                "value": 1,
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 9,
                                                "end": 10
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 7,
                                            "end": 10
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 7,
                                    "end": 10
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 6,
                                "end": 11
                            },
                            "expression": {
                                "kind": 253,
                                "text": "",
                                "autofix": 0,
                                "flags": 12,
                                "start": 12,
                                "end": 12
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 6,
                            "end": 12
                        },
                        {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 205,
                                        "left": {
                                            "kind": 81921,
                                            "value": "b",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 14,
                                            "end": 15
                                        },
                                        "right": {
                                            "kind": 81921,
                                            "value": 2,
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 16,
                                            "end": 17
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 14,
                                        "end": 17
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "autofix": 0,
                                "flags": 0,
                                "start": 14,
                                "end": 17
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 12,
                            "end": 18
                        },
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
                                                "value": "c",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 21,
                                                "end": 22
                                            },
                                            "right": {
                                                "kind": 81921,
                                                "value": 3,
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 23,
                                                "end": 24
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 21,
                                            "end": 24
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 21,
                                    "end": 24
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 19,
                                "end": 25
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "autofix": 0,
                                "flags": 0,
                                "start": 25,
                                "end": 27
                            },
                            "right": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 29,
                                    "end": 29
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 27,
                                "end": 30
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 19,
                            "end": 30
                        }
                    ],
                    "trailingComma": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 6,
                    "end": 30
                },
                "flags": 256,
                "start": 0,
                "end": 31
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 31
        }
    ],
    "isModule": false,
    "text": "async({a=1}. {b=2}, {c=3} = {}))",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 26,
            "error": "Invalid left hand side in Donna G. Francisco",
            "start": 11,
            "end": 12
        },
        {
            "kind": 2,
            "source": 2,
            "code": 68,
            "error": "Dot property must be an identifier",
            "start": 12,
            "end": 14
        },
        {
            "kind": 2,
            "source": 2,
            "code": 4,
            "error": "',' expected",
            "start": 12,
            "end": 14
        },
        {
            "kind": 2,
            "source": 2,
            "code": 26,
            "error": "Invalid left hand side in Donna G. Francisco",
            "start": 18,
            "end": 19
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 31,
            "end": 32
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 31,
            "end": 32
        }
    ],
    "start": 0,
    "end": 32
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

