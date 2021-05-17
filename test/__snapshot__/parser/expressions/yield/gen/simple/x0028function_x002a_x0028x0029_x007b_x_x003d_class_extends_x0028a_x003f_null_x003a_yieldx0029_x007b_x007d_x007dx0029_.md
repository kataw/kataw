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
                    "kind": 177,
                    "asyncKeyword": null,
                    "functionKeyword": {
                        "kind": 37822554,
                        "flags": 0,
                        "start": 1,
                        "end": 9
                    },
                    "generatorToken": {
                        "kind": 67143222,
                        "flags": 64,
                        "start": 9,
                        "end": 11
                    },
                    "name": null,
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "flags": 32,
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
                                            "flags": 96,
                                            "start": 16,
                                            "end": 18
                                        },
                                        "operatorToken": {
                                            "kind": 4125,
                                            "flags": 64,
                                            "start": 18,
                                            "end": 20
                                        },
                                        "right": {
                                            "kind": 189,
                                            "decorators": null,
                                            "classKeyword": {
                                                "kind": 37822544,
                                                "flags": 0,
                                                "start": 20,
                                                "end": 26
                                            },
                                            "name": null,
                                            "typeParameters": null,
                                            "members": {
                                                "kind": 277,
                                                "classHeritage": null,
                                                "elements": [],
                                                "flags": 32,
                                                "start": 20,
                                                "end": 20
                                            },
                                            "flags": 32,
                                            "start": 20,
                                            "end": 26
                                        },
                                        "flags": 32,
                                        "start": 16,
                                        "end": 26
                                    },
                                    "flags": 16,
                                    "start": 16,
                                    "end": 26
                                }
                            ],
                            "flags": 32,
                            "start": 16,
                            "end": 26
                        },
                        "flags": 32,
                        "start": 14,
                        "end": 26
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "flags": 288,
                    "start": 1,
                    "end": 26
                },
                "flags": 32,
                "start": 0,
                "end": 26
            },
            "flags": 16,
            "start": 0,
            "end": 26
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 197,
                    "shortCircuit": {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 96,
                        "start": 36,
                        "end": 37
                    },
                    "questionToken": {
                        "kind": 134217750,
                        "flags": 64,
                        "start": 37,
                        "end": 39
                    },
                    "consequent": {
                        "kind": 269,
                        "text": null,
                        "flags": 96,
                        "start": 39,
                        "end": 44
                    },
                    "colonToken": {
                        "kind": 21,
                        "flags": 0,
                        "start": 44,
                        "end": 46
                    },
                    "alternate": {
                        "kind": 134299649,
                        "text": "yield",
                        "rawText": "yield",
                        "flags": 96,
                        "start": 46,
                        "end": 52
                    },
                    "flags": 32,
                    "start": 34,
                    "end": 52
                },
                "flags": 32,
                "start": 34,
                "end": 53
            },
            "flags": 16,
            "start": 34,
            "end": 53
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "flags": 16,
                "start": 55,
                "end": 55
            },
            "flags": 16,
            "start": 53,
            "end": 57
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 60,
            "end": 61
        }
    ],
    "isModule": false,
    "source": "(function * () { x = class extends (a ? null : yield) { } });",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 61
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a `;` - start: 26, end: 34
✖ Expected a `;` - start: 53, end: 55
✖ Declaration or statement expected - start: 57, end: 59
✖ Declaration or statement expected - start: 59, end: 60

```

