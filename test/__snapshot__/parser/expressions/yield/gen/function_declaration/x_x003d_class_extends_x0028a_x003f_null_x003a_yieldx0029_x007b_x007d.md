# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: function declaration
> :: case: x = class extends (a ? null : yield) { }
## Input

`````js
function not_gen() { x = class extends (a ? null : yield) { } }}
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
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "not_gen",
                "rawText": "not_gen",
                "flags": 96,
                "start": 8,
                "end": 16
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 16,
                "end": 18
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
                                    "start": 20,
                                    "end": 22
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 64,
                                    "start": 22,
                                    "end": 24
                                },
                                "right": {
                                    "kind": 189,
                                    "decorators": null,
                                    "classKeyword": {
                                        "kind": 37822544,
                                        "flags": 0,
                                        "start": 24,
                                        "end": 30
                                    },
                                    "name": null,
                                    "typeParameters": null,
                                    "classHeritage": {
                                        "kind": 279,
                                        "extendsKeyword": {
                                            "kind": 4194391,
                                            "flags": 0,
                                            "start": 30,
                                            "end": 38
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
                                                    "start": 40,
                                                    "end": 41
                                                },
                                                "questionToken": {
                                                    "kind": 134217750,
                                                    "flags": 64,
                                                    "start": 41,
                                                    "end": 43
                                                },
                                                "consequent": {
                                                    "kind": 269,
                                                    "text": null,
                                                    "flags": 96,
                                                    "start": 43,
                                                    "end": 48
                                                },
                                                "colonToken": {
                                                    "kind": 21,
                                                    "flags": 0,
                                                    "start": 48,
                                                    "end": 50
                                                },
                                                "alternate": {
                                                    "kind": 134299649,
                                                    "text": "yield",
                                                    "rawText": "yield",
                                                    "flags": 96,
                                                    "start": 50,
                                                    "end": 56
                                                },
                                                "flags": 32,
                                                "start": 38,
                                                "end": 56
                                            },
                                            "flags": 32,
                                            "start": 38,
                                            "end": 57
                                        },
                                        "typeParameter": null,
                                        "flags": 16,
                                        "start": 38,
                                        "end": 57
                                    },
                                    "members": {
                                        "kind": 277,
                                        "elements": [],
                                        "flags": 32,
                                        "start": 59,
                                        "end": 61
                                    },
                                    "flags": 32,
                                    "start": 24,
                                    "end": 61
                                },
                                "flags": 32,
                                "start": 20,
                                "end": 61
                            },
                            "flags": 16,
                            "start": 20,
                            "end": 61
                        }
                    ],
                    "flags": 32,
                    "start": 20,
                    "end": 61
                },
                "flags": 32,
                "start": 18,
                "end": 63
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 63
        }
    ],
    "isModule": false,
    "source": "function not_gen() { x = class extends (a ? null : yield) { } }}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 64
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Declaration or statement expected - start: 63, end: 64

```

