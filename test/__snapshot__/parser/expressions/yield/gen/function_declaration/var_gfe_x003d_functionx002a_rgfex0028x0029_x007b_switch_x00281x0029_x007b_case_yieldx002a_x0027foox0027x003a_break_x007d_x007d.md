# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: function declaration
> :: case: var gfe = function* rgfe() { switch (1) { case yield* 'foo': break; } }
## Input

`````js
function not_gen() { var gfe = function* rgfe() { switch (1) { case yield* 'foo': break; } } }}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 176,
            "asyncToken": null,
            "generatorToken": null,
            "name": {
                "kind": 81921,
                "value": "not_gen",
                "autofix": 0,
                "flags": 768,
                "start": 8,
                "end": 16
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "autofix": 0,
                "flags": 256,
                "start": 17,
                "end": 18
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "statements": [
                        {
                            "kind": 155,
                            "declarationList": {
                                "kind": 156,
                                "declarations": [
                                    {
                                        "kind": 157,
                                        "binding": {
                                            "kind": 81921,
                                            "value": "gfe",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 24,
                                            "end": 28
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": {
                                            "kind": 177,
                                            "asyncToken": null,
                                            "generatorToken": {
                                                "kind": 67143222,
                                                "autofix": 0,
                                                "flags": 0,
                                                "start": 39,
                                                "end": 40
                                            },
                                            "name": {
                                                "kind": 81921,
                                                "value": "rgfe",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 40,
                                                "end": 45
                                            },
                                            "formalParameters": {
                                                "kind": 214,
                                                "formalParameterList": [],
                                                "trailingComma": false,
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 46,
                                                "end": 47
                                            },
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "statements": [
                                                        {
                                                            "kind": 160,
                                                            "expression": {
                                                                "kind": 81921,
                                                                "value": 1,
                                                                "autofix": 0,
                                                                "flags": 768,
                                                                "start": 58,
                                                                "end": 59
                                                            },
                                                            "caseBlock": {
                                                                "kind": 152,
                                                                "clauses": [
                                                                    {
                                                                        "kind": 175,
                                                                        "expression": {
                                                                            "kind": 229,
                                                                            "delegate": true,
                                                                            "asteriskToken": {
                                                                                "kind": 67143222,
                                                                                "autofix": 0,
                                                                                "flags": 0,
                                                                                "start": 73,
                                                                                "end": 74
                                                                            },
                                                                            "expression": {
                                                                                "kind": 67174403,
                                                                                "value": "foo",
                                                                                "autofix": 0,
                                                                                "flags": 768,
                                                                                "start": 74,
                                                                                "end": 80
                                                                            },
                                                                            "autofix": 0,
                                                                            "flags": 256,
                                                                            "start": 67,
                                                                            "end": 80
                                                                        },
                                                                        "statements": [
                                                                            {
                                                                                "kind": 150,
                                                                                "label": null,
                                                                                "autofix": 0,
                                                                                "flags": 128,
                                                                                "start": 81,
                                                                                "end": 88
                                                                            }
                                                                        ],
                                                                        "autofix": 0,
                                                                        "flags": 128,
                                                                        "start": 62,
                                                                        "end": 88
                                                                    }
                                                                ],
                                                                "autofix": 0,
                                                                "flags": 128,
                                                                "start": 60,
                                                                "end": 90
                                                            },
                                                            "autofix": 0,
                                                            "flags": 128,
                                                            "start": 49,
                                                            "end": 90
                                                        }
                                                    ],
                                                    "multiline": false,
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 49,
                                                    "end": 90
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 47,
                                                "end": 92
                                            },
                                            "typeParameters": null,
                                            "returnType": null,
                                            "autofix": 0,
                                            "flags": 2304,
                                            "start": 30,
                                            "end": 92
                                        },
                                        "autofix": 0,
                                        "flags": 128,
                                        "start": 24,
                                        "end": 92
                                    }
                                ],
                                "autofix": 0,
                                "flags": 128,
                                "start": 24,
                                "end": 92
                            },
                            "autofix": 0,
                            "flags": 128,
                            "start": 20,
                            "end": 92
                        }
                    ],
                    "multiline": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 20,
                    "end": 92
                },
                "autofix": 0,
                "flags": 256,
                "start": 18,
                "end": 94
            },
            "typeParameters": null,
            "returnType": null,
            "autofix": 0,
            "flags": 256,
            "start": 0,
            "end": 94
        }
    ],
    "isModule": false,
    "text": "function not_gen() { var gfe = function* rgfe() { switch (1) { case yield* 'foo': break; } } }}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 94,
            "end": 95
        }
    ],
    "start": 0,
    "end": 95
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: function declaration
> :: case: var gfe = function* rgfe() { switch (1) { case yield* 'foo': break; } }
## Input

`````js
function not_gen() { var gfe = function* rgfe() { switch (1) { case yield* 'foo': break; } } }}
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: function declaration
> :: case: var gfe = function* rgfe() { switch (1) { case yield* 'foo': break; } }
## Input

`````js
function not_gen() { var gfe = function* rgfe() { switch (1) { case yield* 'foo': break; } } }}
`````
```

