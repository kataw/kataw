# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/yield/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/yield/gen/function_generator
> :: test: function generator
> :: case: function* gf() { switch (1) { case yield* 'foo': break; } }
## Options

`````js
{}
`````
## Input

`````js
function * gen() { function not_gen() { function* gf() { switch (1) { case yield* 'foo': break; } } }}
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
                                            "asteriskToken": {
                                                "kind": 67143222,
                                                "flags": 64,
                                                "transformFlags": 32,
                                                "start": 48,
                                                "end": 49
                                            },
                                            "name": {
                                                "kind": 134299649,
                                                "text": "gf",
                                                "rawText": "gf",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 49,
                                                "end": 52
                                            },
                                            "typeParameters": null,
                                            "formalParameterList": {
                                                "kind": 214,
                                                "formalParameters": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 53,
                                                "end": 53
                                            },
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [
                                                        {
                                                            "kind": 160,
                                                            "switchKeyword": {
                                                                "kind": 37757024,
                                                                "flags": 80,
                                                                "transformFlags": 0,
                                                                "start": 56,
                                                                "end": 63
                                                            },
                                                            "expression": {
                                                                "kind": 201392130,
                                                                "text": 1,
                                                                "rawText": "1",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 65,
                                                                "end": 66
                                                            },
                                                            "caseBlock": {
                                                                "kind": 152,
                                                                "clauses": [
                                                                    {
                                                                        "kind": 175,
                                                                        "caseKeyword": {
                                                                            "kind": 4194382,
                                                                            "flags": 80,
                                                                            "transformFlags": 0,
                                                                            "start": 69,
                                                                            "end": 74
                                                                        },
                                                                        "expression": {
                                                                            "kind": 229,
                                                                            "yieldKeyword": {
                                                                                "kind": 8454253,
                                                                                "flags": 64,
                                                                                "transformFlags": 0,
                                                                                "start": 74,
                                                                                "end": 80
                                                                            },
                                                                            "delegate": true,
                                                                            "asteriskToken": {
                                                                                "kind": 67143222,
                                                                                "flags": 64,
                                                                                "transformFlags": 32,
                                                                                "start": 80,
                                                                                "end": 81
                                                                            },
                                                                            "expression": {
                                                                                "kind": 201392131,
                                                                                "text": "foo",
                                                                                "rawText": "'foo'",
                                                                                "flags": 4194400,
                                                                                "transformFlags": 0,
                                                                                "start": 81,
                                                                                "end": 87
                                                                            },
                                                                            "flags": 32,
                                                                            "transformFlags": 4096,
                                                                            "start": 74,
                                                                            "end": 87
                                                                        },
                                                                        "colonToken": {
                                                                            "kind": 21,
                                                                            "flags": 64,
                                                                            "transformFlags": 0,
                                                                            "start": 87,
                                                                            "end": 88
                                                                        },
                                                                        "statements": [
                                                                            {
                                                                                "kind": 150,
                                                                                "breakKeyword": {
                                                                                    "kind": 37757005,
                                                                                    "flags": 80,
                                                                                    "transformFlags": 0,
                                                                                    "start": 88,
                                                                                    "end": 94
                                                                                },
                                                                                "label": null,
                                                                                "flags": 16,
                                                                                "transformFlags": 0,
                                                                                "start": 88,
                                                                                "end": 95
                                                                            }
                                                                        ],
                                                                        "flags": 16,
                                                                        "transformFlags": 0,
                                                                        "start": 69,
                                                                        "end": 95
                                                                    }
                                                                ],
                                                                "flags": 16,
                                                                "transformFlags": 0,
                                                                "start": 69,
                                                                "end": 95
                                                            },
                                                            "flags": 80,
                                                            "transformFlags": 0,
                                                            "start": 56,
                                                            "end": 97
                                                        }
                                                    ],
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 56,
                                                    "end": 97
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 54,
                                                "end": 99
                                            },
                                            "returnType": null,
                                            "flags": 272,
                                            "transformFlags": 0,
                                            "start": 39,
                                            "end": 99
                                        }
                                    ],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 39,
                                    "end": 99
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 37,
                                "end": 101
                            },
                            "returnType": null,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 18,
                            "end": 101
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 18,
                    "end": 101
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 16,
                "end": 102
            },
            "returnType": null,
            "flags": 272,
            "transformFlags": 0,
            "start": 0,
            "end": 102
        }
    ],
    "isModule": false,
    "source": "function * gen() { function not_gen() { function* gf() { switch (1) { case yield* 'foo': break; } } }}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 102
}
```

### Printed

```javascript
function *gen() {
  function not_gen() {
    function *gf() {
      switch (1) {
        case yield* "'foo'":
          break;
      }
    }
  }
}
```

### Diagnostics

```javascript
✔ No errors
```

