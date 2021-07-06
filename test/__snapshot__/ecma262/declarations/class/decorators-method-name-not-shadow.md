# Kataw parser test case

## Input

`````js
@decorator
class Foo {
  method() {
    return method;
  }
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
            "decorators": {
                "kind": 207,
                "elements": [
                    {
                        "kind": 34611453,
                        "decoratorToken": {
                            "kind": 34611453,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 1
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "decorator",
                            "rawText": "decorator",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 1,
                            "end": 10
                        },
                        "flags": 0,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 10
                    }
                ],
                "flags": 32,
                "transformFlags": 0,
                "start": 0,
                "end": 10
            },
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "transformFlags": 0,
                "start": 0,
                "end": 16
            },
            "name": {
                "kind": 134299649,
                "text": "Foo",
                "rawText": "Foo",
                "flags": 96,
                "transformFlags": 0,
                "start": 16,
                "end": 20
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
                                    "text": "method",
                                    "rawText": "method",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 22,
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
                                        "statements": [
                                            {
                                                "kind": 161,
                                                "returnKeyword": {
                                                    "kind": 37757022,
                                                    "flags": 81,
                                                    "transformFlags": 0,
                                                    "start": 35,
                                                    "end": 46
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "method",
                                                    "rawText": "method",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 46,
                                                    "end": 53
                                                },
                                                "flags": 81,
                                                "transformFlags": 256,
                                                "start": 35,
                                                "end": 54
                                            }
                                        ],
                                        "flags": 33,
                                        "transformFlags": 0,
                                        "start": 35,
                                        "end": 54
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 33,
                                    "end": 58
                                },
                                "flags": 0,
                                "transformFlags": 0,
                                "start": 31,
                                "end": 58
                            },
                            "flags": 0,
                            "transformFlags": 0,
                            "start": 22,
                            "end": 58
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 22,
                    "end": 58
                },
                "flags": 20,
                "transformFlags": 0,
                "start": 32,
                "end": 60
            },
            "flags": 17,
            "transformFlags": 0,
            "start": 0,
            "end": 60
        }
    ],
    "isModule": false,
    "source": "@decorator\nclass Foo {\n  method() {\n    return method;\n  }\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 60
}
```

### Printed

```javascript

@ decorator class Foo {
  method() {
    return method;
  }
}
```

### Diagnostics

```javascript
✔ No errors
```

