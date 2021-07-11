# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/yield/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/yield/gen/function_generator
> :: test: function generator
> :: case: async function wrap() { async function await() { } };
## Options

`````js
{}
`````
## Input

`````js
function * gen() { function not_gen() { async function wrap() { async function await() { } }; }}
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
                "text": "gen",
                "rawText": "gen",
                "flags": 96,
                "start": 10,
                "end": 14
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 15,
                "end": 15
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
                                "start": 18,
                                "end": 27
                            },
                            "asteriskToken": null,
                            "name": {
                                "kind": 134299649,
                                "text": "not_gen",
                                "rawText": "not_gen",
                                "flags": 96,
                                "start": 27,
                                "end": 35
                            },
                            "typeParameters": null,
                            "formalParameterList": {
                                "kind": 214,
                                "formalParameters": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 36,
                                "end": 36
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
                                                "start": 39,
                                                "end": 45
                                            },
                                            "functionKeyword": {
                                                "kind": 37822554,
                                                "flags": 64,
                                                "start": 45,
                                                "end": 54
                                            },
                                            "asteriskToken": null,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "wrap",
                                                "rawText": "wrap",
                                                "flags": 96,
                                                "start": 54,
                                                "end": 59
                                            },
                                            "typeParameters": null,
                                            "formalParameterList": {
                                                "kind": 214,
                                                "formalParameters": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 60,
                                                "end": 60
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
                                                                "start": 63,
                                                                "end": 69
                                                            },
                                                            "functionKeyword": {
                                                                "kind": 37822554,
                                                                "flags": 64,
                                                                "start": 69,
                                                                "end": 78
                                                            },
                                                            "asteriskToken": null,
                                                            "name": {
                                                                "kind": 134299649,
                                                                "text": "await",
                                                                "rawText": "await",
                                                                "flags": 96,
                                                                "start": 78,
                                                                "end": 84
                                                            },
                                                            "typeParameters": null,
                                                            "formalParameterList": {
                                                                "kind": 214,
                                                                "formalParameters": [],
                                                                "trailingComma": false,
                                                                "flags": 32,
                                                                "start": 85,
                                                                "end": 85
                                                            },
                                                            "contents": {
                                                                "kind": 216,
                                                                "functionStatementList": {
                                                                    "kind": 217,
                                                                    "directives": [],
                                                                    "statements": [],
                                                                    "flags": 32,
                                                                    "start": 88,
                                                                    "end": 88
                                                                },
                                                                "flags": 32,
                                                                "start": 86,
                                                                "end": 90
                                                            },
                                                            "returnType": null,
                                                            "flags": 144,
                                                            "start": 63,
                                                            "end": 90
                                                        }
                                                    ],
                                                    "flags": 32,
                                                    "start": 63,
                                                    "end": 90
                                                },
                                                "flags": 32,
                                                "start": 61,
                                                "end": 92
                                            },
                                            "returnType": null,
                                            "flags": 144,
                                            "start": 39,
                                            "end": 92
                                        },
                                        {
                                            "kind": 168,
                                            "flags": 16,
                                            "start": 92,
                                            "end": 93
                                        }
                                    ],
                                    "flags": 32,
                                    "start": 39,
                                    "end": 93
                                },
                                "flags": 32,
                                "start": 37,
                                "end": 95
                            },
                            "returnType": null,
                            "flags": 16,
                            "start": 18,
                            "end": 95
                        }
                    ],
                    "flags": 32,
                    "start": 18,
                    "end": 95
                },
                "flags": 32,
                "start": 16,
                "end": 96
            },
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 96
        }
    ],
    "isModule": false,
    "source": "function * gen() { function not_gen() { async function wrap() { async function await() { } }; }}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 96
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Cannot use 'await' as a name on a async function declaration - start: 78, end: 84

```

