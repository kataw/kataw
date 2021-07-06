# Kataw parser test case

## Input

`````js
// Both functions below should be formatted exactly the same

function f() {
  if (position)
    return {name: pair};
  else
    return {name: pair.substring(0, position), value: pair.substring(position + 1)};
}

function f() {
  if (position)
    return {name: pair};
  else
    return {
      name: pair.substring(0, position),
      value: pair.substring(position + 1)
    };
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
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 0,
                "end": 70
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "transformFlags": 0,
                "start": 70,
                "end": 72
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 73,
                "end": 73
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
                                "start": 76,
                                "end": 81
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "position",
                                "rawText": "position",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 83,
                                "end": 91
                            },
                            "consequent": {
                                "kind": 161,
                                "returnKeyword": {
                                    "kind": 37757022,
                                    "flags": 81,
                                    "transformFlags": 0,
                                    "start": 92,
                                    "end": 103
                                },
                                "expression": {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 219,
                                                "asteriskToken": null,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "name",
                                                    "rawText": "name",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 105,
                                                    "end": 109
                                                },
                                                "right": {
                                                    "kind": 134299649,
                                                    "text": "pair",
                                                    "rawText": "pair",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 110,
                                                    "end": 115
                                                },
                                                "flags": 32,
                                                "transformFlags": 128,
                                                "start": 105,
                                                "end": 115
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 16,
                                        "transformFlags": 0,
                                        "start": 105,
                                        "end": 115
                                    },
                                    "flags": 48,
                                    "transformFlags": 8,
                                    "start": 103,
                                    "end": 116
                                },
                                "flags": 81,
                                "transformFlags": 256,
                                "start": 92,
                                "end": 117
                            },
                            "elseKeyword": {
                                "kind": 4194389,
                                "flags": 65,
                                "transformFlags": 0,
                                "start": 117,
                                "end": 124
                            },
                            "alternate": {
                                "kind": 161,
                                "returnKeyword": {
                                    "kind": 37757022,
                                    "flags": 81,
                                    "transformFlags": 0,
                                    "start": 124,
                                    "end": 135
                                },
                                "expression": {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 219,
                                                "asteriskToken": null,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "name",
                                                    "rawText": "name",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 137,
                                                    "end": 141
                                                },
                                                "right": {
                                                    "kind": 131,
                                                    "expression": {
                                                        "kind": 129,
                                                        "member": {
                                                            "kind": 134299649,
                                                            "text": "pair",
                                                            "rawText": "pair",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 142,
                                                            "end": 147
                                                        },
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "substring",
                                                            "rawText": "substring",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 148,
                                                            "end": 157
                                                        },
                                                        "flags": 96,
                                                        "transformFlags": 2,
                                                        "start": 137,
                                                        "end": 157
                                                    },
                                                    "argumentList": {
                                                        "kind": 256,
                                                        "elements": [
                                                            {
                                                                "kind": 201392130,
                                                                "text": 0,
                                                                "rawText": "0",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 158,
                                                                "end": 159
                                                            },
                                                            {
                                                                "kind": 134299649,
                                                                "text": "position",
                                                                "rawText": "position",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 160,
                                                                "end": 169
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 158,
                                                        "end": 169
                                                    },
                                                    "flags": 268435488,
                                                    "transformFlags": 1,
                                                    "start": 137,
                                                    "end": 170
                                                },
                                                "flags": 32,
                                                "transformFlags": 128,
                                                "start": 137,
                                                "end": 170
                                            },
                                            {
                                                "kind": 219,
                                                "asteriskToken": null,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "value",
                                                    "rawText": "value",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 171,
                                                    "end": 177
                                                },
                                                "right": {
                                                    "kind": 131,
                                                    "expression": {
                                                        "kind": 129,
                                                        "member": {
                                                            "kind": 134299649,
                                                            "text": "pair",
                                                            "rawText": "pair",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 178,
                                                            "end": 183
                                                        },
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "substring",
                                                            "rawText": "substring",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 184,
                                                            "end": 193
                                                        },
                                                        "flags": 96,
                                                        "transformFlags": 2,
                                                        "start": 171,
                                                        "end": 193
                                                    },
                                                    "argumentList": {
                                                        "kind": 256,
                                                        "elements": [
                                                            {
                                                                "kind": 198,
                                                                "left": {
                                                                    "kind": 134299649,
                                                                    "text": "position",
                                                                    "rawText": "position",
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 194,
                                                                    "end": 202
                                                                },
                                                                "operatorToken": {
                                                                    "kind": 99634,
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 202,
                                                                    "end": 204
                                                                },
                                                                "right": {
                                                                    "kind": 201392130,
                                                                    "text": 1,
                                                                    "rawText": "1",
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 204,
                                                                    "end": 206
                                                                },
                                                                "flags": 96,
                                                                "transformFlags": 1024,
                                                                "start": 194,
                                                                "end": 206
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 194,
                                                        "end": 206
                                                    },
                                                    "flags": 268435488,
                                                    "transformFlags": 1,
                                                    "start": 171,
                                                    "end": 207
                                                },
                                                "flags": 32,
                                                "transformFlags": 128,
                                                "start": 171,
                                                "end": 207
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 16,
                                        "transformFlags": 0,
                                        "start": 137,
                                        "end": 207
                                    },
                                    "flags": 48,
                                    "transformFlags": 8,
                                    "start": 135,
                                    "end": 208
                                },
                                "flags": 81,
                                "transformFlags": 256,
                                "start": 124,
                                "end": 209
                            },
                            "flags": 81,
                            "transformFlags": 0,
                            "start": 76,
                            "end": 209
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 76,
                    "end": 209
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 74,
                "end": 211
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 211
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 211,
                "end": 221
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "transformFlags": 0,
                "start": 221,
                "end": 223
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 224,
                "end": 224
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
                                "start": 227,
                                "end": 232
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "position",
                                "rawText": "position",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 234,
                                "end": 242
                            },
                            "consequent": {
                                "kind": 161,
                                "returnKeyword": {
                                    "kind": 37757022,
                                    "flags": 81,
                                    "transformFlags": 0,
                                    "start": 243,
                                    "end": 254
                                },
                                "expression": {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 219,
                                                "asteriskToken": null,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "name",
                                                    "rawText": "name",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 256,
                                                    "end": 260
                                                },
                                                "right": {
                                                    "kind": 134299649,
                                                    "text": "pair",
                                                    "rawText": "pair",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 261,
                                                    "end": 266
                                                },
                                                "flags": 32,
                                                "transformFlags": 128,
                                                "start": 256,
                                                "end": 266
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 16,
                                        "transformFlags": 0,
                                        "start": 256,
                                        "end": 266
                                    },
                                    "flags": 48,
                                    "transformFlags": 8,
                                    "start": 254,
                                    "end": 267
                                },
                                "flags": 81,
                                "transformFlags": 256,
                                "start": 243,
                                "end": 268
                            },
                            "elseKeyword": {
                                "kind": 4194389,
                                "flags": 65,
                                "transformFlags": 0,
                                "start": 268,
                                "end": 275
                            },
                            "alternate": {
                                "kind": 161,
                                "returnKeyword": {
                                    "kind": 37757022,
                                    "flags": 81,
                                    "transformFlags": 0,
                                    "start": 275,
                                    "end": 286
                                },
                                "expression": {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 219,
                                                "asteriskToken": null,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "name",
                                                    "rawText": "name",
                                                    "flags": 97,
                                                    "transformFlags": 0,
                                                    "start": 288,
                                                    "end": 299
                                                },
                                                "right": {
                                                    "kind": 131,
                                                    "expression": {
                                                        "kind": 129,
                                                        "member": {
                                                            "kind": 134299649,
                                                            "text": "pair",
                                                            "rawText": "pair",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 300,
                                                            "end": 305
                                                        },
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "substring",
                                                            "rawText": "substring",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 306,
                                                            "end": 315
                                                        },
                                                        "flags": 96,
                                                        "transformFlags": 2,
                                                        "start": 288,
                                                        "end": 315
                                                    },
                                                    "argumentList": {
                                                        "kind": 256,
                                                        "elements": [
                                                            {
                                                                "kind": 201392130,
                                                                "text": 0,
                                                                "rawText": "0",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 316,
                                                                "end": 317
                                                            },
                                                            {
                                                                "kind": 134299649,
                                                                "text": "position",
                                                                "rawText": "position",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 318,
                                                                "end": 327
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 316,
                                                        "end": 327
                                                    },
                                                    "flags": 268435488,
                                                    "transformFlags": 1,
                                                    "start": 288,
                                                    "end": 328
                                                },
                                                "flags": 33,
                                                "transformFlags": 128,
                                                "start": 288,
                                                "end": 328
                                            },
                                            {
                                                "kind": 219,
                                                "asteriskToken": null,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "value",
                                                    "rawText": "value",
                                                    "flags": 97,
                                                    "transformFlags": 0,
                                                    "start": 329,
                                                    "end": 341
                                                },
                                                "right": {
                                                    "kind": 131,
                                                    "expression": {
                                                        "kind": 129,
                                                        "member": {
                                                            "kind": 134299649,
                                                            "text": "pair",
                                                            "rawText": "pair",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 342,
                                                            "end": 347
                                                        },
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "substring",
                                                            "rawText": "substring",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 348,
                                                            "end": 357
                                                        },
                                                        "flags": 96,
                                                        "transformFlags": 2,
                                                        "start": 329,
                                                        "end": 357
                                                    },
                                                    "argumentList": {
                                                        "kind": 256,
                                                        "elements": [
                                                            {
                                                                "kind": 198,
                                                                "left": {
                                                                    "kind": 134299649,
                                                                    "text": "position",
                                                                    "rawText": "position",
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 358,
                                                                    "end": 366
                                                                },
                                                                "operatorToken": {
                                                                    "kind": 99634,
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 366,
                                                                    "end": 368
                                                                },
                                                                "right": {
                                                                    "kind": 201392130,
                                                                    "text": 1,
                                                                    "rawText": "1",
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 368,
                                                                    "end": 370
                                                                },
                                                                "flags": 96,
                                                                "transformFlags": 1024,
                                                                "start": 358,
                                                                "end": 370
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 358,
                                                        "end": 370
                                                    },
                                                    "flags": 268435488,
                                                    "transformFlags": 1,
                                                    "start": 329,
                                                    "end": 371
                                                },
                                                "flags": 33,
                                                "transformFlags": 128,
                                                "start": 329,
                                                "end": 371
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 17,
                                        "transformFlags": 0,
                                        "start": 288,
                                        "end": 371
                                    },
                                    "flags": 49,
                                    "transformFlags": 8,
                                    "start": 286,
                                    "end": 377
                                },
                                "flags": 81,
                                "transformFlags": 256,
                                "start": 275,
                                "end": 378
                            },
                            "flags": 81,
                            "transformFlags": 0,
                            "start": 227,
                            "end": 378
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 227,
                    "end": 378
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 225,
                "end": 380
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 211,
            "end": 380
        }
    ],
    "isModule": false,
    "source": "// Both functions below should be formatted exactly the same\n\nfunction f() {\n  if (position)\n    return {name: pair};\n  else\n    return {name: pair.substring(0, position), value: pair.substring(position + 1)};\n}\n\nfunction f() {\n  if (position)\n    return {name: pair};\n  else\n    return {\n      name: pair.substring(0, position),\n      value: pair.substring(position + 1)\n    };\n}\n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 381
}
```

### Printed

```javascript

function f() {
  if (position) return {name: pair};
  else
    return {
      name: pair.substring(0, position),
      value: pair.substring(position + 1)
    };
}
function f() {
  if (position) return {name: pair};
  else  return {
      name: pair.substring(0, position),
      value: pair.substring(position + 1)
    };
}

```

### Diagnostics

```javascript
✔ No errors
```

