# Kataw parser test case

## Input

`````js
x = { method() { } }

x = { get() { } }

x = { set() { } }

x = { method(test) { } }

({ function(){}});

x = ({ declare(){}});

x = { method(test) { } }
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
                    "text": "x",
                    "rawText": "x",
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
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 351,
                                "asyncKeyword": null,
                                "asteriskToken": null,
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "method",
                                        "rawText": "method",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 5,
                                        "end": 12
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 13,
                                        "end": 14
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 16,
                                            "end": 16
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 14,
                                        "end": 18
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 12,
                                    "end": 18
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 5,
                                "end": 18
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 5,
                        "end": 18
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 3,
                    "end": 20
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 0,
                "end": 20
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 20
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 20,
                    "end": 23
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 23,
                    "end": 25
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 351,
                                "asyncKeyword": null,
                                "asteriskToken": null,
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "get",
                                        "rawText": "get",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 27,
                                        "end": 31
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 32,
                                        "end": 33
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 35,
                                            "end": 35
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 33,
                                        "end": 37
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 31,
                                    "end": 37
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 27,
                                "end": 37
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 27,
                        "end": 37
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 25,
                    "end": 39
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 20,
                "end": 39
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 20,
            "end": 39
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 39,
                    "end": 42
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 42,
                    "end": 44
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 351,
                                "asyncKeyword": null,
                                "asteriskToken": null,
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "set",
                                        "rawText": "set",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 46,
                                        "end": 50
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 51,
                                        "end": 52
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 54,
                                            "end": 54
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 52,
                                        "end": 56
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 50,
                                    "end": 56
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 46,
                                "end": 56
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 46,
                        "end": 56
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 44,
                    "end": 58
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 39,
                "end": 58
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 39,
            "end": 58
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 58,
                    "end": 61
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 61,
                    "end": 63
                },
                "right": {
                    "kind": 131,
                    "expression": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 351,
                                    "asyncKeyword": null,
                                    "asteriskToken": null,
                                    "getKeyword": null,
                                    "setKeyword": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "method",
                                            "rawText": "method",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 65,
                                            "end": 72
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "test",
                                                    "rawText": "test",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 73,
                                                    "end": 77
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 73,
                                            "end": 78
                                        },
                                        "returnType": null,
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
                                            "end": 82
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 72,
                                        "end": 82
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 65,
                                    "end": 82
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 65,
                            "end": 82
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 63,
                        "end": 84
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
                                            "kind": 351,
                                            "asyncKeyword": null,
                                            "asteriskToken": null,
                                            "getKeyword": null,
                                            "setKeyword": null,
                                            "method": {
                                                "kind": 209,
                                                "name": {
                                                    "kind": 134299649,
                                                    "text": "function",
                                                    "rawText": "function",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 88,
                                                    "end": 97
                                                },
                                                "typeParameters": null,
                                                "formalParameterList": {
                                                    "kind": 214,
                                                    "formalParameters": [],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 98,
                                                    "end": 99
                                                },
                                                "returnType": null,
                                                "contents": {
                                                    "kind": 216,
                                                    "functionStatementList": {
                                                        "kind": 217,
                                                        "directives": [],
                                                        "statements": [],
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 100,
                                                        "end": 100
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 99,
                                                    "end": 101
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 97,
                                                "end": 101
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 88,
                                            "end": 101
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 88,
                                    "end": 101
                                },
                                "flags": 48,
                                "transformFlags": 8,
                                "start": 87,
                                "end": 102
                            }
                        ],
                        "trailingComma": false,
                        "flags": 33,
                        "transformFlags": 0,
                        "start": 87,
                        "end": 102
                    },
                    "flags": 268435489,
                    "transformFlags": 1,
                    "start": 63,
                    "end": 103
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 58,
                "end": 103
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 58,
            "end": 104
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 104,
                    "end": 107
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 107,
                    "end": 109
                },
                "right": {
                    "kind": 121,
                    "expression": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 351,
                                    "asyncKeyword": null,
                                    "asteriskToken": null,
                                    "getKeyword": null,
                                    "setKeyword": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "declare",
                                            "rawText": "declare",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 112,
                                            "end": 120
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 121,
                                            "end": 122
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 123,
                                                "end": 123
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 122,
                                            "end": 124
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 120,
                                        "end": 124
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 112,
                                    "end": 124
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 112,
                            "end": 124
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 111,
                        "end": 125
                    },
                    "flags": 109,
                    "transformFlags": 0,
                    "start": 34,
                    "end": 126
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 104,
                "end": 126
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 104,
            "end": 127
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 127,
                    "end": 130
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 130,
                    "end": 132
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 351,
                                "asyncKeyword": null,
                                "asteriskToken": null,
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "method",
                                        "rawText": "method",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 134,
                                        "end": 141
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [
                                            {
                                                "kind": 134299649,
                                                "text": "test",
                                                "rawText": "test",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 142,
                                                "end": 146
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 142,
                                        "end": 147
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 149,
                                            "end": 149
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 147,
                                        "end": 151
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 141,
                                    "end": 151
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 134,
                                "end": 151
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 134,
                        "end": 151
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 132,
                    "end": 153
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 127,
                "end": 153
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 127,
            "end": 153
        }
    ],
    "isModule": false,
    "source": "x = { method() { } }\n\nx = { get() { } }\n\nx = { set() { } }\n\nx = { method(test) { } }\n\n({ function(){}});\n\nx = ({ declare(){}});\n\nx = { method(test) { } }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 153
}
```

### Printed

```javascript
x = { method() {} };
x = { get() {} };

x = { set() {} };

x = { method(test) {} }({ function() {} });

x = ({ declare() {} });

x = { method(test) {} };

```

### Diagnostics

```javascript
✔ No errors
```

