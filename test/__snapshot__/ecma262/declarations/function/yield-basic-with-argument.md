# Kataw parser test case

## Input

`````js
(function* () { yield v })
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
                        "kind": 201360950,
                        "flags": 64,
                        "transformFlags": 32,
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
                                            "kind": 134299649,
                                            "text": "v",
                                            "rawText": "v",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 21,
                                            "end": 23
                                        },
                                        "flags": 32,
                                        "transformFlags": 4096,
                                        "start": 15,
                                        "end": 23
                                    },
                                    "flags": 16,
                                    "transformFlags": 4096,
                                    "start": 15,
                                    "end": 23
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 15,
                            "end": 23
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 13,
                        "end": 25
                    },
                    "returnType": null,
                    "flags": 288,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 25
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 0,
                "end": 26
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 26
        }
    ],
    "isModule": false,
    "source": "(function* () { yield v })",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 26
}
```

### Printed

```javascript
(function *() {
    yield v;
  });
```

### Diagnostics

```javascript
✔ No errors
```

