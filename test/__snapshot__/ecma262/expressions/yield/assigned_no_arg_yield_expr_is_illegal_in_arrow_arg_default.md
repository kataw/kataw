# Kataw parser test case

## Input

`````js
function *f(){ async (x = z = yield) => {} }
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
                "transformFlags": 0,
                "start": 0,
                "end": 8
            },
            "asteriskToken": {
                "kind": 201360950,
                "flags": 64,
                "transformFlags": 32,
                "start": 8,
                "end": 10
            },
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "transformFlags": 0,
                "start": 10,
                "end": 11
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 12,
                "end": 12
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
                                "kind": 271,
                                "asyncKeyword": {
                                    "kind": 82031,
                                    "flags": 64,
                                    "transformFlags": 0,
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
                                                "transformFlags": 0,
                                                "start": 22,
                                                "end": 23
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "right": {
                                                "kind": 125,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "z",
                                                    "rawText": "z",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 25,
                                                    "end": 27
                                                },
                                                "operatorToken": {
                                                    "kind": 4125,
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 27,
                                                    "end": 29
                                                },
                                                "right": {
                                                    "kind": 229,
                                                    "yieldKeyword": {
                                                        "kind": 8454253,
                                                        "flags": 64,
                                                        "transformFlags": 0,
                                                        "start": 29,
                                                        "end": 35
                                                    },
                                                    "delegate": false,
                                                    "asteriskToken": null,
                                                    "expression": null,
                                                    "flags": 32,
                                                    "transformFlags": 4096,
                                                    "start": 29,
                                                    "end": 35
                                                },
                                                "flags": 0,
                                                "transformFlags": 128,
                                                "start": 25,
                                                "end": 35
                                            },
                                            "flags": 32,
                                            "transformFlags": 4096,
                                            "start": 22,
                                            "end": 35
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 34,
                                    "transformFlags": 0,
                                    "start": 22,
                                    "end": 36
                                },
                                "returnType": null,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 36,
                                    "end": 39
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 41,
                                        "end": 41
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 39,
                                    "end": 42
                                },
                                "flags": 290,
                                "transformFlags": 0,
                                "start": 14,
                                "end": 42
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 14,
                            "end": 42
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 14,
                    "end": 42
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 13,
                "end": 44
            },
            "returnType": null,
            "flags": 272,
            "transformFlags": 0,
            "start": 0,
            "end": 44
        }
    ],
    "isModule": false,
    "source": "function *f(){ async (x = z = yield) => {} }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 44
}
```

### Printed

```javascript
function *f() {
  async (x = z = yield ) => {};
}
```

### Diagnostics

```javascript
✔ No errors
```

