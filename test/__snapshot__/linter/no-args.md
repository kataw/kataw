# Kataw parser test case

## Input

`````js
[1, 2, 3, 4, 5].map(function(n) {
    return !(n > 1) ? 1 : arguments.callee(n - 1) * n;
});

var sillyFunction = function(recursed) {
    if (!recursed) { return arguments.callee(true); }
    if (this !== global) {
        alert('This is: ' + this);
    } else {
        alert('This is the global');
    }
}
`````

## Options

### Parser Options

`````js
{ lint: { noArg: true } }
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
                    "kind": 129,
                    "member": {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [
                                {
                                    "kind": 201392130,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 1,
                                    "end": 2
                                },
                                {
                                    "kind": 201392130,
                                    "text": 2,
                                    "rawText": "2",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 3,
                                    "end": 5
                                },
                                {
                                    "kind": 201392130,
                                    "text": 3,
                                    "rawText": "3",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 6,
                                    "end": 8
                                },
                                {
                                    "kind": 201392130,
                                    "text": 4,
                                    "rawText": "4",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 9,
                                    "end": 11
                                },
                                {
                                    "kind": 201392130,
                                    "text": 5,
                                    "rawText": "5",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 12,
                                    "end": 14
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 1,
                            "end": 14
                        },
                        "flags": 32,
                        "transformFlags": 8,
                        "start": 0,
                        "end": 15
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "map",
                        "rawText": "map",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 16,
                        "end": 19
                    },
                    "flags": 32,
                    "transformFlags": 2,
                    "start": 0,
                    "end": 19
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 177,
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 20,
                                "end": 28
                            },
                            "asteriskToken": null,
                            "name": null,
                            "typeParameters": null,
                            "formalParameterList": {
                                "kind": 214,
                                "formalParameters": [
                                    {
                                        "kind": 134299649,
                                        "text": "n",
                                        "rawText": "n",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 29,
                                        "end": 30
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 29,
                                "end": 30
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [
                                        {
                                            "kind": 161,
                                            "returnKeyword": {
                                                "kind": 37757022,
                                                "flags": 81,
                                                "transformFlags": 0,
                                                "start": 33,
                                                "end": 44
                                            },
                                            "expression": {
                                                "kind": 197,
                                                "shortCircuit": {
                                                    "kind": 126,
                                                    "operandToken": {
                                                        "kind": 65584,
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 44,
                                                        "end": 46
                                                    },
                                                    "operand": {
                                                        "kind": 121,
                                                        "expression": {
                                                            "kind": 198,
                                                            "left": {
                                                                "kind": 134299649,
                                                                "text": "n",
                                                                "rawText": "n",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 47,
                                                                "end": 48
                                                            },
                                                            "operatorToken": {
                                                                "kind": 34883,
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 48,
                                                                "end": 50
                                                            },
                                                            "right": {
                                                                "kind": 201392130,
                                                                "text": 1,
                                                                "rawText": "1",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 50,
                                                                "end": 52
                                                            },
                                                            "flags": 96,
                                                            "transformFlags": 5120,
                                                            "start": 46,
                                                            "end": 52
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 46,
                                                        "end": 53
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 16384,
                                                    "start": 44,
                                                    "end": 53
                                                },
                                                "questionToken": {
                                                    "kind": 134217750,
                                                    "flags": 64,
                                                    "transformFlags": 0,
                                                    "start": 53,
                                                    "end": 55
                                                },
                                                "consequent": {
                                                    "kind": 201392130,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 55,
                                                    "end": 57
                                                },
                                                "colonToken": {
                                                    "kind": 21,
                                                    "flags": 64,
                                                    "transformFlags": 0,
                                                    "start": 57,
                                                    "end": 59
                                                },
                                                "alternate": {
                                                    "kind": 198,
                                                    "left": {
                                                        "kind": 131,
                                                        "expression": {
                                                            "kind": 129,
                                                            "member": {
                                                                "kind": 134299649,
                                                                "text": "arguments",
                                                                "rawText": "arguments",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 59,
                                                                "end": 69
                                                            },
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "callee",
                                                                "rawText": "callee",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 70,
                                                                "end": 76
                                                            },
                                                            "flags": 96,
                                                            "transformFlags": 2,
                                                            "start": 59,
                                                            "end": 76
                                                        },
                                                        "argumentList": {
                                                            "kind": 256,
                                                            "elements": [
                                                                {
                                                                    "kind": 198,
                                                                    "left": {
                                                                        "kind": 134299649,
                                                                        "text": "n",
                                                                        "rawText": "n",
                                                                        "flags": 96,
                                                                        "transformFlags": 0,
                                                                        "start": 77,
                                                                        "end": 78
                                                                    },
                                                                    "operatorToken": {
                                                                        "kind": 134318643,
                                                                        "flags": 96,
                                                                        "transformFlags": 0,
                                                                        "start": 78,
                                                                        "end": 80
                                                                    },
                                                                    "right": {
                                                                        "kind": 201392130,
                                                                        "text": 1,
                                                                        "rawText": "1",
                                                                        "flags": 96,
                                                                        "transformFlags": 0,
                                                                        "start": 80,
                                                                        "end": 82
                                                                    },
                                                                    "flags": 96,
                                                                    "transformFlags": 5120,
                                                                    "start": 77,
                                                                    "end": 82
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 32,
                                                            "transformFlags": 0,
                                                            "start": 77,
                                                            "end": 82
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 1,
                                                        "start": 59,
                                                        "end": 83
                                                    },
                                                    "operatorToken": {
                                                        "kind": 201360950,
                                                        "flags": 96,
                                                        "transformFlags": 32,
                                                        "start": 83,
                                                        "end": 85
                                                    },
                                                    "right": {
                                                        "kind": 134299649,
                                                        "text": "n",
                                                        "rawText": "n",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 85,
                                                        "end": 87
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 5120,
                                                    "start": 59,
                                                    "end": 87
                                                },
                                                "flags": 32,
                                                "transformFlags": 4096,
                                                "start": 44,
                                                "end": 87
                                            },
                                            "flags": 81,
                                            "transformFlags": 256,
                                            "start": 33,
                                            "end": 88
                                        }
                                    ],
                                    "flags": 33,
                                    "transformFlags": 0,
                                    "start": 33,
                                    "end": 88
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 31,
                                "end": 90
                            },
                            "returnType": null,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 20,
                            "end": 90
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 20,
                    "end": 90
                },
                "flags": 32,
                "transformFlags": 1,
                "start": 0,
                "end": 91
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 92
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "transformFlags": 0,
                "start": 92,
                "end": 97
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "sillyFunction",
                            "rawText": "sillyFunction",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 97,
                            "end": 111
                        },
                        "type": null,
                        "initializer": {
                            "kind": 177,
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 113,
                                "end": 122
                            },
                            "asteriskToken": null,
                            "name": null,
                            "typeParameters": null,
                            "formalParameterList": {
                                "kind": 214,
                                "formalParameters": [
                                    {
                                        "kind": 134299649,
                                        "text": "recursed",
                                        "rawText": "recursed",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 123,
                                        "end": 131
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 123,
                                "end": 131
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [
                                        {
                                            "kind": 164,
                                            "ifKeyword": {
                                                "kind": 37757019,
                                                "flags": 81,
                                                "transformFlags": 0,
                                                "start": 134,
                                                "end": 141
                                            },
                                            "expression": {
                                                "kind": 126,
                                                "operandToken": {
                                                    "kind": 65584,
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 143,
                                                    "end": 144
                                                },
                                                "operand": {
                                                    "kind": 134299649,
                                                    "text": "recursed",
                                                    "rawText": "recursed",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 144,
                                                    "end": 152
                                                },
                                                "flags": 32,
                                                "transformFlags": 16384,
                                                "start": 143,
                                                "end": 152
                                            },
                                            "consequent": {
                                                "kind": 124,
                                                "block": {
                                                    "kind": 249,
                                                    "statements": [
                                                        {
                                                            "kind": 161,
                                                            "returnKeyword": {
                                                                "kind": 37757022,
                                                                "flags": 80,
                                                                "transformFlags": 0,
                                                                "start": 155,
                                                                "end": 162
                                                            },
                                                            "expression": {
                                                                "kind": 131,
                                                                "expression": {
                                                                    "kind": 129,
                                                                    "member": {
                                                                        "kind": 134299649,
                                                                        "text": "arguments",
                                                                        "rawText": "arguments",
                                                                        "flags": 96,
                                                                        "transformFlags": 0,
                                                                        "start": 162,
                                                                        "end": 172
                                                                    },
                                                                    "expression": {
                                                                        "kind": 134299649,
                                                                        "text": "callee",
                                                                        "rawText": "callee",
                                                                        "flags": 96,
                                                                        "transformFlags": 0,
                                                                        "start": 173,
                                                                        "end": 179
                                                                    },
                                                                    "flags": 96,
                                                                    "transformFlags": 2,
                                                                    "start": 162,
                                                                    "end": 179
                                                                },
                                                                "argumentList": {
                                                                    "kind": 256,
                                                                    "elements": [
                                                                        {
                                                                            "kind": 24752947,
                                                                            "flags": 96,
                                                                            "transformFlags": 0,
                                                                            "start": 180,
                                                                            "end": 184
                                                                        }
                                                                    ],
                                                                    "trailingComma": false,
                                                                    "flags": 32,
                                                                    "transformFlags": 0,
                                                                    "start": 180,
                                                                    "end": 184
                                                                },
                                                                "flags": 32,
                                                                "transformFlags": 1,
                                                                "start": 162,
                                                                "end": 185
                                                            },
                                                            "flags": 80,
                                                            "transformFlags": 256,
                                                            "start": 155,
                                                            "end": 186
                                                        }
                                                    ],
                                                    "flags": 16,
                                                    "transformFlags": 0,
                                                    "start": 155,
                                                    "end": 186
                                                },
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 153,
                                                "end": 188
                                            },
                                            "elseKeyword": null,
                                            "alternate": null,
                                            "flags": 81,
                                            "transformFlags": 0,
                                            "start": 134,
                                            "end": 188
                                        },
                                        {
                                            "kind": 164,
                                            "ifKeyword": {
                                                "kind": 37757019,
                                                "flags": 81,
                                                "transformFlags": 0,
                                                "start": 188,
                                                "end": 195
                                            },
                                            "expression": {
                                                "kind": 198,
                                                "left": {
                                                    "kind": 4276321,
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 197,
                                                    "end": 201
                                                },
                                                "operatorToken": {
                                                    "kind": 34621,
                                                    "flags": 96,
                                                    "transformFlags": 16,
                                                    "start": 201,
                                                    "end": 205
                                                },
                                                "right": {
                                                    "kind": 134299649,
                                                    "text": "global",
                                                    "rawText": "global",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 205,
                                                    "end": 212
                                                },
                                                "flags": 96,
                                                "transformFlags": 5120,
                                                "start": 197,
                                                "end": 212
                                            },
                                            "consequent": {
                                                "kind": 124,
                                                "block": {
                                                    "kind": 249,
                                                    "statements": [
                                                        {
                                                            "kind": 120,
                                                            "expression": {
                                                                "kind": 131,
                                                                "expression": {
                                                                    "kind": 134299649,
                                                                    "text": "alert",
                                                                    "rawText": "alert",
                                                                    "flags": 97,
                                                                    "transformFlags": 0,
                                                                    "start": 215,
                                                                    "end": 229
                                                                },
                                                                "argumentList": {
                                                                    "kind": 256,
                                                                    "elements": [
                                                                        {
                                                                            "kind": 198,
                                                                            "left": {
                                                                                "kind": 201392131,
                                                                                "text": "This is: ",
                                                                                "rawText": "'This is: '",
                                                                                "flags": 4194400,
                                                                                "transformFlags": 0,
                                                                                "start": 230,
                                                                                "end": 241
                                                                            },
                                                                            "operatorToken": {
                                                                                "kind": 99634,
                                                                                "flags": 96,
                                                                                "transformFlags": 0,
                                                                                "start": 241,
                                                                                "end": 243
                                                                            },
                                                                            "right": {
                                                                                "kind": 4276321,
                                                                                "flags": 96,
                                                                                "transformFlags": 0,
                                                                                "start": 243,
                                                                                "end": 248
                                                                            },
                                                                            "flags": 4194400,
                                                                            "transformFlags": 5120,
                                                                            "start": 230,
                                                                            "end": 248
                                                                        }
                                                                    ],
                                                                    "trailingComma": false,
                                                                    "flags": 32,
                                                                    "transformFlags": 0,
                                                                    "start": 230,
                                                                    "end": 248
                                                                },
                                                                "flags": 32,
                                                                "transformFlags": 1,
                                                                "start": 215,
                                                                "end": 249
                                                            },
                                                            "flags": 16,
                                                            "transformFlags": 4096,
                                                            "start": 215,
                                                            "end": 250
                                                        }
                                                    ],
                                                    "flags": 17,
                                                    "transformFlags": 0,
                                                    "start": 215,
                                                    "end": 250
                                                },
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 213,
                                                "end": 256
                                            },
                                            "elseKeyword": {
                                                "kind": 4194389,
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 256,
                                                "end": 261
                                            },
                                            "alternate": {
                                                "kind": 124,
                                                "block": {
                                                    "kind": 249,
                                                    "statements": [
                                                        {
                                                            "kind": 120,
                                                            "expression": {
                                                                "kind": 131,
                                                                "expression": {
                                                                    "kind": 134299649,
                                                                    "text": "alert",
                                                                    "rawText": "alert",
                                                                    "flags": 97,
                                                                    "transformFlags": 0,
                                                                    "start": 263,
                                                                    "end": 277
                                                                },
                                                                "argumentList": {
                                                                    "kind": 256,
                                                                    "elements": [
                                                                        {
                                                                            "kind": 201392131,
                                                                            "text": "This is the global",
                                                                            "rawText": "'This is the global'",
                                                                            "flags": 4194400,
                                                                            "transformFlags": 0,
                                                                            "start": 278,
                                                                            "end": 298
                                                                        }
                                                                    ],
                                                                    "trailingComma": false,
                                                                    "flags": 32,
                                                                    "transformFlags": 0,
                                                                    "start": 278,
                                                                    "end": 298
                                                                },
                                                                "flags": 32,
                                                                "transformFlags": 1,
                                                                "start": 263,
                                                                "end": 299
                                                            },
                                                            "flags": 16,
                                                            "transformFlags": 4096,
                                                            "start": 263,
                                                            "end": 300
                                                        }
                                                    ],
                                                    "flags": 17,
                                                    "transformFlags": 0,
                                                    "start": 263,
                                                    "end": 300
                                                },
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 261,
                                                "end": 306
                                            },
                                            "flags": 81,
                                            "transformFlags": 0,
                                            "start": 188,
                                            "end": 306
                                        }
                                    ],
                                    "flags": 33,
                                    "transformFlags": 0,
                                    "start": 134,
                                    "end": 306
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 132,
                                "end": 308
                            },
                            "returnType": null,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 113,
                            "end": 308
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 97,
                        "end": 308
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 97,
                "end": 308
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 92,
            "end": 308
        }
    ],
    "isModule": false,
    "source": "[1, 2, 3, 4, 5].map(function(n) {\n    return !(n > 1) ? 1 : arguments.callee(n - 1) * n;\n});\n\nvar sillyFunction = function(recursed) {\n    if (!recursed) { return arguments.callee(true); }\n    if (this !== global) {\n        alert('This is: ' + this);\n    } else {\n        alert('This is the global');\n    }\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 308
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Access to arguments.callee is forbidden - start: 70, end: 76
✖ Access to arguments.callee is forbidden - start: 173, end: 179

```

