# Kataw parser test case

## Input

`````js
f(((a) => a + b)(1, 4), 5);
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
                    "value": "f",
                    "autofix": 0,
                    "flags": 768,
                    "start": 0,
                    "end": 1
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 131,
                            "expression": {
                                "kind": 121,
                                "expression": {
                                    "kind": 271,
                                    "typeParameters": null,
                                    "parameters": [
                                        {
                                            "kind": 81921,
                                            "value": "a",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 4,
                                            "end": 5
                                        }
                                    ],
                                    "asyncToken": false,
                                    "returnType": null,
                                    "contents": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 81921,
                                            "value": "a",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 9,
                                            "end": 11
                                        },
                                        "operatorToken": {
                                            "kind": 34098,
                                            "autofix": 0,
                                            "flags": 0,
                                            "start": 11,
                                            "end": 13
                                        },
                                        "right": {
                                            "kind": 81921,
                                            "value": "b",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 13,
                                            "end": 15
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 9,
                                        "end": 15
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 3,
                                    "end": 15
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 2,
                                "end": 16
                            },
                            "argumentList": {
                                "kind": 256,
                                "elements": [
                                    {
                                        "kind": 81921,
                                        "value": 1,
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 17,
                                        "end": 18
                                    },
                                    {
                                        "kind": 81921,
                                        "value": 4,
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 19,
                                        "end": 21
                                    }
                                ],
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 17,
                                "end": 21
                            },
                            "flags": 256,
                            "start": 2,
                            "end": 22
                        },
                        {
                            "kind": 81921,
                            "value": 5,
                            "autofix": 0,
                            "flags": 768,
                            "start": 23,
                            "end": 25
                        }
                    ],
                    "trailingComma": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 2,
                    "end": 25
                },
                "flags": 256,
                "start": 0,
                "end": 26
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 27
        }
    ],
    "isModule": false,
    "text": "f(((a) => a + b)(1, 4), 5);",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 27
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

