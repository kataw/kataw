# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-01
- From: kataw8/test\__snapshot__/parser/expressions/binary/autogen.md
- Path: kataw8/test\__snapshot__\parser\expressions\binary\gen\yield
> :: test: yield
> :: case: a > b instanceof c
## Input

`````js
function *f() {
  yield a > b instanceof c
}
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
                "end": 10
            },
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 10,
                "end": 11
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 11,
                "end": 13
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
                                    "flags": 65,
                                    "start": 15,
                                    "end": 23
                                },
                                "delegate": false,
                                "asteriskToken": null,
                                "expression": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 23,
                                            "end": 25
                                        },
                                        "operatorToken": {
                                            "kind": 34883,
                                            "flags": 64,
                                            "start": 25,
                                            "end": 27
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 96,
                                            "start": 27,
                                            "end": 29
                                        },
                                        "flags": 32,
                                        "start": 23,
                                        "end": 29
                                    },
                                    "operatorToken": {
                                        "kind": 4229173,
                                        "flags": 64,
                                        "start": 29,
                                        "end": 40
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "c",
                                        "rawText": "c",
                                        "flags": 96,
                                        "start": 40,
                                        "end": 42
                                    },
                                    "flags": 32,
                                    "start": 23,
                                    "end": 42
                                },
                                "flags": 32,
                                "start": 15,
                                "end": 42
                            },
                            "flags": 16,
                            "start": 15,
                            "end": 42
                        }
                    ],
                    "flags": 33,
                    "start": 15,
                    "end": 42
                },
                "flags": 32,
                "start": 13,
                "end": 44
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 44
        }
    ],
    "isModule": false,
    "source": "function *f() {\n  yield a > b instanceof c\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 44
}
```

### Printed

```javascript

function * f() {
  yield a > b inctanceof c;
}
```

### Diagnostics

```javascript
✔ No errors
```

