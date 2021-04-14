# Kataw parser test case

## Input

`````js
((a) => x);

(x, (a) => x);

(a[b]) => x;
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
                    "arrowToken": {
                        "kind": 10,
                        "flags": 768,
                        "start": 4,
                        "end": 7
                    },
                    "typeParameters": null,
                    "parameters": [
                        {
                            "kind": 81921,
                            "text": "a",
                            "rawText": "a",
                            "flags": 768,
                            "start": 2,
                            "end": 3
                        }
                    ],
                    "asyncToken": null,
                    "returnType": null,
                    "contents": {
                        "kind": 81921,
                        "text": "x",
                        "rawText": "x",
                        "flags": 768,
                        "start": 7,
                        "end": 9
                    },
                    "flags": 256,
                    "start": 1,
                    "end": 9
                },
                "flags": 256,
                "start": 0,
                "end": 10
            },
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
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 14,
                            "end": 15
                        },
                        {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 768,
                                "start": 20,
                                "end": 23
                            },
                            "typeParameters": null,
                            "parameters": [
                                {
                                    "kind": 81921,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 768,
                                    "start": 18,
                                    "end": 19
                                }
                            ],
                            "asyncToken": null,
                            "returnType": null,
                            "contents": {
                                "kind": 81921,
                                "text": "x",
                                "rawText": "x",
                                "flags": 768,
                                "start": 23,
                                "end": 25
                            },
                            "flags": 256,
                            "start": 16,
                            "end": 25
                        }
                    ],
                    "flags": 256,
                    "start": 11,
                    "end": 25
                },
                "flags": 256,
                "start": 11,
                "end": 26
            },
            "flags": 128,
            "start": 11,
            "end": 27
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 130,
                    "member": {
                        "kind": 81921,
                        "text": "a",
                        "rawText": "a",
                        "flags": 768,
                        "start": 30,
                        "end": 31
                    },
                    "expression": {
                        "kind": 81921,
                        "text": "b",
                        "rawText": "b",
                        "flags": 768,
                        "start": 32,
                        "end": 33
                    },
                    "flags": 256,
                    "start": 27,
                    "end": 34
                },
                "flags": 256,
                "start": 27,
                "end": 35
            },
            "flags": 128,
            "start": 27,
            "end": 35
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "text": "x",
                "rawText": "x",
                "flags": 768,
                "start": 38,
                "end": 40
            },
            "flags": 128,
            "start": 38,
            "end": 41
        }
    ],
    "isModule": false,
    "text": "((a) => x);\n\n(x, (a) => x);\n\n(a[b]) => x;",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 35,
            "end": 38
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 35,
            "end": 38
        }
    ],
    "start": 0,
    "end": 41
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

