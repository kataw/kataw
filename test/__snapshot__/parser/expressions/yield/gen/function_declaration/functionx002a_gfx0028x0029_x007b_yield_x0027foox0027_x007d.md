# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: function declaration
> :: case: function* gf() { yield 'foo' }
## Input

`````js
function not_gen() { function* gf() { yield 'foo' } }}
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
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 0,
                                "start": 20,
                                "end": 29
                            },
                            "generatorToken": {
                                "kind": 67143222,
                                "flags": 64,
                                "start": 29,
                                "end": 30
                            },
                            "name": {
                                "kind": 134299649,
                                "text": "gf",
                                "rawText": "gf",
                                "flags": 96,
                                "start": 30,
                                "end": 33
                            },
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 33,
                                "end": 35
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
                                                    "flags": 0,
                                                    "start": 37,
                                                    "end": 43
                                                },
                                                "delegate": false,
                                                "asteriskToken": null,
                                                "expression": {
                                                    "kind": 201392131,
                                                    "text": "foo",
                                                    "rawText": "'foo'",
                                                    "flags": 4194400,
                                                    "start": 43,
                                                    "end": 49
                                                },
                                                "flags": 32,
                                                "start": 37,
                                                "end": 49
                                            },
                                            "flags": 16,
                                            "start": 37,
                                            "end": 49
                                        }
                                    ],
                                    "flags": 32,
                                    "start": 37,
                                    "end": 49
                                },
                                "flags": 32,
                                "start": 35,
                                "end": 51
                            },
                            "typeParameters": null,
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
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 53
        }
    ],
    "isModule": false,
    "source": "function not_gen() { function* gf() { yield 'foo' } }}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 54
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Statement expected - start: 53, end: 54

```

