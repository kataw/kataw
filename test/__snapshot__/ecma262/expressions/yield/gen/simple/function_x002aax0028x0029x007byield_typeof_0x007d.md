# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/yield/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/yield/gen/simple
> :: test: simple
> :: case: function *a(){yield typeof 0}
## Options

`````js
{}
`````
## Input

`````js
function *a(){yield typeof 0}
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
                "end": 10
            },
            "name": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 96,
                "start": 10,
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
                            "kind": 120,
                            "expression": {
                                "kind": 229,
                                "yieldKeyword": {
                                    "kind": 8454253,
                                    "flags": 64,
                                    "start": 14,
                                    "end": 19
                                },
                                "delegate": false,
                                "asteriskToken": null,
                                "expression": {
                                    "kind": 126,
                                    "operandToken": {
                                        "kind": 138477613,
                                        "flags": 96,
                                        "start": 19,
                                        "end": 26
                                    },
                                    "operand": {
                                        "kind": 201392130,
                                        "text": 0,
                                        "rawText": "0",
                                        "flags": 96,
                                        "start": 26,
                                        "end": 28
                                    },
                                    "flags": 32,
                                    "start": 19,
                                    "end": 28
                                },
                                "flags": 32,
                                "start": 14,
                                "end": 28
                            },
                            "flags": 16,
                            "start": 14,
                            "end": 28
                        }
                    ],
                    "flags": 32,
                    "start": 14,
                    "end": 28
                },
                "flags": 32,
                "start": 13,
                "end": 29
            },
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 29
        }
    ],
    "isModule": false,
    "source": "function *a(){yield typeof 0}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 29
}
```

### Printed

```javascript

function * a() { yield  typeof  0; }

```

### Diagnostics

```javascript
✔ No errors
```

