# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-05
- From: kataw8/test\__snapshot__/parser/expressions/yield/autogen.md
- Path: kataw8/test\__snapshot__\parser\expressions\yield\gen\function_declaration
> :: test: function declaration
> :: case: function yield(yield) { yield: yield (yield + yield(0)); }
## Input

`````js
function not_gen() { function yield(yield) { yield: yield (yield + yield(0)); } }}
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
                "flags": 64,
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
                            "kind": 176,
                            "declareKeyword": null,
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 64,
                                "start": 20,
                                "end": 29
                            },
                            "generatorToken": null,
                            "name": {
                                "kind": 134299649,
                                "text": "yield",
                                "rawText": "yield",
                                "flags": 96,
                                "start": 29,
                                "end": 35
                            },
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [
                                    {
                                        "kind": 134299649,
                                        "text": "yield",
                                        "rawText": "yield",
                                        "flags": 96,
                                        "start": 36,
                                        "end": 41
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 96,
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
                                                "text": "yield",
                                                "rawText": "yield",
                                                "flags": 96,
                                                "start": 44,
                                                "end": 50
                                            },
                                            "colonToken": {
                                                "kind": 21,
                                                "flags": 64,
                                                "start": 50,
                                                "end": 51
                                            },
                                            "statement": {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 131,
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "yield",
                                                        "rawText": "yield",
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
                                                                    "text": "yield",
                                                                    "rawText": "yield",
                                                                    "flags": 96,
                                                                    "start": 59,
                                                                    "end": 64
                                                                },
                                                                "operatorToken": {
                                                                    "kind": 99634,
                                                                    "flags": 64,
                                                                    "start": 64,
                                                                    "end": 66
                                                                },
                                                                "right": {
                                                                    "kind": 131,
                                                                    "expression": {
                                                                        "kind": 134299649,
                                                                        "text": "yield",
                                                                        "rawText": "yield",
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
                                                                    "flags": 268435488,
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
                                                    "flags": 268435488,
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

```

### Diagnostics

```javascript
✖ Declaration or statement expected - start: 81, end: 82

```

