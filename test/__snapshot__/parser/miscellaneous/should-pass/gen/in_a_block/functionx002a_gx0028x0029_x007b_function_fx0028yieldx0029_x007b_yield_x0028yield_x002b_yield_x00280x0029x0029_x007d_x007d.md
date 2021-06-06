# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/miscellaneous/should-pass/autogen.md
- Path: kataw8/test\__snapshot__\parser\miscellaneous\should-pass\gen\in_a_block
> :: test: in a block
> :: case: function* g() { function f(yield) { yield (yield + yield (0)); } }
## Input

`````js
{ function* g() { function f(yield) { yield (yield + yield (0)); } } }
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
                        "generatorToken": {
                            "kind": 67143222,
                            "flags": 64,
                            "start": 10,
                            "end": 11
                        },
                        "name": {
                            "kind": 134299649,
                            "text": "g",
                            "rawText": "g",
                            "flags": 96,
                            "start": 11,
                            "end": 13
                        },
                        "formalParameters": {
                            "kind": 214,
                            "formalParameterList": [],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 13,
                            "end": 15
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
                                            "start": 17,
                                            "end": 26
                                        },
                                        "generatorToken": null,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "f",
                                            "rawText": "f",
                                            "flags": 96,
                                            "start": 26,
                                            "end": 28
                                        },
                                        "formalParameters": {
                                            "kind": 214,
                                            "formalParameterList": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "yield",
                                                    "rawText": "yield",
                                                    "flags": 96,
                                                    "start": 29,
                                                    "end": 34
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 96,
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
                                                        "kind": 120,
                                                        "expression": {
                                                            "kind": 131,
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "yield",
                                                                "rawText": "yield",
                                                                "flags": 96,
                                                                "start": 37,
                                                                "end": 43
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
                                                                            "start": 45,
                                                                            "end": 50
                                                                        },
                                                                        "operatorToken": {
                                                                            "kind": 99634,
                                                                            "flags": 64,
                                                                            "start": 50,
                                                                            "end": 52
                                                                        },
                                                                        "right": {
                                                                            "kind": 131,
                                                                            "expression": {
                                                                                "kind": 134299649,
                                                                                "text": "yield",
                                                                                "rawText": "yield",
                                                                                "flags": 96,
                                                                                "start": 52,
                                                                                "end": 58
                                                                            },
                                                                            "argumentList": {
                                                                                "kind": 256,
                                                                                "elements": [
                                                                                    {
                                                                                        "kind": 201392130,
                                                                                        "text": 0,
                                                                                        "rawText": "0",
                                                                                        "flags": 96,
                                                                                        "start": 60,
                                                                                        "end": 61
                                                                                    }
                                                                                ],
                                                                                "trailingComma": false,
                                                                                "flags": 32,
                                                                                "start": 60,
                                                                                "end": 61
                                                                            },
                                                                            "flags": 268435488,
                                                                            "start": 52,
                                                                            "end": 62
                                                                        },
                                                                        "flags": 32,
                                                                        "start": 45,
                                                                        "end": 62
                                                                    }
                                                                ],
                                                                "trailingComma": false,
                                                                "flags": 32,
                                                                "start": 45,
                                                                "end": 62
                                                            },
                                                            "flags": 268435488,
                                                            "start": 37,
                                                            "end": 63
                                                        },
                                                        "flags": 16,
                                                        "start": 37,
                                                        "end": 64
                                                    }
                                                ],
                                                "flags": 32,
                                                "start": 37,
                                                "end": 64
                                            },
                                            "flags": 32,
                                            "start": 35,
                                            "end": 66
                                        },
                                        "typeParameters": null,
                                        "returnType": null,
                                        "flags": 16,
                                        "start": 17,
                                        "end": 66
                                    }
                                ],
                                "flags": 32,
                                "start": 17,
                                "end": 66
                            },
                            "flags": 32,
                            "start": 15,
                            "end": 68
                        },
                        "typeParameters": null,
                        "returnType": null,
                        "flags": 272,
                        "start": 1,
                        "end": 68
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 68
            },
            "flags": 16,
            "start": 0,
            "end": 70
        }
    ],
    "isModule": false,
    "source": "{ function* g() { function f(yield) { yield (yield + yield (0)); } } }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 70
}
```

### Printed

```javascript

{
  function * g() {
    function f(yield) {
      yield(yield + yield(0));
    }
  }
}
```

### Diagnostics

```javascript
✔ No errors
```

