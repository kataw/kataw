# Kataw parser test case

## Input

`````js
function f(x) { { let x } }
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
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 8,
                "end": 10
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
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
                                            "kind": 41951307,
                                            "flags": 80,
                                            "start": 17,
                                            "end": 21
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
                                                        "start": 21,
                                                        "end": 23
                                                    },
                                                    "optionalToken": null,
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
                                        "flags": 33554448,
                                        "start": 17,
                                        "end": 23
                                    }
                                ],
                                "flags": 16,
                                "start": 17,
                                "end": 23
                            },
                            "flags": 16,
                            "start": 15,
                            "end": 25
                        }
                    ],
                    "flags": 32,
                    "start": 15,
                    "end": 25
                },
                "flags": 32,
                "start": 13,
                "end": 27
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 27
        }
    ],
    "isModule": false,
    "source": "function f(x) { { let x } }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 27
}
```

### Printed

```javascript

function f(x) {
  {
    let x;
  }
}
```

### Diagnostics

```javascript
✔ No errors
```

