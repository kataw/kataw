# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw/test/__snapshot__/parser/expressions/function/func_statements/gen/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/function/func_statements/gen/gen/in_catch
> :: test: in catch
> :: case: async function *f(){}
## Input

`````js
try {
} catch (e) {
  async function *f(){}
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
                    "statements": [],
                    "flags": 17,
                    "start": 5,
                    "end": 5
                },
                "flags": 16,
                "start": 3,
                "end": 7
            },
            "catchClause": {
                "kind": 173,
                "catchKeyword": {
                    "kind": 4202575,
                    "flags": 80,
                    "start": 7,
                    "end": 13
                },
                "catchParameter": {
                    "kind": 134299649,
                    "text": "e",
                    "rawText": "e",
                    "flags": 96,
                    "start": 15,
                    "end": 16
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
                                    "start": 19,
                                    "end": 27
                                },
                                "functionKeyword": {
                                    "kind": 37822554,
                                    "flags": 64,
                                    "start": 27,
                                    "end": 36
                                },
                                "generatorToken": {
                                    "kind": 67143222,
                                    "flags": 64,
                                    "start": 36,
                                    "end": 38
                                },
                                "name": {
                                    "kind": 134299649,
                                    "text": "f",
                                    "rawText": "f",
                                    "flags": 96,
                                    "start": 38,
                                    "end": 39
                                },
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 39,
                                    "end": 41
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 42,
                                        "end": 42
                                    },
                                    "flags": 32,
                                    "start": 41,
                                    "end": 43
                                },
                                "typeParameters": null,
                                "returnType": null,
                                "flags": 400,
                                "start": 19,
                                "end": 43
                            }
                        ],
                        "flags": 17,
                        "start": 19,
                        "end": 43
                    },
                    "flags": 16,
                    "start": 17,
                    "end": 45
                },
                "flags": 16,
                "start": 7,
                "end": 45
            },
            "finallyKeyword": null,
            "finallyBlock": null,
            "flags": 16,
            "start": 0,
            "end": 45
        }
    ],
    "isModule": false,
    "source": "try {\n} catch (e) {\n  async function *f(){}\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 45
}
```

### Printed

```javascript

try {
} catch (e) {
  async function * f() {}
}
```

### Diagnostics

```javascript
✔ No errors
```

