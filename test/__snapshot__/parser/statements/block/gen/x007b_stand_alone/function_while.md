# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/statements/block/autogen.md
- Path: kataw8/test\__snapshot__\parser\statements\block\gen\x007b_stand_alone
> :: test: { stand alone
> :: case: function while
## Input

`````js
{ function while
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
                        "asyncKeyword": null,
                        "functionKeyword": {
                            "kind": 37822554,
                            "flags": 64,
                            "start": 1,
                            "end": 10
                        },
                        "generatorToken": null,
                        "name": null,
                        "formalParameters": {
                            "kind": 214,
                            "formalParameterList": [],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 10,
                            "end": 10
                        },
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [],
                                "flags": 32,
                                "start": 10,
                                "end": 10
                            },
                            "flags": 32,
                            "start": 10,
                            "end": 10
                        },
                        "typeParameters": null,
                        "returnType": null,
                        "flags": 16,
                        "start": 1,
                        "end": 10
                    },
                    {
                        "kind": 154,
                        "whileKeyword": {
                            "kind": 37757028,
                            "flags": 80,
                            "start": 10,
                            "end": 16
                        },
                        "expression": {
                            "kind": 16637,
                            "text": "",
                            "flags": 64,
                            "start": 16,
                            "end": 16
                        },
                        "statement": {
                            "kind": 120,
                            "expression": {
                                "kind": 16637,
                                "text": "",
                                "flags": 64,
                                "start": 16,
                                "end": 16
                            },
                            "flags": 16,
                            "start": 16,
                            "end": 16
                        },
                        "flags": 80,
                        "start": 10,
                        "end": 16
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 16
            },
            "flags": 16,
            "start": 0,
            "end": 16
        }
    ],
    "isModule": false,
    "source": "{ function while",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 16
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Binding identifier expected - start: 10, end: 16
✖ Missing an opening parentheses - '( - start: 10, end: 16

```

