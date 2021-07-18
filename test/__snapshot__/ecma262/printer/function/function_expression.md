# Kataw parser test case

## Input

`````js
(function() {}).length
typeof (function() {});
export default (function() {})();
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
            "transformFlags": 4096,
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
                "transformFlags": 16384,
                "start": 22,
                "end": 45
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 22,
            "end": 46
        },
        {
            "kind": 258,
            "exportKeyword": {
                "kind": 4202582,
                "flags": 81,
                "transformFlags": 0,
                "start": 46,
                "end": 53
            },
            "defaultKeyword": {
                "kind": 4194387,
                "flags": 80,
                "transformFlags": 0,
                "start": 46,
                "end": 61
            },
            "declaration": {
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
                            "start": 63,
                            "end": 71
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
                            "start": 72,
                            "end": 72
                        },
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [],
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 75,
                                "end": 75
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 73,
                            "end": 76
                        },
                        "returnType": null,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 63,
                        "end": 76
                    },
                    "flags": 61,
                    "transformFlags": 0,
                    "start": 32,
                    "end": 77
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 78,
                    "end": 78
                },
                "flags": 32,
                "transformFlags": 1,
                "start": 61,
                "end": 79
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 46,
            "end": 80
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
                                "start": 82,
                                "end": 90
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
                                "start": 91,
                                "end": 91
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 94,
                                    "end": 94
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 92,
                                "end": 95
                            },
                            "returnType": null,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 82,
                            "end": 95
                        },
                        "flags": 80,
                        "transformFlags": 0,
                        "start": 33,
                        "end": 96
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 97,
                        "end": 97
                    },
                    "flags": 32,
                    "transformFlags": 1,
                    "start": 80,
                    "end": 98
                },
                "template": {
                    "kind": 458761,
                    "text": "",
                    "rawText": "",
                    "flags": 134217824,
                    "transformFlags": 0,
                    "start": 98,
                    "end": 100
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 80,
                "end": 100
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 80,
            "end": 101
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
                            "start": 103,
                            "end": 111
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
                            "start": 112,
                            "end": 112
                        },
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [],
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 115,
                                "end": 115
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 113,
                            "end": 116
                        },
                        "returnType": null,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 103,
                        "end": 116
                    },
                    "flags": 101,
                    "transformFlags": 0,
                    "start": 33,
                    "end": 117
                },
                "template": {
                    "kind": 458761,
                    "text": "",
                    "rawText": "",
                    "flags": 134217824,
                    "transformFlags": 0,
                    "start": 117,
                    "end": 119
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 101,
                "end": 119
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 101,
            "end": 120
        },
        {
            "kind": 120,
            "expression": {
                "kind": 210,
                "newKeyword": {
                    "kind": 138477661,
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 120,
                    "end": 124
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
                            "start": 126,
                            "end": 134
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
                            "start": 135,
                            "end": 135
                        },
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [],
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 138,
                                "end": 138
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 136,
                            "end": 139
                        },
                        "returnType": null,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 126,
                        "end": 139
                    },
                    "flags": 124,
                    "transformFlags": 0,
                    "start": 32,
                    "end": 140
                },
                "argumentList": null,
                "flags": 97,
                "transformFlags": 2048,
                "start": 120,
                "end": 140
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 120,
            "end": 141
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
                        "start": 143,
                        "end": 151
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
                        "start": 152,
                        "end": 152
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 155,
                            "end": 155
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 153,
                        "end": 156
                    },
                    "returnType": null,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 143,
                    "end": 156
                },
                "flags": 141,
                "transformFlags": 0,
                "start": 33,
                "end": 157
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 141,
            "end": 158
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
                    "start": 158,
                    "end": 160
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 160,
                    "end": 162
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
                            "start": 162,
                            "end": 171
                        },
                        "asteriskToken": null,
                        "name": {
                            "kind": 134299649,
                            "text": "f",
                            "rawText": "f",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 171,
                            "end": 173
                        },
                        "typeParameters": null,
                        "formalParameterList": {
                            "kind": 214,
                            "formalParameters": [],
                            "trailingComma": false,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 174,
                            "end": 174
                        },
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [],
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 177,
                                "end": 177
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 175,
                            "end": 178
                        },
                        "returnType": null,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 162,
                        "end": 178
                    },
                    "operatorToken": {
                        "kind": 33339,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 178,
                        "end": 181
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 181,
                        "end": 183
                    },
                    "flags": 32,
                    "transformFlags": 5120,
                    "start": 162,
                    "end": 183
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 158,
                "end": 183
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 158,
            "end": 184
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
                            "start": 186,
                            "end": 194
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
                            "start": 195,
                            "end": 195
                        },
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [],
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 198,
                                "end": 198
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 196,
                            "end": 199
                        },
                        "returnType": null,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 186,
                        "end": 199
                    },
                    "operatorToken": {
                        "kind": 33594,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 199,
                        "end": 202
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 202,
                        "end": 204
                    },
                    "flags": 32,
                    "transformFlags": 5120,
                    "start": 186,
                    "end": 204
                },
                "flags": 184,
                "transformFlags": 0,
                "start": 33,
                "end": 205
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 184,
            "end": 206
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
                    "start": 206,
                    "end": 208
                },
                "operatorToken": {
                    "kind": 99634,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 208,
                    "end": 210
                },
                "right": {
                    "kind": 177,
                    "asyncKeyword": null,
                    "functionKeyword": {
                        "kind": 37822554,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 210,
                        "end": 219
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
                        "start": 220,
                        "end": 220
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 223,
                            "end": 223
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 221,
                        "end": 224
                    },
                    "returnType": null,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 210,
                    "end": 224
                },
                "flags": 97,
                "transformFlags": 5120,
                "start": 206,
                "end": 224
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 206,
            "end": 225
        },
        {
            "kind": 120,
            "expression": {
                "kind": 210,
                "newKeyword": {
                    "kind": 138477661,
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 225,
                    "end": 229
                },
                "expression": {
                    "kind": 177,
                    "asyncKeyword": null,
                    "functionKeyword": {
                        "kind": 37822554,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 229,
                        "end": 238
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
                        "start": 239,
                        "end": 239
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 242,
                            "end": 242
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 240,
                        "end": 243
                    },
                    "returnType": null,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 229,
                    "end": 243
                },
                "argumentList": null,
                "flags": 97,
                "transformFlags": 2048,
                "start": 225,
                "end": 243
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 225,
            "end": 244
        }
    ],
    "isModule": false,
    "source": "(function() {}).length\ntypeof (function() {});\nexport default (function() {})();\n(function() {})()``;\n(function() {})``;\nnew (function() {});\n(function() {});\na = function f() {} || b;\n(function() {} && a);\na + function() {};\nnew function() {};\n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 245
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The `export` keyword can only be used with the module goal - start: 46, end: 53

```

