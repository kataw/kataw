# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw/test/__snapshot__/parser/expressions/yield/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/yield/gen/simple
> :: test: simple
> :: case: function* gf() { yield 'foo' }
## Input

`````js
function* gf() { yield 'foo' }
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
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
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
                                "kind": 229,
                                "yieldKeyword": {
                                    "kind": 8454253,
                                    "flags": 64,
                                    "start": 16,
                                    "end": 22
                                },
                                "delegate": false,
                                "asteriskToken": null,
                                "expression": {
                                    "kind": 201392131,
                                    "text": "foo",
                                    "rawText": "'foo'",
                                    "flags": 4194400,
                                    "start": 22,
                                    "end": 28
                                },
                                "flags": 32,
                                "start": 16,
                                "end": 28
                            },
                            "flags": 16,
                            "start": 16,
                            "end": 28
                        }
                    ],
                    "flags": 32,
                    "start": 16,
                    "end": 28
                },
                "flags": 32,
                "start": 14,
                "end": 30
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 30
        }
    ],
    "isModule": false,
    "source": "function* gf() { yield 'foo' }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 30
}
```

### Printed

```javascript

function * gf() {
  yield "'foo'";
}
```

### Diagnostics

```javascript
✔ No errors
```

