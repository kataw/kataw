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
                    "flags": 768,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 768,
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
                            "flags": 768,
                            "start": 5,
                            "end": 6
                        },
                        "flags": 256,
                        "start": 3,
                        "end": 7
                    },
                    "questionToken": {
                        "kind": 134217750,
                        "flags": 768,
                        "start": 7,
                        "end": 8
                    },
                    "consequent": {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
                        "flags": 768,
                        "start": 8,
                        "end": 9
                    },
                    "colonToken": {
                        "kind": 21,
                        "flags": 768,
                        "start": 9,
                        "end": 10
                    },
                    "alternate": {
                        "kind": 271,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 768,
                            "start": 11,
                            "end": 13
                        },
                        "typeParameters": null,
                        "parameters": {
                            "kind": 134299649,
                            "text": "d",
                            "rawText": "d",
                            "flags": 768,
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
                                "flags": 256,
                                "start": 14,
                                "end": 14
                            },
                            "flags": 256,
                            "start": 13,
                            "end": 15
                        },
                        "flags": 256,
                        "start": 10,
                        "end": 15
                    },
                    "flags": 256,
                    "start": 3,
                    "end": 15
                },
                "flags": 256,
                "start": 0,
                "end": 15
            },
            "flags": 128,
            "start": 0,
            "end": 15
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "multiLine": false,
                "flags": 128,
                "start": 18,
                "end": 18
            },
            "flags": 128,
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
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ Unexpected token. - start: 15, end: 17
@{x2716}@ Statement expected - start: 15, end: 17

```

