# Kataw parser test case

## Input

`````js
((a) => x);

(x, (a) => x);

((x) => y, (z) => {});
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
                    "kind": 271,
                    "typeParameters": null,
                    "parameters": [
                        {
                            "kind": 81921,
                            "value": "a",
                            "autofix": 0,
                            "flags": 768,
                            "start": 2,
                            "end": 3
                        }
                    ],
                    "asyncToken": false,
                    "returnType": null,
                    "contents": {
                        "kind": 81921,
                        "value": "x",
                        "autofix": 0,
                        "flags": 768,
                        "start": 7,
                        "end": 9
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 1,
                    "end": 9
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 10
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 11
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "expressions": [
                        {
                            "kind": 81921,
                            "value": "x",
                            "autofix": 0,
                            "flags": 768,
                            "start": 14,
                            "end": 15
                        },
                        {
                            "kind": 271,
                            "typeParameters": null,
                            "parameters": [
                                {
                                    "kind": 81921,
                                    "value": "a",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 18,
                                    "end": 19
                                }
                            ],
                            "asyncToken": false,
                            "returnType": null,
                            "contents": {
                                "kind": 81921,
                                "value": "x",
                                "autofix": 0,
                                "flags": 768,
                                "start": 23,
                                "end": 25
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 16,
                            "end": 25
                        }
                    ],
                    "autofix": 0,
                    "flags": 256,
                    "start": 11,
                    "end": 25
                },
                "autofix": 0,
                "flags": 256,
                "start": 11,
                "end": 26
            },
            "autofix": 0,
            "flags": 128,
            "start": 11,
            "end": 27
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "expressions": [
                        {
                            "kind": 271,
                            "typeParameters": null,
                            "parameters": [
                                {
                                    "kind": 81921,
                                    "value": "x",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 31,
                                    "end": 32
                                }
                            ],
                            "asyncToken": false,
                            "returnType": null,
                            "contents": {
                                "kind": 81921,
                                "value": "y",
                                "autofix": 0,
                                "flags": 768,
                                "start": 36,
                                "end": 38
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 30,
                            "end": 38
                        },
                        {
                            "kind": 271,
                            "typeParameters": null,
                            "parameters": [
                                {
                                    "kind": 81921,
                                    "value": "z",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 41,
                                    "end": 42
                                }
                            ],
                            "asyncToken": false,
                            "returnType": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "statements": [],
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 48,
                                    "end": 48
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 46,
                                "end": 49
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 39,
                            "end": 49
                        }
                    ],
                    "autofix": 0,
                    "flags": 256,
                    "start": 27,
                    "end": 49
                },
                "autofix": 0,
                "flags": 256,
                "start": 27,
                "end": 50
            },
            "autofix": 0,
            "flags": 128,
            "start": 27,
            "end": 51
        }
    ],
    "isModule": false,
    "text": "((a) => x);\n\n(x, (a) => x);\n\n((x) => y, (z) => {});",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 51
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

