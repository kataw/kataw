# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/miscellaneous/should-pass/autogen.md
- Path: kataw8/test\__snapshot__\parser\miscellaneous\should-pass\gen\in_a_block
> :: test: in a block
> :: case: function yield(yield) { yield: yield (yield + yield (0)); }
## Input

`````js
{ function yield(yield) { yield: yield (yield + yield (0)); } }
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 176,
                        "declareKeyword": null,
                        "asyncKeyword": null,
                        "functionKeyword": {
                            "kind": 37822554,
                            "flags": 64,
                            "start": 1,
                            "end": 10
                        },
                        "generatorToken": null,
                        "name": {
                            "kind": 134299649,
                            "text": "yield",
                            "rawText": "yield",
                            "flags": 96,
                            "start": 10,
                            "end": 16
                        },
                        "formalParameters": {
                            "kind": 214,
                            "formalParameterList": [
                                {
                                    "kind": 134299649,
                                    "text": "yield",
                                    "rawText": "yield",
                                    "flags": 96,
                                    "start": 17,
                                    "end": 22
                                }
                            ],
                            "trailingComma": false,
                            "flags": 96,
                            "start": 16,
                            "end": 23
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
                                            "start": 25,
                                            "end": 31
                                        },
                                        "colonToken": {
                                            "kind": 21,
                                            "flags": 64,
                                            "start": 31,
                                            "end": 32
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
                                                    "start": 32,
                                                    "end": 38
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
                                                                "start": 40,
                                                                "end": 45
                                                            },
                                                            "operatorToken": {
                                                                "kind": 99634,
                                                                "flags": 64,
                                                                "start": 45,
                                                                "end": 47
                                                            },
                                                            "right": {
                                                                "kind": 131,
                                                                "expression": {
                                                                    "kind": 134299649,
                                                                    "text": "yield",
                                                                    "rawText": "yield",
                                                                    "flags": 96,
                                                                    "start": 47,
                                                                    "end": 53
                                                                },
                                                                "argumentList": {
                                                                    "kind": 256,
                                                                    "elements": [
                                                                        {
                                                                            "kind": 201392130,
                                                                            "text": 0,
                                                                            "rawText": "0",
                                                                            "flags": 96,
                                                                            "start": 55,
                                                                            "end": 56
                                                                        }
                                                                    ],
                                                                    "trailingComma": false,
                                                                    "flags": 32,
                                                                    "start": 55,
                                                                    "end": 56
                                                                },
                                                                "flags": 268435488,
                                                                "start": 47,
                                                                "end": 57
                                                            },
                                                            "flags": 32,
                                                            "start": 40,
                                                            "end": 57
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "start": 40,
                                                    "end": 57
                                                },
                                                "flags": 268435488,
                                                "start": 32,
                                                "end": 58
                                            },
                                            "flags": 16,
                                            "start": 32,
                                            "end": 59
                                        },
                                        "flags": 16,
                                        "start": 25,
                                        "end": 59
                                    }
                                ],
                                "flags": 32,
                                "start": 25,
                                "end": 59
                            },
                            "flags": 32,
                            "start": 23,
                            "end": 61
                        },
                        "typeParameters": null,
                        "returnType": null,
                        "flags": 16,
                        "start": 1,
                        "end": 61
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 61
            },
            "flags": 16,
            "start": 0,
            "end": 63
        }
    ],
    "isModule": false,
    "source": "{ function yield(yield) { yield: yield (yield + yield (0)); } }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 63
}
```

### Printed

```javascript

{
  function yield(yield) {
    yield: yield(yield + yield(0));
  }
}
```

### Diagnostics

```javascript
✔ No errors
```

