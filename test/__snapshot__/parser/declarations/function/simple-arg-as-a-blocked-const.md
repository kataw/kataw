# Kataw parser test case

## Input

`````js
function f(x) { { const x = y } }
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
                "end": 8
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 8,
                "end": 10
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 11,
                        "end": 12
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 10,
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
                                        "kind": 162,
                                        "lexicalKeyword": {
                                            "kind": 37757004,
                                            "flags": 80,
                                            "start": 17,
                                            "end": 23
                                        },
                                        "binding": {
                                            "kind": 151,
                                            "bindingList": [
                                                {
                                                    "kind": 190,
                                                    "binding": {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 96,
                                                        "start": 23,
                                                        "end": 25
                                                    },
                                                    "type": null,
                                                    "initializer": {
                                                        "kind": 134299649,
                                                        "text": "y",
                                                        "rawText": "y",
                                                        "flags": 96,
                                                        "start": 27,
                                                        "end": 29
                                                    },
                                                    "flags": 16,
                                                    "start": 23,
                                                    "end": 29
                                                }
                                            ],
                                            "flags": 16777232,
                                            "start": 23,
                                            "end": 29
                                        },
                                        "flags": 33554448,
                                        "start": 17,
                                        "end": 29
                                    }
                                ],
                                "flags": 16,
                                "start": 17,
                                "end": 29
                            },
                            "flags": 16,
                            "start": 15,
                            "end": 31
                        }
                    ],
                    "flags": 32,
                    "start": 15,
                    "end": 31
                },
                "flags": 32,
                "start": 13,
                "end": 33
            },
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 33
        }
    ],
    "isModule": false,
    "source": "function f(x) { { const x = y } }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 33
}
```

### Printed

```javascript

function f() {
  {
    const x = y;
  }
}
```

### Diagnostics

```javascript
✔ No errors
```

