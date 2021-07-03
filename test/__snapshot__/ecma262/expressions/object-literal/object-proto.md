# Kataw parser test case

## Input

`````js
x = {__proto__(){}, __proto__: 2};
x = {__proto__(){}, __proto__(){}};
x = {async __proto__(){}, *__proto__(){}};
({ __proto__: x, __proto__: y }) => {};
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
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
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
                                        "text": "__proto__",
                                        "rawText": "__proto__",
                                        "flags": 96,
                                        "start": 5,
                                        "end": 14
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 36,
                                        "start": 15,
                                        "end": 16
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "start": 17,
                                            "end": 17
                                        },
                                        "flags": 32,
                                        "start": 16,
                                        "end": 18
                                    },
                                    "flags": 36,
                                    "start": 14,
                                    "end": 18
                                },
                                "flags": 32,
                                "start": 5,
                                "end": 18
                            },
                            {
                                "kind": 219,
                                "asteriskToken": null,
                                "left": {
                                    "kind": 134299649,
                                    "text": "__proto__",
                                    "rawText": "__proto__",
                                    "flags": 96,
                                    "start": 19,
                                    "end": 29
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 2,
                                    "rawText": "2",
                                    "flags": 96,
                                    "start": 30,
                                    "end": 32
                                },
                                "flags": 36,
                                "start": 19,
                                "end": 32
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 5,
                        "end": 32
                    },
                    "flags": 48,
                    "start": 3,
                    "end": 33
                },
                "flags": 32,
                "start": 0,
                "end": 33
            },
            "flags": 16,
            "start": 0,
            "end": 34
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
                    "start": 34,
                    "end": 36
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 36,
                    "end": 38
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
                                        "text": "__proto__",
                                        "rawText": "__proto__",
                                        "flags": 96,
                                        "start": 40,
                                        "end": 49
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 36,
                                        "start": 50,
                                        "end": 51
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "start": 52,
                                            "end": 52
                                        },
                                        "flags": 32,
                                        "start": 51,
                                        "end": 53
                                    },
                                    "flags": 36,
                                    "start": 49,
                                    "end": 53
                                },
                                "flags": 32,
                                "start": 40,
                                "end": 53
                            },
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
                                        "text": "__proto__",
                                        "rawText": "__proto__",
                                        "flags": 96,
                                        "start": 54,
                                        "end": 64
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 36,
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
                                            "start": 67,
                                            "end": 67
                                        },
                                        "flags": 32,
                                        "start": 66,
                                        "end": 68
                                    },
                                    "flags": 36,
                                    "start": 64,
                                    "end": 68
                                },
                                "flags": 32,
                                "start": 54,
                                "end": 68
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 40,
                        "end": 68
                    },
                    "flags": 48,
                    "start": 38,
                    "end": 69
                },
                "flags": 32,
                "start": 34,
                "end": 69
            },
            "flags": 16,
            "start": 34,
            "end": 70
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
                    "start": 70,
                    "end": 72
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 72,
                    "end": 74
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 351,
                                "asyncKeyword": {
                                    "kind": 82031,
                                    "flags": 352,
                                    "start": 76,
                                    "end": 81
                                },
                                "asteriskToken": null,
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "__proto__",
                                        "rawText": "__proto__",
                                        "flags": 96,
                                        "start": 81,
                                        "end": 91
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 288,
                                        "start": 92,
                                        "end": 93
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "start": 94,
                                            "end": 94
                                        },
                                        "flags": 32,
                                        "start": 93,
                                        "end": 95
                                    },
                                    "flags": 288,
                                    "start": 91,
                                    "end": 95
                                },
                                "flags": 32,
                                "start": 76,
                                "end": 95
                            },
                            {
                                "kind": 351,
                                "asyncKeyword": null,
                                "asteriskToken": {
                                    "kind": 67143222,
                                    "flags": 64,
                                    "start": 96,
                                    "end": 98
                                },
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "__proto__",
                                        "rawText": "__proto__",
                                        "flags": 96,
                                        "start": 98,
                                        "end": 107
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 164,
                                        "start": 108,
                                        "end": 109
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "start": 110,
                                            "end": 110
                                        },
                                        "flags": 32,
                                        "start": 109,
                                        "end": 111
                                    },
                                    "flags": 164,
                                    "start": 107,
                                    "end": 111
                                },
                                "flags": 32,
                                "start": 96,
                                "end": 111
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 76,
                        "end": 111
                    },
                    "flags": 48,
                    "start": 74,
                    "end": 112
                },
                "flags": 32,
                "start": 70,
                "end": 112
            },
            "flags": 16,
            "start": 70,
            "end": 113
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [
                                    {
                                        "kind": 329,
                                        "key": {
                                            "kind": 134299649,
                                            "text": "__proto__",
                                            "rawText": "__proto__",
                                            "flags": 96,
                                            "start": 116,
                                            "end": 126
                                        },
                                        "value": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 127,
                                            "end": 129
                                        },
                                        "initializer": null,
                                        "flags": 32,
                                        "start": 116,
                                        "end": 129
                                    },
                                    {
                                        "kind": 329,
                                        "key": {
                                            "kind": 134299649,
                                            "text": "__proto__",
                                            "rawText": "__proto__",
                                            "flags": 96,
                                            "start": 130,
                                            "end": 140
                                        },
                                        "value": {
                                            "kind": 134299649,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 96,
                                            "start": 141,
                                            "end": 143
                                        },
                                        "initializer": null,
                                        "flags": 32,
                                        "start": 130,
                                        "end": 143
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 116,
                                "end": 143
                            },
                            "flags": 52,
                            "start": 115,
                            "end": 145
                        }
                    ],
                    "trailingComma": false,
                    "flags": 35,
                    "start": 115,
                    "end": 146
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 146,
                    "end": 149
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 151,
                        "end": 151
                    },
                    "flags": 32,
                    "start": 149,
                    "end": 152
                },
                "flags": 35,
                "start": 113,
                "end": 152
            },
            "flags": 16,
            "start": 113,
            "end": 153
        }
    ],
    "isModule": false,
    "source": "x = {__proto__(){}, __proto__: 2};\nx = {__proto__(){}, __proto__(){}};\nx = {async __proto__(){}, *__proto__(){}};\n({ __proto__: x, __proto__: y }) => {};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 153
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ An object literal cannot have multiple properties with the name '__proto__' - start: 145, end: 146

```

