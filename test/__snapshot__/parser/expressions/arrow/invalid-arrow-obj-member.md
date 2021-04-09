# Kataw parser test case

## Input

`````js
({333: y.z} = a) => b
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
                        "kind": 125,
                        "left": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 219,
                                        "left": {
                                            "kind": 129,
                                            "member": {
                                                "kind": 81921,
                                                "value": "y",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 6,
                                                "end": 8
                                            },
                                            "expression": {
                                                "kind": 81921,
                                                "value": "z",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 9,
                                                "end": 10
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 2,
                                            "end": 10
                                        },
                                        "right": {
                                            "kind": 81921,
                                            "value": 333,
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 2,
                                            "end": 5
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 2,
                                        "end": 10
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "autofix": 0,
                                "flags": 0,
                                "start": 2,
                                "end": 10
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 1,
                            "end": 11
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "autofix": 0,
                            "flags": 0,
                            "start": 11,
                            "end": 13
                        },
                        "right": {
                            "kind": 81921,
                            "value": "a",
                            "autofix": 0,
                            "flags": 768,
                            "start": 13,
                            "end": 15
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 1,
                        "end": 15
                    }
                ],
                "asyncToken": false,
                "returnType": null,
                "contents": {
                    "kind": 81921,
                    "value": "b",
                    "autofix": 0,
                    "flags": 768,
                    "start": 19,
                    "end": 21
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 21
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 21
        }
    ],
    "isModule": false,
    "text": "({333: y.z} = a) => b",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 31,
            "error": "The left hand side of the arrow is not destructible ",
            "start": 16,
            "end": 19
        }
    ],
    "start": 0,
    "end": 21
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

