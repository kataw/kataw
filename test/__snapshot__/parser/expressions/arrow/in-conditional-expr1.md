# Kataw parser test case

## Input

`````js
1 ? 0 : a => {}, 17, 42;
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
                "kind": 132,
                "expressions": [
                    {
                        "kind": 197,
                        "shortCircuit": {
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 96,
                            "start": 0,
                            "end": 1
                        },
                        "questionToken": {
                            "kind": 134217750,
                            "flags": 0,
                            "start": 1,
                            "end": 3
                        },
                        "consequent": {
                            "kind": 201392130,
                            "text": 0,
                            "rawText": "0",
                            "flags": 96,
                            "start": 3,
                            "end": 5
                        },
                        "colonToken": {
                            "kind": 21,
                            "flags": 0,
                            "start": 5,
                            "end": 7
                        },
                        "alternate": {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 0,
                                "start": 9,
                                "end": 12
                            },
                            "typeParameters": null,
                            "parameters": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 7,
                                "end": 9
                            },
                            "asyncToken": null,
                            "returnType": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 14,
                                    "end": 14
                                },
                                "flags": 32,
                                "start": 12,
                                "end": 15
                            },
                            "flags": 32,
                            "start": 7,
                            "end": 15
                        },
                        "flags": 32,
                        "start": 0,
                        "end": 15
                    },
                    {
                        "kind": 201392130,
                        "text": 17,
                        "rawText": "17",
                        "flags": 96,
                        "start": 16,
                        "end": 19
                    },
                    {
                        "kind": 201392130,
                        "text": 42,
                        "rawText": "42",
                        "flags": 96,
                        "start": 20,
                        "end": 23
                    }
                ],
                "flags": 32,
                "start": 0,
                "end": 23
            },
            "flags": 16,
            "start": 0,
            "end": 24
        }
    ],
    "isModule": false,
    "source": "1 ? 0 : a => {}, 17, 42;",
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

