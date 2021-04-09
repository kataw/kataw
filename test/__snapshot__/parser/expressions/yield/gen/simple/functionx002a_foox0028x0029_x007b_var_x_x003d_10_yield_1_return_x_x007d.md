# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: function* foo() { var x = 10; yield 1; return x; }
## Input

`````js
function* foo() { var x = 10; yield 1; return x; }
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
                            "kind": 155,
                            "declarationList": {
                                "kind": 156,
                                "declarations": [
                                    {
                                        "kind": 157,
                                        "binding": {
                                            "kind": 81921,
                                            "value": "x",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 21,
                                            "end": 23
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": {
                                            "kind": 81921,
                                            "value": 10,
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 25,
                                            "end": 28
                                        },
                                        "autofix": 0,
                                        "flags": 128,
                                        "start": 21,
                                        "end": 28
                                    }
                                ],
                                "autofix": 0,
                                "flags": 128,
                                "start": 21,
                                "end": 28
                            },
                            "autofix": 0,
                            "flags": 128,
                            "start": 17,
                            "end": 29
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 229,
                                "delegate": false,
                                "asteriskToken": null,
                                "expression": {
                                    "kind": 81921,
                                    "value": 1,
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 35,
                                    "end": 37
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 29,
                                "end": 37
                            },
                            "autofix": 0,
                            "flags": 128,
                            "start": 29,
                            "end": 38
                        },
                        {
                            "kind": 161,
                            "expression": {
                                "kind": 81921,
                                "value": "x",
                                "autofix": 0,
                                "flags": 768,
                                "start": 45,
                                "end": 47
                            },
                            "autofix": 0,
                            "flags": 128,
                            "start": 0,
                            "end": 38
                        }
                    ],
                    "multiline": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 17,
                    "end": 48
                },
                "autofix": 0,
                "flags": 256,
                "start": 15,
                "end": 50
            },
            "typeParameters": null,
            "returnType": null,
            "autofix": 0,
            "flags": 2304,
            "start": 0,
            "end": 50
        }
    ],
    "isModule": false,
    "text": "function* foo() { var x = 10; yield 1; return x; }",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 50
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: function* foo() { var x = 10; yield 1; return x; }
## Input

`````js
function* foo() { var x = 10; yield 1; return x; }
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: function* foo() { var x = 10; yield 1; return x; }
## Input

`````js
function* foo() { var x = 10; yield 1; return x; }
`````
```

