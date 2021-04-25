# Kataw parser test case

## Input

`````js
x = {__proto__(){}, __proto__: 2};
x = {__proto__(){}, __proto__(){}};
x = {async __proto__(){}, *__proto__(){}};
({ __proto__: x, __proto__: y }) => {};
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
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 768,
                    "start": 1,
                    "end": 3
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "__proto__",
                                    "rawText": "__proto__",
                                    "flags": 768,
                                    "start": 5,
                                    "end": 14
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "start": 15,
                                    "end": 16
                                },
                                "type": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "multiline": false,
                                        "flags": 256,
                                        "start": 17,
                                        "end": 17
                                    },
                                    "flags": 256,
                                    "start": 16,
                                    "end": 18
                                },
                                "flags": 256,
                                "start": 14,
                                "end": 18
                            },
                            {
                                "kind": 219,
                                "left": {
                                    "kind": 134299649,
                                    "text": 2,
                                    "rawText": "2",
                                    "flags": 768,
                                    "start": 30,
                                    "end": 32
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "__proto__",
                                    "rawText": "__proto__",
                                    "flags": 768,
                                    "start": 19,
                                    "end": 29
                                },
                                "flags": 256,
                                "start": 19,
                                "end": 32
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 5,
                        "end": 32
                    },
                    "flags": 256,
                    "start": 3,
                    "end": 33
                },
                "flags": 256,
                "start": 0,
                "end": 33
            },
            "flags": 128,
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
                    "flags": 768,
                    "start": 34,
                    "end": 36
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 768,
                    "start": 36,
                    "end": 38
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "__proto__",
                                    "rawText": "__proto__",
                                    "flags": 768,
                                    "start": 40,
                                    "end": 49
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "start": 50,
                                    "end": 51
                                },
                                "type": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "multiline": false,
                                        "flags": 256,
                                        "start": 52,
                                        "end": 52
                                    },
                                    "flags": 256,
                                    "start": 51,
                                    "end": 53
                                },
                                "flags": 256,
                                "start": 49,
                                "end": 53
                            },
                            {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "__proto__",
                                    "rawText": "__proto__",
                                    "flags": 768,
                                    "start": 54,
                                    "end": 64
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "start": 65,
                                    "end": 66
                                },
                                "type": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "multiline": false,
                                        "flags": 256,
                                        "start": 67,
                                        "end": 67
                                    },
                                    "flags": 256,
                                    "start": 66,
                                    "end": 68
                                },
                                "flags": 256,
                                "start": 64,
                                "end": 68
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 40,
                        "end": 68
                    },
                    "flags": 256,
                    "start": 38,
                    "end": 69
                },
                "flags": 256,
                "start": 34,
                "end": 69
            },
            "flags": 128,
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
                    "flags": 768,
                    "start": 70,
                    "end": 72
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 768,
                    "start": 72,
                    "end": 74
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "__proto__",
                                    "rawText": "__proto__",
                                    "flags": 768,
                                    "start": 81,
                                    "end": 91
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 2304,
                                    "start": 92,
                                    "end": 93
                                },
                                "type": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "multiline": false,
                                        "flags": 256,
                                        "start": 94,
                                        "end": 94
                                    },
                                    "flags": 256,
                                    "start": 93,
                                    "end": 95
                                },
                                "flags": 2304,
                                "start": 91,
                                "end": 95
                            },
                            {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "__proto__",
                                    "rawText": "__proto__",
                                    "flags": 768,
                                    "start": 98,
                                    "end": 107
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 1280,
                                    "start": 108,
                                    "end": 109
                                },
                                "type": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "multiline": false,
                                        "flags": 256,
                                        "start": 110,
                                        "end": 110
                                    },
                                    "flags": 256,
                                    "start": 109,
                                    "end": 111
                                },
                                "flags": 1280,
                                "start": 107,
                                "end": 111
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 76,
                        "end": 111
                    },
                    "flags": 256,
                    "start": 74,
                    "end": 112
                },
                "flags": 256,
                "start": 70,
                "end": 112
            },
            "flags": 128,
            "start": 70,
            "end": 113
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 768,
                    "start": 146,
                    "end": 149
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 219,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 768,
                                        "start": 127,
                                        "end": 129
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "__proto__",
                                        "rawText": "__proto__",
                                        "flags": 768,
                                        "start": 116,
                                        "end": 126
                                    },
                                    "flags": 256,
                                    "start": 116,
                                    "end": 129
                                },
                                {
                                    "kind": 219,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 768,
                                        "start": 141,
                                        "end": 143
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "__proto__",
                                        "rawText": "__proto__",
                                        "flags": 768,
                                        "start": 130,
                                        "end": 140
                                    },
                                    "flags": 256,
                                    "start": 130,
                                    "end": 143
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "start": 116,
                            "end": 143
                        },
                        "flags": 256,
                        "start": 115,
                        "end": 145
                    }
                ],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "multiline": false,
                        "flags": 256,
                        "start": 151,
                        "end": 151
                    },
                    "flags": 256,
                    "start": 149,
                    "end": 152
                },
                "flags": 256,
                "start": 113,
                "end": 152
            },
            "flags": 128,
            "start": 113,
            "end": 153
        }
    ],
    "isModule": false,
    "text": "x = {__proto__(){}, __proto__: 2};\nx = {__proto__(){}, __proto__(){}};\nx = {async __proto__(){}, *__proto__(){}};\n({ __proto__: x, __proto__: y }) => {};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 153
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2714}@ No errors
```

