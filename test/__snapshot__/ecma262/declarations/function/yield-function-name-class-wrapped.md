# Kataw parser test case

## Input

`````js
function* wrap() {
    class A {*yield() {}}
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
                "end": 9
            },
            "name": {
                "kind": 134299649,
                "text": "wrap",
                "rawText": "wrap",
                "flags": 96,
                "transformFlags": 0,
                "start": 9,
                "end": 14
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 15,
                "end": 15
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
                                "start": 18,
                                "end": 28
                            },
                            "name": {
                                "kind": 134299649,
                                "text": "A",
                                "rawText": "A",
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
                                            "asteriskToken": {
                                                "kind": 67143222,
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 32,
                                                "end": 33
                                            },
                                            "method": {
                                                "kind": 209,
                                                "name": {
                                                    "kind": 134299649,
                                                    "text": "yield",
                                                    "rawText": "yield",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 33,
                                                    "end": 38
                                                },
                                                "typeParameters": null,
                                                "formalParameterList": {
                                                    "kind": 214,
                                                    "formalParameters": [],
                                                    "trailingComma": false,
                                                    "flags": 0,
                                                    "transformFlags": 0,
                                                    "start": 39,
                                                    "end": 40
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
                                                    "start": 40,
                                                    "end": 43
                                                },
                                                "flags": 0,
                                                "transformFlags": 0,
                                                "start": 38,
                                                "end": 43
                                            },
                                            "flags": 0,
                                            "transformFlags": 0,
                                            "start": 32,
                                            "end": 43
                                        }
                                    ],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 32,
                                    "end": 43
                                },
                                "flags": 30,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 44
                            },
                            "flags": 17,
                            "transformFlags": 0,
                            "start": 18,
                            "end": 44
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 18,
                    "end": 44
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 16,
                "end": 46
            },
            "returnType": null,
            "flags": 272,
            "transformFlags": 0,
            "start": 0,
            "end": 46
        }
    ],
    "isModule": false,
    "source": "function* wrap() {\n    class A {*yield() {}}\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 46
}
```

### Printed

```javascript
function *wrap() {
  class A {
    *yield() {}
  }
}
```

### Diagnostics

```javascript
✔ No errors
```

