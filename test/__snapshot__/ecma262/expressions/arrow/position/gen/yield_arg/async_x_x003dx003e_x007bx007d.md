# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/arrow/position/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/arrow/position/gen/yield_arg
> :: test: yield arg
> :: case: async x => {}
## Options

`````js
{}
`````
## Input

`````js
function *f() {
  yield async x => {}
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
                                "kind": 229,
                                "yieldKeyword": {
                                    "kind": 8454253,
                                    "flags": 65,
                                    "transformFlags": 0,
                                    "start": 15,
                                    "end": 23
                                },
                                "delegate": false,
                                "asteriskToken": null,
                                "expression": {
                                    "kind": 271,
                                    "asyncKeyword": {
                                        "kind": 82031,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 23,
                                        "end": 29
                                    },
                                    "typeParameters": null,
                                    "arrowPatameterList": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 29,
                                        "end": 31
                                    },
                                    "returnType": null,
                                    "arrowToken": {
                                        "kind": 10,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 31,
                                        "end": 34
                                    },
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 36,
                                            "end": 36
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 34,
                                        "end": 37
                                    },
                                    "flags": 288,
                                    "transformFlags": 0,
                                    "start": 23,
                                    "end": 37
                                },
                                "flags": 32,
                                "transformFlags": 4096,
                                "start": 15,
                                "end": 37
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 15,
                            "end": 37
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 15,
                    "end": 37
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 13,
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
    "source": "function *f() {\n  yield async x => {}\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 39
}
```

### Printed

```javascript
function *f() {
  yield async x => {};
}
```

### Diagnostics

```javascript
✔ No errors
```

