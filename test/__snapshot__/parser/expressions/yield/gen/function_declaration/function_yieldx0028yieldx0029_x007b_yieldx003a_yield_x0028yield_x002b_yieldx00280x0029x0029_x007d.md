# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: function declaration
> :: case: function yield(yield) { yield: yield (yield + yield(0)); }
## Input

`````js
function not_gen() { function yield(yield) { yield: yield (yield + yield(0)); } }}
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
                "flags": 0,
                "start": 0,
                "end": 8
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "original": "not_gen",
                "text": "not_gen",
                "rawText": " not_gen",
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
                            "kind": 176,
                            "declareKeyword": null,
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 0,
                                "start": 20,
                                "end": 29
                            },
                            "generatorToken": null,
                            "name": {
                                "kind": 134299649,
                                "original": "yield",
                                "text": "yield",
                                "rawText": " yield",
                                "flags": 96,
                                "start": 29,
                                "end": 35
                            },
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [
                                    {
                                        "kind": 215,
                                        "ellipsisToken": null,
                                        "binding": {
                                            "kind": 134299649,
                                            "original": "yield",
                                            "text": "yield",
                                            "rawText": "yield",
                                            "flags": 96,
                                            "start": 36,
                                            "end": 41
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": null,
                                        "flags": 32,
                                        "start": 36,
                                        "end": 41
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 35,
                                "end": 42
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [
                                        {
                                            "kind": 163,
                                            "label": {
                                                "kind": 134299649,
                                                "original": "yield",
                                                "text": "yield",
                                                "rawText": " yield",
                                                "flags": 96,
                                                "start": 44,
                                                "end": 50
                                            },
                                            "labels": [
                                                {
                                                    "kind": 256,
                                                    "label": "yield",
                                                    "iterationStatement": false,
                                                    "flags": 16,
                                                    "start": 44,
                                                    "end": 50
                                                }
                                            ],
                                            "colonToken": {
                                                "kind": 21,
                                                "flags": 0,
                                                "start": 50,
                                                "end": 51
                                            },
                                            "statement": {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 131,
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "original": "yield",
                                                        "text": "yield",
                                                        "rawText": " yield",
                                                        "flags": 96,
                                                        "start": 51,
                                                        "end": 57
                                                    },
                                                    "argumentList": {
                                                        "kind": 256,
                                                        "elements": [
                                                            {
                                                                "kind": 198,
                                                                "left": {
                                                                    "kind": 134299649,
                                                                    "original": "yield",
                                                                    "text": "yield",
                                                                    "rawText": "yield",
                                                                    "flags": 96,
                                                                    "start": 59,
                                                                    "end": 64
                                                                },
                                                                "operatorToken": {
                                                                    "kind": 34098,
                                                                    "flags": 64,
                                                                    "start": 64,
                                                                    "end": 66
                                                                },
                                                                "right": {
                                                                    "kind": 131,
                                                                    "expression": {
                                                                        "kind": 134299649,
                                                                        "original": "yield",
                                                                        "text": "yield",
                                                                        "rawText": " yield",
                                                                        "flags": 96,
                                                                        "start": 66,
                                                                        "end": 72
                                                                    },
                                                                    "argumentList": {
                                                                        "kind": 256,
                                                                        "elements": [
                                                                            {
                                                                                "kind": 201392130,
                                                                                "text": 0,
                                                                                "original": "0",
                                                                                "rawText": "0",
                                                                                "flags": 96,
                                                                                "start": 73,
                                                                                "end": 74
                                                                            }
                                                                        ],
                                                                        "trailingComma": false,
                                                                        "flags": 32,
                                                                        "start": 73,
                                                                        "end": 74
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 66,
                                                                    "end": 75
                                                                },
                                                                "flags": 32,
                                                                "start": 59,
                                                                "end": 75
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 59,
                                                        "end": 75
                                                    },
                                                    "flags": 32,
                                                    "start": 51,
                                                    "end": 76
                                                },
                                                "flags": 16,
                                                "start": 51,
                                                "end": 77
                                            },
                                            "flags": 16,
                                            "start": 44,
                                            "end": 77
                                        }
                                    ],
                                    "flags": 32,
                                    "start": 44,
                                    "end": 77
                                },
                                "flags": 32,
                                "start": 42,
                                "end": 79
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 16,
                            "start": 20,
                            "end": 79
                        }
                    ],
                    "flags": 32,
                    "start": 20,
                    "end": 79
                },
                "flags": 32,
                "start": 18,
                "end": 81
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 81
        }
    ],
    "isModule": false,
    "source": "function not_gen() { function yield(yield) { yield: yield (yield + yield(0)); } }}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 82
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Statement expected - start: 81, end: 82

```

