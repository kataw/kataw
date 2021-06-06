# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/expressions/assignment/to_keyword/autogen.md
- Path: kataw8/test\__snapshot__\parser\expressions\assignment\to_keyword\gen\assign_to_keyword_in_generator
> :: test: assign to keyword in generator
> :: case: if
## Input

`````js
function *f(){
  if = 1;
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
                            "kind": 164,
                            "ifKeyword": {
                                "kind": 37757019,
                                "flags": 81,
                                "start": 14,
                                "end": 19
                            },
                            "expression": {
                                "kind": 125,
                                "left": {
                                    "kind": 16637,
                                    "text": "",
                                    "flags": 64,
                                    "start": 19,
                                    "end": 19
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 64,
                                    "start": 19,
                                    "end": 21
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 96,
                                    "start": 21,
                                    "end": 23
                                },
                                "flags": 32,
                                "start": 19,
                                "end": 23
                            },
                            "consequent": {
                                "kind": 168,
                                "flags": 16,
                                "start": 23,
                                "end": 24
                            },
                            "elseKeyword": null,
                            "alternate": null,
                            "flags": 16,
                            "start": 14,
                            "end": 24
                        }
                    ],
                    "flags": 33,
                    "start": 14,
                    "end": 24
                },
                "flags": 32,
                "start": 13,
                "end": 26
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 26
        }
    ],
    "isModule": false,
    "source": "function *f(){\n  if = 1;\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 26
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Missing an opening parentheses - '( - start: 19, end: 21
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 19, end: 21
✖ Declaration or statement expected - start: 23, end: 24

```

