# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/yield/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/yield/gen/function_declaration
> :: test: function declaration
> :: case: function* g(){ x ? yield : y }
## Options

`````js
{}
`````
## Input

`````js
function not_gen() { function* g(){ x ? yield : y } }}
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
                "start": 16,
                "end": 16
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
                                "end": 30
                            },
                            "name": {
                                "kind": 134299649,
                                "text": "g",
                                "rawText": "g",
                                "flags": 96,
                                "start": 30,
                                "end": 32
                            },
                            "typeParameters": null,
                            "formalParameterList": {
                                "kind": 214,
                                "formalParameters": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 32,
                                "end": 32
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
                                                "kind": 197,
                                                "shortCircuit": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "start": 35,
                                                    "end": 37
                                                },
                                                "questionToken": {
                                                    "kind": 134217750,
                                                    "flags": 64,
                                                    "start": 37,
                                                    "end": 39
                                                },
                                                "consequent": {
                                                    "kind": 229,
                                                    "yieldKeyword": {
                                                        "kind": 8454253,
                                                        "flags": 64,
                                                        "start": 39,
                                                        "end": 45
                                                    },
                                                    "delegate": false,
                                                    "asteriskToken": null,
                                                    "expression": null,
                                                    "flags": 32,
                                                    "start": 39,
                                                    "end": 45
                                                },
                                                "colonToken": {
                                                    "kind": 21,
                                                    "flags": 64,
                                                    "start": 45,
                                                    "end": 47
                                                },
                                                "alternate": {
                                                    "kind": 134299649,
                                                    "text": "y",
                                                    "rawText": "y",
                                                    "flags": 96,
                                                    "start": 47,
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
                                "end": 51
                            },
                            "returnType": null,
                            "flags": 272,
                            "start": 20,
                            "end": 51
                        }
                    ],
                    "flags": 32,
                    "start": 20,
                    "end": 51
                },
                "flags": 32,
                "start": 18,
                "end": 53
            },
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 53
        }
    ],
    "isModule": false,
    "source": "function not_gen() { function* g(){ x ? yield : y } }}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 54
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Declaration or statement expected - start: 53, end: 54

```

