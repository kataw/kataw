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
                            "kind": 176,
                            "declareKeyword": null,
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 20,
                                "start": 0,
                                "end": 29
                            },
                            "generatorToken": null,
                            "name": {
                                "kind": 134299649,
                                "text": "yield",
                                "rawText": "yield",
                                "flags": 768,
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
                                            "text": "yield",
                                            "rawText": "yield",
                                            "flags": 768,
                                            "start": 36,
                                            "end": 41
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": null,
                                        "flags": 256,
                                        "start": 36,
                                        "end": 41
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 256,
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
                                            "kind": 120,
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "yield",
                                                "rawText": "yield",
                                                "flags": 768,
                                                "start": 44,
                                                "end": 50
                                            },
                                            "flags": 128,
                                            "start": 44,
                                            "end": 50
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 256,
                                    "start": 44,
                                    "end": 50
                                },
                                "flags": 256,
                                "start": 42,
                                "end": 50
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 128,
                            "start": 20,
                            "end": 50
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 20,
                    "end": 50
                },
                "flags": 256,
                "start": 18,
                "end": 50
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 128,
            "start": 0,
            "end": 50
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "yield",
                    "rawText": "yield",
                    "flags": 768,
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
                                "text": "yield",
                                "rawText": "yield",
                                "flags": 768,
                                "start": 59,
                                "end": 64
                            },
                            "operatorToken": {
                                "kind": 34098,
                                "flags": 64,
                                "start": 512,
                                "end": 66
                            },
                            "right": {
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "yield",
                                    "rawText": "yield",
                                    "flags": 768,
                                    "start": 66,
                                    "end": 72
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 201392130,
                                            "text": 0,
                                            "rawText": "0",
                                            "flags": 768,
                                            "start": 73,
                                            "end": 74
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "start": 73,
                                    "end": 74
                                },
                                "flags": 256,
                                "start": 66,
                                "end": 75
                            },
                            "flags": 256,
                            "start": 59,
                            "end": 75
                        }
                    ],
                    "trailingComma": false,
                    "flags": 256,
                    "start": 59,
                    "end": 75
                },
                "flags": 256,
                "start": 51,
                "end": 76
            },
            "flags": 128,
            "start": 51,
            "end": 77
        }
    ],
    "isModule": false,
    "text": "function not_gen() { function yield(yield) { yield: yield (yield + yield(0)); } }}",
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
✖ Statement expected - start: 50, end: 51
✖ Statement expected - start: 77, end: 79
✖ Statement expected - start: 79, end: 81
✖ Statement expected - start: 81, end: 82

```

