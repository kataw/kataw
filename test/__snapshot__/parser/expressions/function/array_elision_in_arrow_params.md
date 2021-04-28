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
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "f",
                    "rawText": "f",
                    "flags": 768,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 512,
                    "start": 1,
                    "end": 3
                },
                "right": {
                    "kind": 271,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 17,
                        "start": 0,
                        "end": 20
                    },
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
                                                        "flags": 768,
                                                        "start": 7,
                                                        "end": 7
                                                    }
                                                ],
                                                "trailingComma": true,
                                                "flags": 256,
                                                "start": 7,
                                                "end": 8
                                            },
                                            "flags": 256,
                                            "start": 6,
                                            "end": 9
                                        },
                                        "operatorToken": {
                                            "kind": 4125,
                                            "flags": 512,
                                            "start": 9,
                                            "end": 11
                                        },
                                        "right": {
                                            "kind": 131,
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "g",
                                                "rawText": "g",
                                                "flags": 768,
                                                "start": 11,
                                                "end": 13
                                            },
                                            "argumentList": {
                                                "kind": 256,
                                                "elements": [],
                                                "trailingComma": false,
                                                "flags": 256,
                                                "start": 14,
                                                "end": 14
                                            },
                                            "flags": 256,
                                            "start": 11,
                                            "end": 15
                                        },
                                        "flags": 256,
                                        "start": 6,
                                        "end": 15
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 256,
                                "start": 6,
                                "end": 15
                            },
                            "flags": 256,
                            "start": 5,
                            "end": 16
                        }
                    ],
                    "asyncToken": null,
                    "returnType": null,
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "multiline": false,
                            "flags": 256,
                            "start": 22,
                            "end": 22
                        },
                        "flags": 256,
                        "start": 20,
                        "end": 23
                    },
                    "flags": 256,
                    "start": 3,
                    "end": 23
                },
                "flags": 256,
                "start": 0,
                "end": 23
            },
            "flags": 128,
            "start": 0,
            "end": 24
        }
    ],
    "isModule": true,
    "text": "f = ([[,] = g()]) => {};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 24
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

