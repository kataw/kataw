# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
while (await await await await await await await await await await await await await await await 'await') { break; }
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 154,
            "whileKeyword": {
                "kind": 37757028,
                "flags": 0,
                "start": 0,
                "end": 5
            },
            "expression": {
                "kind": 208,
                "awaitKeyword": {
                    "kind": 90224,
                    "flags": 0,
                    "start": 7,
                    "end": 12
                },
                "expression": {
                    "kind": 208,
                    "awaitKeyword": {
                        "kind": 90224,
                        "flags": 0,
                        "start": 12,
                        "end": 18
                    },
                    "expression": {
                        "kind": 208,
                        "awaitKeyword": {
                            "kind": 90224,
                            "flags": 0,
                            "start": 18,
                            "end": 24
                        },
                        "expression": {
                            "kind": 208,
                            "awaitKeyword": {
                                "kind": 90224,
                                "flags": 0,
                                "start": 24,
                                "end": 30
                            },
                            "expression": {
                                "kind": 208,
                                "awaitKeyword": {
                                    "kind": 90224,
                                    "flags": 0,
                                    "start": 30,
                                    "end": 36
                                },
                                "expression": {
                                    "kind": 208,
                                    "awaitKeyword": {
                                        "kind": 90224,
                                        "flags": 0,
                                        "start": 36,
                                        "end": 42
                                    },
                                    "expression": {
                                        "kind": 208,
                                        "awaitKeyword": {
                                            "kind": 90224,
                                            "flags": 0,
                                            "start": 42,
                                            "end": 48
                                        },
                                        "expression": {
                                            "kind": 208,
                                            "awaitKeyword": {
                                                "kind": 90224,
                                                "flags": 0,
                                                "start": 48,
                                                "end": 54
                                            },
                                            "expression": {
                                                "kind": 208,
                                                "awaitKeyword": {
                                                    "kind": 90224,
                                                    "flags": 0,
                                                    "start": 54,
                                                    "end": 60
                                                },
                                                "expression": {
                                                    "kind": 208,
                                                    "awaitKeyword": {
                                                        "kind": 90224,
                                                        "flags": 0,
                                                        "start": 60,
                                                        "end": 66
                                                    },
                                                    "expression": {
                                                        "kind": 208,
                                                        "awaitKeyword": {
                                                            "kind": 90224,
                                                            "flags": 0,
                                                            "start": 66,
                                                            "end": 72
                                                        },
                                                        "expression": {
                                                            "kind": 208,
                                                            "awaitKeyword": {
                                                                "kind": 90224,
                                                                "flags": 0,
                                                                "start": 72,
                                                                "end": 78
                                                            },
                                                            "expression": {
                                                                "kind": 208,
                                                                "awaitKeyword": {
                                                                    "kind": 90224,
                                                                    "flags": 0,
                                                                    "start": 78,
                                                                    "end": 84
                                                                },
                                                                "expression": {
                                                                    "kind": 208,
                                                                    "awaitKeyword": {
                                                                        "kind": 90224,
                                                                        "flags": 0,
                                                                        "start": 84,
                                                                        "end": 90
                                                                    },
                                                                    "expression": {
                                                                        "kind": 208,
                                                                        "awaitKeyword": {
                                                                            "kind": 90224,
                                                                            "flags": 0,
                                                                            "start": 90,
                                                                            "end": 96
                                                                        },
                                                                        "expression": {
                                                                            "kind": 201392131,
                                                                            "text": "await",
                                                                            "rawText": "'await'",
                                                                            "flags": 4194400,
                                                                            "start": 96,
                                                                            "end": 104
                                                                        },
                                                                        "flags": 32,
                                                                        "start": 90,
                                                                        "end": 104
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 84,
                                                                    "end": 104
                                                                },
                                                                "flags": 32,
                                                                "start": 78,
                                                                "end": 104
                                                            },
                                                            "flags": 32,
                                                            "start": 72,
                                                            "end": 104
                                                        },
                                                        "flags": 32,
                                                        "start": 66,
                                                        "end": 104
                                                    },
                                                    "flags": 32,
                                                    "start": 60,
                                                    "end": 104
                                                },
                                                "flags": 32,
                                                "start": 54,
                                                "end": 104
                                            },
                                            "flags": 32,
                                            "start": 48,
                                            "end": 104
                                        },
                                        "flags": 32,
                                        "start": 42,
                                        "end": 104
                                    },
                                    "flags": 32,
                                    "start": 36,
                                    "end": 104
                                },
                                "flags": 32,
                                "start": 30,
                                "end": 104
                            },
                            "flags": 32,
                            "start": 24,
                            "end": 104
                        },
                        "flags": 32,
                        "start": 18,
                        "end": 104
                    },
                    "flags": 32,
                    "start": 12,
                    "end": 104
                },
                "flags": 32,
                "start": 7,
                "end": 104
            },
            "statement": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [
                        {
                            "kind": 150,
                            "breakKeyword": {
                                "kind": 37757005,
                                "flags": 0,
                                "start": 107,
                                "end": 113
                            },
                            "label": null,
                            "flags": 16,
                            "start": 107,
                            "end": 114
                        }
                    ],
                    "flags": 16,
                    "start": 107,
                    "end": 114
                },
                "flags": 16,
                "start": 105,
                "end": 116
            },
            "flags": 16,
            "start": 0,
            "end": 116
        }
    ],
    "isModule": true,
    "source": "while (await await await await await await await await await await await await await await await 'await') { break; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 116
}
```

### Printed

```javascript

while (
  await await await await await await await await await await await await await await await "'await'"
)
  {}
```

### Diagnostics

```javascript
✔ No errors
```

