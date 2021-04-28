# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: function* foo() { yield 2; if (true) { yield 3 }; yield 4 }
## Input

`````js
function* foo() { yield 2; if (true) { yield 3 }; yield 4 }
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
                "flags": 768,
                "start": 0,
                "end": 8
            },
            "generatorToken": {
                "kind": 67143222,
                "flags": 768,
                "start": 8,
                "end": 9
            },
            "name": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 768,
                "start": 9,
                "end": 13
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 256,
                "start": 13,
                "end": 15
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
                                    "start": 17,
                                    "end": 23
                                },
                                "delegate": false,
                                "asteriskToken": null,
                                "expression": {
                                    "kind": 201392130,
                                    "text": 2,
                                    "rawText": "2",
                                    "flags": 768,
                                    "start": 23,
                                    "end": 25
                                },
                                "flags": 256,
                                "start": 17,
                                "end": 25
                            },
                            "flags": 128,
                            "start": 17,
                            "end": 26
                        },
                        {
                            "kind": 164,
                            "ifKeyword": {
                                "kind": 37757019,
                                "flags": 768,
                                "start": 26,
                                "end": 29
                            },
                            "expression": {
                                "kind": 134,
                                "text": true,
                                "flags": 768,
                                "start": 31,
                                "end": 35
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
                                                    "start": 38,
                                                    "end": 44
                                                },
                                                "delegate": false,
                                                "asteriskToken": null,
                                                "expression": {
                                                    "kind": 201392130,
                                                    "text": 3,
                                                    "rawText": "3",
                                                    "flags": 768,
                                                    "start": 44,
                                                    "end": 46
                                                },
                                                "flags": 256,
                                                "start": 38,
                                                "end": 46
                                            },
                                            "flags": 128,
                                            "start": 38,
                                            "end": 46
                                        }
                                    ],
                                    "multiLine": false,
                                    "flags": 128,
                                    "start": 38,
                                    "end": 46
                                },
                                "flags": 128,
                                "start": 36,
                                "end": 48
                            },
                            "elseKeyword": null,
                            "alternate": null,
                            "flags": 128,
                            "start": 26,
                            "end": 48
                        },
                        {
                            "kind": 168,
                            "flags": 128,
                            "start": 48,
                            "end": 49
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 229,
                                "yieldKeyword": {
                                    "kind": 8454253,
                                    "flags": 768,
                                    "start": 49,
                                    "end": 55
                                },
                                "delegate": false,
                                "asteriskToken": null,
                                "expression": {
                                    "kind": 201392130,
                                    "text": 4,
                                    "rawText": "4",
                                    "flags": 768,
                                    "start": 55,
                                    "end": 57
                                },
                                "flags": 256,
                                "start": 49,
                                "end": 57
                            },
                            "flags": 128,
                            "start": 49,
                            "end": 57
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 17,
                    "end": 57
                },
                "flags": 256,
                "start": 15,
                "end": 59
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 2176,
            "start": 0,
            "end": 59
        }
    ],
    "isModule": false,
    "text": "function* foo() { yield 2; if (true) { yield 3 }; yield 4 }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 59
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

