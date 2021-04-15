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

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 176,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37814362,
                "flags": 768,
                "start": 0,
                "end": 8
            },
            "generatorToken": {
                "kind": 67143222,
                "flags": 768,
                "start": 8,
                "end": 10
            },
            "name": {
                "kind": 134299649,
                "text": "gen",
                "rawText": "gen",
                "flags": 768,
                "start": 10,
                "end": 14
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 256,
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
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37814362,
                                "flags": 768,
                                "start": 18,
                                "end": 27
                            },
                            "generatorToken": null,
                            "name": {
                                "kind": 134299649,
                                "text": "not_gen",
                                "rawText": "not_gen",
                                "flags": 768,
                                "start": 27,
                                "end": 35
                            },
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 256,
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
                                                    "flags": 768,
                                                    "start": 39,
                                                    "end": 41
                                                },
                                                "operatorToken": {
                                                    "kind": 4125,
                                                    "flags": 768,
                                                    "start": 41,
                                                    "end": 43
                                                },
                                                "right": {
                                                    "kind": 189,
                                                    "decorators": null,
                                                    "classKeyword": {
                                                        "kind": 37814352,
                                                        "flags": 768,
                                                        "start": 43,
                                                        "end": 49
                                                    },
                                                    "name": null,
                                                    "typeParameters": null,
                                                    "classHeritage": {
                                                        "kind": 279,
                                                        "extendsToken": {
                                                            "kind": 4194391,
                                                            "flags": 768,
                                                            "start": 49,
                                                            "end": 57
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
                                                                    "start": 59,
                                                                    "end": 60
                                                                },
                                                                "questionToken": {
                                                                    "kind": 22,
                                                                    "flags": 768,
                                                                    "start": 60,
                                                                    "end": 62
                                                                },
                                                                "consequent": {
                                                                    "kind": 269,
                                                                    "text": null,
                                                                    "flags": 768,
                                                                    "start": 62,
                                                                    "end": 67
                                                                },
                                                                "colonToken": {
                                                                    "kind": 21,
                                                                    "flags": 768,
                                                                    "start": 67,
                                                                    "end": 69
                                                                },
                                                                "alternate": {
                                                                    "kind": 134299649,
                                                                    "text": "yield",
                                                                    "rawText": "yield",
                                                                    "flags": 768,
                                                                    "start": 69,
                                                                    "end": 75
                                                                },
                                                                "flags": 256,
                                                                "start": 57,
                                                                "end": 75
                                                            },
                                                            "flags": 256,
                                                            "start": 57,
                                                            "end": 76
                                                        },
                                                        "typeParameter": null,
                                                        "flags": 128,
                                                        "start": 57,
                                                        "end": 76
                                                    },
                                                    "members": {
                                                        "kind": 277,
                                                        "elements": [],
                                                        "flags": 256,
                                                        "start": 78,
                                                        "end": 80
                                                    },
                                                    "flags": 256,
                                                    "start": 43,
                                                    "end": 80
                                                },
                                                "flags": 256,
                                                "start": 39,
                                                "end": 80
                                            },
                                            "flags": 128,
                                            "start": 39,
                                            "end": 80
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 256,
                                    "start": 39,
                                    "end": 80
                                },
                                "flags": 256,
                                "start": 37,
                                "end": 82
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 256,
                            "start": 18,
                            "end": 82
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 18,
                    "end": 82
                },
                "flags": 256,
                "start": 16,
                "end": 83
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 2304,
            "start": 0,
            "end": 83
        }
    ],
    "isModule": false,
    "text": "function * gen() { function not_gen() { x = class extends (a ? null : yield) { } }}",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 83
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

