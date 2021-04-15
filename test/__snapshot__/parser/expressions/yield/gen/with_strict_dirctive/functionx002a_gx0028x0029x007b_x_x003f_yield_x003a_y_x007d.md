# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: function* g(){ x ? yield : y }
## Input

`````js
'use strict'; function* g(){ x ? yield : y }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [
        {
            "kind": 201392131,
            "text": "use strict",
            "rawText": "use strict",
            "flags": 67109632,
            "start": 0,
            "end": 12
        }
    ],
    "statements": [
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 768,
                "start": 13,
                "end": 22
            },
            "generatorToken": {
                "kind": 67143222,
                "flags": 768,
                "start": 22,
                "end": 23
            },
            "name": {
                "kind": 134299649,
                "text": "g",
                "rawText": "g",
                "flags": 768,
                "start": 23,
                "end": 25
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 256,
                "start": 25,
                "end": 27
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
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 768,
                                    "start": 28,
                                    "end": 30
                                },
                                "questionToken": {
                                    "kind": 22,
                                    "flags": 768,
                                    "start": 30,
                                    "end": 32
                                },
                                "consequent": {
                                    "kind": 229,
                                    "yieldKeyword": {
                                        "kind": 8454253,
                                        "flags": 768,
                                        "start": 32,
                                        "end": 38
                                    },
                                    "delegate": false,
                                    "asteriskToken": null,
                                    "expression": null,
                                    "flags": 256,
                                    "start": 32,
                                    "end": 38
                                },
                                "colonToken": {
                                    "kind": 21,
                                    "flags": 768,
                                    "start": 38,
                                    "end": 40
                                },
                                "alternate": {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 768,
                                    "start": 40,
                                    "end": 42
                                },
                                "flags": 256,
                                "start": 28,
                                "end": 42
                            },
                            "flags": 128,
                            "start": 28,
                            "end": 42
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 28,
                    "end": 42
                },
                "flags": 256,
                "start": 27,
                "end": 44
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 2304,
            "start": 13,
            "end": 44
        }
    ],
    "isModule": false,
    "text": "'use strict'; function* g(){ x ? yield : y }",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 44
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

