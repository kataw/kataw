# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: kataw8/test\__snapshot__/parser/expressions/assignment/to_keyword/autogen.md
- Path: kataw8/test\__snapshot__\parser\expressions\assignment\to_keyword\gen\assign_to_paren_wrapped_keyword_in_a_generator
> :: test: assign to paren wrapped keyword in a generator
> :: case: for
## Input

`````js
function *f(){
  (for) = 1;
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
                            "kind": 120,
                            "expression": {
                                "kind": 121,
                                "expression": {
                                    "kind": 16637,
                                    "text": "",
                                    "flags": 64,
                                    "start": 18,
                                    "end": 18
                                },
                                "flags": 32,
                                "start": 14,
                                "end": 18
                            },
                            "flags": 16,
                            "start": 14,
                            "end": 18
                        },
                        {
                            "kind": 165,
                            "forKeyword": {
                                "kind": 37757017,
                                "flags": 80,
                                "start": 18,
                                "end": 21
                            },
                            "initializer": {
                                "kind": 16637,
                                "text": "",
                                "flags": 64,
                                "start": 21,
                                "end": 21
                            },
                            "condition": null,
                            "incrementor": {
                                "kind": 16637,
                                "text": "",
                                "flags": 64,
                                "start": 21,
                                "end": 21
                            },
                            "statement": {
                                "kind": 120,
                                "expression": {
                                    "kind": 125,
                                    "left": {
                                        "kind": 16637,
                                        "text": "",
                                        "flags": 64,
                                        "start": 22,
                                        "end": 22
                                    },
                                    "operatorToken": {
                                        "kind": 4125,
                                        "flags": 64,
                                        "start": 22,
                                        "end": 24
                                    },
                                    "right": {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 96,
                                        "start": 24,
                                        "end": 26
                                    },
                                    "flags": 32,
                                    "start": 22,
                                    "end": 26
                                },
                                "flags": 16,
                                "start": 22,
                                "end": 27
                            },
                            "flags": 80,
                            "start": 18,
                            "end": 27
                        }
                    ],
                    "flags": 33,
                    "start": 14,
                    "end": 27
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
        }
    ],
    "isModule": false,
    "source": "function *f(){\n  (for) = 1;\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 29
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 18, end: 21
✖ Missing an opening parentheses - '( - start: 21, end: 22
✖ Identifier expected - start: 22, end: 24
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 22, end: 24

```

