# Kataw parser test case

## Input

`````js
({ async a(){ await 0; } })
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
                                "kind": 257,
                                "asyncKeyword": {
                                    "kind": 82031,
                                    "flags": 64,
                                    "start": 2,
                                    "end": 8
                                },
                                "generatorToken": null,
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "start": 8,
                                        "end": 10
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 288,
                                        "start": 11,
                                        "end": 12
                                    },
                                    "type": null,
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
                                                        "awaitToken": {
                                                            "kind": 82032,
                                                            "flags": 0,
                                                            "start": 13,
                                                            "end": 19
                                                        },
                                                        "expression": {
                                                            "kind": 201392130,
                                                            "text": 0,
                                                            "rawText": "0",
                                                            "flags": 96,
                                                            "start": 19,
                                                            "end": 21
                                                        },
                                                        "flags": 32,
                                                        "start": 13,
                                                        "end": 21
                                                    },
                                                    "flags": 16,
                                                    "start": 13,
                                                    "end": 22
                                                }
                                            ],
                                            "flags": 32,
                                            "start": 13,
                                            "end": 22
                                        },
                                        "flags": 32,
                                        "start": 12,
                                        "end": 24
                                    },
                                    "flags": 288,
                                    "start": 10,
                                    "end": 24
                                },
                                "flags": 32,
                                "start": 2,
                                "end": 24
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 2,
                        "end": 24
                    },
                    "flags": 32,
                    "start": 1,
                    "end": 26
                },
                "flags": 32,
                "start": 0,
                "end": 27
            },
            "flags": 16,
            "start": 0,
            "end": 27
        }
    ],
    "isModule": false,
    "source": "({ async a(){ await 0; } })",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 27
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

