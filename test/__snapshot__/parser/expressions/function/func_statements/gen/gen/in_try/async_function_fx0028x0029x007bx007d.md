# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-30
- From: kataw7/test\__snapshot__/parser/expressions/function/func_statements/gen/autogen.md
- Path: kataw7/test\__snapshot__\parser\expressions\function\func_statements\gen\gen\in_try
> :: test: in try
> :: case: async function f(){}
## Input

`````js
try {
  async function f(){}
} catch (e) {
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
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "block": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [
                        {
                            "kind": 176,
                            "declareKeyword": null,
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 65,
                                "start": 5,
                                "end": 13
                            },
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 64,
                                "start": 13,
                                "end": 22
                            },
                            "generatorToken": null,
                            "name": {
                                "kind": 134299649,
                                "text": "f",
                                "rawText": "f",
                                "flags": 96,
                                "start": 22,
                                "end": 24
                            },
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 24,
                                "end": 26
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 27,
                                    "end": 27
                                },
                                "flags": 32,
                                "start": 26,
                                "end": 28
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 144,
                            "start": 5,
                            "end": 28
                        }
                    ],
                    "flags": 17,
                    "start": 5,
                    "end": 28
                },
                "flags": 16,
                "start": 3,
                "end": 30
            },
            "catchClause": {
                "kind": 173,
                "catchKeyword": {
                    "kind": 4202575,
                    "flags": 80,
                    "start": 30,
                    "end": 36
                },
                "catchParameter": {
                    "kind": 134299649,
                    "text": "e",
                    "rawText": "e",
                    "flags": 96,
                    "start": 38,
                    "end": 39
                },
                "block": {
                    "kind": 124,
                    "block": {
                        "kind": 249,
                        "statements": [],
                        "flags": 17,
                        "start": 42,
                        "end": 42
                    },
                    "flags": 16,
                    "start": 40,
                    "end": 44
                },
                "flags": 16,
                "start": 30,
                "end": 44
            },
            "finallyKeyword": null,
            "finallyBlock": null,
            "flags": 16,
            "start": 0,
            "end": 44
        }
    ],
    "isModule": false,
    "source": "try {\n  async function f(){}\n} catch (e) {\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 44
}
```

### Printed

```javascript

try {
  async function f() {}
} catch (e) {
}
```

### Diagnostics

```javascript
✔ No errors
```

