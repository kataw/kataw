# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/binary/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/binary/gen/yield
> :: test: yield
> :: case: a instanceof b > c
## Options

`````js
{}
`````
## Input

`````js
function *f() {
  yield a instanceof b > c
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
                "kind": 67143222,
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
                                    "kind": 198,
                                    "left": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 23,
                                            "end": 25
                                        },
                                        "operatorToken": {
                                            "kind": 4229173,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 25,
                                            "end": 36
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 36,
                                            "end": 38
                                        },
                                        "flags": 96,
                                        "transformFlags": 5120,
                                        "start": 23,
                                        "end": 38
                                    },
                                    "operatorToken": {
                                        "kind": 34883,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 38,
                                        "end": 40
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "c",
                                        "rawText": "c",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 40,
                                        "end": 42
                                    },
                                    "flags": 96,
                                    "transformFlags": 5120,
                                    "start": 23,
                                    "end": 42
                                },
                                "flags": 32,
                                "transformFlags": 4096,
                                "start": 15,
                                "end": 42
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 15,
                            "end": 42
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 15,
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
    "source": "function *f() {\n  yield a instanceof b > c\n}",
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
  yield a instanceof b > c;
}
```

### Diagnostics

```javascript
✔ No errors
```

