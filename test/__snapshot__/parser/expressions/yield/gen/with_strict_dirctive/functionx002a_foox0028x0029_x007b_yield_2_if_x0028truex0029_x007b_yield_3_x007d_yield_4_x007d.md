# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: function* foo() { yield 2; if (true) { yield 3 }; yield 4 }
## Input

`````js
'use strict'; function* foo() { yield 2; if (true) { yield 3 }; yield 4 }
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
                "text": "foo",
                "rawText": "foo",
                "flags": 768,
                "start": 23,
                "end": 27
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 256,
                "start": 27,
                "end": 29
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
                                    "flags": 768,
                                    "start": 31,
                                    "end": 37
                                },
                                "delegate": false,
                                "asteriskToken": null,
                                "expression": {
                                    "kind": 201392130,
                                    "text": 2,
                                    "rawText": "2",
                                    "flags": 768,
                                    "start": 37,
                                    "end": 39
                                },
                                "flags": 256,
                                "start": 31,
                                "end": 39
                            },
                            "flags": 128,
                            "start": 31,
                            "end": 40
                        },
                        {
                            "kind": 164,
                            "ifKeyword": {
                                "kind": 37757019,
                                "flags": 768,
                                "start": 40,
                                "end": 43
                            },
                            "expression": {
                                "kind": 134,
                                "text": true,
                                "flags": 768,
                                "start": 45,
                                "end": 49
                            },
                            "consequent": {
                                "kind": 249,
                                "block": {
                                    "kind": 124,
                                    "statements": [
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 229,
                                                "yieldKeyword": {
                                                    "kind": 8454253,
                                                    "flags": 768,
                                                    "start": 52,
                                                    "end": 58
                                                },
                                                "delegate": false,
                                                "asteriskToken": null,
                                                "expression": {
                                                    "kind": 201392130,
                                                    "text": 3,
                                                    "rawText": "3",
                                                    "flags": 768,
                                                    "start": 58,
                                                    "end": 60
                                                },
                                                "flags": 256,
                                                "start": 52,
                                                "end": 60
                                            },
                                            "flags": 128,
                                            "start": 52,
                                            "end": 60
                                        }
                                    ],
                                    "multiLine": false,
                                    "flags": 128,
                                    "start": 52,
                                    "end": 60
                                },
                                "flags": 128,
                                "start": 50,
                                "end": 62
                            },
                            "elseKeyword": null,
                            "alternate": null,
                            "flags": 128,
                            "start": 40,
                            "end": 62
                        },
                        {
                            "kind": 168,
                            "flags": 128,
                            "start": 62,
                            "end": 63
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 229,
                                "yieldKeyword": {
                                    "kind": 8454253,
                                    "flags": 768,
                                    "start": 63,
                                    "end": 69
                                },
                                "delegate": false,
                                "asteriskToken": null,
                                "expression": {
                                    "kind": 201392130,
                                    "text": 4,
                                    "rawText": "4",
                                    "flags": 768,
                                    "start": 69,
                                    "end": 71
                                },
                                "flags": 256,
                                "start": 63,
                                "end": 71
                            },
                            "flags": 128,
                            "start": 63,
                            "end": 71
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 31,
                    "end": 71
                },
                "flags": 256,
                "start": 29,
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
    "text": "'use strict'; function* foo() { yield 2; if (true) { yield 3 }; yield 4 }",
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
@{x2714}@ No errors
```

