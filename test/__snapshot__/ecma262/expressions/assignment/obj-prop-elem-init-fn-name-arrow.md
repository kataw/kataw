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
                    "transformFlags": 0,
                    "start": 0,
                    "end": 6
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
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
                                    "asteriskToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
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
                                            "transformFlags": 0,
                                            "start": 13,
                                            "end": 19
                                        },
                                        "operatorToken": {
                                            "kind": 4125,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 19,
                                            "end": 21
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
                                                "start": 23,
                                                "end": 23
                                            },
                                            "returnType": null,
                                            "arrowToken": {
                                                "kind": 10,
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 24,
                                                "end": 27
                                            },
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [],
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 29,
                                                    "end": 29
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 27,
                                                "end": 30
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 21,
                                            "end": 30
                                        },
                                        "flags": 0,
                                        "transformFlags": 128,
                                        "start": 10,
                                        "end": 30
                                    },
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 10,
                                    "end": 30
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 10,
                            "end": 30
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 8,
                        "end": 32
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "transformFlags": 0,
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
                            "transformFlags": 0,
                            "start": 36,
                            "end": 36
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 34,
                        "end": 37
                    },
                    "flags": 32,
                    "transformFlags": 128,
                    "start": 8,
                    "end": 37
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 0,
                "end": 37
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 38
        }
    ],
    "isModule": false,
    "source": "result = { x: arrow = () => {} } = {};",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 38
}
```

### Printed

```javascript
result = { x: arrow = () => {} } = {};
```

### Diagnostics

```javascript
✔ No errors
```

