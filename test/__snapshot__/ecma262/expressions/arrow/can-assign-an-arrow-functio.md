# Kataw parser test case

## Input

`````js
y = x => {}

y = () => {}

y = (x) => {}

y = async () => {}

y = async (x) => {}
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
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "y",
                    "rawText": "y",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
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
                        "transformFlags": 0,
                        "start": 3,
                        "end": 5
                    },
                    "returnType": null,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "transformFlags": 0,
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
                            "transformFlags": 0,
                            "start": 10,
                            "end": 10
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 8,
                        "end": 11
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 3,
                    "end": 11
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 0,
                "end": 11
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 11
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "y",
                    "rawText": "y",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 11,
                    "end": 14
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
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
                        "transformFlags": 0,
                        "start": 18,
                        "end": 18
                    },
                    "returnType": null,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "transformFlags": 0,
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
                            "transformFlags": 0,
                            "start": 24,
                            "end": 24
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 22,
                        "end": 25
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 16,
                    "end": 25
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 11,
                "end": 25
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 11,
            "end": 25
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "y",
                    "rawText": "y",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 25,
                    "end": 28
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
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
                                "transformFlags": 0,
                                "start": 32,
                                "end": 33
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 34
                    },
                    "returnType": null,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "transformFlags": 0,
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
                            "transformFlags": 0,
                            "start": 39,
                            "end": 39
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 37,
                        "end": 40
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 30,
                    "end": 40
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 25,
                "end": 40
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 25,
            "end": 40
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "y",
                    "rawText": "y",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 40,
                    "end": 43
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 43,
                    "end": 45
                },
                "right": {
                    "kind": 271,
                    "asyncKeyword": {
                        "kind": 82031,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 45,
                        "end": 51
                    },
                    "typeParameters": null,
                    "arrowPatameterList": {
                        "kind": 342,
                        "parameters": [],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 53,
                        "end": 53
                    },
                    "returnType": null,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 54,
                        "end": 57
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 59,
                            "end": 59
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 57,
                        "end": 60
                    },
                    "flags": 288,
                    "transformFlags": 0,
                    "start": 45,
                    "end": 60
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 40,
                "end": 60
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 40,
            "end": 60
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "y",
                    "rawText": "y",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 60,
                    "end": 63
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 63,
                    "end": 65
                },
                "right": {
                    "kind": 271,
                    "asyncKeyword": {
                        "kind": 82031,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 65,
                        "end": 71
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
                                "transformFlags": 0,
                                "start": 73,
                                "end": 74
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 73,
                        "end": 75
                    },
                    "returnType": null,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 75,
                        "end": 78
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 80,
                            "end": 80
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 78,
                        "end": 81
                    },
                    "flags": 288,
                    "transformFlags": 0,
                    "start": 65,
                    "end": 81
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 60,
                "end": 81
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 60,
            "end": 81
        }
    ],
    "isModule": false,
    "source": "y = x => {}\n\ny = () => {}\n\ny = (x) => {}\n\ny = async () => {}\n\ny = async (x) => {}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 81
}
```

### Printed

```javascript
y = x => {};
y = () => {};

y = (x) => {};

y = async () => {};

y = async (x) => {};

```

### Diagnostics

```javascript
✔ No errors
```

