# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/yield/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/yield/gen/function_declaration
> :: test: function declaration
> :: case: function *a(){yield typeof 0}
## Options

`````js
{}
`````
## Input

`````js
function not_gen() { function *a(){yield typeof 0} }}
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
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "not_gen",
                "rawText": "not_gen",
                "flags": 96,
                "start": 8,
                "end": 16
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 17,
                "end": 17
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 176,
                            "declareKeyword": null,
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 64,
                                "start": 20,
                                "end": 29
                            },
                            "asteriskToken": {
                                "kind": 67143222,
                                "flags": 64,
                                "start": 29,
                                "end": 31
                            },
                            "name": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 31,
                                "end": 32
                            },
                            "typeParameters": null,
                            "formalParameterList": {
                                "kind": 214,
                                "formalParameters": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 33,
                                "end": 33
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
                                                "kind": 229,
                                                "yieldKeyword": {
                                                    "kind": 8454253,
                                                    "flags": 64,
                                                    "start": 35,
                                                    "end": 40
                                                },
                                                "delegate": false,
                                                "asteriskToken": null,
                                                "expression": {
                                                    "kind": 126,
                                                    "operandToken": {
                                                        "kind": 138477613,
                                                        "flags": 96,
                                                        "start": 40,
                                                        "end": 47
                                                    },
                                                    "operand": {
                                                        "kind": 201392130,
                                                        "text": 0,
                                                        "rawText": "0",
                                                        "flags": 96,
                                                        "start": 47,
                                                        "end": 49
                                                    },
                                                    "flags": 32,
                                                    "start": 40,
                                                    "end": 49
                                                },
                                                "flags": 32,
                                                "start": 35,
                                                "end": 49
                                            },
                                            "flags": 16,
                                            "start": 35,
                                            "end": 49
                                        }
                                    ],
                                    "flags": 32,
                                    "start": 35,
                                    "end": 49
                                },
                                "flags": 32,
                                "start": 34,
                                "end": 50
                            },
                            "returnType": null,
                            "flags": 272,
                            "start": 20,
                            "end": 50
                        }
                    ],
                    "flags": 32,
                    "start": 20,
                    "end": 50
                },
                "flags": 32,
                "start": 18,
                "end": 52
            },
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 52
        }
    ],
    "isModule": false,
    "source": "function not_gen() { function *a(){yield typeof 0} }}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 53
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Declaration or statement expected - start: 52, end: 53

```

