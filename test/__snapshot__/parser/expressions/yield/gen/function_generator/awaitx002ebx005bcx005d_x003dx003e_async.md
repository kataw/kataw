# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: function generator
> :: case: await.b[c] => async
## Input

`````js
function * gen() { function not_gen() { await.b[c] => async }}
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
                "flags": 0,
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
                "text": "gen",
                "rawText": "gen",
                "flags": 96,
                "start": 10,
                "end": 14
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 14,
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
                                "flags": 0,
                                "start": 18,
                                "end": 27
                            },
                            "generatorToken": null,
                            "name": {
                                "kind": 134299649,
                                "text": "not_gen",
                                "rawText": "not_gen",
                                "flags": 96,
                                "start": 27,
                                "end": 35
                            },
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 35,
                                "end": 37
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
                                                "kind": 130,
                                                "member": {
                                                    "kind": 129,
                                                    "member": {
                                                        "kind": 134299649,
                                                        "text": "await",
                                                        "rawText": "await",
                                                        "flags": 96,
                                                        "start": 39,
                                                        "end": 45
                                                    },
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "b",
                                                        "rawText": "b",
                                                        "flags": 96,
                                                        "start": 46,
                                                        "end": 47
                                                    },
                                                    "flags": 32,
                                                    "start": 39,
                                                    "end": 47
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "c",
                                                    "rawText": "c",
                                                    "flags": 96,
                                                    "start": 48,
                                                    "end": 49
                                                },
                                                "flags": 32,
                                                "start": 39,
                                                "end": 50
                                            },
                                            "flags": 16,
                                            "start": 39,
                                            "end": 50
                                        }
                                    ],
                                    "flags": 32,
                                    "start": 39,
                                    "end": 50
                                },
                                "flags": 32,
                                "start": 37,
                                "end": 50
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 16,
                            "start": 18,
                            "end": 50
                        }
                    ],
                    "flags": 32,
                    "start": 18,
                    "end": 50
                },
                "flags": 32,
                "start": 16,
                "end": 50
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 50
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "async",
                "rawText": "async",
                "flags": 96,
                "start": 53,
                "end": 59
            },
            "flags": 16,
            "start": 53,
            "end": 59
        }
    ],
    "isModule": false,
    "source": "function * gen() { function not_gen() { await.b[c] => async }}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 62
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a `;` - start: 50, end: 53
✖ Declaration or statement expected - start: 59, end: 61
✖ Declaration or statement expected - start: 61, end: 62

```

