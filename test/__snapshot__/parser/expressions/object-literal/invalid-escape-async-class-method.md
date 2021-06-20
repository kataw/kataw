# Kataw parser test case

## Input

`````js
({ \u0061sync x() { await x } })
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
                "kind": 121,
                "expression": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 351,
                                "asyncKeyword": {
                                    "kind": 82031,
                                    "flags": 16736,
                                    "start": 2,
                                    "end": 13
                                },
                                "asteriskToken": null,
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 13,
                                        "end": 15
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 16672,
                                        "start": 16,
                                        "end": 17
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [
                                                {
                                                    "kind": 120,
                                                    "expression": {
                                                        "kind": 208,
                                                        "awaitKeyword": {
                                                            "kind": 82196,
                                                            "flags": 64,
                                                            "start": 19,
                                                            "end": 25
                                                        },
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 96,
                                                            "start": 25,
                                                            "end": 27
                                                        },
                                                        "flags": 32,
                                                        "start": 19,
                                                        "end": 27
                                                    },
                                                    "flags": 16,
                                                    "start": 19,
                                                    "end": 27
                                                }
                                            ],
                                            "flags": 32,
                                            "start": 19,
                                            "end": 27
                                        },
                                        "flags": 32,
                                        "start": 17,
                                        "end": 29
                                    },
                                    "flags": 16672,
                                    "start": 15,
                                    "end": 29
                                },
                                "flags": 32,
                                "start": 2,
                                "end": 29
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16400,
                        "start": 2,
                        "end": 29
                    },
                    "flags": 16432,
                    "start": 1,
                    "end": 31
                },
                "flags": 32,
                "start": 0,
                "end": 32
            },
            "flags": 16,
            "start": 0,
            "end": 32
        }
    ],
    "isModule": false,
    "source": "({ \\u0061sync x() { await x } })",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 32
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Keywords cannot contain escape characters - start: 13, end: 15

```

