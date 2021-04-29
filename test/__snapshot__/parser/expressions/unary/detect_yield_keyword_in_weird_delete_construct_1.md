# Kataw parser test case

## Input

`````js
function *f(){ delete ("x"[(yield)]) }
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
                                "kind": 126,
                                "operandToken": {
                                    "kind": 4259886,
                                    "flags": 64,
                                    "start": 14,
                                    "end": 21
                                },
                                "expression": {
                                    "kind": 121,
                                    "expression": {
                                        "kind": 130,
                                        "member": {
                                            "kind": 201392131,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 23,
                                            "end": 26
                                        },
                                        "expression": {
                                            "kind": 121,
                                            "expression": {
                                                "kind": 229,
                                                "yieldKeyword": {
                                                    "kind": 8454253,
                                                    "flags": 0,
                                                    "start": 28,
                                                    "end": 33
                                                },
                                                "delegate": false,
                                                "asteriskToken": null,
                                                "expression": null,
                                                "flags": 32,
                                                "start": 28,
                                                "end": 33
                                            },
                                            "flags": 32,
                                            "start": 27,
                                            "end": 34
                                        },
                                        "flags": 32,
                                        "start": 23,
                                        "end": 35
                                    },
                                    "flags": 32,
                                    "start": 21,
                                    "end": 36
                                },
                                "flags": 32,
                                "start": 14,
                                "end": 36
                            },
                            "flags": 16,
                            "start": 14,
                            "end": 36
                        }
                    ],
                    "flags": 32,
                    "start": 14,
                    "end": 36
                },
                "flags": 32,
                "start": 13,
                "end": 38
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 38
        }
    ],
    "isModule": false,
    "source": "function *f(){ delete (\"x\"[(yield)]) }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 38
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

