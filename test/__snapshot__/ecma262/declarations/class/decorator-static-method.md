# Kataw parser test case

## Input

`````js
class Foo {
  @dec
  static bar() {}
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
                "text": "Foo",
                "rawText": "Foo",
                "flags": 96,
                "transformFlags": 0,
                "start": 5,
                "end": 9
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
                            "decorators": {
                                "kind": 207,
                                "elements": [
                                    {
                                        "kind": 34611453,
                                        "decoratorToken": {
                                            "kind": 34611453,
                                            "flags": 65,
                                            "transformFlags": 0,
                                            "start": 11,
                                            "end": 15
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "dec",
                                            "rawText": "dec",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 15,
                                            "end": 18
                                        },
                                        "flags": 0,
                                        "transformFlags": 0,
                                        "start": 15,
                                        "end": 18
                                    }
                                ],
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 11,
                                "end": 18
                            },
                            "staticKeyword": {
                                "kind": 8388716,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 11,
                                "end": 27
                            },
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "asteriskToken": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "bar",
                                    "rawText": "bar",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 27,
                                    "end": 31
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 32,
                                    "end": 33
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
                                        "start": 35,
                                        "end": 35
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 33,
                                    "end": 36
                                },
                                "flags": 0,
                                "transformFlags": 0,
                                "start": 31,
                                "end": 36
                            },
                            "flags": 0,
                            "transformFlags": 0,
                            "start": 27,
                            "end": 36
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 11,
                    "end": 36
                },
                "flags": 9,
                "transformFlags": 0,
                "start": 32,
                "end": 38
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 38
        }
    ],
    "isModule": false,
    "source": "class Foo {\n  @dec\n  static bar() {}\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 38
}
```

### Printed

```javascript

class Foo {
  @ dec static bar() {}
}
```

### Diagnostics

```javascript
✔ No errors
```

