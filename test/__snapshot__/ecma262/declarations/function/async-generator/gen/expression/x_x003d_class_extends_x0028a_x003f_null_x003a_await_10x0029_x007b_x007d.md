# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: d
- Path: n
> :: test: expression
> :: case: x = class extends (a ? null : await 10) { }
## Options

`````js
{}
`````
## Input

`````js
({ async * gen () {x = class extends (a ? null : await 10) { }} })
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
                "kind": 121,
                "expression": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 351,
                                "asyncKeyword": {
                                    "kind": 82031,
                                    "flags": 352,
                                    "transformFlags": 0,
                                    "start": 2,
                                    "end": 8
                                },
                                "asteriskToken": {
                                    "kind": 67143222,
                                    "flags": 64,
                                    "transformFlags": 32,
                                    "start": 8,
                                    "end": 10
                                },
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "gen",
                                        "rawText": "gen",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 10,
                                        "end": 14
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 416,
                                        "transformFlags": 0,
                                        "start": 16,
                                        "end": 17
                                    },
                                    "returnType": null,
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
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 19,
                                                            "end": 20
                                                        },
                                                        "operatorToken": {
                                                            "kind": 4125,
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 20,
                                                            "end": 22
                                                        },
                                                        "right": {
                                                            "kind": 189,
                                                            "decorators": null,
                                                            "classKeyword": {
                                                                "kind": 37822544,
                                                                "flags": 64,
                                                                "transformFlags": 0,
                                                                "start": 22,
                                                                "end": 28
                                                            },
                                                            "name": null,
                                                            "typeParameters": null,
                                                            "tail": {
                                                                "kind": 277,
                                                                "classHeritage": {
                                                                    "kind": 279,
                                                                    "extendsKeyword": {
                                                                        "kind": 4194391,
                                                                        "flags": 80,
                                                                        "transformFlags": 0,
                                                                        "start": 28,
                                                                        "end": 36
                                                                    },
                                                                    "expression": {
                                                                        "kind": 121,
                                                                        "expression": {
                                                                            "kind": 197,
                                                                            "shortCircuit": {
                                                                                "kind": 134299649,
                                                                                "text": "a",
                                                                                "rawText": "a",
                                                                                "flags": 96,
                                                                                "transformFlags": 0,
                                                                                "start": 38,
                                                                                "end": 39
                                                                            },
                                                                            "questionToken": {
                                                                                "kind": 134217750,
                                                                                "flags": 64,
                                                                                "transformFlags": 0,
                                                                                "start": 39,
                                                                                "end": 41
                                                                            },
                                                                            "consequent": {
                                                                                "kind": 138477575,
                                                                                "flags": 96,
                                                                                "transformFlags": 0,
                                                                                "start": 41,
                                                                                "end": 46
                                                                            },
                                                                            "colonToken": {
                                                                                "kind": 21,
                                                                                "flags": 64,
                                                                                "transformFlags": 0,
                                                                                "start": 46,
                                                                                "end": 48
                                                                            },
                                                                            "alternate": {
                                                                                "kind": 208,
                                                                                "awaitKeyword": {
                                                                                    "kind": 82196,
                                                                                    "flags": 64,
                                                                                    "transformFlags": 0,
                                                                                    "start": 48,
                                                                                    "end": 54
                                                                                },
                                                                                "expression": {
                                                                                    "kind": 201392130,
                                                                                    "text": 10,
                                                                                    "rawText": "10",
                                                                                    "flags": 96,
                                                                                    "transformFlags": 0,
                                                                                    "start": 54,
                                                                                    "end": 57
                                                                                },
                                                                                "flags": 32,
                                                                                "transformFlags": 0,
                                                                                "start": 48,
                                                                                "end": 57
                                                                            },
                                                                            "flags": 96,
                                                                            "transformFlags": 0,
                                                                            "start": 36,
                                                                            "end": 57
                                                                        },
                                                                        "flags": 36,
                                                                        "transformFlags": 0,
                                                                        "start": 32,
                                                                        "end": 58
                                                                    },
                                                                    "typeParameter": null,
                                                                    "flags": 16,
                                                                    "transformFlags": 0,
                                                                    "start": 36,
                                                                    "end": 58
                                                                },
                                                                "body": {
                                                                    "kind": 303,
                                                                    "elements": [],
                                                                    "flags": 32,
                                                                    "transformFlags": 0,
                                                                    "start": 60,
                                                                    "end": 60
                                                                },
                                                                "flags": 28,
                                                                "transformFlags": 0,
                                                                "start": 32,
                                                                "end": 62
                                                            },
                                                            "flags": 32,
                                                            "transformFlags": 0,
                                                            "start": 22,
                                                            "end": 62
                                                        },
                                                        "flags": 0,
                                                        "transformFlags": 128,
                                                        "start": 19,
                                                        "end": 62
                                                    },
                                                    "flags": 16,
                                                    "transformFlags": 0,
                                                    "start": 19,
                                                    "end": 62
                                                }
                                            ],
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 19,
                                            "end": 62
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 17,
                                        "end": 63
                                    },
                                    "flags": 416,
                                    "transformFlags": 0,
                                    "start": 14,
                                    "end": 63
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 2,
                                "end": 63
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 2,
                        "end": 63
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 1,
                    "end": 65
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 34,
                "end": 66
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 66
        }
    ],
    "isModule": false,
    "source": "({ async * gen () {x = class extends (a ? null : await 10) { }} })",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 66
}
```

### Printed

```javascript

({async * gen() {
      x = class   extends (a ? null : await 10) {};
    }});
```

### Diagnostics

```javascript
✔ No errors
```

