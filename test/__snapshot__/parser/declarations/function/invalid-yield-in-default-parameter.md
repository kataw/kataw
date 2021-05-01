# Kataw parser test case

## Input

`````js
function* x() { function* foo(a = 1 + (yield)) {} }
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
                "flags": 0,
                "start": 0,
                "end": 8
            },
            "generatorToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 8,
                "end": 9
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 9,
                "end": 11
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 11,
                "end": 13
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
                                "flags": 0,
                                "start": 15,
                                "end": 24
                            },
                            "generatorToken": {
                                "kind": 67143222,
                                "flags": 64,
                                "start": 24,
                                "end": 25
                            },
                            "name": {
                                "kind": 134299649,
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 96,
                                "start": 25,
                                "end": 29
                            },
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [
                                    {
                                        "kind": 215,
                                        "ellipsisToken": null,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 30,
                                            "end": 31
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": {
                                            "kind": 198,
                                            "left": {
                                                "kind": 201392130,
                                                "text": 1,
                                                "rawText": "1",
                                                "flags": 96,
                                                "start": 33,
                                                "end": 35
                                            },
                                            "operatorToken": {
                                                "kind": 34098,
                                                "flags": 64,
                                                "start": 35,
                                                "end": 37
                                            },
                                            "right": {
                                                "kind": 121,
                                                "expression": {
                                                    "kind": 229,
                                                    "yieldKeyword": {
                                                        "kind": 8454253,
                                                        "flags": 0,
                                                        "start": 39,
                                                        "end": 44
                                                    },
                                                    "delegate": false,
                                                    "asteriskToken": null,
                                                    "expression": null,
                                                    "flags": 32,
                                                    "start": 39,
                                                    "end": 44
                                                },
                                                "flags": 32,
                                                "start": 37,
                                                "end": 45
                                            },
                                            "flags": 32,
                                            "start": 33,
                                            "end": 45
                                        },
                                        "flags": 34,
                                        "start": 30,
                                        "end": 45
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 34,
                                "start": 29,
                                "end": 46
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 48,
                                    "end": 48
                                },
                                "flags": 32,
                                "start": 46,
                                "end": 49
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 272,
                            "start": 15,
                            "end": 49
                        }
                    ],
                    "flags": 32,
                    "start": 15,
                    "end": 49
                },
                "flags": 32,
                "start": 13,
                "end": 51
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 51
        }
    ],
    "isModule": false,
    "source": "function* x() { function* foo(a = 1 + (yield)) {} }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 51
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ `Yield` expression cannot be used in function parameters - start: 44, end: 45

```

