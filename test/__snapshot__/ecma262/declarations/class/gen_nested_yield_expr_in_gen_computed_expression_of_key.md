# Kataw parser test case

## Input

`````js
function *f(){  class x{*[yield](a){}}  }
`````

## Options

### Parser Options

`````js
{}
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
                            "kind": 178,
                            "declareKeyword": null,
                            "decorators": null,
                            "classKeyword": {
                                "kind": 37822544,
                                "flags": 80,
                                "transformFlags": 0,
                                "start": 14,
                                "end": 21
                            },
                            "name": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 21,
                                "end": 23
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
                                            "asteriskToken": {
                                                "kind": 201360950,
                                                "flags": 64,
                                                "transformFlags": 32,
                                                "start": 24,
                                                "end": 25
                                            },
                                            "method": {
                                                "kind": 209,
                                                "name": {
                                                    "kind": 194,
                                                    "expression": {
                                                        "kind": 229,
                                                        "yieldKeyword": {
                                                            "kind": 8454253,
                                                            "flags": 64,
                                                            "transformFlags": 0,
                                                            "start": 26,
                                                            "end": 31
                                                        },
                                                        "delegate": false,
                                                        "asteriskToken": null,
                                                        "expression": null,
                                                        "flags": 32,
                                                        "transformFlags": 4096,
                                                        "start": 26,
                                                        "end": 31
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 25,
                                                    "end": 32
                                                },
                                                "typeParameters": null,
                                                "formalParameterList": {
                                                    "kind": 214,
                                                    "formalParameters": [
                                                        {
                                                            "kind": 134299649,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 33,
                                                            "end": 34
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 33,
                                                    "end": 35
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
                                                        "start": 36,
                                                        "end": 36
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 35,
                                                    "end": 37
                                                },
                                                "flags": 0,
                                                "transformFlags": 0,
                                                "start": 32,
                                                "end": 37
                                            },
                                            "flags": 0,
                                            "transformFlags": 0,
                                            "start": 24,
                                            "end": 37
                                        }
                                    ],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 24,
                                    "end": 37
                                },
                                "flags": 23,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 38
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 14,
                            "end": 38
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 14,
                    "end": 38
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 13,
                "end": 41
            },
            "returnType": null,
            "flags": 272,
            "transformFlags": 0,
            "start": 0,
            "end": 41
        }
    ],
    "isModule": false,
    "source": "function *f(){  class x{*[yield](a){}}  }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 41
}
```

### Printed

```javascript
function *f() {
  class x {
    *[yield ](a) {}
  }
}
```

### Diagnostics

```javascript
✔ No errors
```

