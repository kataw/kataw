# Kataw parser test case

## Input

`````js
function *f(){ async (x = yield) => {} }
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
                "end": 10
            },
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 768,
                "start": 10,
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
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 768,
                                "start": 32,
                                "end": 35
                            },
                            "typeParameters": null,
                            "parameters": [
                                {
                                    "kind": 125,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 768,
                                        "start": 22,
                                        "end": 23
                                    },
                                    "operatorToken": {
                                        "kind": 4125,
                                        "flags": 768,
                                        "start": 23,
                                        "end": 25
                                    },
                                    "right": {
                                        "kind": 229,
                                        "yieldKeyword": {
                                            "kind": 8454253,
                                            "flags": 768,
                                            "start": 25,
                                            "end": 31
                                        },
                                        "delegate": false,
                                        "asteriskToken": null,
                                        "expression": null,
                                        "flags": 256,
                                        "start": 25,
                                        "end": 31
                                    },
                                    "flags": 256,
                                    "start": 22,
                                    "end": 31
                                }
                            ],
                            "asyncToken": {
                                "kind": 82031,
                                "flags": 768,
                                "start": 14,
                                "end": 20
                            },
                            "returnType": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "multiline": false,
                                    "flags": 256,
                                    "start": 37,
                                    "end": 37
                                },
                                "flags": 256,
                                "start": 35,
                                "end": 38
                            },
                            "flags": 2304,
                            "start": 14,
                            "end": 38
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 14,
                    "end": 38
                },
                "flags": 256,
                "start": 13,
                "end": 40
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 2176,
            "start": 0,
            "end": 40
        }
    ],
    "isModule": false,
    "text": "function *f(){ async (x = yield) => {} }",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 40
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

