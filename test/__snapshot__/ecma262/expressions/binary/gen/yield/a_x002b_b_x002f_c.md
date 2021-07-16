# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/binary/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/binary/gen/yield
> :: test: yield
> :: case: a + b / c
## Options

`````js
{}
`````
## Input

`````js
function *f() {
  yield a + b / c
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
                "transformFlags": 0,
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
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 23,
                                        "end": 25
                                    },
                                    "operatorToken": {
                                        "kind": 99634,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 25,
                                        "end": 27
                                    },
                                    "right": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 27,
                                            "end": 29
                                        },
                                        "operatorToken": {
                                            "kind": 35640,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 29,
                                            "end": 31
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "c",
                                            "rawText": "c",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 31,
                                            "end": 33
                                        },
                                        "flags": 96,
                                        "transformFlags": 5120,
                                        "start": 29,
                                        "end": 33
                                    },
                                    "flags": 96,
                                    "transformFlags": 5120,
                                    "start": 23,
                                    "end": 33
                                },
                                "flags": 32,
                                "transformFlags": 4096,
                                "start": 15,
                                "end": 33
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 15,
                            "end": 33
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 15,
                    "end": 33
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 13,
                "end": 35
            },
            "returnType": null,
            "flags": 272,
            "transformFlags": 0,
            "start": 0,
            "end": 35
        }
    ],
    "isModule": false,
    "source": "function *f() {\n  yield a + b / c\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 35
}
```

### Printed

```javascript
function *f() {
  yield a + b / c;
}
```

### Diagnostics

```javascript
✔ No errors
```

