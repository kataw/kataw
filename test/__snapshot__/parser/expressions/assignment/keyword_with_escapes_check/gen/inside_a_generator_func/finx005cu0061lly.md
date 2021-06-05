# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-05
- From: kataw8/test\__snapshot__/parser/expressions/assignment/keyword_with_escapes_check/autogen.md
- Path: kataw8/test\__snapshot__\parser\expressions\assignment\keyword_with_escapes_check\gen\inside_a_generator_func
> :: test: inside a generator func
> :: case: fin\u0061lly
## Input

`````js
function *f(){
  fin\u0061lly = x
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
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 0,
                "end": 8
            },
            "generatorToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 8,
                "end": 10
            },
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 10,
                "end": 11
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 11,
                "end": 13
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 159,
                            "tryKeyword": null,
                            "block": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [],
                                    "flags": 16,
                                    "start": 14,
                                    "end": 14
                                },
                                "flags": 16,
                                "start": 14,
                                "end": 14
                            },
                            "catchClause": null,
                            "finallyKeyword": {
                                "kind": 37757016,
                                "flags": 16449,
                                "start": 14,
                                "end": 29
                            },
                            "finallyBlock": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [],
                                    "flags": 16,
                                    "start": 29,
                                    "end": 29
                                },
                                "flags": 16,
                                "start": 29,
                                "end": 29
                            },
                            "flags": 16,
                            "start": 14,
                            "end": 29
                        }
                    ],
                    "flags": 16417,
                    "start": 14,
                    "end": 29
                },
                "flags": 32,
                "start": 13,
                "end": 29
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 29
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 31,
                "end": 33
            },
            "flags": 16,
            "start": 31,
            "end": 33
        }
    ],
    "isModule": false,
    "source": "function *f(){\n  fin\\u0061lly = x\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 35
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'try' expected - start: 14, end: 29
✖ The parser expected to find a '}' to match the '{' token here - start: 29, end: 31
✖ Declaration or statement expected - start: 33, end: 35

```

