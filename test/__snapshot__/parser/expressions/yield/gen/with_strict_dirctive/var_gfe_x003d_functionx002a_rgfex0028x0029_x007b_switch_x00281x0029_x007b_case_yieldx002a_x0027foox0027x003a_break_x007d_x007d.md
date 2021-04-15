# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: var gfe = function* rgfe() { switch (1) { case yield* 'foo': break; } }
## Input

`````js
'use strict'; var gfe = function* rgfe() { switch (1) { case yield* 'foo': break; } }
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
            "kind": 155,
            "varKeyword": {
                "kind": 37757002,
                "flags": 768,
                "start": 13,
                "end": 17
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
                            "start": 17,
                            "end": 21
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 177,
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37814362,
                                "flags": 768,
                                "start": 23,
                                "end": 32
                            },
                            "generatorToken": {
                                "kind": 67143222,
                                "flags": 768,
                                "start": 32,
                                "end": 33
                            },
                            "name": {
                                "kind": 134299649,
                                "text": "rgfe",
                                "rawText": "rgfe",
                                "flags": 768,
                                "start": 33,
                                "end": 38
                            },
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 256,
                                "start": 38,
                                "end": 40
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
                                                "start": 42,
                                                "end": 49
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": 1,
                                                "rawText": "1",
                                                "flags": 768,
                                                "start": 51,
                                                "end": 52
                                            },
                                            "caseBlock": {
                                                "kind": 152,
                                                "clauses": [
                                                    {
                                                        "kind": 175,
                                                        "caseKeyword": {
                                                            "kind": 4194382,
                                                            "flags": 768,
                                                            "start": 55,
                                                            "end": 60
                                                        },
                                                        "expression": {
                                                            "kind": 229,
                                                            "yieldKeyword": {
                                                                "kind": 8454253,
                                                                "flags": 768,
                                                                "start": 60,
                                                                "end": 66
                                                            },
                                                            "delegate": true,
                                                            "asteriskToken": {
                                                                "kind": 67143222,
                                                                "flags": 768,
                                                                "start": 66,
                                                                "end": 67
                                                            },
                                                            "expression": {
                                                                "kind": 201392131,
                                                                "text": "foo",
                                                                "rawText": "foo",
                                                                "flags": 67109632,
                                                                "start": 67,
                                                                "end": 73
                                                            },
                                                            "flags": 256,
                                                            "start": 60,
                                                            "end": 73
                                                        },
                                                        "statements": [
                                                            {
                                                                "kind": 150,
                                                                "breakKeyword": {
                                                                    "kind": 37757005,
                                                                    "flags": 768,
                                                                    "start": 74,
                                                                    "end": 80
                                                                },
                                                                "label": null,
                                                                "flags": 128,
                                                                "start": 74,
                                                                "end": 81
                                                            }
                                                        ],
                                                        "flags": 128,
                                                        "start": 55,
                                                        "end": 81
                                                    }
                                                ],
                                                "flags": 128,
                                                "start": 53,
                                                "end": 83
                                            },
                                            "flags": 128,
                                            "start": 42,
                                            "end": 83
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 256,
                                    "start": 42,
                                    "end": 83
                                },
                                "flags": 256,
                                "start": 40,
                                "end": 85
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 2304,
                            "start": 23,
                            "end": 85
                        },
                        "flags": 128,
                        "start": 17,
                        "end": 85
                    }
                ],
                "flags": 128,
                "start": 17,
                "end": 85
            },
            "flags": 128,
            "start": 13,
            "end": 85
        }
    ],
    "isModule": false,
    "text": "'use strict'; var gfe = function* rgfe() { switch (1) { case yield* 'foo': break; } }",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 85
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

