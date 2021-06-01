# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-01
- From: kataw8/test\__snapshot__/parser/expressions/assignment/keyword_with_escapes_check/autogen.md
- Path: kataw8/test\__snapshot__\parser\expressions\assignment\keyword_with_escapes_check\gen\assignment_paren_wrapped
> :: test: assignment paren wrapped
> :: case: functi\u006fn
## Input

`````js
(functi\u006fn = x);
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
                "kind": 121,
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 177,
                        "asyncKeyword": null,
                        "functionKeyword": {
                            "kind": 37822554,
                            "flags": 16448,
                            "start": 1,
                            "end": 14
                        },
                        "generatorToken": null,
                        "name": null,
                        "formalParameters": {
                            "kind": 214,
                            "formalParameterList": [],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 14,
                            "end": 14
                        },
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [],
                                "flags": 32,
                                "start": 14,
                                "end": 14
                            },
                            "flags": 32,
                            "start": 14,
                            "end": 14
                        },
                        "typeParameters": null,
                        "returnType": null,
                        "flags": 32,
                        "start": 1,
                        "end": 14
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 64,
                        "start": 14,
                        "end": 16
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 16,
                        "end": 18
                    },
                    "flags": 32,
                    "start": 1,
                    "end": 18
                },
                "flags": 32,
                "start": 0,
                "end": 19
            },
            "flags": 16,
            "start": 0,
            "end": 20
        }
    ],
    "isModule": false,
    "source": "(functi\\u006fn = x);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 20
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Missing an opening parentheses - '( - start: 14, end: 16
✖ Expression expected - start: 14, end: 16
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 14, end: 16

```

