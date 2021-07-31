# Kataw parser test case

## Input

`````js
const foo = new Promise((resolve, reject) => {
  readFile('foo.txt', function(err, result) {
    if (err) {
      reject(err);
    } else {
      resolve(result);
    }
  });
});

const result = Promise.resolve(foo);
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
                                        "asyncKeyword": null,
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
                                                    "start": 25,
                                                    "end": 32
                                                },
                                                {
                                                    "kind": 134299649,
                                                    "text": "reject",
                                                    "rawText": "reject",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 33,
                                                    "end": 40
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 25,
                                            "end": 41
                                        },
                                        "returnType": null,
                                        "arrowToken": {
                                            "kind": 10,
                                            "flags": 64,
                                            "transformFlags": 0,
                                            "start": 41,
                                            "end": 44
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
                                                                "start": 46,
                                                                "end": 57
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
                                                                        "start": 58,
                                                                        "end": 67
                                                                    },
                                                                    {
                                                                        "kind": 177,
                                                                        "asyncKeyword": null,
                                                                        "functionKeyword": {
                                                                            "kind": 37822554,
                                                                            "flags": 64,
                                                                            "transformFlags": 0,
                                                                            "start": 68,
                                                                            "end": 77
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
                                                                                    "start": 78,
                                                                                    "end": 81
                                                                                },
                                                                                {
                                                                                    "kind": 134299649,
                                                                                    "text": "result",
                                                                                    "rawText": "result",
                                                                                    "flags": 96,
                                                                                    "transformFlags": 0,
                                                                                    "start": 82,
                                                                                    "end": 89
                                                                                }
                                                                            ],
                                                                            "trailingComma": false,
                                                                            "flags": 32,
                                                                            "transformFlags": 0,
                                                                            "start": 78,
                                                                            "end": 89
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
                                                                                            "start": 92,
                                                                                            "end": 99
                                                                                        },
                                                                                        "expression": {
                                                                                            "kind": 134299649,
                                                                                            "text": "err",
                                                                                            "rawText": "err",
                                                                                            "flags": 96,
                                                                                            "transformFlags": 0,
                                                                                            "start": 101,
                                                                                            "end": 104
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
                                                                                                                "start": 107,
                                                                                                                "end": 120
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
                                                                                                                        "start": 121,
                                                                                                                        "end": 124
                                                                                                                    }
                                                                                                                ],
                                                                                                                "trailingComma": false,
                                                                                                                "flags": 32,
                                                                                                                "transformFlags": 0,
                                                                                                                "start": 121,
                                                                                                                "end": 124
                                                                                                            },
                                                                                                            "flags": 32,
                                                                                                            "transformFlags": 1,
                                                                                                            "start": 107,
                                                                                                            "end": 125
                                                                                                        },
                                                                                                        "flags": 16,
                                                                                                        "transformFlags": 4096,
                                                                                                        "start": 107,
                                                                                                        "end": 126
                                                                                                    }
                                                                                                ],
                                                                                                "flags": 17,
                                                                                                "transformFlags": 0,
                                                                                                "start": 107,
                                                                                                "end": 126
                                                                                            },
                                                                                            "flags": 16,
                                                                                            "transformFlags": 0,
                                                                                            "start": 105,
                                                                                            "end": 132
                                                                                        },
                                                                                        "elseKeyword": {
                                                                                            "kind": 4194389,
                                                                                            "flags": 64,
                                                                                            "transformFlags": 0,
                                                                                            "start": 132,
                                                                                            "end": 137
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
                                                                                                                "start": 139,
                                                                                                                "end": 153
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
                                                                                                                        "start": 154,
                                                                                                                        "end": 160
                                                                                                                    }
                                                                                                                ],
                                                                                                                "trailingComma": false,
                                                                                                                "flags": 32,
                                                                                                                "transformFlags": 0,
                                                                                                                "start": 154,
                                                                                                                "end": 160
                                                                                                            },
                                                                                                            "flags": 32,
                                                                                                            "transformFlags": 1,
                                                                                                            "start": 139,
                                                                                                            "end": 161
                                                                                                        },
                                                                                                        "flags": 16,
                                                                                                        "transformFlags": 4096,
                                                                                                        "start": 139,
                                                                                                        "end": 162
                                                                                                    }
                                                                                                ],
                                                                                                "flags": 17,
                                                                                                "transformFlags": 0,
                                                                                                "start": 139,
                                                                                                "end": 162
                                                                                            },
                                                                                            "flags": 16,
                                                                                            "transformFlags": 0,
                                                                                            "start": 137,
                                                                                            "end": 168
                                                                                        },
                                                                                        "flags": 81,
                                                                                        "transformFlags": 0,
                                                                                        "start": 92,
                                                                                        "end": 168
                                                                                    }
                                                                                ],
                                                                                "flags": 33,
                                                                                "transformFlags": 0,
                                                                                "start": 92,
                                                                                "end": 168
                                                                            },
                                                                            "flags": 32,
                                                                            "transformFlags": 0,
                                                                            "start": 90,
                                                                            "end": 172
                                                                        },
                                                                        "returnType": null,
                                                                        "flags": 32,
                                                                        "transformFlags": 0,
                                                                        "start": 68,
                                                                        "end": 172
                                                                    }
                                                                ],
                                                                "trailingComma": false,
                                                                "flags": 32,
                                                                "transformFlags": 0,
                                                                "start": 58,
                                                                "end": 172
                                                            },
                                                            "flags": 32,
                                                            "transformFlags": 1,
                                                            "start": 46,
                                                            "end": 173
                                                        },
                                                        "flags": 16,
                                                        "transformFlags": 4096,
                                                        "start": 46,
                                                        "end": 174
                                                    }
                                                ],
                                                "flags": 33,
                                                "transformFlags": 0,
                                                "start": 46,
                                                "end": 174
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 44,
                                            "end": 176
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 24,
                                        "end": 176
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 24,
                                "end": 176
                            },
                            "flags": 96,
                            "transformFlags": 2048,
                            "start": 11,
                            "end": 177
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 5,
                        "end": 177
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 5,
                "end": 177
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 0,
            "end": 178
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "transformFlags": 0,
                "start": 178,
                "end": 185
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
                            "start": 185,
                            "end": 192
                        },
                        "type": null,
                        "initializer": {
                            "kind": 131,
                            "expression": {
                                "kind": 129,
                                "member": {
                                    "kind": 134299649,
                                    "text": "Promise",
                                    "rawText": "Promise",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 194,
                                    "end": 202
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "resolve",
                                    "rawText": "resolve",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 203,
                                    "end": 210
                                },
                                "flags": 96,
                                "transformFlags": 2,
                                "start": 194,
                                "end": 210
                            },
                            "argumentList": {
                                "kind": 256,
                                "elements": [
                                    {
                                        "kind": 134299649,
                                        "text": "foo",
                                        "rawText": "foo",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 211,
                                        "end": 214
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 211,
                                "end": 214
                            },
                            "flags": 32,
                            "transformFlags": 1,
                            "start": 194,
                            "end": 215
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 185,
                        "end": 215
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 185,
                "end": 215
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 178,
            "end": 216
        }
    ],
    "isModule": false,
    "source": "const foo = new Promise((resolve, reject) => {\n  readFile('foo.txt', function(err, result) {\n    if (err) {\n      reject(err);\n    } else {\n      resolve(result);\n    }\n  });\n});\n\nconst result = Promise.resolve(foo);",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 216
}
```

### Printed

```javascript
const foo = new Promise((resolve, reject) => {
    readFile("'foo.txt'", function (err, result) {
        if (err) {
            reject(err);
          }
        else  {
            resolve(result);
          }
      });
  });
const result = Promise.resolve(foo);

```

### Diagnostics

```javascript
✔ No errors
```

