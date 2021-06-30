# Kataw parser test case

## Input

`````js
function* f1() {
  a = (yield) ? 1 : 1;
  a = yield 1 ? 1 : 1;
  a = (yield 1) ? 1 : 1;
  a = 1 ? yield : yield;
  a = 1 ? yield 1 : yield 1;
}

function* f2() {
  a = yield* 1 ? 1 : 1;
  a = (yield* 1) ? 1 : 1;
  a = 1 ? yield* 1 : yield* 1;
}

async function f3() {
  a = await 1 ? 1 : 1;
  a = (await 1) ? 1 : 1;
  a = 1 ? await 1 : await 1;
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
                "flags": 64,
                "start": 0,
                "end": 8
            },
            "asteriskToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 8,
                "end": 9
            },
            "name": {
                "kind": 134299649,
                "text": "f1",
                "rawText": "f1",
                "flags": 96,
                "start": 9,
                "end": 12
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 13,
                "end": 13
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
                                    "flags": 96,
                                    "start": 16,
                                    "end": 20
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 96,
                                    "start": 20,
                                    "end": 22
                                },
                                "right": {
                                    "kind": 197,
                                    "shortCircuit": {
                                        "kind": 121,
                                        "expression": {
                                            "kind": 229,
                                            "yieldKeyword": {
                                                "kind": 8454253,
                                                "flags": 64,
                                                "start": 24,
                                                "end": 29
                                            },
                                            "delegate": false,
                                            "asteriskToken": null,
                                            "expression": null,
                                            "flags": 32,
                                            "start": 24,
                                            "end": 29
                                        },
                                        "flags": 32,
                                        "start": 22,
                                        "end": 30
                                    },
                                    "questionToken": {
                                        "kind": 134217750,
                                        "flags": 64,
                                        "start": 30,
                                        "end": 32
                                    },
                                    "consequent": {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 96,
                                        "start": 32,
                                        "end": 34
                                    },
                                    "colonToken": {
                                        "kind": 21,
                                        "flags": 64,
                                        "start": 34,
                                        "end": 36
                                    },
                                    "alternate": {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 96,
                                        "start": 36,
                                        "end": 38
                                    },
                                    "flags": 32,
                                    "start": 22,
                                    "end": 38
                                },
                                "flags": 32,
                                "start": 16,
                                "end": 38
                            },
                            "flags": 16,
                            "start": 16,
                            "end": 39
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 125,
                                "left": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 39,
                                    "end": 43
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 96,
                                    "start": 43,
                                    "end": 45
                                },
                                "right": {
                                    "kind": 229,
                                    "yieldKeyword": {
                                        "kind": 8454253,
                                        "flags": 64,
                                        "start": 45,
                                        "end": 51
                                    },
                                    "delegate": false,
                                    "asteriskToken": null,
                                    "expression": {
                                        "kind": 197,
                                        "shortCircuit": {
                                            "kind": 201392130,
                                            "text": 1,
                                            "rawText": "1",
                                            "flags": 96,
                                            "start": 51,
                                            "end": 53
                                        },
                                        "questionToken": {
                                            "kind": 134217750,
                                            "flags": 64,
                                            "start": 53,
                                            "end": 55
                                        },
                                        "consequent": {
                                            "kind": 201392130,
                                            "text": 1,
                                            "rawText": "1",
                                            "flags": 96,
                                            "start": 55,
                                            "end": 57
                                        },
                                        "colonToken": {
                                            "kind": 21,
                                            "flags": 64,
                                            "start": 57,
                                            "end": 59
                                        },
                                        "alternate": {
                                            "kind": 201392130,
                                            "text": 1,
                                            "rawText": "1",
                                            "flags": 96,
                                            "start": 59,
                                            "end": 61
                                        },
                                        "flags": 32,
                                        "start": 51,
                                        "end": 61
                                    },
                                    "flags": 32,
                                    "start": 45,
                                    "end": 61
                                },
                                "flags": 32,
                                "start": 39,
                                "end": 61
                            },
                            "flags": 16,
                            "start": 39,
                            "end": 62
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 125,
                                "left": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 62,
                                    "end": 66
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 96,
                                    "start": 66,
                                    "end": 68
                                },
                                "right": {
                                    "kind": 197,
                                    "shortCircuit": {
                                        "kind": 121,
                                        "expression": {
                                            "kind": 229,
                                            "yieldKeyword": {
                                                "kind": 8454253,
                                                "flags": 64,
                                                "start": 70,
                                                "end": 75
                                            },
                                            "delegate": false,
                                            "asteriskToken": null,
                                            "expression": {
                                                "kind": 201392130,
                                                "text": 1,
                                                "rawText": "1",
                                                "flags": 96,
                                                "start": 75,
                                                "end": 77
                                            },
                                            "flags": 32,
                                            "start": 70,
                                            "end": 77
                                        },
                                        "flags": 32,
                                        "start": 68,
                                        "end": 78
                                    },
                                    "questionToken": {
                                        "kind": 134217750,
                                        "flags": 64,
                                        "start": 78,
                                        "end": 80
                                    },
                                    "consequent": {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 96,
                                        "start": 80,
                                        "end": 82
                                    },
                                    "colonToken": {
                                        "kind": 21,
                                        "flags": 64,
                                        "start": 82,
                                        "end": 84
                                    },
                                    "alternate": {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 96,
                                        "start": 84,
                                        "end": 86
                                    },
                                    "flags": 32,
                                    "start": 68,
                                    "end": 86
                                },
                                "flags": 32,
                                "start": 62,
                                "end": 86
                            },
                            "flags": 16,
                            "start": 62,
                            "end": 87
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 125,
                                "left": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 87,
                                    "end": 91
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 96,
                                    "start": 91,
                                    "end": 93
                                },
                                "right": {
                                    "kind": 197,
                                    "shortCircuit": {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 96,
                                        "start": 93,
                                        "end": 95
                                    },
                                    "questionToken": {
                                        "kind": 134217750,
                                        "flags": 64,
                                        "start": 95,
                                        "end": 97
                                    },
                                    "consequent": {
                                        "kind": 229,
                                        "yieldKeyword": {
                                            "kind": 8454253,
                                            "flags": 64,
                                            "start": 97,
                                            "end": 103
                                        },
                                        "delegate": false,
                                        "asteriskToken": null,
                                        "expression": null,
                                        "flags": 32,
                                        "start": 97,
                                        "end": 103
                                    },
                                    "colonToken": {
                                        "kind": 21,
                                        "flags": 64,
                                        "start": 103,
                                        "end": 105
                                    },
                                    "alternate": {
                                        "kind": 229,
                                        "yieldKeyword": {
                                            "kind": 8454253,
                                            "flags": 64,
                                            "start": 105,
                                            "end": 111
                                        },
                                        "delegate": false,
                                        "asteriskToken": null,
                                        "expression": null,
                                        "flags": 32,
                                        "start": 105,
                                        "end": 111
                                    },
                                    "flags": 32,
                                    "start": 93,
                                    "end": 111
                                },
                                "flags": 32,
                                "start": 87,
                                "end": 111
                            },
                            "flags": 16,
                            "start": 87,
                            "end": 112
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 125,
                                "left": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 112,
                                    "end": 116
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 96,
                                    "start": 116,
                                    "end": 118
                                },
                                "right": {
                                    "kind": 197,
                                    "shortCircuit": {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 96,
                                        "start": 118,
                                        "end": 120
                                    },
                                    "questionToken": {
                                        "kind": 134217750,
                                        "flags": 64,
                                        "start": 120,
                                        "end": 122
                                    },
                                    "consequent": {
                                        "kind": 229,
                                        "yieldKeyword": {
                                            "kind": 8454253,
                                            "flags": 64,
                                            "start": 122,
                                            "end": 128
                                        },
                                        "delegate": false,
                                        "asteriskToken": null,
                                        "expression": {
                                            "kind": 201392130,
                                            "text": 1,
                                            "rawText": "1",
                                            "flags": 96,
                                            "start": 128,
                                            "end": 130
                                        },
                                        "flags": 32,
                                        "start": 122,
                                        "end": 130
                                    },
                                    "colonToken": {
                                        "kind": 21,
                                        "flags": 64,
                                        "start": 130,
                                        "end": 132
                                    },
                                    "alternate": {
                                        "kind": 229,
                                        "yieldKeyword": {
                                            "kind": 8454253,
                                            "flags": 64,
                                            "start": 132,
                                            "end": 138
                                        },
                                        "delegate": false,
                                        "asteriskToken": null,
                                        "expression": {
                                            "kind": 201392130,
                                            "text": 1,
                                            "rawText": "1",
                                            "flags": 96,
                                            "start": 138,
                                            "end": 140
                                        },
                                        "flags": 32,
                                        "start": 132,
                                        "end": 140
                                    },
                                    "flags": 32,
                                    "start": 118,
                                    "end": 140
                                },
                                "flags": 32,
                                "start": 112,
                                "end": 140
                            },
                            "flags": 16,
                            "start": 112,
                            "end": 141
                        }
                    ],
                    "flags": 33,
                    "start": 16,
                    "end": 141
                },
                "flags": 32,
                "start": 14,
                "end": 143
            },
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 143
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 143,
                "end": 153
            },
            "asteriskToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 153,
                "end": 154
            },
            "name": {
                "kind": 134299649,
                "text": "f2",
                "rawText": "f2",
                "flags": 96,
                "start": 154,
                "end": 157
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 158,
                "end": 158
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
                                    "flags": 96,
                                    "start": 161,
                                    "end": 165
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 96,
                                    "start": 165,
                                    "end": 167
                                },
                                "right": {
                                    "kind": 229,
                                    "yieldKeyword": {
                                        "kind": 8454253,
                                        "flags": 64,
                                        "start": 167,
                                        "end": 173
                                    },
                                    "delegate": true,
                                    "asteriskToken": {
                                        "kind": 67143222,
                                        "flags": 64,
                                        "start": 173,
                                        "end": 174
                                    },
                                    "expression": {
                                        "kind": 197,
                                        "shortCircuit": {
                                            "kind": 201392130,
                                            "text": 1,
                                            "rawText": "1",
                                            "flags": 96,
                                            "start": 174,
                                            "end": 176
                                        },
                                        "questionToken": {
                                            "kind": 134217750,
                                            "flags": 64,
                                            "start": 176,
                                            "end": 178
                                        },
                                        "consequent": {
                                            "kind": 201392130,
                                            "text": 1,
                                            "rawText": "1",
                                            "flags": 96,
                                            "start": 178,
                                            "end": 180
                                        },
                                        "colonToken": {
                                            "kind": 21,
                                            "flags": 64,
                                            "start": 180,
                                            "end": 182
                                        },
                                        "alternate": {
                                            "kind": 201392130,
                                            "text": 1,
                                            "rawText": "1",
                                            "flags": 96,
                                            "start": 182,
                                            "end": 184
                                        },
                                        "flags": 32,
                                        "start": 174,
                                        "end": 184
                                    },
                                    "flags": 32,
                                    "start": 167,
                                    "end": 184
                                },
                                "flags": 32,
                                "start": 161,
                                "end": 184
                            },
                            "flags": 16,
                            "start": 161,
                            "end": 185
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 125,
                                "left": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 185,
                                    "end": 189
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 96,
                                    "start": 189,
                                    "end": 191
                                },
                                "right": {
                                    "kind": 197,
                                    "shortCircuit": {
                                        "kind": 121,
                                        "expression": {
                                            "kind": 229,
                                            "yieldKeyword": {
                                                "kind": 8454253,
                                                "flags": 64,
                                                "start": 193,
                                                "end": 198
                                            },
                                            "delegate": true,
                                            "asteriskToken": {
                                                "kind": 67143222,
                                                "flags": 64,
                                                "start": 198,
                                                "end": 199
                                            },
                                            "expression": {
                                                "kind": 201392130,
                                                "text": 1,
                                                "rawText": "1",
                                                "flags": 96,
                                                "start": 199,
                                                "end": 201
                                            },
                                            "flags": 32,
                                            "start": 193,
                                            "end": 201
                                        },
                                        "flags": 32,
                                        "start": 191,
                                        "end": 202
                                    },
                                    "questionToken": {
                                        "kind": 134217750,
                                        "flags": 64,
                                        "start": 202,
                                        "end": 204
                                    },
                                    "consequent": {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 96,
                                        "start": 204,
                                        "end": 206
                                    },
                                    "colonToken": {
                                        "kind": 21,
                                        "flags": 64,
                                        "start": 206,
                                        "end": 208
                                    },
                                    "alternate": {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 96,
                                        "start": 208,
                                        "end": 210
                                    },
                                    "flags": 32,
                                    "start": 191,
                                    "end": 210
                                },
                                "flags": 32,
                                "start": 185,
                                "end": 210
                            },
                            "flags": 16,
                            "start": 185,
                            "end": 211
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 125,
                                "left": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 211,
                                    "end": 215
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 96,
                                    "start": 215,
                                    "end": 217
                                },
                                "right": {
                                    "kind": 197,
                                    "shortCircuit": {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 96,
                                        "start": 217,
                                        "end": 219
                                    },
                                    "questionToken": {
                                        "kind": 134217750,
                                        "flags": 64,
                                        "start": 219,
                                        "end": 221
                                    },
                                    "consequent": {
                                        "kind": 229,
                                        "yieldKeyword": {
                                            "kind": 8454253,
                                            "flags": 64,
                                            "start": 221,
                                            "end": 227
                                        },
                                        "delegate": true,
                                        "asteriskToken": {
                                            "kind": 67143222,
                                            "flags": 64,
                                            "start": 227,
                                            "end": 228
                                        },
                                        "expression": {
                                            "kind": 201392130,
                                            "text": 1,
                                            "rawText": "1",
                                            "flags": 96,
                                            "start": 228,
                                            "end": 230
                                        },
                                        "flags": 32,
                                        "start": 221,
                                        "end": 230
                                    },
                                    "colonToken": {
                                        "kind": 21,
                                        "flags": 64,
                                        "start": 230,
                                        "end": 232
                                    },
                                    "alternate": {
                                        "kind": 229,
                                        "yieldKeyword": {
                                            "kind": 8454253,
                                            "flags": 64,
                                            "start": 232,
                                            "end": 238
                                        },
                                        "delegate": true,
                                        "asteriskToken": {
                                            "kind": 67143222,
                                            "flags": 64,
                                            "start": 238,
                                            "end": 239
                                        },
                                        "expression": {
                                            "kind": 201392130,
                                            "text": 1,
                                            "rawText": "1",
                                            "flags": 96,
                                            "start": 239,
                                            "end": 241
                                        },
                                        "flags": 32,
                                        "start": 232,
                                        "end": 241
                                    },
                                    "flags": 32,
                                    "start": 217,
                                    "end": 241
                                },
                                "flags": 32,
                                "start": 211,
                                "end": 241
                            },
                            "flags": 16,
                            "start": 211,
                            "end": 242
                        }
                    ],
                    "flags": 33,
                    "start": 161,
                    "end": 242
                },
                "flags": 32,
                "start": 159,
                "end": 244
            },
            "returnType": null,
            "flags": 272,
            "start": 143,
            "end": 244
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 65,
                "start": 244,
                "end": 251
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 251,
                "end": 260
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f3",
                "rawText": "f3",
                "flags": 96,
                "start": 260,
                "end": 263
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 264,
                "end": 264
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
                                    "flags": 96,
                                    "start": 267,
                                    "end": 271
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 96,
                                    "start": 271,
                                    "end": 273
                                },
                                "right": {
                                    "kind": 197,
                                    "shortCircuit": {
                                        "kind": 208,
                                        "awaitKeyword": {
                                            "kind": 82196,
                                            "flags": 64,
                                            "start": 273,
                                            "end": 279
                                        },
                                        "expression": {
                                            "kind": 201392130,
                                            "text": 1,
                                            "rawText": "1",
                                            "flags": 96,
                                            "start": 279,
                                            "end": 281
                                        },
                                        "flags": 32,
                                        "start": 273,
                                        "end": 281
                                    },
                                    "questionToken": {
                                        "kind": 134217750,
                                        "flags": 64,
                                        "start": 281,
                                        "end": 283
                                    },
                                    "consequent": {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 96,
                                        "start": 283,
                                        "end": 285
                                    },
                                    "colonToken": {
                                        "kind": 21,
                                        "flags": 64,
                                        "start": 285,
                                        "end": 287
                                    },
                                    "alternate": {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 96,
                                        "start": 287,
                                        "end": 289
                                    },
                                    "flags": 32,
                                    "start": 273,
                                    "end": 289
                                },
                                "flags": 32,
                                "start": 267,
                                "end": 289
                            },
                            "flags": 16,
                            "start": 267,
                            "end": 290
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 125,
                                "left": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 290,
                                    "end": 294
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 96,
                                    "start": 294,
                                    "end": 296
                                },
                                "right": {
                                    "kind": 197,
                                    "shortCircuit": {
                                        "kind": 121,
                                        "expression": {
                                            "kind": 208,
                                            "awaitKeyword": {
                                                "kind": 82196,
                                                "flags": 64,
                                                "start": 298,
                                                "end": 303
                                            },
                                            "expression": {
                                                "kind": 201392130,
                                                "text": 1,
                                                "rawText": "1",
                                                "flags": 96,
                                                "start": 303,
                                                "end": 305
                                            },
                                            "flags": 32,
                                            "start": 298,
                                            "end": 305
                                        },
                                        "flags": 32,
                                        "start": 296,
                                        "end": 306
                                    },
                                    "questionToken": {
                                        "kind": 134217750,
                                        "flags": 64,
                                        "start": 306,
                                        "end": 308
                                    },
                                    "consequent": {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 96,
                                        "start": 308,
                                        "end": 310
                                    },
                                    "colonToken": {
                                        "kind": 21,
                                        "flags": 64,
                                        "start": 310,
                                        "end": 312
                                    },
                                    "alternate": {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 96,
                                        "start": 312,
                                        "end": 314
                                    },
                                    "flags": 32,
                                    "start": 296,
                                    "end": 314
                                },
                                "flags": 32,
                                "start": 290,
                                "end": 314
                            },
                            "flags": 16,
                            "start": 290,
                            "end": 315
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 125,
                                "left": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 315,
                                    "end": 319
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 96,
                                    "start": 319,
                                    "end": 321
                                },
                                "right": {
                                    "kind": 197,
                                    "shortCircuit": {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 96,
                                        "start": 321,
                                        "end": 323
                                    },
                                    "questionToken": {
                                        "kind": 134217750,
                                        "flags": 64,
                                        "start": 323,
                                        "end": 325
                                    },
                                    "consequent": {
                                        "kind": 208,
                                        "awaitKeyword": {
                                            "kind": 82196,
                                            "flags": 64,
                                            "start": 325,
                                            "end": 331
                                        },
                                        "expression": {
                                            "kind": 201392130,
                                            "text": 1,
                                            "rawText": "1",
                                            "flags": 96,
                                            "start": 331,
                                            "end": 333
                                        },
                                        "flags": 32,
                                        "start": 325,
                                        "end": 333
                                    },
                                    "colonToken": {
                                        "kind": 21,
                                        "flags": 64,
                                        "start": 333,
                                        "end": 335
                                    },
                                    "alternate": {
                                        "kind": 208,
                                        "awaitKeyword": {
                                            "kind": 82196,
                                            "flags": 64,
                                            "start": 335,
                                            "end": 341
                                        },
                                        "expression": {
                                            "kind": 201392130,
                                            "text": 1,
                                            "rawText": "1",
                                            "flags": 96,
                                            "start": 341,
                                            "end": 343
                                        },
                                        "flags": 32,
                                        "start": 335,
                                        "end": 343
                                    },
                                    "flags": 32,
                                    "start": 321,
                                    "end": 343
                                },
                                "flags": 32,
                                "start": 315,
                                "end": 343
                            },
                            "flags": 16,
                            "start": 315,
                            "end": 344
                        }
                    ],
                    "flags": 33,
                    "start": 267,
                    "end": 344
                },
                "flags": 32,
                "start": 265,
                "end": 346
            },
            "returnType": null,
            "flags": 144,
            "start": 244,
            "end": 346
        }
    ],
    "isModule": false,
    "source": "function* f1() {\n  a = (yield) ? 1 : 1;\n  a = yield 1 ? 1 : 1;\n  a = (yield 1) ? 1 : 1;\n  a = 1 ? yield : yield;\n  a = 1 ? yield 1 : yield 1;\n}\n\nfunction* f2() {\n  a = yield* 1 ? 1 : 1;\n  a = (yield* 1) ? 1 : 1;\n  a = 1 ? yield* 1 : yield* 1;\n}\n\nasync function f3() {\n  a = await 1 ? 1 : 1;\n  a = (await 1) ? 1 : 1;\n  a = 1 ? await 1 : await 1;\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 346
}
```

### Printed

```javascript

function* f1() {
  a = (yield) ? 1 : 1;
  a = yield 1 ? 1 : 1;
  a = (yield 1) ? 1 : 1;
  a = 1 ? yield : yield;
  a = 1 ? yield 1 : yield 1;
}
function* f2() {
  a = yield* 1 ? 1 : 1;
  a = (yield* 1) ? 1 : 1;
  a = 1 ? yield* 1 : yield* 1;
}
async function f3() {
  a = await 1 ? 1 : 1;
  a = (await 1) ? 1 : 1;
  a = 1 ? await 1 : await 1;
}

```

### Diagnostics

```javascript
✔ No errors
```

