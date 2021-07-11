# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
if (await await await await await await await await await await await await await await await 'await') {}
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 80,
                "start": 0,
                "end": 2
            },
            "expression": {
                "kind": 208,
                "awaitKeyword": {
                    "kind": 82196,
                    "flags": 64,
                    "start": 4,
                    "end": 9
                },
                "expression": {
                    "kind": 208,
                    "awaitKeyword": {
                        "kind": 82196,
                        "flags": 64,
                        "start": 9,
                        "end": 15
                    },
                    "expression": {
                        "kind": 208,
                        "awaitKeyword": {
                            "kind": 82196,
                            "flags": 64,
                            "start": 15,
                            "end": 21
                        },
                        "expression": {
                            "kind": 208,
                            "awaitKeyword": {
                                "kind": 82196,
                                "flags": 64,
                                "start": 21,
                                "end": 27
                            },
                            "expression": {
                                "kind": 208,
                                "awaitKeyword": {
                                    "kind": 82196,
                                    "flags": 64,
                                    "start": 27,
                                    "end": 33
                                },
                                "expression": {
                                    "kind": 208,
                                    "awaitKeyword": {
                                        "kind": 82196,
                                        "flags": 64,
                                        "start": 33,
                                        "end": 39
                                    },
                                    "expression": {
                                        "kind": 208,
                                        "awaitKeyword": {
                                            "kind": 82196,
                                            "flags": 64,
                                            "start": 39,
                                            "end": 45
                                        },
                                        "expression": {
                                            "kind": 208,
                                            "awaitKeyword": {
                                                "kind": 82196,
                                                "flags": 64,
                                                "start": 45,
                                                "end": 51
                                            },
                                            "expression": {
                                                "kind": 208,
                                                "awaitKeyword": {
                                                    "kind": 82196,
                                                    "flags": 64,
                                                    "start": 51,
                                                    "end": 57
                                                },
                                                "expression": {
                                                    "kind": 208,
                                                    "awaitKeyword": {
                                                        "kind": 82196,
                                                        "flags": 64,
                                                        "start": 57,
                                                        "end": 63
                                                    },
                                                    "expression": {
                                                        "kind": 208,
                                                        "awaitKeyword": {
                                                            "kind": 82196,
                                                            "flags": 64,
                                                            "start": 63,
                                                            "end": 69
                                                        },
                                                        "expression": {
                                                            "kind": 208,
                                                            "awaitKeyword": {
                                                                "kind": 82196,
                                                                "flags": 64,
                                                                "start": 69,
                                                                "end": 75
                                                            },
                                                            "expression": {
                                                                "kind": 208,
                                                                "awaitKeyword": {
                                                                    "kind": 82196,
                                                                    "flags": 64,
                                                                    "start": 75,
                                                                    "end": 81
                                                                },
                                                                "expression": {
                                                                    "kind": 208,
                                                                    "awaitKeyword": {
                                                                        "kind": 82196,
                                                                        "flags": 64,
                                                                        "start": 81,
                                                                        "end": 87
                                                                    },
                                                                    "expression": {
                                                                        "kind": 208,
                                                                        "awaitKeyword": {
                                                                            "kind": 82196,
                                                                            "flags": 64,
                                                                            "start": 87,
                                                                            "end": 93
                                                                        },
                                                                        "expression": {
                                                                            "kind": 201392131,
                                                                            "text": "await",
                                                                            "rawText": "'await'",
                                                                            "flags": 4194400,
                                                                            "start": 93,
                                                                            "end": 101
                                                                        },
                                                                        "flags": 32,
                                                                        "start": 87,
                                                                        "end": 101
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 81,
                                                                    "end": 101
                                                                },
                                                                "flags": 32,
                                                                "start": 75,
                                                                "end": 101
                                                            },
                                                            "flags": 32,
                                                            "start": 69,
                                                            "end": 101
                                                        },
                                                        "flags": 32,
                                                        "start": 63,
                                                        "end": 101
                                                    },
                                                    "flags": 32,
                                                    "start": 57,
                                                    "end": 101
                                                },
                                                "flags": 32,
                                                "start": 51,
                                                "end": 101
                                            },
                                            "flags": 32,
                                            "start": 45,
                                            "end": 101
                                        },
                                        "flags": 32,
                                        "start": 39,
                                        "end": 101
                                    },
                                    "flags": 32,
                                    "start": 33,
                                    "end": 101
                                },
                                "flags": 32,
                                "start": 27,
                                "end": 101
                            },
                            "flags": 32,
                            "start": 21,
                            "end": 101
                        },
                        "flags": 32,
                        "start": 15,
                        "end": 101
                    },
                    "flags": 32,
                    "start": 9,
                    "end": 101
                },
                "flags": 32,
                "start": 4,
                "end": 101
            },
            "consequent": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "start": 104,
                    "end": 104
                },
                "flags": 16,
                "start": 102,
                "end": 105
            },
            "elseKeyword": null,
            "alternate": null,
            "flags": 80,
            "start": 0,
            "end": 105
        }
    ],
    "isModule": true,
    "source": "if (await await await await await await await await await await await await await await await 'await') {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 105
}
```

### Printed

```javascript

if (await await await await await await await await await await await await await await await "'await'") { }

```

### Diagnostics

```javascript
✔ No errors
```

