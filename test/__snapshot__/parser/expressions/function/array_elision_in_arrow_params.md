# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true, module: true }
`````

## Input

`````js
f = ([[,] = g()]) => {};
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
                "kind": 125,
                "left": {
                    "kind": 81921,
                    "value": "f",
                    "autofix": 0,
                    "flags": 768,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 537067531,
                    "autofix": 0,
                    "flags": 0,
                    "start": 0,
                    "end": 3
                },
                "right": {
                    "kind": 271,
                    "typeParameters": null,
                    "parameters": [
                        {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 125,
                                        "left": {
                                            "kind": 119,
                                            "elementList": {
                                                "kind": 270,
                                                "elements": [
                                                    {
                                                        "kind": 230,
                                                        "autofix": 0,
                                                        "flags": 768,
                                                        "start": 7,
                                                        "end": 7
                                                    }
                                                ],
                                                "trailingComma": true,
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 7,
                                                "end": 8
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 6,
                                            "end": 9
                                        },
                                        "operatorToken": {
                                            "kind": 4125,
                                            "autofix": 0,
                                            "flags": 0,
                                            "start": 9,
                                            "end": 11
                                        },
                                        "right": {
                                            "kind": 131,
                                            "expression": {
                                                "kind": 81921,
                                                "value": "g",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 11,
                                                "end": 13
                                            },
                                            "argumentList": {
                                                "kind": 256,
                                                "elements": [],
                                                "trailingComma": false,
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 14,
                                                "end": 14
                                            },
                                            "flags": 256,
                                            "start": 11,
                                            "end": 15
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 6,
                                        "end": 15
                                    }
                                ],
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 6,
                                "end": 15
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 5,
                            "end": 16
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
                            "start": 22,
                            "end": 22
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 20,
                        "end": 23
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 3,
                    "end": 23
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 23
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 24
        }
    ],
    "isModule": true,
    "text": "f = ([[,] = g()]) => {};",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 24
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

