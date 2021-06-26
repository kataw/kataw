# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/function/func_statements/gen/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/function/func_statements/gen/gen/in_finally
> :: test: in finally
> :: case: function f(){}
## Options

`````js
{}
`````
## Input

`````js
try {
} finally {
  function f(){}
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
            "catchClause": null,
            "finallyKeyword": {
                "kind": 37757016,
                "flags": 64,
                "start": 7,
                "end": 15
            },
            "finallyBlock": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [
                        {
                            "kind": 176,
                            "declareKeyword": null,
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 65,
                                "start": 17,
                                "end": 28
                            },
                            "asteriskToken": null,
                            "name": {
                                "kind": 134299649,
                                "text": "f",
                                "rawText": "f",
                                "flags": 96,
                                "start": 28,
                                "end": 30
                            },
                            "typeParameters": null,
                            "formalParameterList": {
                                "kind": 214,
                                "formalParameters": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 30,
                                "end": 30
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 33,
                                    "end": 33
                                },
                                "flags": 32,
                                "start": 32,
                                "end": 34
                            },
                            "returnType": null,
                            "flags": 16,
                            "start": 17,
                            "end": 34
                        }
                    ],
                    "flags": 17,
                    "start": 17,
                    "end": 34
                },
                "flags": 16,
                "start": 15,
                "end": 36
            },
            "flags": 16,
            "start": 0,
            "end": 36
        }
    ],
    "isModule": false,
    "source": "try {\n} finally {\n  function f(){}\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 36
}
```

### Printed

```javascript

try {
} try{
  function f() {}
}
```

### Diagnostics

```javascript
✔ No errors
```

