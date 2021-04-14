# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: function generator
> :: case: function foo(yield) {
## Input

`````js
function * gen() { function not_gen() { function foo(yield) { }}
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
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37814362,
                "flags": 768,
                "start": 0,
                "end": 8
            },
            "generatorToken": {
                "kind": 67143222,
                "flags": 768,
                "start": 8,
                "end": 10
            },
            "name": {
                "kind": 81921,
                "text": "gen",
                "rawText": "gen",
                "flags": 768,
                "start": 10,
                "end": 14
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 256,
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
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37814362,
                                "flags": 768,
                                "start": 18,
                                "end": 27
                            },
                            "generatorToken": null,
                            "name": {
                                "kind": 81921,
                                "text": "not_gen",
                                "rawText": "not_gen",
                                "flags": 768,
                                "start": 27,
                                "end": 35
                            },
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 256,
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
                                            "kind": 176,
                                            "asyncKeyword": null,
                                            "functionKeyword": {
                                                "kind": 37814362,
                                                "flags": 768,
                                                "start": 39,
                                                "end": 48
                                            },
                                            "generatorToken": null,
                                            "name": {
                                                "kind": 81921,
                                                "text": "foo",
                                                "rawText": "foo",
                                                "flags": 768,
                                                "start": 48,
                                                "end": 52
                                            },
                                            "formalParameters": {
                                                "kind": 214,
                                                "formalParameterList": [
                                                    {
                                                        "kind": 215,
                                                        "ellipsisToken": null,
                                                        "binding": {
                                                            "kind": 81921,
                                                            "text": "yield",
                                                            "rawText": "yield",
                                                            "flags": 768,
                                                            "start": 53,
                                                            "end": 58
                                                        },
                                                        "optionalToken": null,
                                                        "type": null,
                                                        "initializer": null,
                                                        "flags": 256,
                                                        "start": 53,
                                                        "end": 58
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 256,
                                                "start": 52,
                                                "end": 59
                                            },
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [],
                                                    "multiline": false,
                                                    "flags": 256,
                                                    "start": 61,
                                                    "end": 61
                                                },
                                                "flags": 256,
                                                "start": 59,
                                                "end": 63
                                            },
                                            "typeParameters": null,
                                            "returnType": null,
                                            "flags": 256,
                                            "start": 39,
                                            "end": 63
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 256,
                                    "start": 39,
                                    "end": 63
                                },
                                "flags": 256,
                                "start": 37,
                                "end": 64
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 256,
                            "start": 18,
                            "end": 64
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 18,
                    "end": 64
                },
                "flags": 256,
                "start": 16,
                "end": 64
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 2304,
            "start": 0,
            "end": 64
        }
    ],
    "isModule": false,
    "text": "function * gen() { function not_gen() { function foo(yield) { }}",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 64,
            "end": 64
        }
    ],
    "start": 0,
    "end": 64
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: function generator
> :: case: function foo(yield) {
## Input

`````js
function * gen() { function not_gen() { function foo(yield) { }}
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: function generator
> :: case: function foo(yield) {
## Input

`````js
function * gen() { function not_gen() { function foo(yield) { }}
`````
```

