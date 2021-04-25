# Kataw parser test case

## Input

`````js

a ? (): string => {}  :  b;

a ? async (): string => {}  :  b;

a ? (): string => {}  :  (): string => {};

(): string => {};

a ? b : (): string => {}
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
                "kind": 197,
                "shortCircuit": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 768,
                    "start": 0,
                    "end": 2
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 768,
                    "start": 2,
                    "end": 4
                },
                "consequent": {
                    "kind": 271,
                    "arrowToken": null,
                    "typeParameters": null,
                    "parameters": [],
                    "asyncToken": null,
                    "returnType": null,
                    "contents": {
                        "kind": 271,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 768,
                            "start": 15,
                            "end": 18
                        },
                        "typeParameters": null,
                        "parameters": {
                            "kind": 134299649,
                            "text": "string",
                            "rawText": "string",
                            "flags": 768,
                            "start": 8,
                            "end": 15
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
                                "start": 20,
                                "end": 20
                            },
                            "flags": 256,
                            "start": 18,
                            "end": 21
                        },
                        "flags": 256,
                        "start": 8,
                        "end": 21
                    },
                    "flags": 256,
                    "start": 4,
                    "end": 21
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 768,
                    "start": 21,
                    "end": 24
                },
                "alternate": {
                    "kind": 134299649,
                    "text": "b",
                    "rawText": "b",
                    "flags": 768,
                    "start": 24,
                    "end": 27
                },
                "flags": 256,
                "start": 0,
                "end": 27
            },
            "flags": 128,
            "start": 0,
            "end": 28
        },
        {
            "kind": 120,
            "expression": {
                "kind": 197,
                "shortCircuit": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 768,
                    "start": 28,
                    "end": 31
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 768,
                    "start": 31,
                    "end": 33
                },
                "consequent": {
                    "kind": 131,
                    "expression": {
                        "kind": 134299649,
                        "text": "async",
                        "rawText": "async",
                        "flags": 768,
                        "start": 33,
                        "end": 39
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 33,
                        "end": 33
                    },
                    "flags": 256,
                    "start": 33,
                    "end": 42
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 768,
                    "start": 42,
                    "end": 43
                },
                "alternate": {
                    "kind": 271,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 768,
                        "start": 50,
                        "end": 53
                    },
                    "typeParameters": null,
                    "parameters": {
                        "kind": 134299649,
                        "text": "string",
                        "rawText": "string",
                        "flags": 768,
                        "start": 43,
                        "end": 50
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
                            "start": 55,
                            "end": 55
                        },
                        "flags": 256,
                        "start": 53,
                        "end": 56
                    },
                    "flags": 256,
                    "start": 43,
                    "end": 56
                },
                "flags": 256,
                "start": 28,
                "end": 56
            },
            "flags": 128,
            "start": 28,
            "end": 56
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "b",
                "rawText": "b",
                "flags": 768,
                "start": 59,
                "end": 62
            },
            "flags": 128,
            "start": 59,
            "end": 63
        },
        {
            "kind": 120,
            "expression": {
                "kind": 197,
                "shortCircuit": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 768,
                    "start": 63,
                    "end": 66
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 768,
                    "start": 66,
                    "end": 68
                },
                "consequent": {
                    "kind": 271,
                    "arrowToken": null,
                    "typeParameters": null,
                    "parameters": [],
                    "asyncToken": null,
                    "returnType": null,
                    "contents": {
                        "kind": 271,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 768,
                            "start": 79,
                            "end": 82
                        },
                        "typeParameters": null,
                        "parameters": {
                            "kind": 134299649,
                            "text": "string",
                            "rawText": "string",
                            "flags": 768,
                            "start": 72,
                            "end": 79
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
                                "start": 84,
                                "end": 84
                            },
                            "flags": 256,
                            "start": 82,
                            "end": 85
                        },
                        "flags": 256,
                        "start": 72,
                        "end": 85
                    },
                    "flags": 256,
                    "start": 68,
                    "end": 85
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 768,
                    "start": 85,
                    "end": 88
                },
                "alternate": {
                    "kind": 271,
                    "arrowToken": null,
                    "typeParameters": null,
                    "parameters": [],
                    "asyncToken": null,
                    "returnType": null,
                    "contents": {
                        "kind": 271,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 768,
                            "start": 100,
                            "end": 103
                        },
                        "typeParameters": null,
                        "parameters": {
                            "kind": 134299649,
                            "text": "string",
                            "rawText": "string",
                            "flags": 768,
                            "start": 93,
                            "end": 100
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
                                "start": 105,
                                "end": 105
                            },
                            "flags": 256,
                            "start": 103,
                            "end": 106
                        },
                        "flags": 256,
                        "start": 93,
                        "end": 106
                    },
                    "flags": 256,
                    "start": 88,
                    "end": 106
                },
                "flags": 256,
                "start": 63,
                "end": 106
            },
            "flags": 128,
            "start": 63,
            "end": 107
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": null,
                "typeParameters": null,
                "parameters": [],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 271,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 768,
                        "start": 119,
                        "end": 122
                    },
                    "typeParameters": null,
                    "parameters": {
                        "kind": 134299649,
                        "text": "string",
                        "rawText": "string",
                        "flags": 768,
                        "start": 112,
                        "end": 119
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
                            "start": 124,
                            "end": 124
                        },
                        "flags": 256,
                        "start": 122,
                        "end": 125
                    },
                    "flags": 256,
                    "start": 112,
                    "end": 125
                },
                "flags": 256,
                "start": 107,
                "end": 125
            },
            "flags": 128,
            "start": 107,
            "end": 126
        },
        {
            "kind": 120,
            "expression": {
                "kind": 197,
                "shortCircuit": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 768,
                    "start": 126,
                    "end": 129
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 768,
                    "start": 129,
                    "end": 131
                },
                "consequent": {
                    "kind": 134299649,
                    "text": "b",
                    "rawText": "b",
                    "flags": 768,
                    "start": 131,
                    "end": 133
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 768,
                    "start": 133,
                    "end": 135
                },
                "alternate": {
                    "kind": 271,
                    "arrowToken": null,
                    "typeParameters": null,
                    "parameters": [],
                    "asyncToken": null,
                    "returnType": null,
                    "contents": {
                        "kind": 271,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 768,
                            "start": 146,
                            "end": 149
                        },
                        "typeParameters": null,
                        "parameters": {
                            "kind": 134299649,
                            "text": "string",
                            "rawText": "string",
                            "flags": 768,
                            "start": 139,
                            "end": 146
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
                                "start": 151,
                                "end": 151
                            },
                            "flags": 256,
                            "start": 149,
                            "end": 152
                        },
                        "flags": 256,
                        "start": 139,
                        "end": 152
                    },
                    "flags": 256,
                    "start": 135,
                    "end": 152
                },
                "flags": 256,
                "start": 126,
                "end": 152
            },
            "flags": 128,
            "start": 126,
            "end": 152
        }
    ],
    "isModule": false,
    "text": "\na ? (): string => {}  :  b;\n\na ? async (): string => {}  :  b;\n\na ? (): string => {}  :  (): string => {};\n\n(): string => {};\n\na ? b : (): string => {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 152
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ Unexpected token. - start: 7, end: 8
@{x2716}@ Unexpected token. - start: 56, end: 59
@{x2716}@ Statement expected - start: 56, end: 59
@{x2716}@ Unexpected token. - start: 71, end: 72
@{x2716}@ Unexpected token. - start: 92, end: 93
@{x2716}@ Unexpected token. - start: 111, end: 112
@{x2716}@ Unexpected token. - start: 138, end: 139

```

