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
                "flags": 8,
                "start": 512,
                "end": 9
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 768,
                "start": 9,
                "end": 11
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 256,
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
                                "flags": 15,
                                "start": 0,
                                "end": 24
                            },
                            "generatorToken": {
                                "kind": 67143222,
                                "flags": 24,
                                "start": 512,
                                "end": 25
                            },
                            "name": {
                                "kind": 134299649,
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 768,
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
                                            "flags": 768,
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
                                                "flags": 768,
                                                "start": 33,
                                                "end": 35
                                            },
                                            "operatorToken": {
                                                "kind": 34098,
                                                "flags": 512,
                                                "start": 35,
                                                "end": 37
                                            },
                                            "right": {
                                                "kind": 121,
                                                "expression": {
                                                    "kind": 229,
                                                    "yieldKeyword": {
                                                        "kind": 8454253,
                                                        "flags": 39,
                                                        "start": 0,
                                                        "end": 44
                                                    },
                                                    "delegate": false,
                                                    "asteriskToken": null,
                                                    "expression": null,
                                                    "flags": 256,
                                                    "start": 39,
                                                    "end": 44
                                                },
                                                "flags": 256,
                                                "start": 37,
                                                "end": 45
                                            },
                                            "flags": 256,
                                            "start": 33,
                                            "end": 45
                                        },
                                        "flags": 258,
                                        "start": 30,
                                        "end": 45
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 258,
                                "start": 29,
                                "end": 46
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "multiline": false,
                                    "flags": 256,
                                    "start": 48,
                                    "end": 48
                                },
                                "flags": 256,
                                "start": 46,
                                "end": 49
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 2176,
                            "start": 15,
                            "end": 49
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 15,
                    "end": 49
                },
                "flags": 256,
                "start": 13,
                "end": 51
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 2176,
            "start": 0,
            "end": 51
        }
    ],
    "isModule": false,
    "text": "function* x() { function* foo(a = 1 + (yield)) {} }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 51
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
✖ `Yield` expression cannot be used in function parameters - start: 44, end: 45

```

