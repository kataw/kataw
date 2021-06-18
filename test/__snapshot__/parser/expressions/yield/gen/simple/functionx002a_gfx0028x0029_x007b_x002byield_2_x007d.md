# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/yield/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/yield/gen/simple
> :: test: simple
> :: case: function* gf() { +yield 2; }
## Options

`````js
{}
`````
## Input

`````js
function* gf() { +yield 2; }
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
                "text": "gf",
                "rawText": "gf",
                "flags": 96,
                "start": 9,
                "end": 12
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 12,
                "end": 14
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
                                    "start": 16,
                                    "end": 18
                                },
                                "operand": {
                                    "kind": 229,
                                    "yieldKeyword": {
                                        "kind": 8454253,
                                        "flags": 64,
                                        "start": 18,
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
                                    "start": 18,
                                    "end": 25
                                },
                                "flags": 32,
                                "start": 16,
                                "end": 25
                            },
                            "flags": 16,
                            "start": 16,
                            "end": 26
                        }
                    ],
                    "flags": 32,
                    "start": 16,
                    "end": 26
                },
                "flags": 32,
                "start": 14,
                "end": 28
            },
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 28
        }
    ],
    "isModule": false,
    "source": "function* gf() { +yield 2; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 28
}
```

### Printed

```javascript

function * gf() {
  +yield 2;
}
```

### Diagnostics

```javascript
✔ No errors
```

