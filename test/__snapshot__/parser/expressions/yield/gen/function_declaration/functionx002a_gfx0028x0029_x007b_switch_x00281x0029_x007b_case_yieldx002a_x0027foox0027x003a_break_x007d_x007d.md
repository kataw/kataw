# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: function declaration
> :: case: function* gf() { switch (1) { case yield* 'foo': break; } }
## Input

`````js
function not_gen() { function* gf() { switch (1) { case yield* 'foo': break; } } }}
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
            "generatorToken": null,
            "name": {
                "kind": 81921,
                "text": "not_gen",
                "rawText": "not_gen",
                "flags": 768,
                "start": 8,
                "end": 16
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 256,
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
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37814362,
                                "flags": 768,
                                "start": 20,
                                "end": 29
                            },
                            "generatorToken": {
                                "kind": 67143222,
                                "flags": 768,
                                "start": 29,
                                "end": 30
                            },
                            "name": {
                                "kind": 81921,
                                "text": "gf",
                                "rawText": "gf",
                                "flags": 768,
                                "start": 30,
                                "end": 33
                            },
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 256,
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
                                            "kind": 160,
                                            "switchKeyword": {
                                                "kind": 37757024,
                                                "flags": 768,
                                                "start": 37,
                                                "end": 44
                                            },
                                            "expression": {
                                                "kind": 81921,
                                                "text": 1,
                                                "rawText": "1",
                                                "flags": 768,
                                                "start": 46,
                                                "end": 47
                                            },
                                            "caseBlock": {
                                                "kind": 152,
                                                "clauses": [
                                                    {
                                                        "kind": 175,
                                                        "caseKeyword": {
                                                            "kind": 4194382,
                                                            "flags": 768,
                                                            "start": 50,
                                                            "end": 55
                                                        },
                                                        "expression": {
                                                            "kind": 229,
                                                            "yieldKeyword": {
                                                                "kind": 8454253,
                                                                "flags": 768,
                                                                "start": 55,
                                                                "end": 61
                                                            },
                                                            "delegate": true,
                                                            "asteriskToken": {
                                                                "kind": 67143222,
                                                                "flags": 768,
                                                                "start": 61,
                                                                "end": 62
                                                            },
                                                            "expression": {
                                                                "kind": 67174403,
                                                                "text": "foo",
                                                                "rawText": "foo",
                                                                "flags": 67109632,
                                                                "start": 62,
                                                                "end": 68
                                                            },
                                                            "flags": 256,
                                                            "start": 55,
                                                            "end": 68
                                                        },
                                                        "statements": [
                                                            {
                                                                "kind": 150,
                                                                "breakKeyword": {
                                                                    "kind": 37757005,
                                                                    "flags": 768,
                                                                    "start": 69,
                                                                    "end": 75
                                                                },
                                                                "label": null,
                                                                "flags": 128,
                                                                "start": 69,
                                                                "end": 76
                                                            }
                                                        ],
                                                        "flags": 128,
                                                        "start": 50,
                                                        "end": 76
                                                    }
                                                ],
                                                "flags": 128,
                                                "start": 48,
                                                "end": 78
                                            },
                                            "flags": 128,
                                            "start": 37,
                                            "end": 78
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 256,
                                    "start": 37,
                                    "end": 78
                                },
                                "flags": 256,
                                "start": 35,
                                "end": 80
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 2304,
                            "start": 20,
                            "end": 80
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 20,
                    "end": 80
                },
                "flags": 256,
                "start": 18,
                "end": 82
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 256,
            "start": 0,
            "end": 82
        }
    ],
    "isModule": false,
    "text": "function not_gen() { function* gf() { switch (1) { case yield* 'foo': break; } } }}",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 82,
            "end": 83
        }
    ],
    "start": 0,
    "end": 83
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: function declaration
> :: case: function* gf() { switch (1) { case yield* 'foo': break; } }
## Input

`````js
function not_gen() { function* gf() { switch (1) { case yield* 'foo': break; } } }}
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: function declaration
> :: case: function* gf() { switch (1) { case yield* 'foo': break; } }
## Input

`````js
function not_gen() { function* gf() { switch (1) { case yield* 'foo': break; } } }}
`````
```

