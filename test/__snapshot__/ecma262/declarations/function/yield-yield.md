# Kataw parser test case

## Input

`````js
(function* () { yield yield 10 })
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 177,
                    "asyncKeyword": null,
                    "functionKeyword": {
                        "kind": 37822554,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 9
                    },
                    "asteriskToken": {
                        "kind": 67143222,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 9,
                        "end": 10
                    },
                    "name": null,
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
                                        "kind": 229,
                                        "yieldKeyword": {
                                            "kind": 8454253,
                                            "flags": 64,
                                            "transformFlags": 0,
                                            "start": 15,
                                            "end": 21
                                        },
                                        "delegate": false,
                                        "asteriskToken": null,
                                        "expression": {
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
                                                "kind": 201392130,
                                                "text": 10,
                                                "rawText": "10",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 27,
                                                "end": 30
                                            },
                                            "flags": 32,
                                            "transformFlags": 4096,
                                            "start": 21,
                                            "end": 30
                                        },
                                        "flags": 32,
                                        "transformFlags": 4096,
                                        "start": 15,
                                        "end": 30
                                    },
                                    "flags": 16,
                                    "transformFlags": 4096,
                                    "start": 15,
                                    "end": 30
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 15,
                            "end": 30
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 13,
                        "end": 32
                    },
                    "returnType": null,
                    "flags": 288,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 32
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 32,
                "end": 33
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 33
        }
    ],
    "isModule": false,
    "source": "(function* () { yield yield 10 })",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 33
}
```

### Printed

```javascript
(function *() {
    yield yield 10;
  });
```

### Diagnostics

```javascript
✔ No errors
```

