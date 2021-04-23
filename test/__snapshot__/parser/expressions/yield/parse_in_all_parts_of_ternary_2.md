# Kataw parser test case

## Input

`````js
function *f() { yield ? yield : yield ; }
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
                            "kind": 120,
                            "expression": {
                                "kind": 197,
                                "shortCircuit": {
                                    "kind": 229,
                                    "yieldKeyword": {
                                        "kind": 8454253,
                                        "flags": 768,
                                        "start": 15,
                                        "end": 21
                                    },
                                    "delegate": false,
                                    "asteriskToken": null,
                                    "expression": null,
                                    "flags": 256,
                                    "start": 15,
                                    "end": 21
                                },
                                "questionToken": {
                                    "kind": 22,
                                    "flags": 768,
                                    "start": 21,
                                    "end": 23
                                },
                                "consequent": {
                                    "kind": 229,
                                    "yieldKeyword": {
                                        "kind": 8454253,
                                        "flags": 768,
                                        "start": 23,
                                        "end": 29
                                    },
                                    "delegate": false,
                                    "asteriskToken": null,
                                    "expression": null,
                                    "flags": 256,
                                    "start": 23,
                                    "end": 29
                                },
                                "colonToken": {
                                    "kind": 21,
                                    "flags": 768,
                                    "start": 29,
                                    "end": 31
                                },
                                "alternate": {
                                    "kind": 229,
                                    "yieldKeyword": {
                                        "kind": 8454253,
                                        "flags": 768,
                                        "start": 31,
                                        "end": 37
                                    },
                                    "delegate": false,
                                    "asteriskToken": null,
                                    "expression": null,
                                    "flags": 256,
                                    "start": 31,
                                    "end": 37
                                },
                                "flags": 256,
                                "start": 15,
                                "end": 37
                            },
                            "flags": 128,
                            "start": 15,
                            "end": 39
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 15,
                    "end": 39
                },
                "flags": 256,
                "start": 13,
                "end": 41
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 2176,
            "start": 0,
            "end": 41
        }
    ],
    "isModule": false,
    "text": "function *f() { yield ? yield : yield ; }",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 41
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

