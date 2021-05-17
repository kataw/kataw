# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: function generator
> :: case: x = class extends (a ? null : yield) { }
## Input

`````js
function * gen() { function not_gen() { x = class extends (a ? null : yield) { } }}
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
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 0,
                "start": 0,
                "end": 8
            },
            "generatorToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 8,
                "end": 10
            },
            "name": {
                "kind": 134299649,
                "text": "gen",
                "rawText": "gen",
                "flags": 96,
                "start": 10,
                "end": 14
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 14,
                "end": 16
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 176,
                            "declareKeyword": null,
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 0,
                                "start": 18,
                                "end": 27
                            },
                            "generatorToken": null,
                            "name": {
                                "kind": 134299649,
                                "text": "not_gen",
                                "rawText": "not_gen",
                                "flags": 96,
                                "start": 27,
                                "end": 35
                            },
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 35,
                                "end": 37
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
                                                    "start": 39,
                                                    "end": 41
                                                },
                                                "operatorToken": {
                                                    "kind": 4125,
                                                    "flags": 64,
                                                    "start": 41,
                                                    "end": 43
                                                },
                                                "right": {
                                                    "kind": 189,
                                                    "decorators": null,
                                                    "classKeyword": {
                                                        "kind": 37822544,
                                                        "flags": 0,
                                                        "start": 43,
                                                        "end": 49
                                                    },
                                                    "name": null,
                                                    "typeParameters": null,
                                                    "members": {
                                                        "kind": 277,
                                                        "classHeritage": null,
                                                        "elements": [],
                                                        "flags": 32,
                                                        "start": 43,
                                                        "end": 43
                                                    },
                                                    "flags": 32,
                                                    "start": 43,
                                                    "end": 49
                                                },
                                                "flags": 32,
                                                "start": 39,
                                                "end": 49
                                            },
                                            "flags": 16,
                                            "start": 39,
                                            "end": 49
                                        }
                                    ],
                                    "flags": 32,
                                    "start": 39,
                                    "end": 49
                                },
                                "flags": 32,
                                "start": 37,
                                "end": 49
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 16,
                            "start": 18,
                            "end": 49
                        }
                    ],
                    "flags": 32,
                    "start": 18,
                    "end": 49
                },
                "flags": 32,
                "start": 16,
                "end": 49
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 49
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
                        "start": 59,
                        "end": 60
                    },
                    "questionToken": {
                        "kind": 134217750,
                        "flags": 64,
                        "start": 60,
                        "end": 62
                    },
                    "consequent": {
                        "kind": 269,
                        "text": null,
                        "flags": 96,
                        "start": 62,
                        "end": 67
                    },
                    "colonToken": {
                        "kind": 21,
                        "flags": 0,
                        "start": 67,
                        "end": 69
                    },
                    "alternate": {
                        "kind": 134299649,
                        "text": "yield",
                        "rawText": "yield",
                        "flags": 96,
                        "start": 69,
                        "end": 75
                    },
                    "flags": 32,
                    "start": 57,
                    "end": 75
                },
                "flags": 32,
                "start": 57,
                "end": 76
            },
            "flags": 16,
            "start": 57,
            "end": 76
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "flags": 16,
                "start": 78,
                "end": 78
            },
            "flags": 16,
            "start": 76,
            "end": 80
        }
    ],
    "isModule": false,
    "source": "function * gen() { function not_gen() { x = class extends (a ? null : yield) { } }}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 83
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a `;` - start: 49, end: 57
✖ Expected a `;` - start: 76, end: 78
✖ Declaration or statement expected - start: 80, end: 82
✖ Declaration or statement expected - start: 82, end: 83

```

