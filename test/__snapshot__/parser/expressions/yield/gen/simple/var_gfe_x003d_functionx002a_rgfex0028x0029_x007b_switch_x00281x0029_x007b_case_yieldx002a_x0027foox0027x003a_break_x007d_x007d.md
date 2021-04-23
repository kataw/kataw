# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: var gfe = function* rgfe() { switch (1) { case yield* 'foo': break; } }
## Input

`````js
var gfe = function* rgfe() { switch (1) { case yield* 'foo': break; } }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 768,
                "start": 0,
                "end": 3
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "gfe",
                            "rawText": "gfe",
                            "flags": 768,
                            "start": 3,
                            "end": 7
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 177,
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 768,
                                "start": 9,
                                "end": 18
                            },
                            "generatorToken": {
                                "kind": 67143222,
                                "flags": 768,
                                "start": 18,
                                "end": 19
                            },
                            "name": {
                                "kind": 134299649,
                                "text": "rgfe",
                                "rawText": "rgfe",
                                "flags": 768,
                                "start": 19,
                                "end": 24
                            },
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 256,
                                "start": 24,
                                "end": 26
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
                                                "start": 28,
                                                "end": 35
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": 1,
                                                "rawText": "1",
                                                "flags": 768,
                                                "start": 37,
                                                "end": 38
                                            },
                                            "caseBlock": {
                                                "kind": 152,
                                                "clauses": [
                                                    {
                                                        "kind": 175,
                                                        "caseKeyword": {
                                                            "kind": 4194382,
                                                            "flags": 768,
                                                            "start": 41,
                                                            "end": 46
                                                        },
                                                        "expression": {
                                                            "kind": 229,
                                                            "yieldKeyword": {
                                                                "kind": 8454253,
                                                                "flags": 768,
                                                                "start": 46,
                                                                "end": 52
                                                            },
                                                            "delegate": true,
                                                            "asteriskToken": {
                                                                "kind": 67143222,
                                                                "flags": 768,
                                                                "start": 52,
                                                                "end": 53
                                                            },
                                                            "expression": {
                                                                "kind": 201392131,
                                                                "text": "foo",
                                                                "rawText": "foo",
                                                                "flags": 67109632,
                                                                "start": 53,
                                                                "end": 59
                                                            },
                                                            "flags": 256,
                                                            "start": 46,
                                                            "end": 59
                                                        },
                                                        "statements": [
                                                            {
                                                                "kind": 150,
                                                                "breakKeyword": {
                                                                    "kind": 37757005,
                                                                    "flags": 768,
                                                                    "start": 60,
                                                                    "end": 66
                                                                },
                                                                "label": null,
                                                                "flags": 128,
                                                                "start": 60,
                                                                "end": 67
                                                            }
                                                        ],
                                                        "flags": 128,
                                                        "start": 41,
                                                        "end": 67
                                                    }
                                                ],
                                                "flags": 128,
                                                "start": 39,
                                                "end": 69
                                            },
                                            "flags": 128,
                                            "start": 28,
                                            "end": 69
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 256,
                                    "start": 28,
                                    "end": 69
                                },
                                "flags": 256,
                                "start": 26,
                                "end": 71
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 2304,
                            "start": 9,
                            "end": 71
                        },
                        "flags": 128,
                        "start": 3,
                        "end": 71
                    }
                ],
                "flags": 128,
                "start": 3,
                "end": 71
            },
            "flags": 128,
            "start": 0,
            "end": 71
        }
    ],
    "isModule": false,
    "text": "var gfe = function* rgfe() { switch (1) { case yield* 'foo': break; } }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 71
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

