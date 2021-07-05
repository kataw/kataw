# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/declarations/function/async-generator-errors/autogen.md
- Path: kataw/test/__snapshot__/ecma262/declarations/function/async-generator-errors/gen/declaration
> :: test: declaration
> :: case: + yield 3
## Options

`````js
{}
`````
## Input

`````js
async function * gen() {+ yield 3}

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
            "asteriskToken": {
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
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 21,
                "end": 21
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
                                "kind": 126,
                                "operandToken": {
                                    "kind": 99634,
                                    "flags": 96,
                                    "start": 24,
                                    "end": 25
                                },
                                "operand": {
                                    "kind": 229,
                                    "yieldKeyword": {
                                        "kind": 8454253,
                                        "flags": 64,
                                        "start": 25,
                                        "end": 31
                                    },
                                    "delegate": false,
                                    "asteriskToken": null,
                                    "expression": {
                                        "kind": 201392130,
                                        "text": 3,
                                        "rawText": "3",
                                        "flags": 96,
                                        "start": 31,
                                        "end": 33
                                    },
                                    "flags": 32,
                                    "start": 25,
                                    "end": 33
                                },
                                "flags": 32,
                                "start": 24,
                                "end": 33
                            },
                            "flags": 16,
                            "start": 24,
                            "end": 33
                        }
                    ],
                    "flags": 32,
                    "start": 24,
                    "end": 33
                },
                "flags": 32,
                "start": 22,
                "end": 34
            },
            "returnType": null,
            "flags": 400,
            "start": 0,
            "end": 34
        }
    ],
    "isModule": false,
    "source": "async function * gen() {+ yield 3}\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 35
}
```

### Printed

```javascript

async function * gen() {
  +yield 3;
}
```

### Diagnostics

```javascript
✔ No errors
```

