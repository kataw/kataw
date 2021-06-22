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

### CST

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
                    "flags": 96,
                    "start": 0,
                    "end": 2
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 64,
                    "start": 2,
                    "end": 4
                },
                "consequent": {
                    "kind": 271,
                    "asyncKeyword": null,
                    "typeParameters": null,
                    "parameters": [],
                    "returnType": null,
                    "arrowToken": null,
                    "contents": {
                        "kind": 16637,
                        "text": "",
                        "rawText": "",
                        "flags": 64,
                        "start": 7,
                        "end": 7
                    },
                    "flags": 32,
                    "start": 4,
                    "end": 7
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 64,
                    "start": 7,
                    "end": 8
                },
                "alternate": {
                    "kind": 271,
                    "asyncKeyword": null,
                    "typeParameters": null,
                    "parameters": {
                        "kind": 134299649,
                        "text": "string",
                        "rawText": "string",
                        "flags": 96,
                        "start": 8,
                        "end": 15
                    },
                    "returnType": null,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "start": 15,
                        "end": 18
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "flags": 32,
                            "start": 20,
                            "end": 20
                        },
                        "flags": 32,
                        "start": 18,
                        "end": 21
                    },
                    "flags": 32,
                    "start": 8,
                    "end": 21
                },
                "flags": 32,
                "start": 0,
                "end": 21
            },
            "flags": 16,
            "start": 0,
            "end": 21
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "b",
                "rawText": "b",
                "flags": 96,
                "start": 24,
                "end": 27
            },
            "flags": 16,
            "start": 24,
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
                    "flags": 96,
                    "start": 28,
                    "end": 31
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 64,
                    "start": 31,
                    "end": 33
                },
                "consequent": {
                    "kind": 131,
                    "expression": {
                        "kind": 134299649,
                        "text": "async",
                        "rawText": "async",
                        "flags": 96,
                        "start": 33,
                        "end": 39
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 33,
                        "end": 33
                    },
                    "flags": 268435488,
                    "start": 33,
                    "end": 42
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 64,
                    "start": 42,
                    "end": 43
                },
                "alternate": {
                    "kind": 271,
                    "asyncKeyword": null,
                    "typeParameters": null,
                    "parameters": {
                        "kind": 134299649,
                        "text": "string",
                        "rawText": "string",
                        "flags": 96,
                        "start": 43,
                        "end": 50
                    },
                    "returnType": null,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "start": 50,
                        "end": 53
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "flags": 32,
                            "start": 55,
                            "end": 55
                        },
                        "flags": 32,
                        "start": 53,
                        "end": 56
                    },
                    "flags": 32,
                    "start": 43,
                    "end": 56
                },
                "flags": 32,
                "start": 28,
                "end": 56
            },
            "flags": 16,
            "start": 28,
            "end": 56
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "b",
                "rawText": "b",
                "flags": 96,
                "start": 59,
                "end": 62
            },
            "flags": 16,
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
                    "flags": 96,
                    "start": 63,
                    "end": 66
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 64,
                    "start": 66,
                    "end": 68
                },
                "consequent": {
                    "kind": 271,
                    "asyncKeyword": null,
                    "typeParameters": null,
                    "parameters": [],
                    "returnType": null,
                    "arrowToken": null,
                    "contents": {
                        "kind": 16637,
                        "text": "",
                        "rawText": "",
                        "flags": 64,
                        "start": 71,
                        "end": 71
                    },
                    "flags": 32,
                    "start": 68,
                    "end": 71
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 64,
                    "start": 71,
                    "end": 72
                },
                "alternate": {
                    "kind": 271,
                    "asyncKeyword": null,
                    "typeParameters": null,
                    "parameters": {
                        "kind": 134299649,
                        "text": "string",
                        "rawText": "string",
                        "flags": 96,
                        "start": 72,
                        "end": 79
                    },
                    "returnType": null,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "start": 79,
                        "end": 82
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "flags": 32,
                            "start": 84,
                            "end": 84
                        },
                        "flags": 32,
                        "start": 82,
                        "end": 85
                    },
                    "flags": 32,
                    "start": 72,
                    "end": 85
                },
                "flags": 32,
                "start": 63,
                "end": 85
            },
            "flags": 16,
            "start": 63,
            "end": 85
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "parameters": [],
                "returnType": null,
                "arrowToken": null,
                "contents": {
                    "kind": 16637,
                    "text": "",
                    "rawText": "",
                    "flags": 64,
                    "start": 92,
                    "end": 92
                },
                "flags": 32,
                "start": 88,
                "end": 92
            },
            "flags": 16,
            "start": 88,
            "end": 92
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "parameters": {
                    "kind": 134299649,
                    "text": "string",
                    "rawText": "string",
                    "flags": 96,
                    "start": 93,
                    "end": 100
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 100,
                    "end": 103
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 105,
                        "end": 105
                    },
                    "flags": 32,
                    "start": 103,
                    "end": 106
                },
                "flags": 32,
                "start": 93,
                "end": 106
            },
            "flags": 16,
            "start": 93,
            "end": 107
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "parameters": [],
                "returnType": null,
                "arrowToken": null,
                "contents": {
                    "kind": 16637,
                    "text": "",
                    "rawText": "",
                    "flags": 64,
                    "start": 111,
                    "end": 111
                },
                "flags": 32,
                "start": 107,
                "end": 111
            },
            "flags": 16,
            "start": 107,
            "end": 111
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "parameters": {
                    "kind": 134299649,
                    "text": "string",
                    "rawText": "string",
                    "flags": 96,
                    "start": 112,
                    "end": 119
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 119,
                    "end": 122
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 124,
                        "end": 124
                    },
                    "flags": 32,
                    "start": 122,
                    "end": 125
                },
                "flags": 32,
                "start": 112,
                "end": 125
            },
            "flags": 16,
            "start": 112,
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
                    "flags": 96,
                    "start": 126,
                    "end": 129
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 64,
                    "start": 129,
                    "end": 131
                },
                "consequent": {
                    "kind": 134299649,
                    "text": "b",
                    "rawText": "b",
                    "flags": 96,
                    "start": 131,
                    "end": 133
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 64,
                    "start": 133,
                    "end": 135
                },
                "alternate": {
                    "kind": 271,
                    "asyncKeyword": null,
                    "typeParameters": null,
                    "parameters": [],
                    "returnType": null,
                    "arrowToken": null,
                    "contents": {
                        "kind": 16637,
                        "text": "",
                        "rawText": "",
                        "flags": 64,
                        "start": 138,
                        "end": 138
                    },
                    "flags": 32,
                    "start": 135,
                    "end": 138
                },
                "flags": 32,
                "start": 126,
                "end": 138
            },
            "flags": 16,
            "start": 126,
            "end": 138
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "parameters": {
                    "kind": 134299649,
                    "text": "string",
                    "rawText": "string",
                    "flags": 96,
                    "start": 139,
                    "end": 146
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 146,
                    "end": 149
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 151,
                        "end": 151
                    },
                    "flags": 32,
                    "start": 149,
                    "end": 152
                },
                "flags": 32,
                "start": 139,
                "end": 152
            },
            "flags": 16,
            "start": 139,
            "end": 152
        }
    ],
    "isModule": false,
    "source": "\na ? (): string => {}  :  b;\n\na ? async (): string => {}  :  b;\n\na ? (): string => {}  :  (): string => {};\n\n(): string => {};\n\na ? b : (): string => {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 152
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 7, end: 8
✖ Expected a `;` - start: 21, end: 24
✖ Expected a `;` - start: 56, end: 59
✖ Identifier expected - start: 71, end: 72
✖ Expected a `;` - start: 85, end: 88
✖ Identifier expected - start: 92, end: 93
✖ Identifier expected - start: 111, end: 112
✖ Identifier expected - start: 138, end: 139

```

