# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/yield/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/yield/gen/function_declaration
> :: test: function declaration
> :: case: async function wrap() { async function await() { } };
## Options

`````js
{}
`````
## Input

`````js
function not_gen() { async function wrap() { async function await() { } }; }}
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
                                "flags": 64,
                                "start": 26,
                                "end": 35
                            },
                            "generatorToken": null,
                            "name": {
                                "kind": 134299649,
                                "text": "wrap",
                                "rawText": "wrap",
                                "flags": 96,
                                "start": 35,
                                "end": 40
                            },
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 40,
                                "end": 42
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
                                                "start": 44,
                                                "end": 50
                                            },
                                            "functionKeyword": {
                                                "kind": 37822554,
                                                "flags": 64,
                                                "start": 50,
                                                "end": 59
                                            },
                                            "generatorToken": null,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "await",
                                                "rawText": "await",
                                                "flags": 96,
                                                "start": 59,
                                                "end": 65
                                            },
                                            "formalParameters": {
                                                "kind": 214,
                                                "formalParameterList": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 65,
                                                "end": 67
                                            },
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [],
                                                    "flags": 32,
                                                    "start": 69,
                                                    "end": 69
                                                },
                                                "flags": 32,
                                                "start": 67,
                                                "end": 71
                                            },
                                            "typeParameters": null,
                                            "returnType": null,
                                            "flags": 144,
                                            "start": 44,
                                            "end": 71
                                        }
                                    ],
                                    "flags": 32,
                                    "start": 44,
                                    "end": 71
                                },
                                "flags": 32,
                                "start": 42,
                                "end": 73
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 144,
                            "start": 20,
                            "end": 73
                        },
                        {
                            "kind": 168,
                            "flags": 16,
                            "start": 73,
                            "end": 74
                        }
                    ],
                    "flags": 32,
                    "start": 20,
                    "end": 74
                },
                "flags": 32,
                "start": 18,
                "end": 76
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 76
        }
    ],
    "isModule": false,
    "source": "function not_gen() { async function wrap() { async function await() { } }; }}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 77
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Cannot use 'await' as a name on a async function declaration - start: 59, end: 65
✖ Declaration or statement expected - start: 76, end: 77

```

