# Kataw parser test case

## Input

`````js
class A {
  constructor() {}
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
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "A",
                "rawText": "A",
                "flags": 96,
                "transformFlags": 0,
                "start": 5,
                "end": 7
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
                                    "kind": 134299649,
                                    "text": "constructor",
                                    "rawText": "constructor",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 9,
                                    "end": 23
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 2048,
                                    "transformFlags": 0,
                                    "start": 24,
                                    "end": 25
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
                                        "start": 27,
                                        "end": 27
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 25,
                                    "end": 28
                                },
                                "flags": 2048,
                                "transformFlags": 0,
                                "start": 23,
                                "end": 28
                            },
                            "flags": 2048,
                            "transformFlags": 0,
                            "start": 9,
                            "end": 28
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 28
                },
                "flags": 7,
                "transformFlags": 0,
                "start": 32,
                "end": 30
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 30
        }
    ],
    "isModule": false,
    "source": "class A {\n  constructor() {}\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 30
}
```

### Printed

```javascript
class A {
  constructor() {}
}
```

### Diagnostics

```javascript
✔ No errors
```

