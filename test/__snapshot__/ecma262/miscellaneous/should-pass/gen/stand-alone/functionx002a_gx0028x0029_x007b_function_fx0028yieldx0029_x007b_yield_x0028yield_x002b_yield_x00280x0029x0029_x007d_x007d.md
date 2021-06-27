# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/miscellaneous/should-pass/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/should-pass/gen/stand-alone
> :: test: stand-alone
> :: case: function* g() { function f(yield) { yield (yield + yield (0)); } }
## Options

`````js
{}
`````
## Input

`````js
function* g() { function f(yield) { yield (yield + yield (0)); } }
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
            "asteriskToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 8,
                "end": 9
            },
            "name": {
                "kind": 134299649,
                "text": "g",
                "rawText": "g",
                "flags": 96,
                "start": 9,
                "end": 11
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 12,
                "end": 12
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
                                "start": 15,
                                "end": 24
                            },
                            "asteriskToken": null,
                            "name": {
                                "kind": 134299649,
                                "text": "f",
                                "rawText": "f",
                                "flags": 96,
                                "start": 24,
                                "end": 26
                            },
                            "typeParameters": null,
                            "formalParameterList": {
                                "kind": 214,
                                "formalParameters": [
                                    {
                                        "kind": 134299649,
                                        "text": "yield",
                                        "rawText": "yield",
                                        "flags": 96,
                                        "start": 27,
                                        "end": 32
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 27,
                                "end": 32
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
                                                    "start": 35,
                                                    "end": 41
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
                                                                "start": 43,
                                                                "end": 48
                                                            },
                                                            "operatorToken": {
                                                                "kind": 99634,
                                                                "flags": 96,
                                                                "start": 48,
                                                                "end": 50
                                                            },
                                                            "right": {
                                                                "kind": 131,
                                                                "expression": {
                                                                    "kind": 134299649,
                                                                    "text": "yield",
                                                                    "rawText": "yield",
                                                                    "flags": 96,
                                                                    "start": 50,
                                                                    "end": 56
                                                                },
                                                                "argumentList": {
                                                                    "kind": 256,
                                                                    "elements": [
                                                                        {
                                                                            "kind": 201392130,
                                                                            "text": 0,
                                                                            "rawText": "0",
                                                                            "flags": 96,
                                                                            "start": 58,
                                                                            "end": 59
                                                                        }
                                                                    ],
                                                                    "trailingComma": false,
                                                                    "flags": 32,
                                                                    "start": 58,
                                                                    "end": 59
                                                                },
                                                                "flags": 268435488,
                                                                "start": 50,
                                                                "end": 60
                                                            },
                                                            "flags": 32,
                                                            "start": 43,
                                                            "end": 60
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "start": 43,
                                                    "end": 60
                                                },
                                                "flags": 268435488,
                                                "start": 35,
                                                "end": 61
                                            },
                                            "flags": 16,
                                            "start": 35,
                                            "end": 62
                                        }
                                    ],
                                    "flags": 32,
                                    "start": 35,
                                    "end": 62
                                },
                                "flags": 32,
                                "start": 33,
                                "end": 64
                            },
                            "returnType": null,
                            "flags": 16,
                            "start": 15,
                            "end": 64
                        }
                    ],
                    "flags": 32,
                    "start": 15,
                    "end": 64
                },
                "flags": 32,
                "start": 13,
                "end": 66
            },
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 66
        }
    ],
    "isModule": false,
    "source": "function* g() { function f(yield) { yield (yield + yield (0)); } }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 66
}
```

### Printed

```javascript

function * g() {
  function f() {
    yield(yield + yield(0));
  }
}
```

### Diagnostics

```javascript
✔ No errors
```

