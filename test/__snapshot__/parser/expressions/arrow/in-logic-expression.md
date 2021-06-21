# Kataw parser test case

## Input

`````js
(() => {}) || true;
(() => {}) ? a : b;
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
                "kind": 198,
                "left": {
                    "kind": 121,
                    "expression": {
                        "kind": 271,
                        "asyncKeyword": null,
                        "typeParameters": null,
                        "parameters": [],
                        "returnType": null,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 64,
                            "start": 3,
                            "end": 6
                        },
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [],
                                "flags": 32,
                                "start": 8,
                                "end": 8
                            },
                            "flags": 32,
                            "start": 6,
                            "end": 9
                        },
                        "flags": 32,
                        "start": 1,
                        "end": 9
                    },
                    "flags": 32,
                    "start": 0,
                    "end": 10
                },
                "operatorToken": {
                    "kind": 33339,
                    "flags": 96,
                    "start": 10,
                    "end": 13
                },
                "right": {
                    "kind": 24752947,
                    "flags": 96,
                    "start": 13,
                    "end": 18
                },
                "flags": 32,
                "start": 0,
                "end": 18
            },
            "flags": 16,
            "start": 0,
            "end": 19
        },
        {
            "kind": 120,
            "expression": {
                "kind": 197,
                "shortCircuit": {
                    "kind": 121,
                    "expression": {
                        "kind": 271,
                        "asyncKeyword": null,
                        "typeParameters": null,
                        "parameters": [],
                        "returnType": null,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 64,
                            "start": 23,
                            "end": 26
                        },
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [],
                                "flags": 32,
                                "start": 28,
                                "end": 28
                            },
                            "flags": 32,
                            "start": 26,
                            "end": 29
                        },
                        "flags": 32,
                        "start": 21,
                        "end": 29
                    },
                    "flags": 32,
                    "start": 19,
                    "end": 30
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 64,
                    "start": 30,
                    "end": 32
                },
                "consequent": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 32,
                    "end": 34
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 64,
                    "start": 34,
                    "end": 36
                },
                "alternate": {
                    "kind": 134299649,
                    "text": "b",
                    "rawText": "b",
                    "flags": 96,
                    "start": 36,
                    "end": 38
                },
                "flags": 32,
                "start": 19,
                "end": 38
            },
            "flags": 16,
            "start": 19,
            "end": 39
        }
    ],
    "isModule": false,
    "source": "(() => {}) || true;\n(() => {}) ? a : b;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 39
}
```

### Printed

```javascript

 (() => {
}) || true;, (() => {
}) ? a : b; 
```

### Diagnostics

```javascript
✔ No errors
```

