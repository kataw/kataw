# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: d
> :: test: yield
> :: case: a instanceof b + c
## Input

`````js
function *f() {
  yield a instanceof b + c
}
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
                                "kind": 229,
                                "yieldKeyword": {
                                    "kind": 8454253,
                                    "flags": 15,
                                    "start": 1,
                                    "end": 23
                                },
                                "delegate": false,
                                "asteriskToken": null,
                                "expression": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 768,
                                            "start": 23,
                                            "end": 25
                                        },
                                        "operatorToken": {
                                            "kind": 4229173,
                                            "flags": 25,
                                            "start": 512,
                                            "end": 36
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 768,
                                            "start": 36,
                                            "end": 38
                                        },
                                        "flags": 256,
                                        "start": 23,
                                        "end": 38
                                    },
                                    "operatorToken": {
                                        "kind": 34098,
                                        "flags": 38,
                                        "start": 512,
                                        "end": 40
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "c",
                                        "rawText": "c",
                                        "flags": 768,
                                        "start": 40,
                                        "end": 42
                                    },
                                    "flags": 256,
                                    "start": 23,
                                    "end": 42
                                },
                                "flags": 256,
                                "start": 15,
                                "end": 42
                            },
                            "flags": 128,
                            "start": 15,
                            "end": 42
                        }
                    ],
                    "multiline": true,
                    "flags": 256,
                    "start": 15,
                    "end": 42
                },
                "flags": 256,
                "start": 13,
                "end": 44
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 2176,
            "start": 0,
            "end": 44
        }
    ],
    "isModule": false,
    "text": "function *f() {\n  yield a instanceof b + c\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 44
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

