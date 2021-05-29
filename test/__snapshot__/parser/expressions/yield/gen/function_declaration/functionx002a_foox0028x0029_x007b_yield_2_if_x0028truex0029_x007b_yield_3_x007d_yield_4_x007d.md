# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-29
- From: d
- Path: n
> :: test: function declaration
> :: case: function* foo() { yield 2; if (true) { yield 3 }; yield 4 }
## Input

`````js
function not_gen() { function* foo() { yield 2; if (true) { yield 3 }; yield 4 } }}
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
                "flags": 64,
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
                                "flags": 64,
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
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 96,
                                "start": 30,
                                "end": 34
                            },
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 34,
                                "end": 36
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
                                                    "flags": 64,
                                                    "start": 38,
                                                    "end": 44
                                                },
                                                "delegate": false,
                                                "asteriskToken": null,
                                                "expression": {
                                                    "kind": 201392130,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 96,
                                                    "start": 44,
                                                    "end": 46
                                                },
                                                "flags": 32,
                                                "start": 38,
                                                "end": 46
                                            },
                                            "flags": 16,
                                            "start": 38,
                                            "end": 47
                                        },
                                        {
                                            "kind": 164,
                                            "ifKeyword": {
                                                "kind": 37757019,
                                                "flags": 80,
                                                "start": 47,
                                                "end": 50
                                            },
                                            "expression": {
                                                "kind": 24752947,
                                                "flags": 96,
                                                "start": 52,
                                                "end": 56
                                            },
                                            "consequent": {
                                                "kind": 124,
                                                "block": {
                                                    "kind": 249,
                                                    "statements": [
                                                        {
                                                            "kind": 120,
                                                            "expression": {
                                                                "kind": 229,
                                                                "yieldKeyword": {
                                                                    "kind": 8454253,
                                                                    "flags": 64,
                                                                    "start": 59,
                                                                    "end": 65
                                                                },
                                                                "delegate": false,
                                                                "asteriskToken": null,
                                                                "expression": {
                                                                    "kind": 201392130,
                                                                    "text": 3,
                                                                    "rawText": "3",
                                                                    "flags": 96,
                                                                    "start": 65,
                                                                    "end": 67
                                                                },
                                                                "flags": 32,
                                                                "start": 59,
                                                                "end": 67
                                                            },
                                                            "flags": 16,
                                                            "start": 59,
                                                            "end": 67
                                                        }
                                                    ],
                                                    "flags": 16,
                                                    "start": 59,
                                                    "end": 67
                                                },
                                                "flags": 16,
                                                "start": 57,
                                                "end": 69
                                            },
                                            "elseKeyword": null,
                                            "alternate": null,
                                            "flags": 16,
                                            "start": 47,
                                            "end": 69
                                        },
                                        {
                                            "kind": 168,
                                            "flags": 16,
                                            "start": 69,
                                            "end": 70
                                        },
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 229,
                                                "yieldKeyword": {
                                                    "kind": 8454253,
                                                    "flags": 64,
                                                    "start": 70,
                                                    "end": 76
                                                },
                                                "delegate": false,
                                                "asteriskToken": null,
                                                "expression": {
                                                    "kind": 201392130,
                                                    "text": 4,
                                                    "rawText": "4",
                                                    "flags": 96,
                                                    "start": 76,
                                                    "end": 78
                                                },
                                                "flags": 32,
                                                "start": 70,
                                                "end": 78
                                            },
                                            "flags": 16,
                                            "start": 70,
                                            "end": 78
                                        }
                                    ],
                                    "flags": 32,
                                    "start": 38,
                                    "end": 78
                                },
                                "flags": 32,
                                "start": 36,
                                "end": 80
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 272,
                            "start": 20,
                            "end": 80
                        }
                    ],
                    "flags": 32,
                    "start": 20,
                    "end": 80
                },
                "flags": 32,
                "start": 18,
                "end": 82
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 82
        }
    ],
    "isModule": false,
    "source": "function not_gen() { function* foo() { yield 2; if (true) { yield 3 }; yield 4 } }}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 83
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Declaration or statement expected - start: 82, end: 83

```

