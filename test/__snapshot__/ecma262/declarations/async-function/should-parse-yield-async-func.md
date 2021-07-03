# Kataw parser test case

## Input

`````js
const f = async function * (source, block, opts) {
      for await (const entry of source) {
        yield async function () {
          const cid = await persist(entry.content.serialize(), block, opts)
          return {
            cid,
            path: entry.path,
            unixfs: UnixFS.unmarshal(entry.content.Data),
            node: entry.content
          }
        }
      }
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
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 80,
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
                            "text": "f",
                            "rawText": "f",
                            "flags": 96,
                            "start": 5,
                            "end": 7
                        },
                        "type": null,
                        "initializer": {
                            "kind": 177,
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 64,
                                "start": 9,
                                "end": 15
                            },
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 64,
                                "start": 15,
                                "end": 24
                            },
                            "asteriskToken": {
                                "kind": 67143222,
                                "flags": 64,
                                "start": 24,
                                "end": 26
                            },
                            "name": null,
                            "typeParameters": null,
                            "formalParameterList": {
                                "kind": 214,
                                "formalParameters": [
                                    {
                                        "kind": 134299649,
                                        "text": "source",
                                        "rawText": "source",
                                        "flags": 96,
                                        "start": 28,
                                        "end": 34
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "block",
                                        "rawText": "block",
                                        "flags": 96,
                                        "start": 35,
                                        "end": 41
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "opts",
                                        "rawText": "opts",
                                        "flags": 96,
                                        "start": 42,
                                        "end": 47
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 28,
                                "end": 47
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
                                                "start": 50,
                                                "end": 60
                                            },
                                            "awaitKeyword": {
                                                "kind": 82196,
                                                "flags": 64,
                                                "start": 60,
                                                "end": 66
                                            },
                                            "initializer": {
                                                "kind": 162,
                                                "lexicalKeyword": {
                                                    "kind": 37757004,
                                                    "flags": 64,
                                                    "start": 68,
                                                    "end": 73
                                                },
                                                "binding": {
                                                    "kind": 151,
                                                    "bindingList": [
                                                        {
                                                            "kind": 190,
                                                            "binding": {
                                                                "kind": 134299649,
                                                                "text": "entry",
                                                                "rawText": "entry",
                                                                "flags": 96,
                                                                "start": 73,
                                                                "end": 79
                                                            },
                                                            "type": null,
                                                            "initializer": null,
                                                            "flags": 16,
                                                            "start": 73,
                                                            "end": 79
                                                        }
                                                    ],
                                                    "flags": 16777232,
                                                    "start": 73,
                                                    "end": 79
                                                },
                                                "flags": 33554448,
                                                "start": 50,
                                                "end": 79
                                            },
                                            "ofKeyword": {
                                                "kind": 16793717,
                                                "flags": 64,
                                                "start": 79,
                                                "end": 82
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "source",
                                                "rawText": "source",
                                                "flags": 96,
                                                "start": 82,
                                                "end": 89
                                            },
                                            "statement": {
                                                "kind": 124,
                                                "block": {
                                                    "kind": 249,
                                                    "statements": [
                                                        {
                                                            "kind": 120,
                                                            "expression": {
                                                                "kind": 229,
                                                                "yieldKeyword": {
                                                                    "kind": 8454253,
                                                                    "flags": 65,
                                                                    "start": 92,
                                                                    "end": 106
                                                                },
                                                                "delegate": false,
                                                                "asteriskToken": null,
                                                                "expression": {
                                                                    "kind": 177,
                                                                    "asyncKeyword": {
                                                                        "kind": 82031,
                                                                        "flags": 64,
                                                                        "start": 106,
                                                                        "end": 112
                                                                    },
                                                                    "functionKeyword": {
                                                                        "kind": 37822554,
                                                                        "flags": 64,
                                                                        "start": 112,
                                                                        "end": 121
                                                                    },
                                                                    "asteriskToken": null,
                                                                    "name": null,
                                                                    "typeParameters": null,
                                                                    "formalParameterList": {
                                                                        "kind": 214,
                                                                        "formalParameters": [],
                                                                        "trailingComma": false,
                                                                        "flags": 32,
                                                                        "start": 123,
                                                                        "end": 123
                                                                    },
                                                                    "contents": {
                                                                        "kind": 216,
                                                                        "functionStatementList": {
                                                                            "kind": 217,
                                                                            "directives": [],
                                                                            "statements": [
                                                                                {
                                                                                    "kind": 162,
                                                                                    "lexicalKeyword": {
                                                                                        "kind": 37757004,
                                                                                        "flags": 81,
                                                                                        "start": 126,
                                                                                        "end": 142
                                                                                    },
                                                                                    "binding": {
                                                                                        "kind": 151,
                                                                                        "bindingList": [
                                                                                            {
                                                                                                "kind": 190,
                                                                                                "binding": {
                                                                                                    "kind": 134299649,
                                                                                                    "text": "cid",
                                                                                                    "rawText": "cid",
                                                                                                    "flags": 96,
                                                                                                    "start": 142,
                                                                                                    "end": 146
                                                                                                },
                                                                                                "type": null,
                                                                                                "initializer": {
                                                                                                    "kind": 208,
                                                                                                    "awaitKeyword": {
                                                                                                        "kind": 82196,
                                                                                                        "flags": 64,
                                                                                                        "start": 148,
                                                                                                        "end": 154
                                                                                                    },
                                                                                                    "expression": {
                                                                                                        "kind": 131,
                                                                                                        "expression": {
                                                                                                            "kind": 134299649,
                                                                                                            "text": "persist",
                                                                                                            "rawText": "persist",
                                                                                                            "flags": 96,
                                                                                                            "start": 154,
                                                                                                            "end": 162
                                                                                                        },
                                                                                                        "argumentList": {
                                                                                                            "kind": 256,
                                                                                                            "elements": [
                                                                                                                {
                                                                                                                    "kind": 131,
                                                                                                                    "expression": {
                                                                                                                        "kind": 129,
                                                                                                                        "member": {
                                                                                                                            "kind": 129,
                                                                                                                            "member": {
                                                                                                                                "kind": 134299649,
                                                                                                                                "text": "entry",
                                                                                                                                "rawText": "entry",
                                                                                                                                "flags": 96,
                                                                                                                                "start": 163,
                                                                                                                                "end": 168
                                                                                                                            },
                                                                                                                            "expression": {
                                                                                                                                "kind": 134299649,
                                                                                                                                "text": "content",
                                                                                                                                "rawText": "content",
                                                                                                                                "flags": 96,
                                                                                                                                "start": 169,
                                                                                                                                "end": 176
                                                                                                                            },
                                                                                                                            "flags": 96,
                                                                                                                            "start": 163,
                                                                                                                            "end": 176
                                                                                                                        },
                                                                                                                        "expression": {
                                                                                                                            "kind": 134299649,
                                                                                                                            "text": "serialize",
                                                                                                                            "rawText": "serialize",
                                                                                                                            "flags": 96,
                                                                                                                            "start": 177,
                                                                                                                            "end": 186
                                                                                                                        },
                                                                                                                        "flags": 96,
                                                                                                                        "start": 163,
                                                                                                                        "end": 186
                                                                                                                    },
                                                                                                                    "argumentList": {
                                                                                                                        "kind": 256,
                                                                                                                        "elements": [],
                                                                                                                        "trailingComma": false,
                                                                                                                        "flags": 32,
                                                                                                                        "start": 187,
                                                                                                                        "end": 187
                                                                                                                    },
                                                                                                                    "flags": 268435488,
                                                                                                                    "start": 163,
                                                                                                                    "end": 188
                                                                                                                },
                                                                                                                {
                                                                                                                    "kind": 134299649,
                                                                                                                    "text": "block",
                                                                                                                    "rawText": "block",
                                                                                                                    "flags": 96,
                                                                                                                    "start": 189,
                                                                                                                    "end": 195
                                                                                                                },
                                                                                                                {
                                                                                                                    "kind": 134299649,
                                                                                                                    "text": "opts",
                                                                                                                    "rawText": "opts",
                                                                                                                    "flags": 96,
                                                                                                                    "start": 196,
                                                                                                                    "end": 201
                                                                                                                }
                                                                                                            ],
                                                                                                            "trailingComma": false,
                                                                                                            "flags": 32,
                                                                                                            "start": 163,
                                                                                                            "end": 201
                                                                                                        },
                                                                                                        "flags": 268435488,
                                                                                                        "start": 154,
                                                                                                        "end": 202
                                                                                                    },
                                                                                                    "flags": 32,
                                                                                                    "start": 148,
                                                                                                    "end": 202
                                                                                                },
                                                                                                "flags": 16,
                                                                                                "start": 142,
                                                                                                "end": 202
                                                                                            }
                                                                                        ],
                                                                                        "flags": 16777232,
                                                                                        "start": 142,
                                                                                        "end": 202
                                                                                    },
                                                                                    "flags": 33554448,
                                                                                    "start": 126,
                                                                                    "end": 202
                                                                                },
                                                                                {
                                                                                    "kind": 161,
                                                                                    "returnKeyword": {
                                                                                        "kind": 37757022,
                                                                                        "flags": 81,
                                                                                        "start": 202,
                                                                                        "end": 219
                                                                                    },
                                                                                    "expression": {
                                                                                        "kind": 220,
                                                                                        "propertyList": {
                                                                                            "kind": 218,
                                                                                            "properties": [
                                                                                                {
                                                                                                    "kind": 134299649,
                                                                                                    "text": "cid",
                                                                                                    "rawText": "cid",
                                                                                                    "flags": 97,
                                                                                                    "start": 221,
                                                                                                    "end": 237
                                                                                                },
                                                                                                {
                                                                                                    "kind": 219,
                                                                                                    "asteriskToken": null,
                                                                                                    "left": {
                                                                                                        "kind": 134299649,
                                                                                                        "text": "path",
                                                                                                        "rawText": "path",
                                                                                                        "flags": 97,
                                                                                                        "start": 238,
                                                                                                        "end": 255
                                                                                                    },
                                                                                                    "right": {
                                                                                                        "kind": 129,
                                                                                                        "member": {
                                                                                                            "kind": 134299649,
                                                                                                            "text": "entry",
                                                                                                            "rawText": "entry",
                                                                                                            "flags": 96,
                                                                                                            "start": 256,
                                                                                                            "end": 262
                                                                                                        },
                                                                                                        "expression": {
                                                                                                            "kind": 134299649,
                                                                                                            "text": "path",
                                                                                                            "rawText": "path",
                                                                                                            "flags": 96,
                                                                                                            "start": 263,
                                                                                                            "end": 267
                                                                                                        },
                                                                                                        "flags": 96,
                                                                                                        "start": 238,
                                                                                                        "end": 267
                                                                                                    },
                                                                                                    "flags": 33,
                                                                                                    "start": 238,
                                                                                                    "end": 267
                                                                                                },
                                                                                                {
                                                                                                    "kind": 219,
                                                                                                    "asteriskToken": null,
                                                                                                    "left": {
                                                                                                        "kind": 134299649,
                                                                                                        "text": "unixfs",
                                                                                                        "rawText": "unixfs",
                                                                                                        "flags": 97,
                                                                                                        "start": 268,
                                                                                                        "end": 287
                                                                                                    },
                                                                                                    "right": {
                                                                                                        "kind": 131,
                                                                                                        "expression": {
                                                                                                            "kind": 129,
                                                                                                            "member": {
                                                                                                                "kind": 134299649,
                                                                                                                "text": "UnixFS",
                                                                                                                "rawText": "UnixFS",
                                                                                                                "flags": 96,
                                                                                                                "start": 288,
                                                                                                                "end": 295
                                                                                                            },
                                                                                                            "expression": {
                                                                                                                "kind": 134299649,
                                                                                                                "text": "unmarshal",
                                                                                                                "rawText": "unmarshal",
                                                                                                                "flags": 96,
                                                                                                                "start": 296,
                                                                                                                "end": 305
                                                                                                            },
                                                                                                            "flags": 96,
                                                                                                            "start": 268,
                                                                                                            "end": 305
                                                                                                        },
                                                                                                        "argumentList": {
                                                                                                            "kind": 256,
                                                                                                            "elements": [
                                                                                                                {
                                                                                                                    "kind": 129,
                                                                                                                    "member": {
                                                                                                                        "kind": 129,
                                                                                                                        "member": {
                                                                                                                            "kind": 134299649,
                                                                                                                            "text": "entry",
                                                                                                                            "rawText": "entry",
                                                                                                                            "flags": 96,
                                                                                                                            "start": 306,
                                                                                                                            "end": 311
                                                                                                                        },
                                                                                                                        "expression": {
                                                                                                                            "kind": 134299649,
                                                                                                                            "text": "content",
                                                                                                                            "rawText": "content",
                                                                                                                            "flags": 96,
                                                                                                                            "start": 312,
                                                                                                                            "end": 319
                                                                                                                        },
                                                                                                                        "flags": 96,
                                                                                                                        "start": 306,
                                                                                                                        "end": 319
                                                                                                                    },
                                                                                                                    "expression": {
                                                                                                                        "kind": 134299649,
                                                                                                                        "text": "Data",
                                                                                                                        "rawText": "Data",
                                                                                                                        "flags": 96,
                                                                                                                        "start": 320,
                                                                                                                        "end": 324
                                                                                                                    },
                                                                                                                    "flags": 96,
                                                                                                                    "start": 306,
                                                                                                                    "end": 324
                                                                                                                }
                                                                                                            ],
                                                                                                            "trailingComma": false,
                                                                                                            "flags": 32,
                                                                                                            "start": 306,
                                                                                                            "end": 324
                                                                                                        },
                                                                                                        "flags": 268435488,
                                                                                                        "start": 268,
                                                                                                        "end": 325
                                                                                                    },
                                                                                                    "flags": 33,
                                                                                                    "start": 268,
                                                                                                    "end": 325
                                                                                                },
                                                                                                {
                                                                                                    "kind": 219,
                                                                                                    "asteriskToken": null,
                                                                                                    "left": {
                                                                                                        "kind": 134299649,
                                                                                                        "text": "node",
                                                                                                        "rawText": "node",
                                                                                                        "flags": 97,
                                                                                                        "start": 326,
                                                                                                        "end": 343
                                                                                                    },
                                                                                                    "right": {
                                                                                                        "kind": 129,
                                                                                                        "member": {
                                                                                                            "kind": 134299649,
                                                                                                            "text": "entry",
                                                                                                            "rawText": "entry",
                                                                                                            "flags": 96,
                                                                                                            "start": 344,
                                                                                                            "end": 350
                                                                                                        },
                                                                                                        "expression": {
                                                                                                            "kind": 134299649,
                                                                                                            "text": "content",
                                                                                                            "rawText": "content",
                                                                                                            "flags": 96,
                                                                                                            "start": 351,
                                                                                                            "end": 358
                                                                                                        },
                                                                                                        "flags": 96,
                                                                                                        "start": 326,
                                                                                                        "end": 358
                                                                                                    },
                                                                                                    "flags": 33,
                                                                                                    "start": 326,
                                                                                                    "end": 358
                                                                                                }
                                                                                            ],
                                                                                            "trailingComma": false,
                                                                                            "flags": 17,
                                                                                            "start": 221,
                                                                                            "end": 358
                                                                                        },
                                                                                        "flags": 49,
                                                                                        "start": 219,
                                                                                        "end": 370
                                                                                    },
                                                                                    "flags": 81,
                                                                                    "start": 202,
                                                                                    "end": 370
                                                                                }
                                                                            ],
                                                                            "flags": 33,
                                                                            "start": 126,
                                                                            "end": 370
                                                                        },
                                                                        "flags": 32,
                                                                        "start": 124,
                                                                        "end": 380
                                                                    },
                                                                    "returnType": null,
                                                                    "flags": 160,
                                                                    "start": 106,
                                                                    "end": 380
                                                                },
                                                                "flags": 32,
                                                                "start": 92,
                                                                "end": 380
                                                            },
                                                            "flags": 16,
                                                            "start": 92,
                                                            "end": 380
                                                        }
                                                    ],
                                                    "flags": 17,
                                                    "start": 92,
                                                    "end": 380
                                                },
                                                "flags": 16,
                                                "start": 90,
                                                "end": 388
                                            },
                                            "flags": 81,
                                            "start": 50,
                                            "end": 388
                                        }
                                    ],
                                    "flags": 33,
                                    "start": 50,
                                    "end": 388
                                },
                                "flags": 32,
                                "start": 48,
                                "end": 394
                            },
                            "returnType": null,
                            "flags": 416,
                            "start": 9,
                            "end": 394
                        },
                        "flags": 16,
                        "start": 5,
                        "end": 394
                    }
                ],
                "flags": 16777232,
                "start": 5,
                "end": 394
            },
            "flags": 33554448,
            "start": 0,
            "end": 394
        }
    ],
    "isModule": false,
    "source": "const f = async function * (source, block, opts) {\n      for await (const entry of source) {\n        yield async function () {\n          const cid = await persist(entry.content.serialize(), block, opts)\n          return {\n            cid,\n            path: entry.path,\n            unixfs: UnixFS.unmarshal(entry.content.Data),\n            node: entry.content\n          }\n        }\n      }\n    }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 394
}
```

### Printed

```javascript

const f = async function * (source, block, opts) {
  for await (const entry of source) {
    yield  async function () {
      const cid = await persist(entry.content.serialize(), block, opts);
      return {
        cid,
        path : entry.path,
        unixfs : UnixFS.unmarshal(entry.content.Data),
        node : entry.content
      };
    };
  }
};

```

### Diagnostics

```javascript
✔ No errors
```

