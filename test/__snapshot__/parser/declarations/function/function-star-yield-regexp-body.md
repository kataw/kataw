# Kataw parser test case

## Input

`````js
function *f() { yield
{}/1/g
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
                                    "start": 0,
                                    "end": 21
                                },
                                "delegate": false,
                                "asteriskToken": null,
                                "expression": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 220,
                                            "propertyList": {
                                                "kind": 218,
                                                "properties": [],
                                                "trailingComma": false,
                                                "multiline": false,
                                                "flags": 0,
                                                "start": 23,
                                                "end": 23
                                            },
                                            "flags": 256,
                                            "start": 21,
                                            "end": 24
                                        },
                                        "operatorToken": {
                                            "kind": 35640,
                                            "flags": 512,
                                            "start": 24,
                                            "end": 25
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 1,
                                            "rawText": "1",
                                            "flags": 768,
                                            "start": 25,
                                            "end": 26
                                        },
                                        "flags": 256,
                                        "start": 21,
                                        "end": 26
                                    },
                                    "operatorToken": {
                                        "kind": 35640,
                                        "flags": 512,
                                        "start": 26,
                                        "end": 27
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "g",
                                        "rawText": "g",
                                        "flags": 768,
                                        "start": 27,
                                        "end": 28
                                    },
                                    "flags": 256,
                                    "start": 21,
                                    "end": 28
                                },
                                "flags": 256,
                                "start": 15,
                                "end": 28
                            },
                            "flags": 128,
                            "start": 15,
                            "end": 28
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 15,
                    "end": 28
                },
                "flags": 256,
                "start": 13,
                "end": 30
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 2176,
            "start": 0,
            "end": 30
        }
    ],
    "isModule": false,
    "text": "function *f() { yield\n{}/1/g\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 30
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

