# Kataw parser test case

## Input

`````js
function c<X: T>(x: $Keys<X>) {
  switch (x) {
    case 'p':
      break;
    case 'q':
      break;
    case 'r': // error
      break;
  }


function a<A: 'a'>(a: A): void {
  if (a === 'a'){ }
}

}

function b1<A: 'a', B: A>(b: B): void {
  if (b === 'b'){ } // error 'b' not compatible with 'a'
}
`````

## Options

### Parser Options

`````js
{ allowTypes : true }
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
                "transformFlags": 0,
                "start": 0,
                "end": 8
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "c",
                "rawText": "c",
                "flags": 96,
                "transformFlags": 0,
                "start": 8,
                "end": 10
            },
            "typeParameters": {
                "kind": 307,
                "declarations": {
                    "kind": 337,
                    "parameters": [
                        {
                            "kind": 146,
                            "name": {
                                "kind": 134299649,
                                "text": "X",
                                "rawText": "X",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 11,
                                "end": 12
                            },
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 144,
                                    "typeName": {
                                        "kind": 134299649,
                                        "text": "T",
                                        "rawText": "T",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 13,
                                        "end": 15
                                    },
                                    "typeParameters": null,
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 13,
                                    "end": 15
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 13,
                                "end": 15
                            },
                            "assignToken": null,
                            "defaultType": null,
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 11,
                            "end": 15
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 11,
                    "end": 15
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 10,
                "end": 16
            },
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 17,
                            "end": 18
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 144,
                                "typeName": {
                                    "kind": 134299649,
                                    "text": "$Keys",
                                    "rawText": "$Keys",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 19,
                                    "end": 25
                                },
                                "typeParameters": {
                                    "kind": 310,
                                    "typeInstantiations": {
                                        "kind": 309,
                                        "types": [
                                            {
                                                "kind": 139,
                                                "bitwiseOrToken": null,
                                                "bitwiseAndToken": null,
                                                "type": {
                                                    "kind": 144,
                                                    "typeName": {
                                                        "kind": 134299649,
                                                        "text": "X",
                                                        "rawText": "X",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 26,
                                                        "end": 27
                                                    },
                                                    "typeParameters": null,
                                                    "flags": 2097152,
                                                    "transformFlags": 0,
                                                    "start": 26,
                                                    "end": 27
                                                },
                                                "flags": 2097152,
                                                "transformFlags": 0,
                                                "start": 26,
                                                "end": 27
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 26,
                                        "end": 27
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 25,
                                    "end": 28
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 19,
                                "end": 28
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 19,
                            "end": 28
                        },
                        "right": null,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 17,
                        "end": 28
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 17,
                "end": 28
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 160,
                            "switchKeyword": {
                                "kind": 37757024,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 31,
                                "end": 40
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 42,
                                "end": 43
                            },
                            "caseBlock": {
                                "kind": 152,
                                "clauses": [
                                    {
                                        "kind": 175,
                                        "caseKeyword": {
                                            "kind": 4194382,
                                            "flags": 81,
                                            "transformFlags": 0,
                                            "start": 46,
                                            "end": 55
                                        },
                                        "expression": {
                                            "kind": 201392131,
                                            "text": "p",
                                            "rawText": "'p'",
                                            "flags": 4194400,
                                            "transformFlags": 0,
                                            "start": 55,
                                            "end": 59
                                        },
                                        "colonToken": {
                                            "kind": 21,
                                            "flags": 64,
                                            "transformFlags": 0,
                                            "start": 59,
                                            "end": 60
                                        },
                                        "statements": [
                                            {
                                                "kind": 150,
                                                "breakKeyword": {
                                                    "kind": 37757005,
                                                    "flags": 81,
                                                    "transformFlags": 0,
                                                    "start": 60,
                                                    "end": 72
                                                },
                                                "label": null,
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 60,
                                                "end": 73
                                            }
                                        ],
                                        "flags": 16,
                                        "transformFlags": 0,
                                        "start": 46,
                                        "end": 73
                                    },
                                    {
                                        "kind": 175,
                                        "caseKeyword": {
                                            "kind": 4194382,
                                            "flags": 81,
                                            "transformFlags": 0,
                                            "start": 73,
                                            "end": 82
                                        },
                                        "expression": {
                                            "kind": 201392131,
                                            "text": "q",
                                            "rawText": "'q'",
                                            "flags": 4194400,
                                            "transformFlags": 0,
                                            "start": 82,
                                            "end": 86
                                        },
                                        "colonToken": {
                                            "kind": 21,
                                            "flags": 64,
                                            "transformFlags": 0,
                                            "start": 86,
                                            "end": 87
                                        },
                                        "statements": [
                                            {
                                                "kind": 150,
                                                "breakKeyword": {
                                                    "kind": 37757005,
                                                    "flags": 81,
                                                    "transformFlags": 0,
                                                    "start": 87,
                                                    "end": 99
                                                },
                                                "label": null,
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 87,
                                                "end": 100
                                            }
                                        ],
                                        "flags": 16,
                                        "transformFlags": 0,
                                        "start": 73,
                                        "end": 100
                                    },
                                    {
                                        "kind": 175,
                                        "caseKeyword": {
                                            "kind": 4194382,
                                            "flags": 81,
                                            "transformFlags": 0,
                                            "start": 100,
                                            "end": 109
                                        },
                                        "expression": {
                                            "kind": 201392131,
                                            "text": "r",
                                            "rawText": "'r'",
                                            "flags": 4194400,
                                            "transformFlags": 0,
                                            "start": 109,
                                            "end": 113
                                        },
                                        "colonToken": {
                                            "kind": 21,
                                            "flags": 64,
                                            "transformFlags": 0,
                                            "start": 113,
                                            "end": 114
                                        },
                                        "statements": [
                                            {
                                                "kind": 150,
                                                "breakKeyword": {
                                                    "kind": 37757005,
                                                    "flags": 81,
                                                    "transformFlags": 0,
                                                    "start": 114,
                                                    "end": 135
                                                },
                                                "label": null,
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 114,
                                                "end": 136
                                            }
                                        ],
                                        "flags": 16,
                                        "transformFlags": 0,
                                        "start": 100,
                                        "end": 136
                                    }
                                ],
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 46,
                                "end": 136
                            },
                            "flags": 81,
                            "transformFlags": 0,
                            "start": 31,
                            "end": 140
                        },
                        {
                            "kind": 176,
                            "declareKeyword": null,
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 65,
                                "transformFlags": 0,
                                "start": 140,
                                "end": 151
                            },
                            "asteriskToken": null,
                            "name": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 151,
                                "end": 153
                            },
                            "typeParameters": {
                                "kind": 307,
                                "declarations": {
                                    "kind": 337,
                                    "parameters": [
                                        {
                                            "kind": 146,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "A",
                                                "rawText": "A",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 154,
                                                "end": 155
                                            },
                                            "type": {
                                                "kind": 139,
                                                "bitwiseOrToken": null,
                                                "bitwiseAndToken": null,
                                                "type": {
                                                    "kind": 134217967,
                                                    "text": "a",
                                                    "rawText": "'a'",
                                                    "flags": 6291520,
                                                    "transformFlags": 0,
                                                    "start": 156,
                                                    "end": 160
                                                },
                                                "flags": 2097152,
                                                "transformFlags": 0,
                                                "start": 156,
                                                "end": 160
                                            },
                                            "assignToken": null,
                                            "defaultType": null,
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 154,
                                            "end": 160
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 154,
                                    "end": 160
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 153,
                                "end": 161
                            },
                            "formalParameterList": {
                                "kind": 214,
                                "formalParameters": [
                                    {
                                        "kind": 281,
                                        "ellipsisToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 162,
                                            "end": 163
                                        },
                                        "optionalToken": null,
                                        "type": {
                                            "kind": 139,
                                            "bitwiseOrToken": null,
                                            "bitwiseAndToken": null,
                                            "type": {
                                                "kind": 144,
                                                "typeName": {
                                                    "kind": 134299649,
                                                    "text": "A",
                                                    "rawText": "A",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 164,
                                                    "end": 166
                                                },
                                                "typeParameters": null,
                                                "flags": 2097152,
                                                "transformFlags": 0,
                                                "start": 164,
                                                "end": 166
                                            },
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 164,
                                            "end": 166
                                        },
                                        "right": null,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 162,
                                        "end": 166
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 162,
                                "end": 166
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
                                                "start": 175,
                                                "end": 180
                                            },
                                            "expression": {
                                                "kind": 198,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "a",
                                                    "rawText": "a",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 182,
                                                    "end": 183
                                                },
                                                "operatorToken": {
                                                    "kind": 34620,
                                                    "flags": 96,
                                                    "transformFlags": 16,
                                                    "start": 183,
                                                    "end": 187
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "a",
                                                    "rawText": "'a'",
                                                    "flags": 4194400,
                                                    "transformFlags": 0,
                                                    "start": 187,
                                                    "end": 191
                                                },
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 182,
                                                "end": 191
                                            },
                                            "consequent": {
                                                "kind": 124,
                                                "block": {
                                                    "kind": 249,
                                                    "statements": [],
                                                    "flags": 16,
                                                    "transformFlags": 0,
                                                    "start": 193,
                                                    "end": 193
                                                },
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 192,
                                                "end": 195
                                            },
                                            "elseKeyword": null,
                                            "alternate": null,
                                            "flags": 81,
                                            "transformFlags": 0,
                                            "start": 175,
                                            "end": 195
                                        }
                                    ],
                                    "flags": 33,
                                    "transformFlags": 0,
                                    "start": 175,
                                    "end": 195
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 173,
                                "end": 197
                            },
                            "returnType": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 138477615,
                                    "flags": 2097216,
                                    "transformFlags": 0,
                                    "start": 168,
                                    "end": 173
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 168,
                                "end": 173
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 140,
                            "end": 197
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 31,
                    "end": 197
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 29,
                "end": 200
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 200
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 200,
                "end": 210
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "b1",
                "rawText": "b1",
                "flags": 96,
                "transformFlags": 0,
                "start": 210,
                "end": 213
            },
            "typeParameters": {
                "kind": 307,
                "declarations": {
                    "kind": 337,
                    "parameters": [
                        {
                            "kind": 146,
                            "name": {
                                "kind": 134299649,
                                "text": "A",
                                "rawText": "A",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 214,
                                "end": 215
                            },
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 134217967,
                                    "text": "a",
                                    "rawText": "'a'",
                                    "flags": 6291520,
                                    "transformFlags": 0,
                                    "start": 216,
                                    "end": 220
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 216,
                                "end": 220
                            },
                            "assignToken": null,
                            "defaultType": null,
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 214,
                            "end": 220
                        },
                        {
                            "kind": 146,
                            "name": {
                                "kind": 134299649,
                                "text": "B",
                                "rawText": "B",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 221,
                                "end": 223
                            },
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 144,
                                    "typeName": {
                                        "kind": 134299649,
                                        "text": "A",
                                        "rawText": "A",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 224,
                                        "end": 226
                                    },
                                    "typeParameters": null,
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 224,
                                    "end": 226
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 224,
                                "end": 226
                            },
                            "assignToken": null,
                            "defaultType": null,
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 221,
                            "end": 226
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 214,
                    "end": 226
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 213,
                "end": 227
            },
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 228,
                            "end": 229
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 144,
                                "typeName": {
                                    "kind": 134299649,
                                    "text": "B",
                                    "rawText": "B",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 230,
                                    "end": 232
                                },
                                "typeParameters": null,
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 230,
                                "end": 232
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 230,
                            "end": 232
                        },
                        "right": null,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 228,
                        "end": 232
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 228,
                "end": 232
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
                                "start": 241,
                                "end": 246
                            },
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 248,
                                    "end": 249
                                },
                                "operatorToken": {
                                    "kind": 34620,
                                    "flags": 96,
                                    "transformFlags": 16,
                                    "start": 249,
                                    "end": 253
                                },
                                "right": {
                                    "kind": 201392131,
                                    "text": "b",
                                    "rawText": "'b'",
                                    "flags": 4194400,
                                    "transformFlags": 0,
                                    "start": 253,
                                    "end": 257
                                },
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 248,
                                "end": 257
                            },
                            "consequent": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [],
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 259,
                                    "end": 259
                                },
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 258,
                                "end": 261
                            },
                            "elseKeyword": null,
                            "alternate": null,
                            "flags": 81,
                            "transformFlags": 0,
                            "start": 241,
                            "end": 261
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 241,
                    "end": 261
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 239,
                "end": 300
            },
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 138477615,
                    "flags": 2097216,
                    "transformFlags": 0,
                    "start": 234,
                    "end": 239
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 234,
                "end": 239
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 200,
            "end": 300
        }
    ],
    "isModule": false,
    "source": "function c<X: T>(x: $Keys<X>) {\n  switch (x) {\n    case 'p':\n      break;\n    case 'q':\n      break;\n    case 'r': // error\n      break;\n  }\n\n\nfunction a<A: 'a'>(a: A): void {\n  if (a === 'a'){ }\n}\n\n}\n\nfunction b1<A: 'a', B: A>(b: B): void {\n  if (b === 'b'){ } // error 'b' not compatible with 'a'\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 300
}
```

### Printed

```javascript

function c<X: T>(x: $Keys<X>) {
  switch (x) {
    case '\'p\'':
      break ;
    case '\'q\'':
      break ;
    case '\'r\'':
      break ;
  }
  function a<A: '\'a\''>(a: A): void  {
    if (a === '\'a\'') {}
  }
}
function b1<A: '\'a\'',
B: A>(b: B): void  {
  if (b === '\'b\'') {}
}

```

### Diagnostics

```javascript
✔ No errors
```

