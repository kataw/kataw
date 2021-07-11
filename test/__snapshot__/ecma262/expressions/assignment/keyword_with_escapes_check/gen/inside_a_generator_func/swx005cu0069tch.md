# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/assignment/keyword_with_escapes_check/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/assignment/keyword_with_escapes_check/gen/inside_a_generator_func
> :: test: inside a generator func
> :: case: sw\u0069tch
## Options

`````js
{}
`````
## Input

`````js
function *f(){
  sw\u0069tch = x
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
            "asteriskToken": {
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
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 12,
                "end": 12
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 160,
                            "switchKeyword": {
                                "kind": 37757024,
                                "flags": 16465,
                                "start": 14,
                                "end": 28
                            },
                            "expression": {
                                "kind": 125,
                                "left": {
                                    "kind": 16637,
                                    "text": "",
                                    "rawText": "",
                                    "flags": 64,
                                    "start": 28,
                                    "end": 28
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 96,
                                    "start": 28,
                                    "end": 30
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 30,
                                    "end": 32
                                },
                                "flags": 32,
                                "start": 28,
                                "end": 32
                            },
                            "caseBlock": {
                                "kind": 152,
                                "clauses": [],
                                "flags": 16,
                                "start": 32,
                                "end": 32
                            },
                            "flags": 81,
                            "start": 14,
                            "end": 34
                        }
                    ],
                    "flags": 16417,
                    "start": 14,
                    "end": 34
                },
                "flags": 32,
                "start": 13,
                "end": 34
            },
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 34
        }
    ],
    "isModule": false,
    "source": "function *f(){\n  sw\\u0069tch = x\n}",
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
✖ Keywords cannot contain escape characters - start: 14, end: 28
✖ Missing an opening parentheses - '( - start: 29, end: 30
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 28, end: 30
✖ Declaration or statement expected - start: 33, end: 34

```

