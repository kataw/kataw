# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: kataw8/test\__snapshot__/parser/expressions/yield/autogen.md
- Path: kataw8/test\__snapshot__\parser\expressions\yield\gen\simple
> :: test: simple
> :: case: function yield(yield) { yield: yield (yield + yield(0)); }
## Input

`````js
function yield(yield) { yield: yield (yield + yield(0)); }
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
                "text": "yield",
                "rawText": "yield",
                "flags": 96,
                "start": 8,
                "end": 14
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
                    {
                        "kind": 134299649,
                        "text": "yield",
                        "rawText": "yield",
                        "flags": 96,
                        "start": 15,
                        "end": 20
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 14,
                "end": 21
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
                                "start": 23,
                                "end": 29
                            },
                            "colonToken": {
                                "kind": 21,
                                "flags": 64,
                                "start": 29,
                                "end": 30
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
                                        "start": 30,
                                        "end": 36
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
                                                    "start": 38,
                                                    "end": 43
                                                },
                                                "operatorToken": {
                                                    "kind": 99634,
                                                    "flags": 64,
                                                    "start": 43,
                                                    "end": 45
                                                },
                                                "right": {
                                                    "kind": 131,
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "yield",
                                                        "rawText": "yield",
                                                        "flags": 96,
                                                        "start": 45,
                                                        "end": 51
                                                    },
                                                    "argumentList": {
                                                        "kind": 256,
                                                        "elements": [
                                                            {
                                                                "kind": 201392130,
                                                                "text": 0,
                                                                "rawText": "0",
                                                                "flags": 96,
                                                                "start": 52,
                                                                "end": 53
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 52,
                                                        "end": 53
                                                    },
                                                    "flags": 268435488,
                                                    "start": 45,
                                                    "end": 54
                                                },
                                                "flags": 32,
                                                "start": 38,
                                                "end": 54
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 38,
                                        "end": 54
                                    },
                                    "flags": 268435488,
                                    "start": 30,
                                    "end": 55
                                },
                                "flags": 16,
                                "start": 30,
                                "end": 56
                            },
                            "flags": 16,
                            "start": 23,
                            "end": 56
                        }
                    ],
                    "flags": 32,
                    "start": 23,
                    "end": 56
                },
                "flags": 32,
                "start": 21,
                "end": 58
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 58
        }
    ],
    "isModule": false,
    "source": "function yield(yield) { yield: yield (yield + yield(0)); }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 58
}
```

### Printed

```javascript

function yield(yield) {
  yield: yield(yield + yield(0));
}
```

### Diagnostics

```javascript
✔ No errors
```

