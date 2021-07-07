# Kataw parser test case

## Input

`````js
async function f1() { (await f()).length }
async function g() {
  invariant(
    (await driver.navigator.getUrl()).substr(-7)
  );
}
function *f2(){
  !(yield a);
}
async function f3() {
  a = !await f();
}
async () => {
  new A(await x);
  obj[await x];
}

`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 64,
                "transformFlags": 0,
                "start": 0,
                "end": 5
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "transformFlags": 0,
                "start": 5,
                "end": 14
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f1",
                "rawText": "f1",
                "flags": 96,
                "transformFlags": 0,
                "start": 14,
                "end": 17
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 18,
                "end": 18
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 129,
                                "member": {
                                    "kind": 121,
                                    "expression": {
                                        "kind": 208,
                                        "awaitKeyword": {
                                            "kind": 82196,
                                            "flags": 64,
                                            "transformFlags": 0,
                                            "start": 23,
                                            "end": 28
                                        },
                                        "expression": {
                                            "kind": 131,
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "f",
                                                "rawText": "f",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 28,
                                                "end": 30
                                            },
                                            "argumentList": {
                                                "kind": 256,
                                                "elements": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 31,
                                                "end": 31
                                            },
                                            "flags": 268435488,
                                            "transformFlags": 1,
                                            "start": 28,
                                            "end": 32
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 23,
                                        "end": 32
                                    },
                                    "flags": 21,
                                    "transformFlags": 0,
                                    "start": 32,
                                    "end": 33
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "length",
                                    "rawText": "length",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 34,
                                    "end": 40
                                },
                                "flags": 53,
                                "transformFlags": 2,
                                "start": 21,
                                "end": 40
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 21,
                            "end": 40
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 21,
                    "end": 40
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 19,
                "end": 42
            },
            "returnType": null,
            "flags": 144,
            "transformFlags": 0,
            "start": 0,
            "end": 42
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 65,
                "transformFlags": 0,
                "start": 42,
                "end": 48
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "transformFlags": 0,
                "start": 48,
                "end": 57
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "g",
                "rawText": "g",
                "flags": 96,
                "transformFlags": 0,
                "start": 57,
                "end": 59
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 60,
                "end": 60
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "invariant",
                                    "rawText": "invariant",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 63,
                                    "end": 75
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 131,
                                            "expression": {
                                                "kind": 129,
                                                "member": {
                                                    "kind": 121,
                                                    "expression": {
                                                        "kind": 208,
                                                        "awaitKeyword": {
                                                            "kind": 82196,
                                                            "flags": 64,
                                                            "transformFlags": 0,
                                                            "start": 82,
                                                            "end": 87
                                                        },
                                                        "expression": {
                                                            "kind": 131,
                                                            "expression": {
                                                                "kind": 129,
                                                                "member": {
                                                                    "kind": 129,
                                                                    "member": {
                                                                        "kind": 134299649,
                                                                        "text": "driver",
                                                                        "rawText": "driver",
                                                                        "flags": 96,
                                                                        "transformFlags": 0,
                                                                        "start": 87,
                                                                        "end": 94
                                                                    },
                                                                    "expression": {
                                                                        "kind": 134299649,
                                                                        "text": "navigator",
                                                                        "rawText": "navigator",
                                                                        "flags": 96,
                                                                        "transformFlags": 0,
                                                                        "start": 95,
                                                                        "end": 104
                                                                    },
                                                                    "flags": 96,
                                                                    "transformFlags": 2,
                                                                    "start": 87,
                                                                    "end": 104
                                                                },
                                                                "expression": {
                                                                    "kind": 134299649,
                                                                    "text": "getUrl",
                                                                    "rawText": "getUrl",
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 105,
                                                                    "end": 111
                                                                },
                                                                "flags": 96,
                                                                "transformFlags": 2,
                                                                "start": 87,
                                                                "end": 111
                                                            },
                                                            "argumentList": {
                                                                "kind": 256,
                                                                "elements": [],
                                                                "trailingComma": false,
                                                                "flags": 32,
                                                                "transformFlags": 0,
                                                                "start": 112,
                                                                "end": 112
                                                            },
                                                            "flags": 268435488,
                                                            "transformFlags": 1,
                                                            "start": 87,
                                                            "end": 113
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 82,
                                                        "end": 113
                                                    },
                                                    "flags": 76,
                                                    "transformFlags": 0,
                                                    "start": 33,
                                                    "end": 114
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "substr",
                                                    "rawText": "substr",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 115,
                                                    "end": 121
                                                },
                                                "flags": 108,
                                                "transformFlags": 2,
                                                "start": 76,
                                                "end": 121
                                            },
                                            "argumentList": {
                                                "kind": 256,
                                                "elements": [
                                                    {
                                                        "kind": 126,
                                                        "operandToken": {
                                                            "kind": 134318643,
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 122,
                                                            "end": 123
                                                        },
                                                        "operand": {
                                                            "kind": 201392130,
                                                            "text": 7,
                                                            "rawText": "7",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 123,
                                                            "end": 124
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 1024,
                                                        "start": 122,
                                                        "end": 124
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 122,
                                                "end": 124
                                            },
                                            "flags": 268435488,
                                            "transformFlags": 1,
                                            "start": 76,
                                            "end": 125
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 76,
                                    "end": 125
                                },
                                "flags": 268435488,
                                "transformFlags": 1,
                                "start": 63,
                                "end": 129
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 63,
                            "end": 130
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 63,
                    "end": 130
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 61,
                "end": 132
            },
            "returnType": null,
            "flags": 144,
            "transformFlags": 0,
            "start": 42,
            "end": 132
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 132,
                "end": 141
            },
            "asteriskToken": {
                "kind": 67143222,
                "flags": 64,
                "transformFlags": 32,
                "start": 141,
                "end": 143
            },
            "name": {
                "kind": 134299649,
                "text": "f2",
                "rawText": "f2",
                "flags": 96,
                "transformFlags": 0,
                "start": 143,
                "end": 145
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 146,
                "end": 146
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 126,
                                "operandToken": {
                                    "kind": 65584,
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 148,
                                    "end": 152
                                },
                                "operand": {
                                    "kind": 121,
                                    "expression": {
                                        "kind": 229,
                                        "yieldKeyword": {
                                            "kind": 8454253,
                                            "flags": 64,
                                            "transformFlags": 0,
                                            "start": 153,
                                            "end": 158
                                        },
                                        "delegate": false,
                                        "asteriskToken": null,
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 158,
                                            "end": 160
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 153,
                                        "end": 160
                                    },
                                    "flags": 152,
                                    "transformFlags": 0,
                                    "start": 32,
                                    "end": 161
                                },
                                "flags": 32,
                                "transformFlags": 1024,
                                "start": 148,
                                "end": 161
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 148,
                            "end": 162
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 148,
                    "end": 162
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 147,
                "end": 164
            },
            "returnType": null,
            "flags": 272,
            "transformFlags": 0,
            "start": 132,
            "end": 164
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 65,
                "transformFlags": 0,
                "start": 164,
                "end": 170
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "transformFlags": 0,
                "start": 170,
                "end": 179
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f3",
                "rawText": "f3",
                "flags": 96,
                "transformFlags": 0,
                "start": 179,
                "end": 182
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 183,
                "end": 183
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
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
                                    "start": 186,
                                    "end": 190
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 190,
                                    "end": 192
                                },
                                "right": {
                                    "kind": 126,
                                    "operandToken": {
                                        "kind": 65584,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 192,
                                        "end": 194
                                    },
                                    "operand": {
                                        "kind": 208,
                                        "awaitKeyword": {
                                            "kind": 82196,
                                            "flags": 64,
                                            "transformFlags": 0,
                                            "start": 194,
                                            "end": 199
                                        },
                                        "expression": {
                                            "kind": 131,
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "f",
                                                "rawText": "f",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 199,
                                                "end": 201
                                            },
                                            "argumentList": {
                                                "kind": 256,
                                                "elements": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 202,
                                                "end": 202
                                            },
                                            "flags": 268435488,
                                            "transformFlags": 1,
                                            "start": 199,
                                            "end": 203
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 194,
                                        "end": 203
                                    },
                                    "flags": 32,
                                    "transformFlags": 1024,
                                    "start": 192,
                                    "end": 203
                                },
                                "flags": 0,
                                "transformFlags": 128,
                                "start": 186,
                                "end": 203
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 186,
                            "end": 204
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 186,
                    "end": 204
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 184,
                "end": 206
            },
            "returnType": null,
            "flags": 144,
            "transformFlags": 0,
            "start": 164,
            "end": 206
        },
        {
            "kind": 271,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 64,
                "transformFlags": 0,
                "start": 206,
                "end": 212
            },
            "typeParameters": null,
            "arrowPatameterList": {
                "kind": 342,
                "parameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 214,
                "end": 214
            },
            "returnType": null,
            "arrowToken": {
                "kind": 10,
                "flags": 64,
                "transformFlags": 0,
                "start": 215,
                "end": 218
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 210,
                                "newKeyword": {
                                    "kind": 138477661,
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 220,
                                    "end": 226
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "A",
                                    "rawText": "A",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 226,
                                    "end": 228
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 208,
                                            "awaitKeyword": {
                                                "kind": 82196,
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 229,
                                                "end": 234
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 234,
                                                "end": 236
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 229,
                                            "end": 236
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 229,
                                    "end": 236
                                },
                                "flags": 97,
                                "transformFlags": 0,
                                "start": 220,
                                "end": 237
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 220,
                            "end": 238
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 130,
                                "member": {
                                    "kind": 134299649,
                                    "text": "obj",
                                    "rawText": "obj",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 238,
                                    "end": 244
                                },
                                "expression": {
                                    "kind": 208,
                                    "awaitKeyword": {
                                        "kind": 82196,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 245,
                                        "end": 250
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 250,
                                        "end": 252
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 245,
                                    "end": 252
                                },
                                "flags": 536870944,
                                "transformFlags": 4,
                                "start": 238,
                                "end": 253
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 238,
                            "end": 254
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 220,
                    "end": 254
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 218,
                "end": 256
            },
            "flags": 288,
            "transformFlags": 0,
            "start": 206,
            "end": 256
        }
    ],
    "isModule": false,
    "source": "async function f1() { (await f()).length }\nasync function g() {\n  invariant(\n    (await driver.navigator.getUrl()).substr(-7)\n  );\n}\nfunction *f2(){\n  !(yield a);\n}\nasync function f3() {\n  a = !await f();\n}\nasync () => {\n  new A(await x);\n  obj[await x];\n}\n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 257
}
```

### Printed

```javascript
async function f1() {
  (await f()).length;
}
async function g() {
  invariant((await driver.navigator.getUrl()).substr(-7));
}

function *f2() {
  !(yield a);
}

async function f3() {
  a = !await f();
}

async () => {
  new A(await x);
  obj[await x];
}

```

### Diagnostics

```javascript
✔ No errors
```

