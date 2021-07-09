# Kataw parser test case

## Input

`````js
class Foo {
  a(lol /*string*/) {}

  b(lol /*string*/
  ) {}

  d(
    lol /*string*/,
    lol2 /*string*/,
    lol3 /*string*/,
    lol4 /*string*/
  ) {}

  d(
    lol /*string*/,
    lol2 /*string*/,
    lol3 /*string*/,
    lol4 /*string*/
  ) /*string*/ {}

  // kataw-ignore
  c(lol /*string*/
  ) {}

  // kataw-ignore
  d(
    lol /*string*/,
    lol2 /*string*/,
    lol3 /*string*/,
    lol4 /*string*/
  ) {}

  // kataw-ignore
  e(
    lol /*string*/,
    lol2 /*string*/,
    lol3 /*string*/,
    lol4 /*string*/
  ) {} /* string*/
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
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "Foo",
                "rawText": "Foo",
                "flags": 96,
                "transformFlags": 0,
                "start": 5,
                "end": 9
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "asteriskToken": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 11,
                                    "end": 15
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [
                                        {
                                            "kind": 134299649,
                                            "text": "lol",
                                            "rawText": "lol",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 16,
                                            "end": 19
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 16,
                                    "end": 31
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 33,
                                        "end": 33
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 31,
                                    "end": 34
                                },
                                "flags": 0,
                                "transformFlags": 0,
                                "start": 15,
                                "end": 34
                            },
                            "flags": 0,
                            "transformFlags": 0,
                            "start": 11,
                            "end": 34
                        },
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "asteriskToken": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 34,
                                    "end": 39
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [
                                        {
                                            "kind": 134299649,
                                            "text": "lol",
                                            "rawText": "lol",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 40,
                                            "end": 43
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 40,
                                    "end": 58
                                },
                                "returnType": null,
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
                                "flags": 0,
                                "transformFlags": 0,
                                "start": 39,
                                "end": 61
                            },
                            "flags": 0,
                            "transformFlags": 0,
                            "start": 34,
                            "end": 61
                        },
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "asteriskToken": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "d",
                                    "rawText": "d",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 61,
                                    "end": 66
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [
                                        {
                                            "kind": 134299649,
                                            "text": "lol",
                                            "rawText": "lol",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 67,
                                            "end": 75
                                        },
                                        {
                                            "kind": 134299649,
                                            "text": "lol2",
                                            "rawText": "lol2",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 87,
                                            "end": 96
                                        },
                                        {
                                            "kind": 134299649,
                                            "text": "lol3",
                                            "rawText": "lol3",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 108,
                                            "end": 117
                                        },
                                        {
                                            "kind": 134299649,
                                            "text": "lol4",
                                            "rawText": "lol4",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 129,
                                            "end": 138
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 67,
                                    "end": 153
                                },
                                "returnType": null,
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
                                "flags": 0,
                                "transformFlags": 0,
                                "start": 66,
                                "end": 156
                            },
                            "flags": 0,
                            "transformFlags": 0,
                            "start": 61,
                            "end": 156
                        },
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "asteriskToken": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "d",
                                    "rawText": "d",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 156,
                                    "end": 161
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [
                                        {
                                            "kind": 134299649,
                                            "text": "lol",
                                            "rawText": "lol",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 162,
                                            "end": 170
                                        },
                                        {
                                            "kind": 134299649,
                                            "text": "lol2",
                                            "rawText": "lol2",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 182,
                                            "end": 191
                                        },
                                        {
                                            "kind": 134299649,
                                            "text": "lol3",
                                            "rawText": "lol3",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 203,
                                            "end": 212
                                        },
                                        {
                                            "kind": 134299649,
                                            "text": "lol4",
                                            "rawText": "lol4",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 224,
                                            "end": 233
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 162,
                                    "end": 248
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 261,
                                        "end": 261
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 248,
                                    "end": 262
                                },
                                "flags": 0,
                                "transformFlags": 0,
                                "start": 161,
                                "end": 262
                            },
                            "flags": 0,
                            "transformFlags": 0,
                            "start": 156,
                            "end": 262
                        },
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "asteriskToken": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "c",
                                    "rawText": "c",
                                    "flags": 67108961,
                                    "transformFlags": 0,
                                    "start": 262,
                                    "end": 285
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [
                                        {
                                            "kind": 134299649,
                                            "text": "lol",
                                            "rawText": "lol",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 286,
                                            "end": 289
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 286,
                                    "end": 304
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 306,
                                        "end": 306
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 304,
                                    "end": 307
                                },
                                "flags": 0,
                                "transformFlags": 0,
                                "start": 285,
                                "end": 307
                            },
                            "flags": 0,
                            "transformFlags": 0,
                            "start": 262,
                            "end": 307
                        },
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "asteriskToken": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "d",
                                    "rawText": "d",
                                    "flags": 67108961,
                                    "transformFlags": 0,
                                    "start": 307,
                                    "end": 330
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [
                                        {
                                            "kind": 134299649,
                                            "text": "lol",
                                            "rawText": "lol",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 331,
                                            "end": 339
                                        },
                                        {
                                            "kind": 134299649,
                                            "text": "lol2",
                                            "rawText": "lol2",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 351,
                                            "end": 360
                                        },
                                        {
                                            "kind": 134299649,
                                            "text": "lol3",
                                            "rawText": "lol3",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 372,
                                            "end": 381
                                        },
                                        {
                                            "kind": 134299649,
                                            "text": "lol4",
                                            "rawText": "lol4",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 393,
                                            "end": 402
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 331,
                                    "end": 417
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 419,
                                        "end": 419
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 417,
                                    "end": 420
                                },
                                "flags": 0,
                                "transformFlags": 0,
                                "start": 330,
                                "end": 420
                            },
                            "flags": 0,
                            "transformFlags": 0,
                            "start": 307,
                            "end": 420
                        },
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "asteriskToken": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "e",
                                    "rawText": "e",
                                    "flags": 67108961,
                                    "transformFlags": 0,
                                    "start": 420,
                                    "end": 443
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [
                                        {
                                            "kind": 134299649,
                                            "text": "lol",
                                            "rawText": "lol",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 444,
                                            "end": 452
                                        },
                                        {
                                            "kind": 134299649,
                                            "text": "lol2",
                                            "rawText": "lol2",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 464,
                                            "end": 473
                                        },
                                        {
                                            "kind": 134299649,
                                            "text": "lol3",
                                            "rawText": "lol3",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 485,
                                            "end": 494
                                        },
                                        {
                                            "kind": 134299649,
                                            "text": "lol4",
                                            "rawText": "lol4",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 506,
                                            "end": 515
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 444,
                                    "end": 530
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 532,
                                        "end": 532
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 530,
                                    "end": 533
                                },
                                "flags": 0,
                                "transformFlags": 0,
                                "start": 443,
                                "end": 533
                            },
                            "flags": 0,
                            "transformFlags": 0,
                            "start": 420,
                            "end": 533
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 11,
                    "end": 533
                },
                "flags": 9,
                "transformFlags": 0,
                "start": 32,
                "end": 547
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 547
        }
    ],
    "isModule": false,
    "source": "class Foo {\n  a(lol /*string*/) {}\n\n  b(lol /*string*/\n  ) {}\n\n  d(\n    lol /*string*/,\n    lol2 /*string*/,\n    lol3 /*string*/,\n    lol4 /*string*/\n  ) {}\n\n  d(\n    lol /*string*/,\n    lol2 /*string*/,\n    lol3 /*string*/,\n    lol4 /*string*/\n  ) /*string*/ {}\n\n  // kataw-ignore\n  c(lol /*string*/\n  ) {}\n\n  // kataw-ignore\n  d(\n    lol /*string*/,\n    lol2 /*string*/,\n    lol3 /*string*/,\n    lol4 /*string*/\n  ) {}\n\n  // kataw-ignore\n  e(\n    lol /*string*/,\n    lol2 /*string*/,\n    lol3 /*string*/,\n    lol4 /*string*/\n  ) {} /* string*/\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 547
}
```

### Printed

```javascript
class Foo {
  a(lol) {}
  b(lol) {}
  d(lol, lol2, lol3, lol4) {}
  d(lol, lol2, lol3, lol4) {}
  c(lol) {}
  d(lol, lol2, lol3, lol4) {}
  e(lol, lol2, lol3, lol4) {}
}
```

### Diagnostics

```javascript
✔ No errors
```

