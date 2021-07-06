# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/yield/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/yield/gen/function_generator
> :: test: function generator
> :: case: function yield(yield) { yield: yield (yield + yield(0)); }
## Options

`````js
{}
`````
## Input

`````js
function * gen() { function not_gen() { function yield(yield) { yield: yield (yield + yield(0)); } }}
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
                "transformFlags": 0,
                "start": 0,
                "end": 8
            },
            "asteriskToken": {
                "kind": 67143222,
                "flags": 64,
                "transformFlags": 32,
                "start": 8,
                "end": 10
            },
            "name": {
                "kind": 134299649,
                "text": "gen",
                "rawText": "gen",
                "flags": 96,
                "transformFlags": 0,
                "start": 10,
                "end": 14
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 15,
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
                                "transformFlags": 0,
                                "start": 18,
                                "end": 27
                            },
                            "asteriskToken": null,
                            "name": {
                                "kind": 134299649,
                                "text": "not_gen",
                                "rawText": "not_gen",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 27,
                                "end": 35
                            },
                            "typeParameters": null,
                            "formalParameterList": {
                                "kind": 214,
                                "formalParameters": [],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 36,
                                "end": 36
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
                                                "transformFlags": 0,
                                                "start": 39,
                                                "end": 48
                                            },
                                            "asteriskToken": null,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "yield",
                                                "rawText": "yield",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 48,
                                                "end": 54
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
                                                        "transformFlags": 0,
                                                        "start": 55,
                                                        "end": 60
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 55,
                                                "end": 60
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
                                                                "transformFlags": 0,
                                                                "start": 63,
                                                                "end": 69
                                                            },
                                                            "colonToken": {
                                                                "kind": 21,
                                                                "flags": 64,
                                                                "transformFlags": 0,
                                                                "start": 69,
                                                                "end": 70
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
                                                                        "transformFlags": 0,
                                                                        "start": 70,
                                                                        "end": 76
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
                                                                                    "transformFlags": 0,
                                                                                    "start": 78,
                                                                                    "end": 83
                                                                                },
                                                                                "operatorToken": {
                                                                                    "kind": 99634,
                                                                                    "flags": 96,
                                                                                    "transformFlags": 0,
                                                                                    "start": 83,
                                                                                    "end": 85
                                                                                },
                                                                                "right": {
                                                                                    "kind": 131,
                                                                                    "expression": {
                                                                                        "kind": 134299649,
                                                                                        "text": "yield",
                                                                                        "rawText": "yield",
                                                                                        "flags": 96,
                                                                                        "transformFlags": 0,
                                                                                        "start": 85,
                                                                                        "end": 91
                                                                                    },
                                                                                    "argumentList": {
                                                                                        "kind": 256,
                                                                                        "elements": [
                                                                                            {
                                                                                                "kind": 201392130,
                                                                                                "text": 0,
                                                                                                "rawText": "0",
                                                                                                "flags": 96,
                                                                                                "transformFlags": 0,
                                                                                                "start": 92,
                                                                                                "end": 93
                                                                                            }
                                                                                        ],
                                                                                        "trailingComma": false,
                                                                                        "flags": 32,
                                                                                        "transformFlags": 0,
                                                                                        "start": 92,
                                                                                        "end": 93
                                                                                    },
                                                                                    "flags": 268435488,
                                                                                    "transformFlags": 1,
                                                                                    "start": 85,
                                                                                    "end": 94
                                                                                },
                                                                                "flags": 96,
                                                                                "transformFlags": 1024,
                                                                                "start": 78,
                                                                                "end": 94
                                                                            }
                                                                        ],
                                                                        "trailingComma": false,
                                                                        "flags": 32,
                                                                        "transformFlags": 0,
                                                                        "start": 78,
                                                                        "end": 94
                                                                    },
                                                                    "flags": 268435488,
                                                                    "transformFlags": 1,
                                                                    "start": 70,
                                                                    "end": 95
                                                                },
                                                                "flags": 16,
                                                                "transformFlags": 0,
                                                                "start": 70,
                                                                "end": 96
                                                            },
                                                            "flags": 16,
                                                            "transformFlags": 0,
                                                            "start": 63,
                                                            "end": 96
                                                        }
                                                    ],
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 63,
                                                    "end": 96
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 61,
                                                "end": 98
                                            },
                                            "returnType": null,
                                            "flags": 16,
                                            "transformFlags": 0,
                                            "start": 39,
                                            "end": 98
                                        }
                                    ],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 39,
                                    "end": 98
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 37,
                                "end": 100
                            },
                            "returnType": null,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 18,
                            "end": 100
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 18,
                    "end": 100
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 16,
                "end": 101
            },
            "returnType": null,
            "flags": 272,
            "transformFlags": 0,
            "start": 0,
            "end": 101
        }
    ],
    "isModule": false,
    "source": "function * gen() { function not_gen() { function yield(yield) { yield: yield (yield + yield(0)); } }}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 101
}
```

### Printed

```javascript

function * gen() {
  function not_gen() {
    function yield(yield) {
      yield:  yield(yield + yield(0));
    }
  }
}
```

### Diagnostics

```javascript
✔ No errors
```

