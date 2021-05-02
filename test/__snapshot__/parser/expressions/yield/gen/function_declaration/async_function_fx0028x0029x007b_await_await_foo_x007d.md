# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: function declaration
> :: case: async function f(){ await await foo; }
## Input

`````js
function not_gen() { async function f(){ await await foo; } }}
`````

## Output

### Hybrid CST

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
                "flags": 0,
                "start": 0,
                "end": 8
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "not_gen",
                "rawText": "not_gen",
                "flags": 96,
                "start": 8,
                "end": 16
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 16,
                "end": 18
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
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 64,
                                "start": 20,
                                "end": 26
                            },
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 0,
                                "start": 26,
                                "end": 35
                            },
                            "generatorToken": null,
                            "name": {
                                "kind": 134299649,
                                "text": "f",
                                "rawText": "f",
                                "flags": 96,
                                "start": 35,
                                "end": 37
                            },
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 37,
                                "end": 39
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
                                                "kind": 208,
                                                "awaitToken": {
                                                    "kind": 82032,
                                                    "flags": 0,
                                                    "start": 40,
                                                    "end": 46
                                                },
                                                "expression": {
                                                    "kind": 208,
                                                    "awaitToken": {
                                                        "kind": 82032,
                                                        "flags": 0,
                                                        "start": 46,
                                                        "end": 52
                                                    },
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "foo",
                                                        "rawText": "foo",
                                                        "flags": 96,
                                                        "start": 52,
                                                        "end": 56
                                                    },
                                                    "flags": 32,
                                                    "start": 46,
                                                    "end": 56
                                                },
                                                "flags": 32,
                                                "start": 40,
                                                "end": 56
                                            },
                                            "flags": 16,
                                            "start": 40,
                                            "end": 57
                                        }
                                    ],
                                    "flags": 32,
                                    "start": 40,
                                    "end": 57
                                },
                                "flags": 32,
                                "start": 39,
                                "end": 59
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 144,
                            "start": 20,
                            "end": 59
                        }
                    ],
                    "flags": 32,
                    "start": 20,
                    "end": 59
                },
                "flags": 32,
                "start": 18,
                "end": 61
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 61
        }
    ],
    "isModule": false,
    "source": "function not_gen() { async function f(){ await await foo; } }}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 62
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Declaration or statement expected - start: 61, end: 62

```

