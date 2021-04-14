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
    "directives": [
        {
            "kind": 67174403,
            "text": "use strict",
            "rawText": "use strict",
            "flags": 67109632,
            "start": 0,
            "end": 12
        }
    ],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 177,
                    "asyncKeyword": null,
                    "functionKeyword": {
                        "kind": 37814362,
                        "flags": 768,
                        "start": 15,
                        "end": 23
                    },
                    "generatorToken": {
                        "kind": 67143222,
                        "flags": 768,
                        "start": 23,
                        "end": 25
                    },
                    "name": null,
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "flags": 256,
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
                                            "kind": 81921,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 768,
                                            "start": 30,
                                            "end": 32
                                        },
                                        "operatorToken": {
                                            "kind": 4125,
                                            "flags": 768,
                                            "start": 32,
                                            "end": 34
                                        },
                                        "right": {
                                            "kind": 189,
                                            "decorators": null,
                                            "classKeyword": {
                                                "kind": 37814352,
                                                "flags": 768,
                                                "start": 34,
                                                "end": 40
                                            },
                                            "name": null,
                                            "typeParameters": null,
                                            "classHeritage": {
                                                "kind": 279,
                                                "extendsToken": {
                                                    "kind": 4194391,
                                                    "flags": 768,
                                                    "start": 40,
                                                    "end": 48
                                                },
                                                "expression": {
                                                    "kind": 121,
                                                    "expression": {
                                                        "kind": 197,
                                                        "shortCircuit": {
                                                            "kind": 81921,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 768,
                                                            "start": 50,
                                                            "end": 51
                                                        },
                                                        "questionToken": {
                                                            "kind": 22,
                                                            "flags": 768,
                                                            "start": 51,
                                                            "end": 53
                                                        },
                                                        "consequent": {
                                                            "kind": 269,
                                                            "text": null,
                                                            "flags": 768,
                                                            "start": 53,
                                                            "end": 58
                                                        },
                                                        "colonToken": {
                                                            "kind": 21,
                                                            "flags": 768,
                                                            "start": 58,
                                                            "end": 60
                                                        },
                                                        "alternate": {
                                                            "kind": 229,
                                                            "yieldKeyword": {
                                                                "kind": 8454253,
                                                                "flags": 768,
                                                                "start": 60,
                                                                "end": 66
                                                            },
                                                            "delegate": false,
                                                            "asteriskToken": null,
                                                            "expression": null,
                                                            "flags": 256,
                                                            "start": 60,
                                                            "end": 66
                                                        },
                                                        "flags": 256,
                                                        "start": 48,
                                                        "end": 66
                                                    },
                                                    "flags": 256,
                                                    "start": 48,
                                                    "end": 67
                                                },
                                                "typeParameter": null,
                                                "flags": 128,
                                                "start": 48,
                                                "end": 67
                                            },
                                            "members": {
                                                "kind": 277,
                                                "elements": [],
                                                "flags": 256,
                                                "start": 69,
                                                "end": 71
                                            },
                                            "flags": 256,
                                            "start": 34,
                                            "end": 71
                                        },
                                        "flags": 256,
                                        "start": 30,
                                        "end": 71
                                    },
                                    "flags": 128,
                                    "start": 30,
                                    "end": 71
                                }
                            ],
                            "multiline": false,
                            "flags": 256,
                            "start": 30,
                            "end": 71
                        },
                        "flags": 256,
                        "start": 28,
                        "end": 73
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "flags": 2304,
                    "start": 15,
                    "end": 73
                },
                "flags": 256,
                "start": 13,
                "end": 74
            },
            "flags": 128,
            "start": 13,
            "end": 75
        }
    ],
    "isModule": false,
    "text": "'use strict'; (function * () { x = class extends (a ? null : yield) { } });",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 75
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: (function * () { x = class extends (a ? null : yield) { } });
## Input

`````js
'use strict'; (function * () { x = class extends (a ? null : yield) { } });
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: (function * () { x = class extends (a ? null : yield) { } });
## Input

`````js
'use strict'; (function * () { x = class extends (a ? null : yield) { } });
`````
```

