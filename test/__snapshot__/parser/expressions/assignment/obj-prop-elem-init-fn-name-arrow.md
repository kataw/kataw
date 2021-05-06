# Kataw parser test case

## Input

`````js
result = { x: arrow = () => {} } = {};
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
                    "text": "result",
                    "rawText": "result",
                    "flags": 96,
                    "start": 0,
                    "end": 6
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 6,
                    "end": 8
                },
                "right": {
                    "kind": 125,
                    "left": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 219,
                                    "generatorToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 10,
                                        "end": 12
                                    },
                                    "right": {
                                        "kind": 125,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "arrow",
                                            "rawText": "arrow",
                                            "flags": 96,
                                            "start": 13,
                                            "end": 19
                                        },
                                        "operatorToken": {
                                            "kind": 4125,
                                            "flags": 64,
                                            "start": 19,
                                            "end": 21
                                        },
                                        "right": {
                                            "kind": 271,
                                            "arrowToken": {
                                                "kind": 10,
                                                "flags": 0,
                                                "start": 24,
                                                "end": 27
                                            },
                                            "typeParameters": null,
                                            "parameters": [],
                                            "asyncKeyword": null,
                                            "returnType": null,
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [],
                                                    "flags": 32,
                                                    "start": 29,
                                                    "end": 29
                                                },
                                                "flags": 32,
                                                "start": 27,
                                                "end": 30
                                            },
                                            "flags": 32,
                                            "start": 21,
                                            "end": 30
                                        },
                                        "flags": 32,
                                        "start": 10,
                                        "end": 30
                                    },
                                    "flags": 32,
                                    "start": 10,
                                    "end": 30
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 10,
                            "end": 30
                        },
                        "flags": 32,
                        "start": 8,
                        "end": 32
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 64,
                        "start": 32,
                        "end": 34
                    },
                    "right": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 36,
                            "end": 36
                        },
                        "flags": 32,
                        "start": 34,
                        "end": 37
                    },
                    "flags": 32,
                    "start": 8,
                    "end": 37
                },
                "flags": 32,
                "start": 0,
                "end": 37
            },
            "flags": 16,
            "start": 0,
            "end": 38
        }
    ],
    "isModule": false,
    "source": "result = { x: arrow = () => {} } = {};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 38
}
```

### Printed

```javascript

result = { x: arrow = () =>  {} } = {};
```

### Diagnostics

```javascript
✔ No errors
```

