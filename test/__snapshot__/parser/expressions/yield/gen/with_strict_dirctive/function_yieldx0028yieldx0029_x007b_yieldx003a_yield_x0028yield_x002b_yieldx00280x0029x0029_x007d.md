# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-28
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: function yield(yield) { yield: yield (yield + yield(0)); }
## Input

`````js
'use strict'; function yield(yield) { yield: yield (yield + yield(0)); }
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [
        {
            "kind": 201392131,
            "text": "use strict",
            "rawText": "'use strict'",
            "flags": 4194400,
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
                "flags": 0,
                "start": 13,
                "end": 22
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "yield",
                "rawText": "yield",
                "flags": 96,
                "start": 22,
                "end": 28
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
                            "flags": 96,
                            "start": 29,
                            "end": 34
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 32,
                        "start": 29,
                        "end": 34
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 28,
                "end": 35
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
                                "start": 37,
                                "end": 43
                            },
                            "labels": [
                                {
                                    "kind": 256,
                                    "label": "yield",
                                    "iterationStatement": false,
                                    "flags": 16,
                                    "start": 37,
                                    "end": 43
                                }
                            ],
                            "colonToken": {
                                "kind": 21,
                                "flags": 0,
                                "start": 43,
                                "end": 44
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
                                        "start": 44,
                                        "end": 50
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
                                                    "start": 52,
                                                    "end": 57
                                                },
                                                "operatorToken": {
                                                    "kind": 34098,
                                                    "flags": 64,
                                                    "start": 57,
                                                    "end": 59
                                                },
                                                "right": {
                                                    "kind": 131,
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "yield",
                                                        "rawText": "yield",
                                                        "flags": 96,
                                                        "start": 59,
                                                        "end": 65
                                                    },
                                                    "argumentList": {
                                                        "kind": 256,
                                                        "elements": [
                                                            {
                                                                "kind": 201392130,
                                                                "text": 0,
                                                                "rawText": "0",
                                                                "flags": 96,
                                                                "start": 66,
                                                                "end": 67
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 66,
                                                        "end": 67
                                                    },
                                                    "flags": 268435488,
                                                    "start": 59,
                                                    "end": 68
                                                },
                                                "flags": 32,
                                                "start": 52,
                                                "end": 68
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 52,
                                        "end": 68
                                    },
                                    "flags": 268435488,
                                    "start": 44,
                                    "end": 69
                                },
                                "flags": 16,
                                "start": 44,
                                "end": 70
                            },
                            "flags": 16,
                            "start": 37,
                            "end": 70
                        }
                    ],
                    "flags": 32,
                    "start": 37,
                    "end": 70
                },
                "flags": 32,
                "start": 35,
                "end": 72
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 13,
            "end": 72
        }
    ],
    "isModule": false,
    "source": "'use strict'; function yield(yield) { yield: yield (yield + yield(0)); }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 72
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Cannot use 'yield' as a name on a async generator declaration - start: 22, end: 28
✖ `yield` expression cannot be used in function parameters - start: 29, end: 34
✖ Identifier expected. 'yield' is a reserved word in strict mode and cannot be used as an label - start: 37, end: 44

```

