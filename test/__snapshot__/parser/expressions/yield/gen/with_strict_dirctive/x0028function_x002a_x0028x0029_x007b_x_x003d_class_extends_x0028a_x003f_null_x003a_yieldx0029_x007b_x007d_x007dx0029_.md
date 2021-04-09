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
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": "use strict",
                "autofix": 0,
                "flags": 768,
                "start": 0,
                "end": 12
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 13
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 177,
                    "asyncToken": null,
                    "generatorToken": {
                        "kind": 67143222,
                        "autofix": 0,
                        "flags": 0,
                        "start": 23,
                        "end": 25
                    },
                    "name": null,
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 27,
                        "end": 28
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "statements": [
                                {
                                    "kind": 120,
                                    "expression": {
                                        "kind": 125,
                                        "left": {
                                            "kind": 81921,
                                            "value": "x",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 30,
                                            "end": 32
                                        },
                                        "operatorToken": {
                                            "kind": 37814352,
                                            "autofix": 0,
                                            "flags": 0,
                                            "start": 30,
                                            "end": 34
                                        },
                                        "right": {
                                            "kind": 189,
                                            "decorators": null,
                                            "name": null,
                                            "typeParameters": null,
                                            "classHeritage": {
                                                "kind": 279,
                                                "expression": {
                                                    "kind": 121,
                                                    "expression": {
                                                        "kind": 197,
                                                        "shortCircuit": {
                                                            "kind": 81921,
                                                            "value": "a",
                                                            "autofix": 0,
                                                            "flags": 768,
                                                            "start": 50,
                                                            "end": 51
                                                        },
                                                        "questionToken": {
                                                            "kind": 22,
                                                            "autofix": 0,
                                                            "flags": 0,
                                                            "start": 51,
                                                            "end": 53
                                                        },
                                                        "consequent": {
                                                            "kind": 269,
                                                            "value": null,
                                                            "autofix": 0,
                                                            "flags": 768,
                                                            "start": 53,
                                                            "end": 58
                                                        },
                                                        "colonToken": {
                                                            "kind": 21,
                                                            "autofix": 0,
                                                            "flags": 0,
                                                            "start": 58,
                                                            "end": 60
                                                        },
                                                        "alternate": {
                                                            "kind": 229,
                                                            "delegate": false,
                                                            "asteriskToken": null,
                                                            "expression": null,
                                                            "autofix": 0,
                                                            "flags": 256,
                                                            "start": 60,
                                                            "end": 66
                                                        },
                                                        "autofix": 0,
                                                        "flags": 256,
                                                        "start": 48,
                                                        "end": 66
                                                    },
                                                    "autofix": 0,
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
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 30,
                                        "end": 71
                                    },
                                    "autofix": 0,
                                    "flags": 128,
                                    "start": 30,
                                    "end": 71
                                }
                            ],
                            "multiline": false,
                            "autofix": 0,
                            "flags": 256,
                            "start": 30,
                            "end": 71
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 28,
                        "end": 73
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "autofix": 0,
                    "flags": 2304,
                    "start": 15,
                    "end": 73
                },
                "autofix": 0,
                "flags": 256,
                "start": 13,
                "end": 74
            },
            "autofix": 0,
            "flags": 128,
            "start": 13,
            "end": 75
        }
    ],
    "isModule": false,
    "text": "'use strict'; (function * () { x = class extends (a ? null : yield) { } });",
    "fileName": "__root__",
    "autofix": 0,
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

