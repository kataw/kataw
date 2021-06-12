# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: kataw8/test\__snapshot__/parser/declarations/function/async-generator/autogen.md
- Path: kataw8/test\__snapshot__\parser\declarations\function\async-generator\gen\declaration
> :: test: declaration
> :: case: yield 3 + (yield 4);
## Input

`````js
async function * gen() {yield 3 + (yield 4);}

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
            "asyncKeyword": {
                "kind": 82031,
                "flags": 64,
                "start": 0,
                "end": 5
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 5,
                "end": 14
            },
            "generatorToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 14,
                "end": 16
            },
            "name": {
                "kind": 134299649,
                "text": "gen",
                "rawText": "gen",
                "flags": 96,
                "start": 16,
                "end": 20
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 20,
                "end": 22
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
                                    "start": 24,
                                    "end": 29
                                },
                                "delegate": false,
                                "asteriskToken": null,
                                "expression": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 201392130,
                                        "text": 3,
                                        "rawText": "3",
                                        "flags": 96,
                                        "start": 29,
                                        "end": 31
                                    },
                                    "operatorToken": {
                                        "kind": 99634,
                                        "flags": 64,
                                        "start": 31,
                                        "end": 33
                                    },
                                    "right": {
                                        "kind": 121,
                                        "expression": {
                                            "kind": 229,
                                            "yieldKeyword": {
                                                "kind": 8454253,
                                                "flags": 64,
                                                "start": 35,
                                                "end": 40
                                            },
                                            "delegate": false,
                                            "asteriskToken": null,
                                            "expression": {
                                                "kind": 201392130,
                                                "text": 4,
                                                "rawText": "4",
                                                "flags": 96,
                                                "start": 40,
                                                "end": 42
                                            },
                                            "flags": 32,
                                            "start": 35,
                                            "end": 42
                                        },
                                        "flags": 32,
                                        "start": 33,
                                        "end": 43
                                    },
                                    "flags": 32,
                                    "start": 29,
                                    "end": 43
                                },
                                "flags": 32,
                                "start": 24,
                                "end": 43
                            },
                            "flags": 16,
                            "start": 24,
                            "end": 44
                        }
                    ],
                    "flags": 32,
                    "start": 24,
                    "end": 44
                },
                "flags": 32,
                "start": 22,
                "end": 45
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 400,
            "start": 0,
            "end": 45
        }
    ],
    "isModule": false,
    "source": "async function * gen() {yield 3 + (yield 4);}\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 46
}
```

### Printed

```javascript

async function * gen() {
  yield 3 + (yield 4);
}
```

### Diagnostics

```javascript
✔ No errors
```

