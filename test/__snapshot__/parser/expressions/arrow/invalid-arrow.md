# Kataw parser test case

## Input

`````js
x = (a)?c:d=>{}=>{}
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
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 1,
                    "end": 3
                },
                "right": {
                    "kind": 197,
                    "shortCircuit": {
                        "kind": 121,
                        "expression": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 5,
                            "end": 6
                        },
                        "flags": 32,
                        "start": 3,
                        "end": 7
                    },
                    "questionToken": {
                        "kind": 134217750,
                        "flags": 0,
                        "start": 7,
                        "end": 8
                    },
                    "consequent": {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
                        "flags": 96,
                        "start": 8,
                        "end": 9
                    },
                    "colonToken": {
                        "kind": 21,
                        "flags": 0,
                        "start": 9,
                        "end": 10
                    },
                    "alternate": {
                        "kind": 271,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 0,
                            "start": 11,
                            "end": 13
                        },
                        "typeParameters": null,
                        "parameters": {
                            "kind": 134299649,
                            "text": "d",
                            "rawText": "d",
                            "flags": 96,
                            "start": 10,
                            "end": 11
                        },
                        "asyncToken": null,
                        "returnType": null,
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [],
                                "multiline": false,
                                "flags": 32,
                                "start": 14,
                                "end": 14
                            },
                            "flags": 32,
                            "start": 13,
                            "end": 15
                        },
                        "flags": 32,
                        "start": 10,
                        "end": 15
                    },
                    "flags": 32,
                    "start": 3,
                    "end": 15
                },
                "flags": 32,
                "start": 0,
                "end": 15
            },
            "flags": 16,
            "start": 0,
            "end": 15
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "multiLine": false,
                "flags": 16,
                "start": 18,
                "end": 18
            },
            "flags": 16,
            "start": 17,
            "end": 19
        }
    ],
    "isModule": false,
    "text": "x = (a)?c:d=>{}=>{}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 19
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Statement expected - start: 15, end: 17

```

