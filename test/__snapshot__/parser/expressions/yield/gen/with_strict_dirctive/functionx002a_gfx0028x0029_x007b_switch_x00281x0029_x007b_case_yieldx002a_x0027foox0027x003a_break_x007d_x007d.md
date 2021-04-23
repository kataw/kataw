# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: function* gf() { switch (1) { case yield* 'foo': break; } }
## Input

`````js
'use strict'; function* gf() { switch (1) { case yield* 'foo': break; } }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [
        {
            "kind": 201392131,
            "text": "use strict",
            "rawText": "use strict",
            "flags": 67109632,
            "start": 0,
            "end": 12
        }
    ],
    "statements": [
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 768,
                "start": 13,
                "end": 22
            },
            "generatorToken": {
                "kind": 67143222,
                "flags": 768,
                "start": 22,
                "end": 23
            },
            "name": {
                "kind": 134299649,
                "text": "gf",
                "rawText": "gf",
                "flags": 768,
                "start": 23,
                "end": 26
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 256,
                "start": 26,
                "end": 28
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
                                "start": 30,
                                "end": 37
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": 1,
                                "rawText": "1",
                                "flags": 768,
                                "start": 39,
                                "end": 40
                            },
                            "caseBlock": {
                                "kind": 152,
                                "clauses": [
                                    {
                                        "kind": 175,
                                        "caseKeyword": {
                                            "kind": 4194382,
                                            "flags": 768,
                                            "start": 43,
                                            "end": 48
                                        },
                                        "expression": {
                                            "kind": 229,
                                            "yieldKeyword": {
                                                "kind": 8454253,
                                                "flags": 768,
                                                "start": 48,
                                                "end": 54
                                            },
                                            "delegate": true,
                                            "asteriskToken": {
                                                "kind": 67143222,
                                                "flags": 768,
                                                "start": 54,
                                                "end": 55
                                            },
                                            "expression": {
                                                "kind": 201392131,
                                                "text": "foo",
                                                "rawText": "foo",
                                                "flags": 67109632,
                                                "start": 55,
                                                "end": 61
                                            },
                                            "flags": 256,
                                            "start": 48,
                                            "end": 61
                                        },
                                        "statements": [
                                            {
                                                "kind": 150,
                                                "breakKeyword": {
                                                    "kind": 37757005,
                                                    "flags": 768,
                                                    "start": 62,
                                                    "end": 68
                                                },
                                                "label": null,
                                                "flags": 128,
                                                "start": 62,
                                                "end": 69
                                            }
                                        ],
                                        "flags": 128,
                                        "start": 43,
                                        "end": 69
                                    }
                                ],
                                "flags": 128,
                                "start": 41,
                                "end": 71
                            },
                            "flags": 128,
                            "start": 30,
                            "end": 71
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 30,
                    "end": 71
                },
                "flags": 256,
                "start": 28,
                "end": 73
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 2176,
            "start": 13,
            "end": 73
        }
    ],
    "isModule": false,
    "text": "'use strict'; function* gf() { switch (1) { case yield* 'foo': break; } }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 73
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

