# Kataw parser test case

## Input

`````js
function *f() { (yield 1) ? yield 2 : yield 3; }
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
                                    "kind": 121,
                                    "expression": {
                                        "kind": 229,
                                        "yieldKeyword": {
                                            "kind": 8454253,
                                            "flags": 768,
                                            "start": 17,
                                            "end": 22
                                        },
                                        "delegate": false,
                                        "asteriskToken": null,
                                        "expression": {
                                            "kind": 134299649,
                                            "text": 1,
                                            "rawText": "1",
                                            "flags": 768,
                                            "start": 22,
                                            "end": 24
                                        },
                                        "flags": 256,
                                        "start": 17,
                                        "end": 24
                                    },
                                    "flags": 256,
                                    "start": 15,
                                    "end": 25
                                },
                                "questionToken": {
                                    "kind": 22,
                                    "flags": 768,
                                    "start": 25,
                                    "end": 27
                                },
                                "consequent": {
                                    "kind": 229,
                                    "yieldKeyword": {
                                        "kind": 8454253,
                                        "flags": 768,
                                        "start": 27,
                                        "end": 33
                                    },
                                    "delegate": false,
                                    "asteriskToken": null,
                                    "expression": {
                                        "kind": 134299649,
                                        "text": 2,
                                        "rawText": "2",
                                        "flags": 768,
                                        "start": 33,
                                        "end": 35
                                    },
                                    "flags": 256,
                                    "start": 27,
                                    "end": 35
                                },
                                "colonToken": {
                                    "kind": 21,
                                    "flags": 768,
                                    "start": 35,
                                    "end": 37
                                },
                                "alternate": {
                                    "kind": 229,
                                    "yieldKeyword": {
                                        "kind": 8454253,
                                        "flags": 768,
                                        "start": 37,
                                        "end": 43
                                    },
                                    "delegate": false,
                                    "asteriskToken": null,
                                    "expression": {
                                        "kind": 134299649,
                                        "text": 3,
                                        "rawText": "3",
                                        "flags": 768,
                                        "start": 43,
                                        "end": 45
                                    },
                                    "flags": 256,
                                    "start": 37,
                                    "end": 45
                                },
                                "flags": 256,
                                "start": 15,
                                "end": 45
                            },
                            "flags": 128,
                            "start": 15,
                            "end": 46
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 15,
                    "end": 46
                },
                "flags": 256,
                "start": 13,
                "end": 48
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 2176,
            "start": 0,
            "end": 48
        }
    ],
    "isModule": false,
    "text": "function *f() { (yield 1) ? yield 2 : yield 3; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 48
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

