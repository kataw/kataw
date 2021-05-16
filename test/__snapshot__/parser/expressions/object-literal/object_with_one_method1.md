# Kataw parser test case

## Input

`````js
wrap({0(){}});

wrap({1(){}});

wrap({0x234235(){}});

wrap({0b01010(){}});

wrap({0o4432(){}});

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
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "wrap",
                    "rawText": "wrap",
                    "flags": 96,
                    "start": 0,
                    "end": 4
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 257,
                                        "asyncKeyword": null,
                                        "generatorToken": null,
                                        "getKeyword": null,
                                        "setKeyword": null,
                                        "method": {
                                            "kind": 209,
                                            "name": {
                                                "kind": 201392130,
                                                "text": 0,
                                                "rawText": "0",
                                                "flags": 96,
                                                "start": 6,
                                                "end": 7
                                            },
                                            "typeParameters": null,
                                            "formalParameters": {
                                                "kind": 214,
                                                "formalParameterList": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 8,
                                                "end": 9
                                            },
                                            "type": null,
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
                                            "flags": 32,
                                            "start": 7,
                                            "end": 11
                                        },
                                        "flags": 32,
                                        "start": 6,
                                        "end": 11
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 6,
                                "end": 11
                            },
                            "flags": 48,
                            "start": 5,
                            "end": 12
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 5,
                    "end": 12
                },
                "flags": 268435488,
                "start": 0,
                "end": 13
            },
            "flags": 16,
            "start": 0,
            "end": 14
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "wrap",
                    "rawText": "wrap",
                    "flags": 96,
                    "start": 14,
                    "end": 20
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 257,
                                        "asyncKeyword": null,
                                        "generatorToken": null,
                                        "getKeyword": null,
                                        "setKeyword": null,
                                        "method": {
                                            "kind": 209,
                                            "name": {
                                                "kind": 201392130,
                                                "text": 1,
                                                "rawText": "1",
                                                "flags": 96,
                                                "start": 22,
                                                "end": 23
                                            },
                                            "typeParameters": null,
                                            "formalParameters": {
                                                "kind": 214,
                                                "formalParameterList": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 24,
                                                "end": 25
                                            },
                                            "type": null,
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [],
                                                    "flags": 32,
                                                    "start": 26,
                                                    "end": 26
                                                },
                                                "flags": 32,
                                                "start": 25,
                                                "end": 27
                                            },
                                            "flags": 32,
                                            "start": 23,
                                            "end": 27
                                        },
                                        "flags": 32,
                                        "start": 22,
                                        "end": 27
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 22,
                                "end": 27
                            },
                            "flags": 48,
                            "start": 21,
                            "end": 28
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 21,
                    "end": 28
                },
                "flags": 268435488,
                "start": 14,
                "end": 29
            },
            "flags": 16,
            "start": 14,
            "end": 30
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "wrap",
                    "rawText": "wrap",
                    "flags": 96,
                    "start": 30,
                    "end": 36
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 257,
                                        "asyncKeyword": null,
                                        "generatorToken": null,
                                        "getKeyword": null,
                                        "setKeyword": null,
                                        "method": {
                                            "kind": 209,
                                            "name": {
                                                "kind": 201392130,
                                                "text": 2310709,
                                                "rawText": "0x234235",
                                                "flags": 1048672,
                                                "start": 38,
                                                "end": 46
                                            },
                                            "typeParameters": null,
                                            "formalParameters": {
                                                "kind": 214,
                                                "formalParameterList": [],
                                                "trailingComma": false,
                                                "flags": 32,
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
                                            "flags": 32,
                                            "start": 46,
                                            "end": 50
                                        },
                                        "flags": 32,
                                        "start": 38,
                                        "end": 50
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 1048592,
                                "start": 38,
                                "end": 50
                            },
                            "flags": 1048624,
                            "start": 37,
                            "end": 51
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 37,
                    "end": 51
                },
                "flags": 268435488,
                "start": 30,
                "end": 52
            },
            "flags": 16,
            "start": 30,
            "end": 53
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "wrap",
                    "rawText": "wrap",
                    "flags": 96,
                    "start": 53,
                    "end": 59
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 257,
                                        "asyncKeyword": null,
                                        "generatorToken": null,
                                        "getKeyword": null,
                                        "setKeyword": null,
                                        "method": {
                                            "kind": 209,
                                            "name": {
                                                "kind": 201392130,
                                                "text": 10,
                                                "rawText": "0b01010",
                                                "flags": 524384,
                                                "start": 61,
                                                "end": 68
                                            },
                                            "typeParameters": null,
                                            "formalParameters": {
                                                "kind": 214,
                                                "formalParameterList": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 69,
                                                "end": 70
                                            },
                                            "type": null,
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [],
                                                    "flags": 32,
                                                    "start": 71,
                                                    "end": 71
                                                },
                                                "flags": 32,
                                                "start": 70,
                                                "end": 72
                                            },
                                            "flags": 32,
                                            "start": 68,
                                            "end": 72
                                        },
                                        "flags": 32,
                                        "start": 61,
                                        "end": 72
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 524304,
                                "start": 61,
                                "end": 72
                            },
                            "flags": 524336,
                            "start": 60,
                            "end": 73
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 60,
                    "end": 73
                },
                "flags": 268435488,
                "start": 53,
                "end": 74
            },
            "flags": 16,
            "start": 53,
            "end": 75
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "wrap",
                    "rawText": "wrap",
                    "flags": 96,
                    "start": 75,
                    "end": 81
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 257,
                                        "asyncKeyword": null,
                                        "generatorToken": null,
                                        "getKeyword": null,
                                        "setKeyword": null,
                                        "method": {
                                            "kind": 209,
                                            "name": {
                                                "kind": 201392130,
                                                "text": 2330,
                                                "rawText": "0o4432",
                                                "flags": 262240,
                                                "start": 83,
                                                "end": 89
                                            },
                                            "typeParameters": null,
                                            "formalParameters": {
                                                "kind": 214,
                                                "formalParameterList": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 90,
                                                "end": 91
                                            },
                                            "type": null,
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [],
                                                    "flags": 32,
                                                    "start": 92,
                                                    "end": 92
                                                },
                                                "flags": 32,
                                                "start": 91,
                                                "end": 93
                                            },
                                            "flags": 32,
                                            "start": 89,
                                            "end": 93
                                        },
                                        "flags": 32,
                                        "start": 83,
                                        "end": 93
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 262160,
                                "start": 83,
                                "end": 93
                            },
                            "flags": 262192,
                            "start": 82,
                            "end": 94
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 82,
                    "end": 94
                },
                "flags": 268435488,
                "start": 75,
                "end": 95
            },
            "flags": 16,
            "start": 75,
            "end": 96
        }
    ],
    "isModule": false,
    "source": "wrap({0(){}});\n\nwrap({1(){}});\n\nwrap({0x234235(){}});\n\nwrap({0b01010(){}});\n\nwrap({0o4432(){}});\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 97
}
```

### Printed

```javascript

wrap({ 0() {} });
wrap({ 1() {} });
wrap({ 0x234235() {} });
wrap({ 0b01010() {} });
wrap({ 0o4432() {} });
```

### Diagnostics

```javascript
✔ No errors
```

