# Kataw parser test case

## Input

`````js
({a, a:a, a:a=a, [a]:{a}, a:some_call()[a], a:this.a} = 0);
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
                                    "kind": 81921,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 768,
                                    "start": 2,
                                    "end": 3
                                },
                                {
                                    "kind": 219,
                                    "left": {
                                        "kind": 81921,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 768,
                                        "start": 7,
                                        "end": 8
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 768,
                                        "start": 4,
                                        "end": 6
                                    },
                                    "flags": 256,
                                    "start": 4,
                                    "end": 8
                                },
                                {
                                    "kind": 219,
                                    "left": {
                                        "kind": 125,
                                        "left": {
                                            "kind": 81921,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 768,
                                            "start": 12,
                                            "end": 13
                                        },
                                        "operatorToken": {
                                            "kind": 4125,
                                            "flags": 768,
                                            "start": 13,
                                            "end": 14
                                        },
                                        "right": {
                                            "kind": 81921,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 768,
                                            "start": 14,
                                            "end": 15
                                        },
                                        "flags": 256,
                                        "start": 9,
                                        "end": 15
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 768,
                                        "start": 9,
                                        "end": 11
                                    },
                                    "flags": 256,
                                    "start": 9,
                                    "end": 15
                                },
                                {
                                    "kind": 219,
                                    "left": {
                                        "kind": 220,
                                        "propertyList": {
                                            "kind": 218,
                                            "properties": [
                                                {
                                                    "kind": 81921,
                                                    "text": "a",
                                                    "rawText": "a",
                                                    "flags": 768,
                                                    "start": 22,
                                                    "end": 23
                                                }
                                            ],
                                            "trailingComma": false,
                                            "multiline": false,
                                            "flags": 0,
                                            "start": 22,
                                            "end": 23
                                        },
                                        "flags": 256,
                                        "start": 21,
                                        "end": 24
                                    },
                                    "right": {
                                        "kind": 194,
                                        "expression": {
                                            "kind": 81921,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 768,
                                            "start": 18,
                                            "end": 19
                                        },
                                        "flags": 256,
                                        "start": 16,
                                        "end": 20
                                    },
                                    "flags": 256,
                                    "start": 16,
                                    "end": 24
                                },
                                {
                                    "kind": 219,
                                    "left": {
                                        "kind": 130,
                                        "member": {
                                            "kind": 131,
                                            "expression": {
                                                "kind": 81921,
                                                "text": "some_call",
                                                "rawText": "some_call",
                                                "flags": 768,
                                                "start": 28,
                                                "end": 37
                                            },
                                            "argumentList": {
                                                "kind": 256,
                                                "elements": [],
                                                "trailingComma": false,
                                                "flags": 256,
                                                "start": 38,
                                                "end": 38
                                            },
                                            "flags": 256,
                                            "start": 25,
                                            "end": 39
                                        },
                                        "expression": {
                                            "kind": 81921,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 768,
                                            "start": 40,
                                            "end": 41
                                        },
                                        "flags": 256,
                                        "start": 25,
                                        "end": 42
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 768,
                                        "start": 25,
                                        "end": 27
                                    },
                                    "flags": 256,
                                    "start": 25,
                                    "end": 42
                                },
                                {
                                    "kind": 219,
                                    "left": {
                                        "kind": 129,
                                        "member": {
                                            "kind": 135,
                                            "flags": 768,
                                            "start": 46,
                                            "end": 50
                                        },
                                        "expression": {
                                            "kind": 81921,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 768,
                                            "start": 51,
                                            "end": 52
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 43,
                                        "end": 52
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 768,
                                        "start": 43,
                                        "end": 45
                                    },
                                    "flags": 256,
                                    "start": 43,
                                    "end": 52
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "start": 2,
                            "end": 52
                        },
                        "flags": 256,
                        "start": 1,
                        "end": 53
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 768,
                        "start": 53,
                        "end": 55
                    },
                    "right": {
                        "kind": 81921,
                        "text": 0,
                        "rawText": "0",
                        "flags": 768,
                        "start": 55,
                        "end": 57
                    },
                    "flags": 256,
                    "start": 1,
                    "end": 57
                },
                "flags": 256,
                "start": 0,
                "end": 58
            },
            "flags": 128,
            "start": 0,
            "end": 59
        }
    ],
    "isModule": false,
    "text": "({a, a:a, a:a=a, [a]:{a}, a:some_call()[a], a:this.a} = 0);",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 59
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

