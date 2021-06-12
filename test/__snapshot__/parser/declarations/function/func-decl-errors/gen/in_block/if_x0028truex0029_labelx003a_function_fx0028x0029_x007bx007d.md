# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: kataw8/test\__snapshot__/parser/declarations/function/func-decl-errors/autogen.md
- Path: kataw8/test\__snapshot__\parser\declarations\function\func-decl-errors\gen\in_block
> :: test: in block
> :: case: if (true) label: function f() {}
## Input

`````js
{if (true) label: function f() {}}
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
                        "kind": 164,
                        "ifKeyword": {
                            "kind": 37757019,
                            "flags": 80,
                            "start": 1,
                            "end": 3
                        },
                        "expression": {
                            "kind": 24752947,
                            "flags": 96,
                            "start": 5,
                            "end": 9
                        },
                        "consequent": {
                            "kind": 163,
                            "label": {
                                "kind": 134299649,
                                "text": "label",
                                "rawText": "label",
                                "flags": 96,
                                "start": 10,
                                "end": 16
                            },
                            "colonToken": {
                                "kind": 21,
                                "flags": 64,
                                "start": 16,
                                "end": 17
                            },
                            "statement": {
                                "kind": 176,
                                "declareKeyword": null,
                                "asyncKeyword": null,
                                "functionKeyword": {
                                    "kind": 37822554,
                                    "flags": 64,
                                    "start": 17,
                                    "end": 26
                                },
                                "generatorToken": null,
                                "name": {
                                    "kind": 134299649,
                                    "text": "f",
                                    "rawText": "f",
                                    "flags": 96,
                                    "start": 26,
                                    "end": 28
                                },
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 28,
                                    "end": 30
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 32,
                                        "end": 32
                                    },
                                    "flags": 32,
                                    "start": 30,
                                    "end": 33
                                },
                                "typeParameters": null,
                                "returnType": null,
                                "flags": 16,
                                "start": 17,
                                "end": 33
                            },
                            "flags": 16,
                            "start": 10,
                            "end": 33
                        },
                        "elseKeyword": null,
                        "alternate": null,
                        "flags": 80,
                        "start": 1,
                        "end": 33
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 33
            },
            "flags": 16,
            "start": 0,
            "end": 34
        }
    ],
    "isModule": false,
    "source": "{if (true) label: function f() {}}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 34
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Function declarations cannot be used in a single-statement context - start: 17, end: 26

```

