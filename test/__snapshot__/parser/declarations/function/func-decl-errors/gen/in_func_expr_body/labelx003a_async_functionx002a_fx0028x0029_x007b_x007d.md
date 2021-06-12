# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: kataw8/test\__snapshot__/parser/declarations/function/func-decl-errors/autogen.md
- Path: kataw8/test\__snapshot__\parser\declarations\function\func-decl-errors\gen\in_func_expr_body
> :: test: in func expr body
> :: case: label: async function* f() { }
## Input

`````js
(function() {label: async function* f() { }})()
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 121,
                    "expression": {
                        "kind": 177,
                        "asyncKeyword": null,
                        "functionKeyword": {
                            "kind": 37822554,
                            "flags": 64,
                            "start": 1,
                            "end": 9
                        },
                        "generatorToken": null,
                        "name": null,
                        "formalParameters": {
                            "kind": 214,
                            "formalParameterList": [],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 9,
                            "end": 11
                        },
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [
                                    {
                                        "kind": 163,
                                        "label": {
                                            "kind": 134299649,
                                            "text": "label",
                                            "rawText": "label",
                                            "flags": 96,
                                            "start": 13,
                                            "end": 18
                                        },
                                        "colonToken": {
                                            "kind": 21,
                                            "flags": 64,
                                            "start": 18,
                                            "end": 19
                                        },
                                        "statement": {
                                            "kind": 176,
                                            "declareKeyword": null,
                                            "asyncKeyword": {
                                                "kind": 82031,
                                                "flags": 64,
                                                "start": 19,
                                                "end": 25
                                            },
                                            "functionKeyword": {
                                                "kind": 37822554,
                                                "flags": 64,
                                                "start": 25,
                                                "end": 34
                                            },
                                            "generatorToken": {
                                                "kind": 67143222,
                                                "flags": 64,
                                                "start": 34,
                                                "end": 35
                                            },
                                            "name": {
                                                "kind": 134299649,
                                                "text": "f",
                                                "rawText": "f",
                                                "flags": 96,
                                                "start": 35,
                                                "end": 37
                                            },
                                            "formalParameters": {
                                                "kind": 214,
                                                "formalParameterList": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 37,
                                                "end": 39
                                            },
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [],
                                                    "flags": 32,
                                                    "start": 41,
                                                    "end": 41
                                                },
                                                "flags": 32,
                                                "start": 39,
                                                "end": 43
                                            },
                                            "typeParameters": null,
                                            "returnType": null,
                                            "flags": 400,
                                            "start": 19,
                                            "end": 43
                                        },
                                        "flags": 16,
                                        "start": 13,
                                        "end": 43
                                    }
                                ],
                                "flags": 32,
                                "start": 13,
                                "end": 43
                            },
                            "flags": 32,
                            "start": 11,
                            "end": 44
                        },
                        "typeParameters": null,
                        "returnType": null,
                        "flags": 32,
                        "start": 1,
                        "end": 44
                    },
                    "flags": 32,
                    "start": 0,
                    "end": 45
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 46,
                    "end": 46
                },
                "flags": 268435488,
                "start": 0,
                "end": 47
            },
            "flags": 16,
            "start": 0,
            "end": 47
        }
    ],
    "isModule": false,
    "source": "(function() {label: async function* f() { }})()",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 47
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Function declarations cannot be used in a single-statement context - start: 19, end: 25

```

