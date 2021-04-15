# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: function declaration
> :: case: (yield) ? yield : yield
## Input

`````js
function not_gen() { (yield) ? yield : yield }}
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
                                "kind": 197,
                                "shortCircuit": {
                                    "kind": 121,
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "yield",
                                        "rawText": "yield",
                                        "flags": 768,
                                        "start": 22,
                                        "end": 27
                                    },
                                    "flags": 256,
                                    "start": 20,
                                    "end": 28
                                },
                                "questionToken": {
                                    "kind": 22,
                                    "flags": 768,
                                    "start": 28,
                                    "end": 30
                                },
                                "consequent": {
                                    "kind": 134299649,
                                    "text": "yield",
                                    "rawText": "yield",
                                    "flags": 768,
                                    "start": 30,
                                    "end": 36
                                },
                                "colonToken": {
                                    "kind": 21,
                                    "flags": 768,
                                    "start": 36,
                                    "end": 38
                                },
                                "alternate": {
                                    "kind": 134299649,
                                    "text": "yield",
                                    "rawText": "yield",
                                    "flags": 768,
                                    "start": 38,
                                    "end": 44
                                },
                                "flags": 256,
                                "start": 20,
                                "end": 44
                            },
                            "flags": 128,
                            "start": 20,
                            "end": 44
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 20,
                    "end": 44
                },
                "flags": 256,
                "start": 18,
                "end": 46
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 128,
            "start": 0,
            "end": 46
        }
    ],
    "isModule": false,
    "text": "function not_gen() { (yield) ? yield : yield }}",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 46,
            "end": 47
        }
    ],
    "start": 0,
    "end": 47
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

