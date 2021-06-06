# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/expressions/assignment/to_keyword/autogen.md
- Path: kataw8/test\__snapshot__\parser\expressions\assignment\to_keyword\gen\assign_to_paren_wrapped_keyword_in_a_generator
> :: test: assign to paren wrapped keyword in a generator
> :: case: false
## Input

`````js
function *f(){
  (false) = 1;
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
                                "kind": 125,
                                "left": {
                                    "kind": 121,
                                    "expression": {
                                        "kind": 205586437,
                                        "flags": 96,
                                        "start": 18,
                                        "end": 23
                                    },
                                    "flags": 32,
                                    "start": 14,
                                    "end": 24
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 64,
                                    "start": 24,
                                    "end": 26
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 96,
                                    "start": 26,
                                    "end": 28
                                },
                                "flags": 32,
                                "start": 14,
                                "end": 28
                            },
                            "flags": 16,
                            "start": 14,
                            "end": 29
                        }
                    ],
                    "flags": 33,
                    "start": 14,
                    "end": 29
                },
                "flags": 32,
                "start": 13,
                "end": 31
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 31
        }
    ],
    "isModule": false,
    "source": "function *f(){\n  (false) = 1;\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 31
}
```

### Printed

```javascript

function * f() {
  (false) = 1;
}
```

### Diagnostics

```javascript
✔ No errors
```

