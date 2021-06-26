# Kataw parser test case

## Input

`````js
function *f(){ async (x = (yield)) => {} }
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
            "asteriskToken": {
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
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 11,
                "end": 11
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 271,
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 64,
                                "start": 14,
                                "end": 20
                            },
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 342,
                                "parameters": [
                                    {
                                        "kind": 281,
                                        "ellipsisToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 22,
                                            "end": 23
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": {
                                            "kind": 121,
                                            "expression": {
                                                "kind": 229,
                                                "yieldKeyword": {
                                                    "kind": 8454253,
                                                    "flags": 64,
                                                    "start": 27,
                                                    "end": 32
                                                },
                                                "delegate": false,
                                                "asteriskToken": null,
                                                "expression": null,
                                                "flags": 32,
                                                "start": 27,
                                                "end": 32
                                            },
                                            "flags": 32,
                                            "start": 25,
                                            "end": 33
                                        },
                                        "flags": 32,
                                        "start": 22,
                                        "end": 33
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 34,
                                "start": 22,
                                "end": 34
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 34,
                                "end": 37
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 39,
                                    "end": 39
                                },
                                "flags": 32,
                                "start": 37,
                                "end": 40
                            },
                            "flags": 290,
                            "start": 14,
                            "end": 40
                        }
                    ],
                    "flags": 32,
                    "start": 14,
                    "end": 40
                },
                "flags": 32,
                "start": 13,
                "end": 42
            },
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 42
        }
    ],
    "isModule": false,
    "source": "function *f(){ async (x = (yield)) => {} }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 42
}
```

### Printed

```javascript

function * f() {
  async  =>  {}
}
```

### Diagnostics

```javascript
✔ No errors
```

