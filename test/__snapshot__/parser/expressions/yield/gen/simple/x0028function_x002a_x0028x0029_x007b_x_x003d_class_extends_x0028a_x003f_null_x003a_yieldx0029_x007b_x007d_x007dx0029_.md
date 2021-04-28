# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: (function * () { x = class extends (a ? null : yield) { } });
## Input

`````js
(function * () { x = class extends (a ? null : yield) { } });
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
                "kind": 121,
                "expression": {
                    "kind": 177,
                    "asyncKeyword": null,
                    "functionKeyword": {
                        "kind": 37822554,
                        "flags": 1,
                        "start": 0,
                        "end": 9
                    },
                    "generatorToken": {
                        "kind": 67143222,
                        "flags": 9,
                        "start": 512,
                        "end": 11
                    },
                    "name": null,
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 11,
                        "end": 14
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
                                            "flags": 768,
                                            "start": 16,
                                            "end": 18
                                        },
                                        "operatorToken": {
                                            "kind": 4125,
                                            "flags": 18,
                                            "start": 512,
                                            "end": 20
                                        },
                                        "right": {
                                            "kind": 189,
                                            "decorators": null,
                                            "classKeyword": {
                                                "kind": 37822544,
                                                "flags": 20,
                                                "start": 0,
                                                "end": 26
                                            },
                                            "name": null,
                                            "typeParameters": null,
                                            "classHeritage": {
                                                "kind": 279,
                                                "extendsKeyword": {
                                                    "kind": 4194391,
                                                    "flags": 26,
                                                    "start": 0,
                                                    "end": 34
                                                },
                                                "expression": {
                                                    "kind": 121,
                                                    "expression": {
                                                        "kind": 197,
                                                        "shortCircuit": {
                                                            "kind": 134299649,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 768,
                                                            "start": 36,
                                                            "end": 37
                                                        },
                                                        "questionToken": {
                                                            "kind": 134217750,
                                                            "flags": 37,
                                                            "start": 0,
                                                            "end": 39
                                                        },
                                                        "consequent": {
                                                            "kind": 269,
                                                            "text": null,
                                                            "flags": 768,
                                                            "start": 39,
                                                            "end": 44
                                                        },
                                                        "colonToken": {
                                                            "kind": 21,
                                                            "flags": 44,
                                                            "start": 0,
                                                            "end": 46
                                                        },
                                                        "alternate": {
                                                            "kind": 229,
                                                            "yieldKeyword": {
                                                                "kind": 8454253,
                                                                "flags": 46,
                                                                "start": 0,
                                                                "end": 52
                                                            },
                                                            "delegate": false,
                                                            "asteriskToken": null,
                                                            "expression": null,
                                                            "flags": 256,
                                                            "start": 46,
                                                            "end": 52
                                                        },
                                                        "flags": 256,
                                                        "start": 34,
                                                        "end": 52
                                                    },
                                                    "flags": 256,
                                                    "start": 34,
                                                    "end": 53
                                                },
                                                "typeParameter": null,
                                                "flags": 128,
                                                "start": 34,
                                                "end": 53
                                            },
                                            "members": {
                                                "kind": 277,
                                                "elements": [],
                                                "flags": 256,
                                                "start": 55,
                                                "end": 57
                                            },
                                            "flags": 256,
                                            "start": 20,
                                            "end": 57
                                        },
                                        "flags": 256,
                                        "start": 16,
                                        "end": 57
                                    },
                                    "flags": 128,
                                    "start": 16,
                                    "end": 57
                                }
                            ],
                            "multiline": false,
                            "flags": 256,
                            "start": 16,
                            "end": 57
                        },
                        "flags": 256,
                        "start": 14,
                        "end": 59
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "flags": 2304,
                    "start": 1,
                    "end": 59
                },
                "flags": 256,
                "start": 0,
                "end": 60
            },
            "flags": 128,
            "start": 0,
            "end": 61
        }
    ],
    "isModule": false,
    "text": "(function * () { x = class extends (a ? null : yield) { } });",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 61
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

