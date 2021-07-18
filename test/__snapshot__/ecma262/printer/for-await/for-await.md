# Kataw parser test case

## Input

`````js
async function foo() {
  for await (num of asyncIterable) {
    console.log(num);
  }
  for await (num of asyncGeneratorFunc()) {
    console.log(num);
  }
}

(async () => {
  for await (num of asyncIterable) {
    console.log(num);
  }
  for await (const x of delegate_yield()) {
    x;
  }
})();

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
                "text": "foo",
                "rawText": "foo",
                "flags": 96,
                "transformFlags": 0,
                "start": 14,
                "end": 18
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 19,
                "end": 19
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 167,
                            "forKeyword": {
                                "kind": 37757017,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 22,
                                "end": 28
                            },
                            "awaitKeyword": {
                                "kind": 82196,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 28,
                                "end": 34
                            },
                            "initializer": {
                                "kind": 134299649,
                                "text": "num",
                                "rawText": "num",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 36,
                                "end": 39
                            },
                            "ofKeyword": {
                                "kind": 16793717,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 39,
                                "end": 42
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "asyncIterable",
                                "rawText": "asyncIterable",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 42,
                                "end": 56
                            },
                            "statement": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 131,
                                                "expression": {
                                                    "kind": 129,
                                                    "member": {
                                                        "kind": 134299649,
                                                        "text": "console",
                                                        "rawText": "console",
                                                        "flags": 97,
                                                        "transformFlags": 0,
                                                        "start": 59,
                                                        "end": 71
                                                    },
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "log",
                                                        "rawText": "log",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 72,
                                                        "end": 75
                                                    },
                                                    "flags": 97,
                                                    "transformFlags": 2,
                                                    "start": 59,
                                                    "end": 75
                                                },
                                                "argumentList": {
                                                    "kind": 256,
                                                    "elements": [
                                                        {
                                                            "kind": 134299649,
                                                            "text": "num",
                                                            "rawText": "num",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 76,
                                                            "end": 79
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 76,
                                                    "end": 79
                                                },
                                                "flags": 32,
                                                "transformFlags": 1,
                                                "start": 59,
                                                "end": 80
                                            },
                                            "flags": 16,
                                            "transformFlags": 4096,
                                            "start": 59,
                                            "end": 81
                                        }
                                    ],
                                    "flags": 17,
                                    "transformFlags": 0,
                                    "start": 59,
                                    "end": 81
                                },
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 57,
                                "end": 85
                            },
                            "flags": 81,
                            "transformFlags": 0,
                            "start": 22,
                            "end": 85
                        },
                        {
                            "kind": 167,
                            "forKeyword": {
                                "kind": 37757017,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 85,
                                "end": 91
                            },
                            "awaitKeyword": {
                                "kind": 82196,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 91,
                                "end": 97
                            },
                            "initializer": {
                                "kind": 134299649,
                                "text": "num",
                                "rawText": "num",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 99,
                                "end": 102
                            },
                            "ofKeyword": {
                                "kind": 16793717,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 102,
                                "end": 105
                            },
                            "expression": {
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "asyncGeneratorFunc",
                                    "rawText": "asyncGeneratorFunc",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 105,
                                    "end": 124
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 125,
                                    "end": 125
                                },
                                "flags": 32,
                                "transformFlags": 1,
                                "start": 105,
                                "end": 126
                            },
                            "statement": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 131,
                                                "expression": {
                                                    "kind": 129,
                                                    "member": {
                                                        "kind": 134299649,
                                                        "text": "console",
                                                        "rawText": "console",
                                                        "flags": 97,
                                                        "transformFlags": 0,
                                                        "start": 129,
                                                        "end": 141
                                                    },
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "log",
                                                        "rawText": "log",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 142,
                                                        "end": 145
                                                    },
                                                    "flags": 97,
                                                    "transformFlags": 2,
                                                    "start": 129,
                                                    "end": 145
                                                },
                                                "argumentList": {
                                                    "kind": 256,
                                                    "elements": [
                                                        {
                                                            "kind": 134299649,
                                                            "text": "num",
                                                            "rawText": "num",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 146,
                                                            "end": 149
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 146,
                                                    "end": 149
                                                },
                                                "flags": 32,
                                                "transformFlags": 1,
                                                "start": 129,
                                                "end": 150
                                            },
                                            "flags": 16,
                                            "transformFlags": 4096,
                                            "start": 129,
                                            "end": 151
                                        }
                                    ],
                                    "flags": 17,
                                    "transformFlags": 0,
                                    "start": 129,
                                    "end": 151
                                },
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 127,
                                "end": 155
                            },
                            "flags": 81,
                            "transformFlags": 0,
                            "start": 85,
                            "end": 155
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 22,
                    "end": 155
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 20,
                "end": 157
            },
            "returnType": null,
            "flags": 144,
            "transformFlags": 0,
            "start": 0,
            "end": 157
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 121,
                    "expression": {
                        "kind": 271,
                        "asyncKeyword": {
                            "kind": 82031,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 160,
                            "end": 165
                        },
                        "typeParameters": null,
                        "arrowPatameterList": {
                            "kind": 342,
                            "parameters": [],
                            "trailingComma": false,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 167,
                            "end": 167
                        },
                        "returnType": null,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 168,
                            "end": 171
                        },
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [
                                    {
                                        "kind": 167,
                                        "forKeyword": {
                                            "kind": 37757017,
                                            "flags": 81,
                                            "transformFlags": 0,
                                            "start": 173,
                                            "end": 179
                                        },
                                        "awaitKeyword": {
                                            "kind": 82196,
                                            "flags": 64,
                                            "transformFlags": 0,
                                            "start": 179,
                                            "end": 185
                                        },
                                        "initializer": {
                                            "kind": 134299649,
                                            "text": "num",
                                            "rawText": "num",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 187,
                                            "end": 190
                                        },
                                        "ofKeyword": {
                                            "kind": 16793717,
                                            "flags": 64,
                                            "transformFlags": 0,
                                            "start": 190,
                                            "end": 193
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "asyncIterable",
                                            "rawText": "asyncIterable",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 193,
                                            "end": 207
                                        },
                                        "statement": {
                                            "kind": 124,
                                            "block": {
                                                "kind": 249,
                                                "statements": [
                                                    {
                                                        "kind": 120,
                                                        "expression": {
                                                            "kind": 131,
                                                            "expression": {
                                                                "kind": 129,
                                                                "member": {
                                                                    "kind": 134299649,
                                                                    "text": "console",
                                                                    "rawText": "console",
                                                                    "flags": 97,
                                                                    "transformFlags": 0,
                                                                    "start": 210,
                                                                    "end": 222
                                                                },
                                                                "expression": {
                                                                    "kind": 134299649,
                                                                    "text": "log",
                                                                    "rawText": "log",
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 223,
                                                                    "end": 226
                                                                },
                                                                "flags": 97,
                                                                "transformFlags": 2,
                                                                "start": 210,
                                                                "end": 226
                                                            },
                                                            "argumentList": {
                                                                "kind": 256,
                                                                "elements": [
                                                                    {
                                                                        "kind": 134299649,
                                                                        "text": "num",
                                                                        "rawText": "num",
                                                                        "flags": 96,
                                                                        "transformFlags": 0,
                                                                        "start": 227,
                                                                        "end": 230
                                                                    }
                                                                ],
                                                                "trailingComma": false,
                                                                "flags": 32,
                                                                "transformFlags": 0,
                                                                "start": 227,
                                                                "end": 230
                                                            },
                                                            "flags": 32,
                                                            "transformFlags": 1,
                                                            "start": 210,
                                                            "end": 231
                                                        },
                                                        "flags": 16,
                                                        "transformFlags": 4096,
                                                        "start": 210,
                                                        "end": 232
                                                    }
                                                ],
                                                "flags": 17,
                                                "transformFlags": 0,
                                                "start": 210,
                                                "end": 232
                                            },
                                            "flags": 16,
                                            "transformFlags": 0,
                                            "start": 208,
                                            "end": 236
                                        },
                                        "flags": 81,
                                        "transformFlags": 0,
                                        "start": 173,
                                        "end": 236
                                    },
                                    {
                                        "kind": 167,
                                        "forKeyword": {
                                            "kind": 37757017,
                                            "flags": 81,
                                            "transformFlags": 0,
                                            "start": 236,
                                            "end": 242
                                        },
                                        "awaitKeyword": {
                                            "kind": 82196,
                                            "flags": 64,
                                            "transformFlags": 0,
                                            "start": 242,
                                            "end": 248
                                        },
                                        "initializer": {
                                            "kind": 162,
                                            "lexicalKeyword": {
                                                "kind": 37757004,
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 250,
                                                "end": 255
                                            },
                                            "binding": {
                                                "kind": 151,
                                                "bindingList": [
                                                    {
                                                        "kind": 190,
                                                        "binding": {
                                                            "kind": 134299649,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 255,
                                                            "end": 257
                                                        },
                                                        "type": null,
                                                        "initializer": null,
                                                        "flags": 16,
                                                        "transformFlags": 4224,
                                                        "start": 255,
                                                        "end": 257
                                                    }
                                                ],
                                                "flags": 16777232,
                                                "transformFlags": 0,
                                                "start": 255,
                                                "end": 257
                                            },
                                            "flags": 33554448,
                                            "transformFlags": 0,
                                            "start": 236,
                                            "end": 257
                                        },
                                        "ofKeyword": {
                                            "kind": 16793717,
                                            "flags": 64,
                                            "transformFlags": 0,
                                            "start": 257,
                                            "end": 260
                                        },
                                        "expression": {
                                            "kind": 131,
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "delegate_yield",
                                                "rawText": "delegate_yield",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 260,
                                                "end": 275
                                            },
                                            "argumentList": {
                                                "kind": 256,
                                                "elements": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 276,
                                                "end": 276
                                            },
                                            "flags": 32,
                                            "transformFlags": 1,
                                            "start": 260,
                                            "end": 277
                                        },
                                        "statement": {
                                            "kind": 124,
                                            "block": {
                                                "kind": 249,
                                                "statements": [
                                                    {
                                                        "kind": 120,
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 97,
                                                            "transformFlags": 0,
                                                            "start": 280,
                                                            "end": 286
                                                        },
                                                        "flags": 16,
                                                        "transformFlags": 4096,
                                                        "start": 280,
                                                        "end": 287
                                                    }
                                                ],
                                                "flags": 17,
                                                "transformFlags": 0,
                                                "start": 280,
                                                "end": 287
                                            },
                                            "flags": 16,
                                            "transformFlags": 0,
                                            "start": 278,
                                            "end": 291
                                        },
                                        "flags": 81,
                                        "transformFlags": 0,
                                        "start": 236,
                                        "end": 291
                                    }
                                ],
                                "flags": 33,
                                "transformFlags": 0,
                                "start": 173,
                                "end": 291
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 171,
                            "end": 293
                        },
                        "flags": 288,
                        "transformFlags": 0,
                        "start": 160,
                        "end": 293
                    },
                    "flags": 157,
                    "transformFlags": 0,
                    "start": 33,
                    "end": 294
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 295,
                    "end": 295
                },
                "flags": 32,
                "transformFlags": 1,
                "start": 157,
                "end": 296
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 157,
            "end": 297
        }
    ],
    "isModule": false,
    "source": "async function foo() {\n  for await (num of asyncIterable) {\n    console.log(num);\n  }\n  for await (num of asyncGeneratorFunc()) {\n    console.log(num);\n  }\n}\n\n(async () => {\n  for await (num of asyncIterable) {\n    console.log(num);\n  }\n  for await (const x of delegate_yield()) {\n    x;\n  }\n})();\n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 298
}
```

### Printed

```javascript
async function foo() {
  for await (num of asyncIterable) {
      console.log(num);
    }
  for await (num of asyncGeneratorFunc()) {
      console.log(num);
    }
}
(async () => {
    for await (num of asyncIterable) {
        console.log(num);
      }
    for await (const x of delegate_yield()) {
        x;
      }
  })();

```

### Diagnostics

```javascript
✔ No errors
```

