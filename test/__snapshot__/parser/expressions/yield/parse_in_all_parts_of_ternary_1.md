# Kataw parser test case

## Input

`````js
function *f() { (yield 1) ? yield 2 : yield 3; }
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
                "flags": 0,
                "start": 0,
                "end": 8
            },
            "generatorToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 8,
                "end": 10
            },
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 10,
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
                            "kind": 120,
                            "expression": {
                                "kind": 197,
                                "shortCircuit": {
                                    "kind": 121,
                                    "expression": {
                                        "kind": 229,
                                        "yieldKeyword": {
                                            "kind": 8454253,
                                            "flags": 0,
                                            "start": 17,
                                            "end": 22
                                        },
                                        "delegate": false,
                                        "asteriskToken": null,
                                        "expression": {
                                            "kind": 201392130,
                                            "text": 1,
                                            "rawText": "1",
                                            "flags": 96,
                                            "start": 22,
                                            "end": 24
                                        },
                                        "flags": 32,
                                        "start": 17,
                                        "end": 24
                                    },
                                    "flags": 32,
                                    "start": 15,
                                    "end": 25
                                },
                                "questionToken": {
                                    "kind": 134217750,
                                    "flags": 0,
                                    "start": 25,
                                    "end": 27
                                },
                                "consequent": {
                                    "kind": 229,
                                    "yieldKeyword": {
                                        "kind": 8454253,
                                        "flags": 0,
                                        "start": 27,
                                        "end": 33
                                    },
                                    "delegate": false,
                                    "asteriskToken": null,
                                    "expression": {
                                        "kind": 201392130,
                                        "text": 2,
                                        "rawText": "2",
                                        "flags": 96,
                                        "start": 33,
                                        "end": 35
                                    },
                                    "flags": 32,
                                    "start": 27,
                                    "end": 35
                                },
                                "colonToken": {
                                    "kind": 21,
                                    "flags": 0,
                                    "start": 35,
                                    "end": 37
                                },
                                "alternate": {
                                    "kind": 229,
                                    "yieldKeyword": {
                                        "kind": 8454253,
                                        "flags": 0,
                                        "start": 37,
                                        "end": 43
                                    },
                                    "delegate": false,
                                    "asteriskToken": null,
                                    "expression": {
                                        "kind": 201392130,
                                        "text": 3,
                                        "rawText": "3",
                                        "flags": 96,
                                        "start": 43,
                                        "end": 45
                                    },
                                    "flags": 32,
                                    "start": 37,
                                    "end": 45
                                },
                                "flags": 32,
                                "start": 15,
                                "end": 45
                            },
                            "flags": 16,
                            "start": 15,
                            "end": 46
                        }
                    ],
                    "flags": 32,
                    "start": 15,
                    "end": 46
                },
                "flags": 32,
                "start": 13,
                "end": 48
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 48
        }
    ],
    "isModule": false,
    "source": "function *f() { (yield 1) ? yield 2 : yield 3; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 48
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

