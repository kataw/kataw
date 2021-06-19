# Kataw parser test case

## Input

`````js
 function x() { { var f; var f } }
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
                "flags": 64,
                "start": 0,
                "end": 9
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 9,
                "end": 11
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
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
                            "kind": 124,
                            "block": {
                                "kind": 249,
                                "statements": [
                                    {
                                        "kind": 155,
                                        "declareKeyword": null,
                                        "varKeyword": {
                                            "kind": 37757002,
                                            "flags": 80,
                                            "start": 17,
                                            "end": 21
                                        },
                                        "declarationList": {
                                            "kind": 156,
                                            "declarations": [
                                                {
                                                    "kind": 157,
                                                    "binding": {
                                                        "kind": 134299649,
                                                        "text": "f",
                                                        "rawText": "f",
                                                        "flags": 96,
                                                        "start": 21,
                                                        "end": 23
                                                    },
                                                    "type": null,
                                                    "initializer": null,
                                                    "flags": 16,
                                                    "start": 21,
                                                    "end": 23
                                                }
                                            ],
                                            "flags": 16,
                                            "start": 21,
                                            "end": 23
                                        },
                                        "flags": 16,
                                        "start": 17,
                                        "end": 24
                                    },
                                    {
                                        "kind": 155,
                                        "declareKeyword": null,
                                        "varKeyword": {
                                            "kind": 37757002,
                                            "flags": 80,
                                            "start": 24,
                                            "end": 28
                                        },
                                        "declarationList": {
                                            "kind": 156,
                                            "declarations": [
                                                {
                                                    "kind": 157,
                                                    "binding": {
                                                        "kind": 134299649,
                                                        "text": "f",
                                                        "rawText": "f",
                                                        "flags": 96,
                                                        "start": 28,
                                                        "end": 30
                                                    },
                                                    "type": null,
                                                    "initializer": null,
                                                    "flags": 16,
                                                    "start": 28,
                                                    "end": 30
                                                }
                                            ],
                                            "flags": 16,
                                            "start": 28,
                                            "end": 30
                                        },
                                        "flags": 16,
                                        "start": 24,
                                        "end": 30
                                    }
                                ],
                                "flags": 16,
                                "start": 17,
                                "end": 30
                            },
                            "flags": 16,
                            "start": 15,
                            "end": 32
                        }
                    ],
                    "flags": 32,
                    "start": 15,
                    "end": 32
                },
                "flags": 32,
                "start": 13,
                "end": 34
            },
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 34
        }
    ],
    "isModule": false,
    "source": " function x() { { var f; var f } }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 34
}
```

### Printed

```javascript

function x() {
  {
    var f;
    var f;
  }
}
```

### Diagnostics

```javascript
✔ No errors
```

