# Kataw parser test case

## Input

`````js
x = (bifornCringerMoshedPerplexSawder) => ((askTrovenaBeenaDependsRowans, glimseGlyphsHazardNoopsTieTie) => (f00) => {
  averredBathersBoxroomBuggyNurl();
} // BOOM
)

x2 = (a) => ((askTrovenaBeenaDependsRowans1, askTrovenaBeenaDependsRowans2, askTrovenaBeenaDependsRowans3) => {
  c();
} /* ! */ // KABOOM
)
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
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 1,
                    "end": 3
                },
                "right": {
                    "kind": 271,
                    "asyncKeyword": null,
                    "typeParameters": null,
                    "arrowPatameterList": {
                        "kind": 342,
                        "parameters": [
                            {
                                "kind": 134299649,
                                "text": "bifornCringerMoshedPerplexSawder",
                                "rawText": "bifornCringerMoshedPerplexSawder",
                                "flags": 96,
                                "start": 5,
                                "end": 37
                            }
                        ],
                        "trailingComma": false,
                        "flags": 0,
                        "start": 5,
                        "end": 38
                    },
                    "returnType": null,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "start": 38,
                        "end": 41
                    },
                    "contents": {
                        "kind": 121,
                        "expression": {
                            "kind": 271,
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 342,
                                "parameters": [
                                    {
                                        "kind": 134299649,
                                        "text": "askTrovenaBeenaDependsRowans",
                                        "rawText": "askTrovenaBeenaDependsRowans",
                                        "flags": 96,
                                        "start": 44,
                                        "end": 72
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "glimseGlyphsHazardNoopsTieTie",
                                        "rawText": "glimseGlyphsHazardNoopsTieTie",
                                        "flags": 96,
                                        "start": 73,
                                        "end": 103
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "start": 44,
                                "end": 104
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 104,
                                "end": 107
                            },
                            "contents": {
                                "kind": 271,
                                "asyncKeyword": null,
                                "typeParameters": null,
                                "arrowPatameterList": {
                                    "kind": 342,
                                    "parameters": [
                                        {
                                            "kind": 134299649,
                                            "text": "f00",
                                            "rawText": "f00",
                                            "flags": 96,
                                            "start": 109,
                                            "end": 112
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 109,
                                    "end": 113
                                },
                                "returnType": null,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "start": 113,
                                    "end": 116
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
                                                        "text": "averredBathersBoxroomBuggyNurl",
                                                        "rawText": "averredBathersBoxroomBuggyNurl",
                                                        "flags": 97,
                                                        "start": 118,
                                                        "end": 151
                                                    },
                                                    "argumentList": {
                                                        "kind": 256,
                                                        "elements": [],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 152,
                                                        "end": 152
                                                    },
                                                    "flags": 268435488,
                                                    "start": 118,
                                                    "end": 153
                                                },
                                                "flags": 16,
                                                "start": 118,
                                                "end": 154
                                            }
                                        ],
                                        "flags": 33,
                                        "start": 118,
                                        "end": 154
                                    },
                                    "flags": 32,
                                    "start": 116,
                                    "end": 156
                                },
                                "flags": 32,
                                "start": 107,
                                "end": 156
                            },
                            "flags": 32,
                            "start": 43,
                            "end": 156
                        },
                        "flags": 32,
                        "start": 41,
                        "end": 166
                    },
                    "flags": 32,
                    "start": 3,
                    "end": 166
                },
                "flags": 32,
                "start": 0,
                "end": 166
            },
            "flags": 16,
            "start": 0,
            "end": 166
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x2",
                    "rawText": "x2",
                    "flags": 97,
                    "start": 166,
                    "end": 170
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 170,
                    "end": 172
                },
                "right": {
                    "kind": 271,
                    "asyncKeyword": null,
                    "typeParameters": null,
                    "arrowPatameterList": {
                        "kind": 342,
                        "parameters": [
                            {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 174,
                                "end": 175
                            }
                        ],
                        "trailingComma": false,
                        "flags": 0,
                        "start": 174,
                        "end": 176
                    },
                    "returnType": null,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "start": 176,
                        "end": 179
                    },
                    "contents": {
                        "kind": 121,
                        "expression": {
                            "kind": 271,
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 342,
                                "parameters": [
                                    {
                                        "kind": 134299649,
                                        "text": "askTrovenaBeenaDependsRowans1",
                                        "rawText": "askTrovenaBeenaDependsRowans1",
                                        "flags": 96,
                                        "start": 182,
                                        "end": 211
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "askTrovenaBeenaDependsRowans2",
                                        "rawText": "askTrovenaBeenaDependsRowans2",
                                        "flags": 96,
                                        "start": 212,
                                        "end": 242
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "askTrovenaBeenaDependsRowans3",
                                        "rawText": "askTrovenaBeenaDependsRowans3",
                                        "flags": 96,
                                        "start": 243,
                                        "end": 273
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "start": 182,
                                "end": 274
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 274,
                                "end": 277
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
                                                    "text": "c",
                                                    "rawText": "c",
                                                    "flags": 97,
                                                    "start": 279,
                                                    "end": 283
                                                },
                                                "argumentList": {
                                                    "kind": 256,
                                                    "elements": [],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "start": 284,
                                                    "end": 284
                                                },
                                                "flags": 268435488,
                                                "start": 279,
                                                "end": 285
                                            },
                                            "flags": 16,
                                            "start": 279,
                                            "end": 286
                                        }
                                    ],
                                    "flags": 33,
                                    "start": 279,
                                    "end": 286
                                },
                                "flags": 32,
                                "start": 277,
                                "end": 288
                            },
                            "flags": 32,
                            "start": 181,
                            "end": 288
                        },
                        "flags": 32,
                        "start": 179,
                        "end": 308
                    },
                    "flags": 32,
                    "start": 172,
                    "end": 308
                },
                "flags": 32,
                "start": 166,
                "end": 308
            },
            "flags": 16,
            "start": 166,
            "end": 308
        }
    ],
    "isModule": false,
    "source": "x = (bifornCringerMoshedPerplexSawder) => ((askTrovenaBeenaDependsRowans, glimseGlyphsHazardNoopsTieTie) => (f00) => {\n  averredBathersBoxroomBuggyNurl();\n} // BOOM\n)\n\nx2 = (a) => ((askTrovenaBeenaDependsRowans1, askTrovenaBeenaDependsRowans2, askTrovenaBeenaDependsRowans3) => {\n  c();\n} /* ! */ // KABOOM\n)",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 308
}
```

### Printed

```javascript

  x = (bifornCringerMoshedPerplexSawder) => ((askTrovenaBeenaDependsRowans, glimseGlyphsHazardNoopsTieTie) => (f00) => {
    averredBathersBoxroomBuggyNurl();
  } // BOOM
  );
  x2 = (a) => ((askTrovenaBeenaDependsRowans1, askTrovenaBeenaDependsRowans2, askTrovenaBeenaDependsRowans3) => {
    c();
  } /* ! */ // KABOOM
  );

```

### Diagnostics

```javascript
✔ No errors
```

