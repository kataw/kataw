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
    "statements": [
        {
            "kind": 176,
            "asyncToken": null,
            "generatorToken": {
                "kind": 67143222,
                "autofix": 0,
                "flags": 0,
                "start": 8,
                "end": 9
            },
            "name": {
                "kind": 81921,
                "value": "foo",
                "autofix": 0,
                "flags": 768,
                "start": 9,
                "end": 13
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "autofix": 0,
                "flags": 256,
                "start": 14,
                "end": 15
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 229,
                                "delegate": false,
                                "asteriskToken": null,
                                "expression": {
                                    "kind": 81921,
                                    "value": 2,
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 23,
                                    "end": 25
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 17,
                                "end": 25
                            },
                            "autofix": 0,
                            "flags": 128,
                            "start": 17,
                            "end": 26
                        },
                        {
                            "kind": 164,
                            "expression": {
                                "kind": 134,
                                "value": true,
                                "autofix": 0,
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
                                                "delegate": false,
                                                "asteriskToken": null,
                                                "expression": {
                                                    "kind": 81921,
                                                    "value": 3,
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 44,
                                                    "end": 46
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 38,
                                                "end": 46
                                            },
                                            "autofix": 0,
                                            "flags": 128,
                                            "start": 38,
                                            "end": 46
                                        }
                                    ],
                                    "multiLine": false,
                                    "autofix": 0,
                                    "flags": 128,
                                    "start": 38,
                                    "end": 46
                                },
                                "autofix": 0,
                                "flags": 128,
                                "start": 36,
                                "end": 48
                            },
                            "alternate": null,
                            "autofix": 0,
                            "flags": 128,
                            "start": 26,
                            "end": 48
                        },
                        {
                            "kind": 168,
                            "autofix": 0,
                            "flags": 128,
                            "start": 48,
                            "end": 49
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 229,
                                "delegate": false,
                                "asteriskToken": null,
                                "expression": {
                                    "kind": 81921,
                                    "value": 4,
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 55,
                                    "end": 57
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 49,
                                "end": 57
                            },
                            "autofix": 0,
                            "flags": 128,
                            "start": 49,
                            "end": 57
                        }
                    ],
                    "multiline": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 17,
                    "end": 57
                },
                "autofix": 0,
                "flags": 256,
                "start": 15,
                "end": 59
            },
            "typeParameters": null,
            "returnType": null,
            "autofix": 0,
            "flags": 2304,
            "start": 0,
            "end": 59
        }
    ],
    "isModule": false,
    "text": "function* foo() { yield 2; if (true) { yield 3 }; yield 4 }",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 59
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: function* foo() { yield 2; if (true) { yield 3 }; yield 4 }
## Input

`````js
function* foo() { yield 2; if (true) { yield 3 }; yield 4 }
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: function* foo() { yield 2; if (true) { yield 3 }; yield 4 }
## Input

`````js
function* foo() { yield 2; if (true) { yield 3 }; yield 4 }
`````
```

