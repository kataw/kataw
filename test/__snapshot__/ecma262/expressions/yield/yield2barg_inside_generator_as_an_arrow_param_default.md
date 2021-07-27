# Kataw parser test case

## Input

`````js
function *f(){ ({x} = yield x) => {} }
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
                                "asyncKeyword": null,
                                "typeParameters": null,
                                "arrowPatameterList": {
                                    "kind": 342,
                                    "parameters": [
                                        {
                                            "kind": 281,
                                            "ellipsisToken": null,
                                            "left": {
                                                "kind": 212,
                                                "propertyList": {
                                                    "kind": 213,
                                                    "properties": [
                                                        {
                                                            "kind": 134299649,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 17,
                                                            "end": 18
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 17,
                                                    "end": 18
                                                },
                                                "flags": 48,
                                                "transformFlags": 0,
                                                "start": 16,
                                                "end": 19
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "right": {
                                                "kind": 229,
                                                "yieldKeyword": {
                                                    "kind": 8454253,
                                                    "flags": 64,
                                                    "transformFlags": 0,
                                                    "start": 21,
                                                    "end": 27
                                                },
                                                "delegate": false,
                                                "asteriskToken": null,
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 27,
                                                    "end": 29
                                                },
                                                "flags": 32,
                                                "transformFlags": 4096,
                                                "start": 21,
                                                "end": 29
                                            },
                                            "flags": 32,
                                            "transformFlags": 4096,
                                            "start": 16,
                                            "end": 29
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 34,
                                    "transformFlags": 0,
                                    "start": 16,
                                    "end": 30
                                },
                                "returnType": null,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 30,
                                    "end": 33
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 35,
                                        "end": 35
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 33,
                                    "end": 36
                                },
                                "flags": 34,
                                "transformFlags": 0,
                                "start": 14,
                                "end": 36
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 14,
                            "end": 36
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 14,
                    "end": 36
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 13,
                "end": 38
            },
            "returnType": null,
            "flags": 272,
            "transformFlags": 0,
            "start": 0,
            "end": 38
        }
    ],
    "isModule": false,
    "source": "function *f(){ ({x} = yield x) => {} }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 38
}
```

### Printed

```javascript
function *f() {
  ({ x } = yield x) => {};
}
```

### Diagnostics

```javascript
✔ No errors
```

