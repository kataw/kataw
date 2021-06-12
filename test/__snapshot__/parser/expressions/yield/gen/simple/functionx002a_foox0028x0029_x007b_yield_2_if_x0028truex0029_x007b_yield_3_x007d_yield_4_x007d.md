# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: kataw8/test\__snapshot__/parser/expressions/yield/autogen.md
- Path: kataw8/test\__snapshot__\parser\expressions\yield\gen\simple
> :: test: simple
> :: case: function* foo() { yield 2; if (true) { yield 3 }; yield 4 }
## Input

`````js
function* foo() { yield 2; if (true) { yield 3 }; yield 4 }
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
            "generatorToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 8,
                "end": 9
            },
            "name": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 96,
                "start": 9,
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
                            "kind": 120,
                            "expression": {
                                "kind": 229,
                                "yieldKeyword": {
                                    "kind": 8454253,
                                    "flags": 64,
                                    "start": 17,
                                    "end": 23
                                },
                                "delegate": false,
                                "asteriskToken": null,
                                "expression": {
                                    "kind": 201392130,
                                    "text": 2,
                                    "rawText": "2",
                                    "flags": 96,
                                    "start": 23,
                                    "end": 25
                                },
                                "flags": 32,
                                "start": 17,
                                "end": 25
                            },
                            "flags": 16,
                            "start": 17,
                            "end": 26
                        },
                        {
                            "kind": 164,
                            "ifKeyword": {
                                "kind": 37757019,
                                "flags": 80,
                                "start": 26,
                                "end": 29
                            },
                            "expression": {
                                "kind": 24752947,
                                "flags": 96,
                                "start": 31,
                                "end": 35
                            },
                            "consequent": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 229,
                                                "yieldKeyword": {
                                                    "kind": 8454253,
                                                    "flags": 64,
                                                    "start": 38,
                                                    "end": 44
                                                },
                                                "delegate": false,
                                                "asteriskToken": null,
                                                "expression": {
                                                    "kind": 201392130,
                                                    "text": 3,
                                                    "rawText": "3",
                                                    "flags": 96,
                                                    "start": 44,
                                                    "end": 46
                                                },
                                                "flags": 32,
                                                "start": 38,
                                                "end": 46
                                            },
                                            "flags": 16,
                                            "start": 38,
                                            "end": 46
                                        }
                                    ],
                                    "flags": 16,
                                    "start": 38,
                                    "end": 46
                                },
                                "flags": 16,
                                "start": 36,
                                "end": 48
                            },
                            "elseKeyword": null,
                            "alternate": null,
                            "flags": 80,
                            "start": 26,
                            "end": 48
                        },
                        {
                            "kind": 168,
                            "flags": 16,
                            "start": 48,
                            "end": 49
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 229,
                                "yieldKeyword": {
                                    "kind": 8454253,
                                    "flags": 64,
                                    "start": 49,
                                    "end": 55
                                },
                                "delegate": false,
                                "asteriskToken": null,
                                "expression": {
                                    "kind": 201392130,
                                    "text": 4,
                                    "rawText": "4",
                                    "flags": 96,
                                    "start": 55,
                                    "end": 57
                                },
                                "flags": 32,
                                "start": 49,
                                "end": 57
                            },
                            "flags": 16,
                            "start": 49,
                            "end": 57
                        }
                    ],
                    "flags": 32,
                    "start": 17,
                    "end": 57
                },
                "flags": 32,
                "start": 15,
                "end": 59
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 59
        }
    ],
    "isModule": false,
    "source": "function* foo() { yield 2; if (true) { yield 3 }; yield 4 }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 59
}
```

### Printed

```javascript

function * foo() {
  yield 2;
  if (true) {
      yield 3;
    }
  yield 4;
}
```

### Diagnostics

```javascript
✔ No errors
```

