# Kataw parser test case

## Input

`````js

({* type(){}});

({* interface(){}});

({* in(){}});

({* of(){}});
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
                "kind": 121,
                "expression": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 257,
                                "asyncKeyword": null,
                                "generatorToken": {
                                    "kind": 67143222,
                                    "flags": 64,
                                    "start": 3,
                                    "end": 4
                                },
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "type",
                                        "rawText": "type",
                                        "flags": 96,
                                        "start": 4,
                                        "end": 9
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 160,
                                        "start": 10,
                                        "end": 11
                                    },
                                    "type": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "start": 12,
                                            "end": 12
                                        },
                                        "flags": 32,
                                        "start": 11,
                                        "end": 13
                                    },
                                    "flags": 160,
                                    "start": 9,
                                    "end": 13
                                },
                                "flags": 32,
                                "start": 3,
                                "end": 13
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 3,
                        "end": 13
                    },
                    "flags": 32,
                    "start": 2,
                    "end": 14
                },
                "flags": 32,
                "start": 0,
                "end": 15
            },
            "flags": 16,
            "start": 0,
            "end": 16
        },
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
                                "asyncKeyword": null,
                                "generatorToken": {
                                    "kind": 67143222,
                                    "flags": 64,
                                    "start": 20,
                                    "end": 21
                                },
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "interface",
                                        "rawText": "interface",
                                        "flags": 96,
                                        "start": 21,
                                        "end": 31
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 160,
                                        "start": 32,
                                        "end": 33
                                    },
                                    "type": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "start": 34,
                                            "end": 34
                                        },
                                        "flags": 32,
                                        "start": 33,
                                        "end": 35
                                    },
                                    "flags": 160,
                                    "start": 31,
                                    "end": 35
                                },
                                "flags": 32,
                                "start": 20,
                                "end": 35
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 20,
                        "end": 35
                    },
                    "flags": 32,
                    "start": 19,
                    "end": 36
                },
                "flags": 32,
                "start": 16,
                "end": 37
            },
            "flags": 16,
            "start": 16,
            "end": 38
        },
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
                                "asyncKeyword": null,
                                "generatorToken": {
                                    "kind": 67143222,
                                    "flags": 64,
                                    "start": 42,
                                    "end": 43
                                },
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "in",
                                        "rawText": "in",
                                        "flags": 96,
                                        "start": 43,
                                        "end": 46
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 160,
                                        "start": 47,
                                        "end": 48
                                    },
                                    "type": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "start": 49,
                                            "end": 49
                                        },
                                        "flags": 32,
                                        "start": 48,
                                        "end": 50
                                    },
                                    "flags": 160,
                                    "start": 46,
                                    "end": 50
                                },
                                "flags": 32,
                                "start": 42,
                                "end": 50
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 42,
                        "end": 50
                    },
                    "flags": 32,
                    "start": 41,
                    "end": 51
                },
                "flags": 32,
                "start": 38,
                "end": 52
            },
            "flags": 16,
            "start": 38,
            "end": 53
        },
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
                                "asyncKeyword": null,
                                "generatorToken": {
                                    "kind": 67143222,
                                    "flags": 64,
                                    "start": 57,
                                    "end": 58
                                },
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "of",
                                        "rawText": "of",
                                        "flags": 96,
                                        "start": 58,
                                        "end": 61
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 160,
                                        "start": 62,
                                        "end": 63
                                    },
                                    "type": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "start": 64,
                                            "end": 64
                                        },
                                        "flags": 32,
                                        "start": 63,
                                        "end": 65
                                    },
                                    "flags": 160,
                                    "start": 61,
                                    "end": 65
                                },
                                "flags": 32,
                                "start": 57,
                                "end": 65
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 57,
                        "end": 65
                    },
                    "flags": 32,
                    "start": 56,
                    "end": 66
                },
                "flags": 32,
                "start": 53,
                "end": 67
            },
            "flags": 16,
            "start": 53,
            "end": 68
        }
    ],
    "isModule": false,
    "source": "\n({* type(){}});\n\n({* interface(){}});\n\n({* in(){}});\n\n({* of(){}});",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 68
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

