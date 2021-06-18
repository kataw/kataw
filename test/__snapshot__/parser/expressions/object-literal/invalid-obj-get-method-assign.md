# Kataw parser test case

## Input

`````js
({get a(){}} = 0)
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
                    "kind": 125,
                    "left": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 257,
                                    "asyncKeyword": null,
                                    "generatorToken": null,
                                    "getKeyword": {
                                        "kind": 16498,
                                        "flags": 96,
                                        "start": 2,
                                        "end": 5
                                    },
                                    "setKeyword": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 5,
                                            "end": 7
                                        },
                                        "typeParameters": null,
                                        "formalParameters": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 1056,
                                            "start": 8,
                                            "end": 9
                                        },
                                        "returnType": null,
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
                                            "start": 9,
                                            "end": 11
                                        },
                                        "flags": 1056,
                                        "start": 7,
                                        "end": 11
                                    },
                                    "flags": 32,
                                    "start": 2,
                                    "end": 11
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 2,
                            "end": 11
                        },
                        "flags": 48,
                        "start": 1,
                        "end": 12
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "start": 12,
                        "end": 14
                    },
                    "right": {
                        "kind": 201392130,
                        "text": 0,
                        "rawText": "0",
                        "flags": 96,
                        "start": 14,
                        "end": 16
                    },
                    "flags": 32,
                    "start": 1,
                    "end": 16
                },
                "flags": 32,
                "start": 0,
                "end": 17
            },
            "flags": 16,
            "start": 0,
            "end": 17
        }
    ],
    "isModule": false,
    "source": "({get a(){}} = 0)",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 17
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The left-hand side must be a variable or a property access. - start: 1, end: 14

```

