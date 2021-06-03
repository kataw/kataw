# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-03
- From: kataw8/test\__snapshot__/parser/expressions/assignment/keyword_with_escapes_check/autogen.md
- Path: kataw8/test\__snapshot__\parser\expressions\assignment\keyword_with_escapes_check\gen\inside_a_generator_func
> :: test: inside a generator func
> :: case: \u0063ontinue
## Input

`````js
function *f(){
  \u0063ontinue = x
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
                            "kind": 172,
                            "continueKeyword": {
                                "kind": 37757009,
                                "flags": 16465,
                                "start": 14,
                                "end": 30
                            },
                            "label": {
                                "kind": 16637,
                                "text": "",
                                "flags": 64,
                                "start": 30,
                                "end": 30
                            },
                            "flags": 16,
                            "start": 14,
                            "end": 30
                        }
                    ],
                    "flags": 16417,
                    "start": 14,
                    "end": 30
                },
                "flags": 32,
                "start": 13,
                "end": 30
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 30
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 32,
                "end": 34
            },
            "flags": 16,
            "start": 32,
            "end": 34
        }
    ],
    "isModule": false,
    "source": "function *f(){\n  \\u0063ontinue = x\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 36
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ A 'continue' statement can only be used within an enclosing iteration statement. - start: 14, end: 30
✖ Keywords cannot contain escape characters - start: 14, end: 30
✖ Identifier expected - start: 30, end: 32
✖ Declaration or statement expected - start: 34, end: 36

```

