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

### Hybrid CST

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
                "flags": 768,
                "start": 0,
                "end": 8
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "not_gen",
                "rawText": "not_gen",
                "flags": 768,
                "start": 8,
                "end": 16
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 256,
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
                                    "flags": 768,
                                    "start": 20,
                                    "end": 22
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 768,
                                    "start": 22,
                                    "end": 24
                                },
                                "right": {
                                    "kind": 189,
                                    "decorators": null,
                                    "classKeyword": {
                                        "kind": 37822544,
                                        "flags": 768,
                                        "start": 24,
                                        "end": 30
                                    },
                                    "name": null,
                                    "typeParameters": null,
                                    "classHeritage": {
                                        "kind": 279,
                                        "extendsToken": {
                                            "kind": 4194391,
                                            "flags": 768,
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
                                                    "flags": 768,
                                                    "start": 40,
                                                    "end": 41
                                                },
                                                "questionToken": {
                                                    "kind": 22,
                                                    "flags": 768,
                                                    "start": 41,
                                                    "end": 43
                                                },
                                                "consequent": {
                                                    "kind": 269,
                                                    "text": null,
                                                    "flags": 768,
                                                    "start": 43,
                                                    "end": 48
                                                },
                                                "colonToken": {
                                                    "kind": 21,
                                                    "flags": 768,
                                                    "start": 48,
                                                    "end": 50
                                                },
                                                "alternate": {
                                                    "kind": 134299649,
                                                    "text": "yield",
                                                    "rawText": "yield",
                                                    "flags": 768,
                                                    "start": 50,
                                                    "end": 56
                                                },
                                                "flags": 256,
                                                "start": 38,
                                                "end": 56
                                            },
                                            "flags": 256,
                                            "start": 38,
                                            "end": 57
                                        },
                                        "typeParameter": null,
                                        "flags": 128,
                                        "start": 38,
                                        "end": 57
                                    },
                                    "members": {
                                        "kind": 277,
                                        "elements": [],
                                        "flags": 256,
                                        "start": 59,
                                        "end": 61
                                    },
                                    "flags": 256,
                                    "start": 24,
                                    "end": 61
                                },
                                "flags": 256,
                                "start": 20,
                                "end": 61
                            },
                            "flags": 128,
                            "start": 20,
                            "end": 61
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 20,
                    "end": 61
                },
                "flags": 256,
                "start": 18,
                "end": 63
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 256,
            "start": 0,
            "end": 63
        }
    ],
    "isModule": false,
    "text": "function not_gen() { x = class extends (a ? null : yield) { } }}",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 63,
            "end": 64
        }
    ],
    "start": 0,
    "end": 64
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

