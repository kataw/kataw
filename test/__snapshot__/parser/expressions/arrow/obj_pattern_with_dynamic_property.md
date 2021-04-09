# Kataw parser test case

## Input

`````js
({...{b: 0}[x]} = {});
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
                                    "kind": 224,
                                    "argument": {
                                        "kind": 130,
                                        "member": {
                                            "kind": 220,
                                            "propertyList": {
                                                "kind": 218,
                                                "properties": [
                                                    {
                                                        "kind": 219,
                                                        "left": {
                                                            "kind": 81921,
                                                            "value": 0,
                                                            "autofix": 0,
                                                            "flags": 768,
                                                            "start": 8,
                                                            "end": 10
                                                        },
                                                        "right": {
                                                            "kind": 81921,
                                                            "value": "b",
                                                            "autofix": 0,
                                                            "flags": 768,
                                                            "start": 6,
                                                            "end": 7
                                                        },
                                                        "autofix": 0,
                                                        "flags": 256,
                                                        "start": 6,
                                                        "end": 10
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "multiline": false,
                                                "autofix": 0,
                                                "flags": 0,
                                                "start": 6,
                                                "end": 10
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 5,
                                            "end": 11
                                        },
                                        "expression": {
                                            "kind": 81921,
                                            "value": "x",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 12,
                                            "end": 13
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 5,
                                        "end": 14
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 2,
                                    "end": 14
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "autofix": 0,
                            "flags": 0,
                            "start": 2,
                            "end": 14
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 1,
                        "end": 15
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "autofix": 0,
                        "flags": 0,
                        "start": 15,
                        "end": 17
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
                            "start": 19,
                            "end": 19
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 17,
                        "end": 20
                    },
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
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 22
        }
    ],
    "isModule": false,
    "text": "({...{b: 0}[x]} = {});",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 22
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

