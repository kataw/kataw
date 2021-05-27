# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
await await await await await await await await await await await await await await await 'await';
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 208,
                "awaitKeyword": {
                    "kind": 90224,
                    "flags": 0,
                    "start": 0,
                    "end": 5
                },
                "expression": {
                    "kind": 208,
                    "awaitKeyword": {
                        "kind": 90224,
                        "flags": 0,
                        "start": 5,
                        "end": 11
                    },
                    "expression": {
                        "kind": 208,
                        "awaitKeyword": {
                            "kind": 90224,
                            "flags": 0,
                            "start": 11,
                            "end": 17
                        },
                        "expression": {
                            "kind": 208,
                            "awaitKeyword": {
                                "kind": 90224,
                                "flags": 0,
                                "start": 17,
                                "end": 23
                            },
                            "expression": {
                                "kind": 208,
                                "awaitKeyword": {
                                    "kind": 90224,
                                    "flags": 0,
                                    "start": 23,
                                    "end": 29
                                },
                                "expression": {
                                    "kind": 208,
                                    "awaitKeyword": {
                                        "kind": 90224,
                                        "flags": 0,
                                        "start": 29,
                                        "end": 35
                                    },
                                    "expression": {
                                        "kind": 208,
                                        "awaitKeyword": {
                                            "kind": 90224,
                                            "flags": 0,
                                            "start": 35,
                                            "end": 41
                                        },
                                        "expression": {
                                            "kind": 208,
                                            "awaitKeyword": {
                                                "kind": 90224,
                                                "flags": 0,
                                                "start": 41,
                                                "end": 47
                                            },
                                            "expression": {
                                                "kind": 208,
                                                "awaitKeyword": {
                                                    "kind": 90224,
                                                    "flags": 0,
                                                    "start": 47,
                                                    "end": 53
                                                },
                                                "expression": {
                                                    "kind": 208,
                                                    "awaitKeyword": {
                                                        "kind": 90224,
                                                        "flags": 0,
                                                        "start": 53,
                                                        "end": 59
                                                    },
                                                    "expression": {
                                                        "kind": 208,
                                                        "awaitKeyword": {
                                                            "kind": 90224,
                                                            "flags": 0,
                                                            "start": 59,
                                                            "end": 65
                                                        },
                                                        "expression": {
                                                            "kind": 208,
                                                            "awaitKeyword": {
                                                                "kind": 90224,
                                                                "flags": 0,
                                                                "start": 65,
                                                                "end": 71
                                                            },
                                                            "expression": {
                                                                "kind": 208,
                                                                "awaitKeyword": {
                                                                    "kind": 90224,
                                                                    "flags": 0,
                                                                    "start": 71,
                                                                    "end": 77
                                                                },
                                                                "expression": {
                                                                    "kind": 208,
                                                                    "awaitKeyword": {
                                                                        "kind": 90224,
                                                                        "flags": 0,
                                                                        "start": 77,
                                                                        "end": 83
                                                                    },
                                                                    "expression": {
                                                                        "kind": 208,
                                                                        "awaitKeyword": {
                                                                            "kind": 90224,
                                                                            "flags": 0,
                                                                            "start": 83,
                                                                            "end": 89
                                                                        },
                                                                        "expression": {
                                                                            "kind": 201392131,
                                                                            "text": "await",
                                                                            "rawText": "'await'",
                                                                            "flags": 4194400,
                                                                            "start": 89,
                                                                            "end": 97
                                                                        },
                                                                        "flags": 32,
                                                                        "start": 83,
                                                                        "end": 97
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 77,
                                                                    "end": 97
                                                                },
                                                                "flags": 32,
                                                                "start": 71,
                                                                "end": 97
                                                            },
                                                            "flags": 32,
                                                            "start": 65,
                                                            "end": 97
                                                        },
                                                        "flags": 32,
                                                        "start": 59,
                                                        "end": 97
                                                    },
                                                    "flags": 32,
                                                    "start": 53,
                                                    "end": 97
                                                },
                                                "flags": 32,
                                                "start": 47,
                                                "end": 97
                                            },
                                            "flags": 32,
                                            "start": 41,
                                            "end": 97
                                        },
                                        "flags": 32,
                                        "start": 35,
                                        "end": 97
                                    },
                                    "flags": 32,
                                    "start": 29,
                                    "end": 97
                                },
                                "flags": 32,
                                "start": 23,
                                "end": 97
                            },
                            "flags": 32,
                            "start": 17,
                            "end": 97
                        },
                        "flags": 32,
                        "start": 11,
                        "end": 97
                    },
                    "flags": 32,
                    "start": 5,
                    "end": 97
                },
                "flags": 32,
                "start": 0,
                "end": 97
            },
            "flags": 16,
            "start": 0,
            "end": 98
        }
    ],
    "isModule": true,
    "source": "await await await await await await await await await await await await await await await 'await';",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 98
}
```

### Printed

```javascript

await await await await await await await await await await await await await await await "'await'";
```

### Diagnostics

```javascript
✔ No errors
```

