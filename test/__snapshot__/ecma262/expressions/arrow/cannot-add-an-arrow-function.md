# Kataw parser test case

## Input

`````js
1 + x => {}

1 + () => {}

1 + (x) => {}

1 + async x => {}

1 + async (x) => {}
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
                    "kind": 201392130,
                    "text": 1,
                    "rawText": "1",
                    "flags": 96,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 99634,
                    "flags": 96,
                    "start": 1,
                    "end": 3
                },
                "right": {
                    "kind": 271,
                    "asyncKeyword": null,
                    "typeParameters": null,
                    "arrowPatameterList": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 3,
                        "end": 5
                    },
                    "returnType": null,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "start": 5,
                        "end": 8
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "flags": 32,
                            "start": 10,
                            "end": 10
                        },
                        "flags": 32,
                        "start": 8,
                        "end": 11
                    },
                    "flags": 32,
                    "start": 3,
                    "end": 11
                },
                "flags": 96,
                "start": 0,
                "end": 11
            },
            "flags": 16,
            "start": 0,
            "end": 11
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 201392130,
                    "text": 1,
                    "rawText": "1",
                    "flags": 97,
                    "start": 11,
                    "end": 14
                },
                "operatorToken": {
                    "kind": 99634,
                    "flags": 96,
                    "start": 14,
                    "end": 16
                },
                "right": {
                    "kind": 271,
                    "asyncKeyword": null,
                    "typeParameters": null,
                    "arrowPatameterList": {
                        "kind": 342,
                        "parameters": [],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 18,
                        "end": 18
                    },
                    "returnType": null,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "start": 19,
                        "end": 22
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "flags": 32,
                            "start": 24,
                            "end": 24
                        },
                        "flags": 32,
                        "start": 22,
                        "end": 25
                    },
                    "flags": 32,
                    "start": 16,
                    "end": 25
                },
                "flags": 97,
                "start": 11,
                "end": 25
            },
            "flags": 16,
            "start": 11,
            "end": 25
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 201392130,
                    "text": 1,
                    "rawText": "1",
                    "flags": 97,
                    "start": 25,
                    "end": 28
                },
                "operatorToken": {
                    "kind": 99634,
                    "flags": 96,
                    "start": 28,
                    "end": 30
                },
                "right": {
                    "kind": 271,
                    "asyncKeyword": null,
                    "typeParameters": null,
                    "arrowPatameterList": {
                        "kind": 342,
                        "parameters": [
                            {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 32,
                                "end": 33
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 32,
                        "end": 34
                    },
                    "returnType": null,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "start": 34,
                        "end": 37
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "flags": 32,
                            "start": 39,
                            "end": 39
                        },
                        "flags": 32,
                        "start": 37,
                        "end": 40
                    },
                    "flags": 32,
                    "start": 30,
                    "end": 40
                },
                "flags": 97,
                "start": 25,
                "end": 40
            },
            "flags": 16,
            "start": 25,
            "end": 40
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 201392130,
                    "text": 1,
                    "rawText": "1",
                    "flags": 97,
                    "start": 40,
                    "end": 43
                },
                "operatorToken": {
                    "kind": 99634,
                    "flags": 96,
                    "start": 43,
                    "end": 45
                },
                "right": {
                    "kind": 271,
                    "asyncKeyword": {
                        "kind": 82031,
                        "flags": 64,
                        "start": 45,
                        "end": 51
                    },
                    "typeParameters": null,
                    "arrowPatameterList": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 51,
                        "end": 53
                    },
                    "returnType": null,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "start": 53,
                        "end": 56
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "flags": 32,
                            "start": 58,
                            "end": 58
                        },
                        "flags": 32,
                        "start": 56,
                        "end": 59
                    },
                    "flags": 288,
                    "start": 45,
                    "end": 59
                },
                "flags": 97,
                "start": 40,
                "end": 59
            },
            "flags": 16,
            "start": 40,
            "end": 59
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 201392130,
                    "text": 1,
                    "rawText": "1",
                    "flags": 97,
                    "start": 59,
                    "end": 62
                },
                "operatorToken": {
                    "kind": 99634,
                    "flags": 96,
                    "start": 62,
                    "end": 64
                },
                "right": {
                    "kind": 271,
                    "asyncKeyword": {
                        "kind": 82031,
                        "flags": 64,
                        "start": 64,
                        "end": 70
                    },
                    "typeParameters": null,
                    "arrowPatameterList": {
                        "kind": 342,
                        "parameters": [
                            {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 72,
                                "end": 73
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 72,
                        "end": 74
                    },
                    "returnType": null,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "start": 74,
                        "end": 77
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "flags": 32,
                            "start": 79,
                            "end": 79
                        },
                        "flags": 32,
                        "start": 77,
                        "end": 80
                    },
                    "flags": 288,
                    "start": 64,
                    "end": 80
                },
                "flags": 97,
                "start": 59,
                "end": 80
            },
            "flags": 16,
            "start": 59,
            "end": 80
        }
    ],
    "isModule": false,
    "source": "1 + x => {}\n\n1 + () => {}\n\n1 + (x) => {}\n\n1 + async x => {}\n\n1 + async (x) => {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 80
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a `;` - start: 3, end: 8
✖ Expected a `;` - start: 19, end: 22
✖ Expected a `;` - start: 19, end: 22
✖ Expected a `;` - start: 34, end: 37
✖ Expected a `;` - start: 51, end: 53
✖ Expected a `;` - start: 64, end: 77

```

