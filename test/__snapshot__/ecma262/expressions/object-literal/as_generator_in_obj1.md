# Kataw parser test case

## Input

`````js
({* set(){}});

({* get(){}});

({* private(){}});

({* readonly(){}});

({* async(){}});

({* function(){}});

({* declare(){}});

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
                                "asyncKeyword": null,
                                "asteriskToken": {
                                    "kind": 67143222,
                                    "flags": 64,
                                    "transformFlags": 32,
                                    "start": 2,
                                    "end": 3
                                },
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
                                        "start": 3,
                                        "end": 7
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 160,
                                        "transformFlags": 0,
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
                                            "transformFlags": 0,
                                            "start": 10,
                                            "end": 10
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 9,
                                        "end": 11
                                    },
                                    "flags": 160,
                                    "transformFlags": 0,
                                    "start": 7,
                                    "end": 11
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 2,
                                "end": 11
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 2,
                        "end": 11
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 1,
                    "end": 12
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 34,
                "end": 13
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 14
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
                                "kind": 351,
                                "asyncKeyword": null,
                                "asteriskToken": {
                                    "kind": 67143222,
                                    "flags": 64,
                                    "transformFlags": 32,
                                    "start": 18,
                                    "end": 19
                                },
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
                                        "start": 19,
                                        "end": 23
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 160,
                                        "transformFlags": 0,
                                        "start": 24,
                                        "end": 25
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
                                            "start": 26,
                                            "end": 26
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 25,
                                        "end": 27
                                    },
                                    "flags": 160,
                                    "transformFlags": 0,
                                    "start": 23,
                                    "end": 27
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 18,
                                "end": 27
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 18,
                        "end": 27
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 17,
                    "end": 28
                },
                "flags": 14,
                "transformFlags": 0,
                "start": 35,
                "end": 29
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 14,
            "end": 30
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
                                "kind": 351,
                                "asyncKeyword": null,
                                "asteriskToken": {
                                    "kind": 67143222,
                                    "flags": 64,
                                    "transformFlags": 32,
                                    "start": 34,
                                    "end": 35
                                },
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "private",
                                        "rawText": "private",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 35,
                                        "end": 43
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 160,
                                        "transformFlags": 0,
                                        "start": 44,
                                        "end": 45
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
                                            "start": 46,
                                            "end": 46
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 45,
                                        "end": 47
                                    },
                                    "flags": 160,
                                    "transformFlags": 0,
                                    "start": 43,
                                    "end": 47
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 34,
                                "end": 47
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 34,
                        "end": 47
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 33,
                    "end": 48
                },
                "flags": 30,
                "transformFlags": 0,
                "start": 35,
                "end": 49
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 30,
            "end": 50
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
                                "kind": 351,
                                "asyncKeyword": null,
                                "asteriskToken": {
                                    "kind": 67143222,
                                    "flags": 64,
                                    "transformFlags": 32,
                                    "start": 54,
                                    "end": 55
                                },
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "readonly",
                                        "rawText": "readonly",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 55,
                                        "end": 64
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 160,
                                        "transformFlags": 0,
                                        "start": 65,
                                        "end": 66
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
                                            "start": 67,
                                            "end": 67
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 66,
                                        "end": 68
                                    },
                                    "flags": 160,
                                    "transformFlags": 0,
                                    "start": 64,
                                    "end": 68
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 54,
                                "end": 68
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 54,
                        "end": 68
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 53,
                    "end": 69
                },
                "flags": 50,
                "transformFlags": 0,
                "start": 35,
                "end": 70
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 50,
            "end": 71
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
                                "kind": 351,
                                "asyncKeyword": null,
                                "asteriskToken": {
                                    "kind": 67143222,
                                    "flags": 64,
                                    "transformFlags": 32,
                                    "start": 75,
                                    "end": 76
                                },
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "async",
                                        "rawText": "async",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 76,
                                        "end": 82
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 160,
                                        "transformFlags": 0,
                                        "start": 83,
                                        "end": 84
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
                                            "start": 85,
                                            "end": 85
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 84,
                                        "end": 86
                                    },
                                    "flags": 160,
                                    "transformFlags": 0,
                                    "start": 82,
                                    "end": 86
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 75,
                                "end": 86
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 75,
                        "end": 86
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 74,
                    "end": 87
                },
                "flags": 71,
                "transformFlags": 0,
                "start": 35,
                "end": 88
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 71,
            "end": 89
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
                                "kind": 351,
                                "asyncKeyword": null,
                                "asteriskToken": {
                                    "kind": 67143222,
                                    "flags": 64,
                                    "transformFlags": 32,
                                    "start": 93,
                                    "end": 94
                                },
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
                                        "start": 94,
                                        "end": 103
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 160,
                                        "transformFlags": 0,
                                        "start": 104,
                                        "end": 105
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
                                            "start": 106,
                                            "end": 106
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 105,
                                        "end": 107
                                    },
                                    "flags": 160,
                                    "transformFlags": 0,
                                    "start": 103,
                                    "end": 107
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 93,
                                "end": 107
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 93,
                        "end": 107
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 92,
                    "end": 108
                },
                "flags": 89,
                "transformFlags": 0,
                "start": 35,
                "end": 109
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 89,
            "end": 110
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
                                "kind": 351,
                                "asyncKeyword": null,
                                "asteriskToken": {
                                    "kind": 67143222,
                                    "flags": 64,
                                    "transformFlags": 32,
                                    "start": 114,
                                    "end": 115
                                },
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
                                        "start": 115,
                                        "end": 123
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 160,
                                        "transformFlags": 0,
                                        "start": 124,
                                        "end": 125
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
                                            "start": 126,
                                            "end": 126
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 125,
                                        "end": 127
                                    },
                                    "flags": 160,
                                    "transformFlags": 0,
                                    "start": 123,
                                    "end": 127
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 114,
                                "end": 127
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 114,
                        "end": 127
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 113,
                    "end": 128
                },
                "flags": 110,
                "transformFlags": 0,
                "start": 35,
                "end": 129
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 110,
            "end": 130
        }
    ],
    "isModule": false,
    "source": "({* set(){}});\n\n({* get(){}});\n\n({* private(){}});\n\n({* readonly(){}});\n\n({* async(){}});\n\n({* function(){}});\n\n({* declare(){}});\n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 131
}
```

### Printed

```javascript
({ *set() {} });
({ *get() {} });

({ *private() {} });

({ *readonly() {} });

({ *async() {} });

({ *function() {} });

({ *declare() {} });

```

### Diagnostics

```javascript
✔ No errors
```

