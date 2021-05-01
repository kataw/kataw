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
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "rawText": "'use strict'",
                "flags": 4194400,
                "start": 0,
                "end": 12
            },
            "flags": 16,
            "start": 0,
            "end": 13
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 0,
                "start": 13,
                "end": 22
            },
            "generatorToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 22,
                "end": 23
            },
            "name": {
                "kind": 134299649,
                "text": "foo",
                "rawText": " foo",
                "flags": 96,
                "start": 23,
                "end": 27
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
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
                                    "flags": 0,
                                    "start": 31,
                                    "end": 37
                                },
                                "delegate": false,
                                "asteriskToken": null,
                                "expression": {
                                    "kind": 201392130,
                                    "text": 2,
                                    "rawText": "2",
                                    "flags": 96,
                                    "start": 37,
                                    "end": 39
                                },
                                "flags": 32,
                                "start": 31,
                                "end": 39
                            },
                            "flags": 16,
                            "start": 31,
                            "end": 40
                        },
                        {
                            "kind": 164,
                            "ifKeyword": {
                                "kind": 37757019,
                                "flags": 0,
                                "start": 40,
                                "end": 43
                            },
                            "expression": {
                                "kind": 134,
                                "text": true,
                                "flags": 96,
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
                                                    "flags": 0,
                                                    "start": 52,
                                                    "end": 58
                                                },
                                                "delegate": false,
                                                "asteriskToken": null,
                                                "expression": {
                                                    "kind": 201392130,
                                                    "text": 3,
                                                    "rawText": "3",
                                                    "flags": 96,
                                                    "start": 58,
                                                    "end": 60
                                                },
                                                "flags": 32,
                                                "start": 52,
                                                "end": 60
                                            },
                                            "flags": 16,
                                            "start": 52,
                                            "end": 60
                                        }
                                    ],
                                    "flags": 16,
                                    "start": 52,
                                    "end": 60
                                },
                                "flags": 16,
                                "start": 50,
                                "end": 62
                            },
                            "elseKeyword": null,
                            "alternate": null,
                            "flags": 16,
                            "start": 40,
                            "end": 62
                        },
                        {
                            "kind": 168,
                            "flags": 16,
                            "start": 62,
                            "end": 63
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 229,
                                "yieldKeyword": {
                                    "kind": 8454253,
                                    "flags": 0,
                                    "start": 63,
                                    "end": 69
                                },
                                "delegate": false,
                                "asteriskToken": null,
                                "expression": {
                                    "kind": 201392130,
                                    "text": 4,
                                    "rawText": "4",
                                    "flags": 96,
                                    "start": 69,
                                    "end": 71
                                },
                                "flags": 32,
                                "start": 63,
                                "end": 71
                            },
                            "flags": 16,
                            "start": 63,
                            "end": 71
                        }
                    ],
                    "flags": 32,
                    "start": 31,
                    "end": 71
                },
                "flags": 32,
                "start": 29,
                "end": 73
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 272,
            "start": 13,
            "end": 73
        }
    ],
    "isModule": false,
    "source": "'use strict'; function* foo() { yield 2; if (true) { yield 3 }; yield 4 }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 73
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

