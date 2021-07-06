# Kataw parser test case

## Input

`````js
(function() {}).length
typeof (function() {});
(function() {})()``;
(function() {})``;
new (function() {});
(function() {});
a = function f() {} || b;
(function() {} && a);
a + function() {};
new function() {};
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
                "kind": 129,
                "member": {
                    "kind": 121,
                    "expression": {
                        "kind": 177,
                        "asyncKeyword": null,
                        "functionKeyword": {
                            "kind": 37822554,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 1,
                            "end": 9
                        },
                        "asteriskToken": null,
                        "name": null,
                        "typeParameters": null,
                        "formalParameterList": {
                            "kind": 214,
                            "formalParameters": [],
                            "trailingComma": false,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 10,
                            "end": 10
                        },
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [],
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 13,
                                "end": 13
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 11,
                            "end": 14
                        },
                        "returnType": null,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 14
                    },
                    "flags": 0,
                    "transformFlags": 0,
                    "start": 32,
                    "end": 15
                },
                "expression": {
                    "kind": 134299649,
                    "text": "length",
                    "rawText": "length",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 16,
                    "end": 22
                },
                "flags": 32,
                "transformFlags": 2,
                "start": 0,
                "end": 22
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 22
        },
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 138477613,
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 22,
                    "end": 29
                },
                "operand": {
                    "kind": 121,
                    "expression": {
                        "kind": 177,
                        "asyncKeyword": null,
                        "functionKeyword": {
                            "kind": 37822554,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 31,
                            "end": 39
                        },
                        "asteriskToken": null,
                        "name": null,
                        "typeParameters": null,
                        "formalParameterList": {
                            "kind": 214,
                            "formalParameters": [],
                            "trailingComma": false,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 40,
                            "end": 40
                        },
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [],
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 43,
                                "end": 43
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 41,
                            "end": 44
                        },
                        "returnType": null,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 31,
                        "end": 44
                    },
                    "flags": 29,
                    "transformFlags": 0,
                    "start": 32,
                    "end": 45
                },
                "flags": 32,
                "transformFlags": 1024,
                "start": 22,
                "end": 45
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 22,
            "end": 46
        },
        {
            "kind": 120,
            "expression": {
                "kind": 226,
                "member": {
                    "kind": 131,
                    "expression": {
                        "kind": 121,
                        "expression": {
                            "kind": 177,
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 48,
                                "end": 56
                            },
                            "asteriskToken": null,
                            "name": null,
                            "typeParameters": null,
                            "formalParameterList": {
                                "kind": 214,
                                "formalParameters": [],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 57,
                                "end": 57
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 60,
                                    "end": 60
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 58,
                                "end": 61
                            },
                            "returnType": null,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 48,
                            "end": 61
                        },
                        "flags": 46,
                        "transformFlags": 0,
                        "start": 33,
                        "end": 62
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 63,
                        "end": 63
                    },
                    "flags": 268435488,
                    "transformFlags": 1,
                    "start": 46,
                    "end": 64
                },
                "template": {
                    "kind": 458761,
                    "text": "",
                    "rawText": "",
                    "flags": 134217824,
                    "transformFlags": 0,
                    "start": 64,
                    "end": 66
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 46,
                "end": 66
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 46,
            "end": 67
        },
        {
            "kind": 120,
            "expression": {
                "kind": 226,
                "member": {
                    "kind": 121,
                    "expression": {
                        "kind": 177,
                        "asyncKeyword": null,
                        "functionKeyword": {
                            "kind": 37822554,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 69,
                            "end": 77
                        },
                        "asteriskToken": null,
                        "name": null,
                        "typeParameters": null,
                        "formalParameterList": {
                            "kind": 214,
                            "formalParameters": [],
                            "trailingComma": false,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 78,
                            "end": 78
                        },
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [],
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 81,
                                "end": 81
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 79,
                            "end": 82
                        },
                        "returnType": null,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 69,
                        "end": 82
                    },
                    "flags": 67,
                    "transformFlags": 0,
                    "start": 33,
                    "end": 83
                },
                "template": {
                    "kind": 458761,
                    "text": "",
                    "rawText": "",
                    "flags": 134217824,
                    "transformFlags": 0,
                    "start": 83,
                    "end": 85
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 67,
                "end": 85
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 67,
            "end": 86
        },
        {
            "kind": 120,
            "expression": {
                "kind": 210,
                "newKeyword": {
                    "kind": 138477661,
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 86,
                    "end": 90
                },
                "expression": {
                    "kind": 121,
                    "expression": {
                        "kind": 177,
                        "asyncKeyword": null,
                        "functionKeyword": {
                            "kind": 37822554,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 92,
                            "end": 100
                        },
                        "asteriskToken": null,
                        "name": null,
                        "typeParameters": null,
                        "formalParameterList": {
                            "kind": 214,
                            "formalParameters": [],
                            "trailingComma": false,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 101,
                            "end": 101
                        },
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [],
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 104,
                                "end": 104
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 102,
                            "end": 105
                        },
                        "returnType": null,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 92,
                        "end": 105
                    },
                    "flags": 90,
                    "transformFlags": 0,
                    "start": 32,
                    "end": 106
                },
                "argumentList": null,
                "flags": 97,
                "transformFlags": 0,
                "start": 86,
                "end": 106
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 86,
            "end": 107
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 177,
                    "asyncKeyword": null,
                    "functionKeyword": {
                        "kind": 37822554,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 109,
                        "end": 117
                    },
                    "asteriskToken": null,
                    "name": null,
                    "typeParameters": null,
                    "formalParameterList": {
                        "kind": 214,
                        "formalParameters": [],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 118,
                        "end": 118
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 121,
                            "end": 121
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 119,
                        "end": 122
                    },
                    "returnType": null,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 109,
                    "end": 122
                },
                "flags": 107,
                "transformFlags": 0,
                "start": 33,
                "end": 123
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 107,
            "end": 124
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 124,
                    "end": 126
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 126,
                    "end": 128
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 177,
                        "asyncKeyword": null,
                        "functionKeyword": {
                            "kind": 37822554,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 128,
                            "end": 137
                        },
                        "asteriskToken": null,
                        "name": {
                            "kind": 134299649,
                            "text": "f",
                            "rawText": "f",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 137,
                            "end": 139
                        },
                        "typeParameters": null,
                        "formalParameterList": {
                            "kind": 214,
                            "formalParameters": [],
                            "trailingComma": false,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 140,
                            "end": 140
                        },
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [],
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 143,
                                "end": 143
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 141,
                            "end": 144
                        },
                        "returnType": null,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 128,
                        "end": 144
                    },
                    "operatorToken": {
                        "kind": 33339,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 144,
                        "end": 147
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 147,
                        "end": 149
                    },
                    "flags": 32,
                    "transformFlags": 1024,
                    "start": 128,
                    "end": 149
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 124,
                "end": 149
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 124,
            "end": 150
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 198,
                    "left": {
                        "kind": 177,
                        "asyncKeyword": null,
                        "functionKeyword": {
                            "kind": 37822554,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 152,
                            "end": 160
                        },
                        "asteriskToken": null,
                        "name": null,
                        "typeParameters": null,
                        "formalParameterList": {
                            "kind": 214,
                            "formalParameters": [],
                            "trailingComma": false,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 161,
                            "end": 161
                        },
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [],
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 164,
                                "end": 164
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 162,
                            "end": 165
                        },
                        "returnType": null,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 152,
                        "end": 165
                    },
                    "operatorToken": {
                        "kind": 33594,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 165,
                        "end": 168
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 168,
                        "end": 170
                    },
                    "flags": 32,
                    "transformFlags": 1024,
                    "start": 152,
                    "end": 170
                },
                "flags": 150,
                "transformFlags": 0,
                "start": 33,
                "end": 171
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 150,
            "end": 172
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 172,
                    "end": 174
                },
                "operatorToken": {
                    "kind": 99634,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 174,
                    "end": 176
                },
                "right": {
                    "kind": 177,
                    "asyncKeyword": null,
                    "functionKeyword": {
                        "kind": 37822554,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 176,
                        "end": 185
                    },
                    "asteriskToken": null,
                    "name": null,
                    "typeParameters": null,
                    "formalParameterList": {
                        "kind": 214,
                        "formalParameters": [],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 186,
                        "end": 186
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 189,
                            "end": 189
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 187,
                        "end": 190
                    },
                    "returnType": null,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 176,
                    "end": 190
                },
                "flags": 97,
                "transformFlags": 1024,
                "start": 172,
                "end": 190
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 172,
            "end": 191
        },
        {
            "kind": 120,
            "expression": {
                "kind": 210,
                "newKeyword": {
                    "kind": 138477661,
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 191,
                    "end": 195
                },
                "expression": {
                    "kind": 177,
                    "asyncKeyword": null,
                    "functionKeyword": {
                        "kind": 37822554,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 195,
                        "end": 204
                    },
                    "asteriskToken": null,
                    "name": null,
                    "typeParameters": null,
                    "formalParameterList": {
                        "kind": 214,
                        "formalParameters": [],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 205,
                        "end": 205
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 208,
                            "end": 208
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 206,
                        "end": 209
                    },
                    "returnType": null,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 195,
                    "end": 209
                },
                "argumentList": null,
                "flags": 97,
                "transformFlags": 0,
                "start": 191,
                "end": 209
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 191,
            "end": 210
        }
    ],
    "isModule": false,
    "source": "(function() {}).length\ntypeof (function() {});\n(function() {})()``;\n(function() {})``;\nnew (function() {});\n(function() {});\na = function f() {} || b;\n(function() {} && a);\na + function() {};\nnew function() {};",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 210
}
```

### Printed

```javascript
(function () {}).length;
typeof (function () {});

(function () {})()``;

(function () {})``;

new (function () {});

(function () {});

a = function f() {} || b;

(function () {} && a);

a + function () {};

new function () {};

```

### Diagnostics

```javascript
✔ No errors
```

