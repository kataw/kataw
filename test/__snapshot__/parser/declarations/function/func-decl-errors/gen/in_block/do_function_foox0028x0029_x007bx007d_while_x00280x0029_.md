# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-03
- From: kataw8/test\__snapshot__/parser/declarations/function/func-decl-errors/autogen.md
- Path: kataw8/test\__snapshot__\parser\declarations\function\func-decl-errors\gen\in_block
> :: test: in block
> :: case: do function foo() {} while (0);
## Input

`````js
{do function foo() {} while (0);}
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
                        "kind": 169,
                        "doKeyword": {
                            "kind": 4202580,
                            "flags": 80,
                            "start": 1,
                            "end": 3
                        },
                        "expression": {
                            "kind": 201392130,
                            "text": 0,
                            "rawText": "0",
                            "flags": 96,
                            "start": 29,
                            "end": 30
                        },
                        "whileKeyword": {
                            "kind": 37757028,
                            "flags": 64,
                            "start": 21,
                            "end": 27
                        },
                        "statement": {
                            "kind": 176,
                            "declareKeyword": null,
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 64,
                                "start": 3,
                                "end": 12
                            },
                            "generatorToken": null,
                            "name": {
                                "kind": 134299649,
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 96,
                                "start": 12,
                                "end": 16
                            },
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 16,
                                "end": 18
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 20,
                                    "end": 20
                                },
                                "flags": 32,
                                "start": 18,
                                "end": 21
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 16,
                            "start": 3,
                            "end": 21
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 32
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 32
            },
            "flags": 16,
            "start": 0,
            "end": 33
        }
    ],
    "isModule": false,
    "source": "{do function foo() {} while (0);}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 33
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Function declarations cannot be used in a single-statement context - start: 3, end: 12

```

