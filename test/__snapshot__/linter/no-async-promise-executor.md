# Kataw parser test case

## Input

`````js
const foo = new Promise(async (resolve, reject) => {
  readFile('foo.txt', function(err, result) {
    if (err) {
      reject(err);
    } else {
      resolve(result);
    }
  });
});

const result = new Promise(async (resolve, reject) => {
  resolve(await foo);
});

`````

## Options

### Parser Options

`````js
{ lint: { noAsyncPromiseExecutor: true } }
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 5
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 5,
                            "end": 9
                        },
                        "type": null,
                        "initializer": {
                            "kind": 210,
                            "newKeyword": {
                                "kind": 138477661,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 11,
                                "end": 15
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "Promise",
                                "rawText": "Promise",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 15,
                                "end": 23
                            },
                            "argumentList": {
                                "kind": 256,
                                "elements": [
                                    {
                                        "kind": 271,
                                        "asyncKeyword": {
                                            "kind": 82031,
                                            "flags": 64,
                                            "transformFlags": 0,
                                            "start": 24,
                                            "end": 29
                                        },
                                        "typeParameters": null,
                                        "arrowPatameterList": {
                                            "kind": 342,
                                            "parameters": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "resolve",
                                                    "rawText": "resolve",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 31,
                                                    "end": 38
                                                },
                                                {
                                                    "kind": 134299649,
                                                    "text": "reject",
                                                    "rawText": "reject",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 39,
                                                    "end": 46
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 31,
                                            "end": 47
                                        },
                                        "returnType": null,
                                        "arrowToken": {
                                            "kind": 10,
                                            "flags": 64,
                                            "transformFlags": 0,
                                            "start": 47,
                                            "end": 50
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
                                                                "text": "readFile",
                                                                "rawText": "readFile",
                                                                "flags": 97,
                                                                "transformFlags": 0,
                                                                "start": 52,
                                                                "end": 63
                                                            },
                                                            "argumentList": {
                                                                "kind": 256,
                                                                "elements": [
                                                                    {
                                                                        "kind": 201392131,
                                                                        "text": "foo.txt",
                                                                        "rawText": "'foo.txt'",
                                                                        "flags": 4194400,
                                                                        "transformFlags": 0,
                                                                        "start": 64,
                                                                        "end": 73
                                                                    },
                                                                    {
                                                                        "kind": 177,
                                                                        "asyncKeyword": null,
                                                                        "functionKeyword": {
                                                                            "kind": 37822554,
                                                                            "flags": 64,
                                                                            "transformFlags": 0,
                                                                            "start": 74,
                                                                            "end": 83
                                                                        },
                                                                        "asteriskToken": null,
                                                                        "name": null,
                                                                        "typeParameters": null,
                                                                        "formalParameterList": {
                                                                            "kind": 214,
                                                                            "formalParameters": [
                                                                                {
                                                                                    "kind": 134299649,
                                                                                    "text": "err",
                                                                                    "rawText": "err",
                                                                                    "flags": 96,
                                                                                    "transformFlags": 0,
                                                                                    "start": 84,
                                                                                    "end": 87
                                                                                },
                                                                                {
                                                                                    "kind": 134299649,
                                                                                    "text": "result",
                                                                                    "rawText": "result",
                                                                                    "flags": 96,
                                                                                    "transformFlags": 0,
                                                                                    "start": 88,
                                                                                    "end": 95
                                                                                }
                                                                            ],
                                                                            "trailingComma": false,
                                                                            "flags": 32,
                                                                            "transformFlags": 0,
                                                                            "start": 84,
                                                                            "end": 95
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
                                                                                            "start": 98,
                                                                                            "end": 105
                                                                                        },
                                                                                        "expression": {
                                                                                            "kind": 134299649,
                                                                                            "text": "err",
                                                                                            "rawText": "err",
                                                                                            "flags": 96,
                                                                                            "transformFlags": 0,
                                                                                            "start": 107,
                                                                                            "end": 110
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
                                                                                                                "text": "reject",
                                                                                                                "rawText": "reject",
                                                                                                                "flags": 97,
                                                                                                                "transformFlags": 0,
                                                                                                                "start": 113,
                                                                                                                "end": 126
                                                                                                            },
                                                                                                            "argumentList": {
                                                                                                                "kind": 256,
                                                                                                                "elements": [
                                                                                                                    {
                                                                                                                        "kind": 134299649,
                                                                                                                        "text": "err",
                                                                                                                        "rawText": "err",
                                                                                                                        "flags": 96,
                                                                                                                        "transformFlags": 0,
                                                                                                                        "start": 127,
                                                                                                                        "end": 130
                                                                                                                    }
                                                                                                                ],
                                                                                                                "trailingComma": false,
                                                                                                                "flags": 32,
                                                                                                                "transformFlags": 0,
                                                                                                                "start": 127,
                                                                                                                "end": 130
                                                                                                            },
                                                                                                            "flags": 32,
                                                                                                            "transformFlags": 1,
                                                                                                            "start": 113,
                                                                                                            "end": 131
                                                                                                        },
                                                                                                        "flags": 16,
                                                                                                        "transformFlags": 4096,
                                                                                                        "start": 113,
                                                                                                        "end": 132
                                                                                                    }
                                                                                                ],
                                                                                                "flags": 17,
                                                                                                "transformFlags": 0,
                                                                                                "start": 113,
                                                                                                "end": 132
                                                                                            },
                                                                                            "flags": 16,
                                                                                            "transformFlags": 0,
                                                                                            "start": 111,
                                                                                            "end": 138
                                                                                        },
                                                                                        "elseKeyword": {
                                                                                            "kind": 4194389,
                                                                                            "flags": 64,
                                                                                            "transformFlags": 0,
                                                                                            "start": 138,
                                                                                            "end": 143
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
                                                                                                                "text": "resolve",
                                                                                                                "rawText": "resolve",
                                                                                                                "flags": 97,
                                                                                                                "transformFlags": 0,
                                                                                                                "start": 145,
                                                                                                                "end": 159
                                                                                                            },
                                                                                                            "argumentList": {
                                                                                                                "kind": 256,
                                                                                                                "elements": [
                                                                                                                    {
                                                                                                                        "kind": 134299649,
                                                                                                                        "text": "result",
                                                                                                                        "rawText": "result",
                                                                                                                        "flags": 96,
                                                                                                                        "transformFlags": 0,
                                                                                                                        "start": 160,
                                                                                                                        "end": 166
                                                                                                                    }
                                                                                                                ],
                                                                                                                "trailingComma": false,
                                                                                                                "flags": 32,
                                                                                                                "transformFlags": 0,
                                                                                                                "start": 160,
                                                                                                                "end": 166
                                                                                                            },
                                                                                                            "flags": 32,
                                                                                                            "transformFlags": 1,
                                                                                                            "start": 145,
                                                                                                            "end": 167
                                                                                                        },
                                                                                                        "flags": 16,
                                                                                                        "transformFlags": 4096,
                                                                                                        "start": 145,
                                                                                                        "end": 168
                                                                                                    }
                                                                                                ],
                                                                                                "flags": 17,
                                                                                                "transformFlags": 0,
                                                                                                "start": 145,
                                                                                                "end": 168
                                                                                            },
                                                                                            "flags": 16,
                                                                                            "transformFlags": 0,
                                                                                            "start": 143,
                                                                                            "end": 174
                                                                                        },
                                                                                        "flags": 81,
                                                                                        "transformFlags": 0,
                                                                                        "start": 98,
                                                                                        "end": 174
                                                                                    }
                                                                                ],
                                                                                "flags": 33,
                                                                                "transformFlags": 0,
                                                                                "start": 98,
                                                                                "end": 174
                                                                            },
                                                                            "flags": 32,
                                                                            "transformFlags": 0,
                                                                            "start": 96,
                                                                            "end": 178
                                                                        },
                                                                        "returnType": null,
                                                                        "flags": 32,
                                                                        "transformFlags": 0,
                                                                        "start": 74,
                                                                        "end": 178
                                                                    }
                                                                ],
                                                                "trailingComma": false,
                                                                "flags": 32,
                                                                "transformFlags": 0,
                                                                "start": 64,
                                                                "end": 178
                                                            },
                                                            "flags": 32,
                                                            "transformFlags": 1,
                                                            "start": 52,
                                                            "end": 179
                                                        },
                                                        "flags": 16,
                                                        "transformFlags": 4096,
                                                        "start": 52,
                                                        "end": 180
                                                    }
                                                ],
                                                "flags": 33,
                                                "transformFlags": 0,
                                                "start": 52,
                                                "end": 180
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 50,
                                            "end": 182
                                        },
                                        "flags": 288,
                                        "transformFlags": 0,
                                        "start": 24,
                                        "end": 182
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 24,
                                "end": 182
                            },
                            "flags": 96,
                            "transformFlags": 2048,
                            "start": 11,
                            "end": 183
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 5,
                        "end": 183
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 5,
                "end": 183
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 0,
            "end": 184
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "transformFlags": 0,
                "start": 184,
                "end": 191
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "result",
                            "rawText": "result",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 191,
                            "end": 198
                        },
                        "type": null,
                        "initializer": {
                            "kind": 210,
                            "newKeyword": {
                                "kind": 138477661,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 200,
                                "end": 204
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "Promise",
                                "rawText": "Promise",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 204,
                                "end": 212
                            },
                            "argumentList": {
                                "kind": 256,
                                "elements": [
                                    {
                                        "kind": 271,
                                        "asyncKeyword": {
                                            "kind": 82031,
                                            "flags": 64,
                                            "transformFlags": 0,
                                            "start": 213,
                                            "end": 218
                                        },
                                        "typeParameters": null,
                                        "arrowPatameterList": {
                                            "kind": 342,
                                            "parameters": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "resolve",
                                                    "rawText": "resolve",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 220,
                                                    "end": 227
                                                },
                                                {
                                                    "kind": 134299649,
                                                    "text": "reject",
                                                    "rawText": "reject",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 228,
                                                    "end": 235
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 220,
                                            "end": 236
                                        },
                                        "returnType": null,
                                        "arrowToken": {
                                            "kind": 10,
                                            "flags": 64,
                                            "transformFlags": 0,
                                            "start": 236,
                                            "end": 239
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
                                                                "text": "resolve",
                                                                "rawText": "resolve",
                                                                "flags": 97,
                                                                "transformFlags": 0,
                                                                "start": 241,
                                                                "end": 251
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
                                                                            "start": 252,
                                                                            "end": 257
                                                                        },
                                                                        "expression": {
                                                                            "kind": 134299649,
                                                                            "text": "foo",
                                                                            "rawText": "foo",
                                                                            "flags": 96,
                                                                            "transformFlags": 0,
                                                                            "start": 257,
                                                                            "end": 261
                                                                        },
                                                                        "flags": 32,
                                                                        "transformFlags": 4096,
                                                                        "start": 252,
                                                                        "end": 261
                                                                    }
                                                                ],
                                                                "trailingComma": false,
                                                                "flags": 32,
                                                                "transformFlags": 0,
                                                                "start": 252,
                                                                "end": 261
                                                            },
                                                            "flags": 32,
                                                            "transformFlags": 1,
                                                            "start": 241,
                                                            "end": 262
                                                        },
                                                        "flags": 16,
                                                        "transformFlags": 4096,
                                                        "start": 241,
                                                        "end": 263
                                                    }
                                                ],
                                                "flags": 33,
                                                "transformFlags": 0,
                                                "start": 241,
                                                "end": 263
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 239,
                                            "end": 265
                                        },
                                        "flags": 288,
                                        "transformFlags": 0,
                                        "start": 213,
                                        "end": 265
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 213,
                                "end": 265
                            },
                            "flags": 96,
                            "transformFlags": 2048,
                            "start": 200,
                            "end": 266
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 191,
                        "end": 266
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 191,
                "end": 266
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 184,
            "end": 267
        }
    ],
    "isModule": false,
    "source": "const foo = new Promise(async (resolve, reject) => {\n  readFile('foo.txt', function(err, result) {\n    if (err) {\n      reject(err);\n    } else {\n      resolve(result);\n    }\n  });\n});\n\nconst result = new Promise(async (resolve, reject) => {\n  resolve(await foo);\n});\n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 268
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Promise executor functions should not be async - start: 183, end: 184
✖ Promise executor functions should not be async - start: 266, end: 267

```

