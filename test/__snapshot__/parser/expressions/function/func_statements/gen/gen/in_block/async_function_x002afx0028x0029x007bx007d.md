# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/function/func_statements/gen/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/function/func_statements/gen/gen/in_block
> :: test: in block
> :: case: async function *f(){}
## Options

`````js
{}
`````
## Input

`````js
{
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
                            "start": 1,
                            "end": 9
                        },
                        "functionKeyword": {
                            "kind": 37822554,
                            "flags": 64,
                            "start": 9,
                            "end": 18
                        },
                        "generatorToken": {
                            "kind": 67143222,
                            "flags": 64,
                            "start": 18,
                            "end": 20
                        },
                        "name": {
                            "kind": 134299649,
                            "text": "f",
                            "rawText": "f",
                            "flags": 96,
                            "start": 20,
                            "end": 21
                        },
                        "formalParameters": {
                            "kind": 214,
                            "formalParameterList": [],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 21,
                            "end": 23
                        },
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [],
                                "flags": 32,
                                "start": 24,
                                "end": 24
                            },
                            "flags": 32,
                            "start": 23,
                            "end": 25
                        },
                        "typeParameters": null,
                        "returnType": null,
                        "flags": 400,
                        "start": 1,
                        "end": 25
                    }
                ],
                "flags": 17,
                "start": 1,
                "end": 25
            },
            "flags": 16,
            "start": 0,
            "end": 27
        }
    ],
    "isModule": false,
    "source": "{\n  async function *f(){}\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 27
}
```

### Printed

```javascript

{
  async function * f() {}
}
```

### Diagnostics

```javascript
✔ No errors
```

