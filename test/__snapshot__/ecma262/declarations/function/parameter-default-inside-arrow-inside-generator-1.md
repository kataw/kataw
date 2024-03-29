# Kataw parser test case

## Input

`````js
function* fn() {
  (x = yield) => {};
}
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
                "end": 9
            },
            "name": {
                "kind": 134299649,
                "text": "fn",
                "rawText": "fn",
                "flags": 96,
                "transformFlags": 0,
                "start": 9,
                "end": 12
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 13,
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
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 20,
                                                "end": 21
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "right": {
                                                "kind": 229,
                                                "yieldKeyword": {
                                                    "kind": 8454253,
                                                    "flags": 64,
                                                    "transformFlags": 0,
                                                    "start": 23,
                                                    "end": 29
                                                },
                                                "delegate": false,
                                                "asteriskToken": null,
                                                "expression": null,
                                                "flags": 32,
                                                "transformFlags": 4096,
                                                "start": 23,
                                                "end": 29
                                            },
                                            "flags": 32,
                                            "transformFlags": 4096,
                                            "start": 16,
                                            "end": 29
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 35,
                                    "transformFlags": 0,
                                    "start": 20,
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
                                "flags": 35,
                                "transformFlags": 0,
                                "start": 16,
                                "end": 36
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 16,
                            "end": 37
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 16,
                    "end": 37
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 14,
                "end": 39
            },
            "returnType": null,
            "flags": 272,
            "transformFlags": 0,
            "start": 0,
            "end": 39
        }
    ],
    "isModule": false,
    "source": "function* fn() {\n  (x = yield) => {};\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 39
}
```

### Printed

```javascript
function *fn() {
  (x = yield ) => {};
}
```

### Diagnostics

```javascript
✔ No errors
```

