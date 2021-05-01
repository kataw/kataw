# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: (function * () { x = class extends (a ? null : yield) { } });
## Input

`````js
'use strict'; (function * () { x = class extends (a ? null : yield) { } });
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "rawText": "'use strict'",
                "flags": 4194400,
                "start": 0,
                "end": 12
            },
            "flags": 16,
            "start": 0,
            "end": 13
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 177,
                    "asyncKeyword": null,
                    "functionKeyword": {
                        "kind": 37822554,
                        "flags": 0,
                        "start": 15,
                        "end": 23
                    },
                    "generatorToken": {
                        "kind": 67143222,
                        "flags": 64,
                        "start": 23,
                        "end": 25
                    },
                    "name": null,
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 25,
                        "end": 28
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
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 30,
                                            "end": 32
                                        },
                                        "operatorToken": {
                                            "kind": 4125,
                                            "flags": 64,
                                            "start": 32,
                                            "end": 34
                                        },
                                        "right": {
                                            "kind": 189,
                                            "decorators": null,
                                            "classKeyword": {
                                                "kind": 37822544,
                                                "flags": 0,
                                                "start": 34,
                                                "end": 40
                                            },
                                            "name": null,
                                            "typeParameters": null,
                                            "classHeritage": {
                                                "kind": 279,
                                                "extendsKeyword": {
                                                    "kind": 4194391,
                                                    "flags": 0,
                                                    "start": 40,
                                                    "end": 48
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
                                                            "start": 50,
                                                            "end": 51
                                                        },
                                                        "questionToken": {
                                                            "kind": 134217750,
                                                            "flags": 0,
                                                            "start": 51,
                                                            "end": 53
                                                        },
                                                        "consequent": {
                                                            "kind": 269,
                                                            "text": null,
                                                            "flags": 96,
                                                            "start": 53,
                                                            "end": 58
                                                        },
                                                        "colonToken": {
                                                            "kind": 21,
                                                            "flags": 0,
                                                            "start": 58,
                                                            "end": 60
                                                        },
                                                        "alternate": {
                                                            "kind": 229,
                                                            "yieldKeyword": {
                                                                "kind": 8454253,
                                                                "flags": 0,
                                                                "start": 60,
                                                                "end": 66
                                                            },
                                                            "delegate": false,
                                                            "asteriskToken": null,
                                                            "expression": null,
                                                            "flags": 32,
                                                            "start": 60,
                                                            "end": 66
                                                        },
                                                        "flags": 32,
                                                        "start": 48,
                                                        "end": 66
                                                    },
                                                    "flags": 32,
                                                    "start": 48,
                                                    "end": 67
                                                },
                                                "typeParameter": null,
                                                "flags": 16,
                                                "start": 48,
                                                "end": 67
                                            },
                                            "members": {
                                                "kind": 277,
                                                "elements": [],
                                                "flags": 32,
                                                "start": 69,
                                                "end": 71
                                            },
                                            "flags": 32,
                                            "start": 34,
                                            "end": 71
                                        },
                                        "flags": 32,
                                        "start": 30,
                                        "end": 71
                                    },
                                    "flags": 16,
                                    "start": 30,
                                    "end": 71
                                }
                            ],
                            "flags": 32,
                            "start": 30,
                            "end": 71
                        },
                        "flags": 32,
                        "start": 28,
                        "end": 73
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "flags": 288,
                    "start": 15,
                    "end": 73
                },
                "flags": 32,
                "start": 13,
                "end": 74
            },
            "flags": 16,
            "start": 13,
            "end": 75
        }
    ],
    "isModule": false,
    "source": "'use strict'; (function * () { x = class extends (a ? null : yield) { } });",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 75
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

