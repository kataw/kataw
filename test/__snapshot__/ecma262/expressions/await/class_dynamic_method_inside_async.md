# Kataw parser test case

## Input

`````js
async function f() {
  class x{[x](await){}}
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
            "asyncKeyword": {
                "kind": 82031,
                "flags": 64,
                "transformFlags": 0,
                "start": 0,
                "end": 5
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "transformFlags": 0,
                "start": 5,
                "end": 14
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "transformFlags": 0,
                "start": 14,
                "end": 16
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 17,
                "end": 17
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 178,
                            "declareKeyword": null,
                            "decorators": null,
                            "classKeyword": {
                                "kind": 37822544,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 20,
                                "end": 28
                            },
                            "name": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 28,
                                "end": 30
                            },
                            "typeParameters": null,
                            "tail": {
                                "kind": 277,
                                "classHeritage": null,
                                "body": {
                                    "kind": 303,
                                    "elements": [
                                        {
                                            "kind": 278,
                                            "declareToken": null,
                                            "decorators": null,
                                            "staticKeyword": null,
                                            "asyncKeyword": null,
                                            "setKeyword": null,
                                            "getKeyword": null,
                                            "asteriskToken": null,
                                            "method": {
                                                "kind": 209,
                                                "name": {
                                                    "kind": 194,
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 32,
                                                        "end": 33
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 31,
                                                    "end": 34
                                                },
                                                "typeParameters": null,
                                                "formalParameterList": {
                                                    "kind": 214,
                                                    "formalParameters": [
                                                        {
                                                            "kind": 134299649,
                                                            "text": "await",
                                                            "rawText": "await",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 35,
                                                            "end": 40
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 35,
                                                    "end": 41
                                                },
                                                "returnType": null,
                                                "contents": {
                                                    "kind": 216,
                                                    "functionStatementList": {
                                                        "kind": 217,
                                                        "directives": [],
                                                        "statements": [],
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 42,
                                                        "end": 42
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 41,
                                                    "end": 43
                                                },
                                                "flags": 0,
                                                "transformFlags": 0,
                                                "start": 34,
                                                "end": 43
                                            },
                                            "flags": 0,
                                            "transformFlags": 0,
                                            "start": 31,
                                            "end": 43
                                        }
                                    ],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 31,
                                    "end": 43
                                },
                                "flags": 30,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 44
                            },
                            "flags": 17,
                            "transformFlags": 0,
                            "start": 20,
                            "end": 44
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 20,
                    "end": 44
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 18,
                "end": 46
            },
            "returnType": null,
            "flags": 144,
            "transformFlags": 0,
            "start": 0,
            "end": 46
        }
    ],
    "isModule": false,
    "source": "async function f() {\n  class x{[x](await){}}\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 46
}
```

### Printed

```javascript
async function f() {
  class x {
    [x](await) {}
  }
}
```

### Diagnostics

```javascript
✔ No errors
```

