# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: d
- Path: r
> :: test: assign to paren wrapped keyword in a generator
> :: case: function
## Options

`````js
{}
`````
## Input

`````js
function *f(){
  (function) = 1;
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
                                        "kind": 177,
                                        "asyncKeyword": null,
                                        "functionKeyword": {
                                            "kind": 37822554,
                                            "flags": 64,
                                            "start": 18,
                                            "end": 26
                                        },
                                        "asteriskToken": null,
                                        "name": null,
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 26,
                                            "end": 26
                                        },
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 26,
                                                "end": 26
                                            },
                                            "flags": 32,
                                            "start": 26,
                                            "end": 26
                                        },
                                        "returnType": null,
                                        "flags": 32,
                                        "start": 18,
                                        "end": 26
                                    },
                                    "flags": 32,
                                    "start": 14,
                                    "end": 27
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 96,
                                    "start": 27,
                                    "end": 29
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 96,
                                    "start": 29,
                                    "end": 31
                                },
                                "flags": 32,
                                "start": 14,
                                "end": 31
                            },
                            "flags": 16,
                            "start": 14,
                            "end": 32
                        }
                    ],
                    "flags": 33,
                    "start": 14,
                    "end": 32
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
    "source": "function *f(){\n  (function) = 1;\n}",
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
✖ Missing an opening parentheses - '( - start: 26, end: 27

```

