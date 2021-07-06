  # Kataw parser test case

## Input

`````js
@(foo().bar)
class Foo {
  @(member[expression]) method() {}

  @(foo + bar) method2() {}
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
                            "kind": 131,
                            "expression": {
                                "kind": 16637,
                                "text": "",
                                "rawText": "",
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 1,
                                "end": 1
                            },
                            "argumentList": {
                                "kind": 256,
                                "elements": [
                                    {
                                        "kind": 129,
                                        "member": {
                                            "kind": 131,
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "foo",
                                                "rawText": "foo",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 2,
                                                "end": 5
                                            },
                                            "argumentList": {
                                                "kind": 256,
                                                "elements": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 6,
                                                "end": 6
                                            },
                                            "flags": 268435488,
                                            "transformFlags": 1,
                                            "start": 2,
                                            "end": 7
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "bar",
                                            "rawText": "bar",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 8,
                                            "end": 11
                                        },
                                        "flags": 268435488,
                                        "transformFlags": 2,
                                        "start": 2,
                                        "end": 11
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 2,
                                "end": 11
                            },
                            "flags": 268435488,
                            "transformFlags": 1,
                            "start": 1,
                            "end": 12
                        },
                        "flags": 0,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 12
                    }
                ],
                "flags": 32,
                "transformFlags": 0,
                "start": 0,
                "end": 12
            },
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "transformFlags": 0,
                "start": 0,
                "end": 18
            },
            "name": {
                "kind": 134299649,
                "text": "Foo",
                "rawText": "Foo",
                "flags": 96,
                "transformFlags": 0,
                "start": 18,
                "end": 22
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
                                            "start": 24,
                                            "end": 28
                                        },
                                        "expression": {
                                            "kind": 131,
                                            "expression": {
                                                "kind": 16637,
                                                "text": "",
                                                "rawText": "",
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 28,
                                                "end": 28
                                            },
                                            "argumentList": {
                                                "kind": 256,
                                                "elements": [
                                                    {
                                                        "kind": 130,
                                                        "member": {
                                                            "kind": 134299649,
                                                            "text": "member",
                                                            "rawText": "member",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 29,
                                                            "end": 35
                                                        },
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "expression",
                                                            "rawText": "expression",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 36,
                                                            "end": 46
                                                        },
                                                        "flags": 536870944,
                                                        "transformFlags": 4,
                                                        "start": 29,
                                                        "end": 47
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 29,
                                                "end": 47
                                            },
                                            "flags": 268435488,
                                            "transformFlags": 1,
                                            "start": 28,
                                            "end": 48
                                        },
                                        "flags": 0,
                                        "transformFlags": 0,
                                        "start": 28,
                                        "end": 48
                                    }
                                ],
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 24,
                                "end": 48
                            },
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
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 48,
                                    "end": 55
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 56,
                                    "end": 57
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
                                        "start": 59,
                                        "end": 59
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 57,
                                    "end": 60
                                },
                                "flags": 0,
                                "transformFlags": 0,
                                "start": 55,
                                "end": 60
                            },
                            "flags": 0,
                            "transformFlags": 0,
                            "start": 24,
                            "end": 60
                        },
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
                                            "start": 60,
                                            "end": 65
                                        },
                                        "expression": {
                                            "kind": 131,
                                            "expression": {
                                                "kind": 16637,
                                                "text": "",
                                                "rawText": "",
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 65,
                                                "end": 65
                                            },
                                            "argumentList": {
                                                "kind": 256,
                                                "elements": [
                                                    {
                                                        "kind": 198,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "foo",
                                                            "rawText": "foo",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 66,
                                                            "end": 69
                                                        },
                                                        "operatorToken": {
                                                            "kind": 99634,
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 69,
                                                            "end": 71
                                                        },
                                                        "right": {
                                                            "kind": 134299649,
                                                            "text": "bar",
                                                            "rawText": "bar",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 71,
                                                            "end": 75
                                                        },
                                                        "flags": 96,
                                                        "transformFlags": 1024,
                                                        "start": 66,
                                                        "end": 75
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 66,
                                                "end": 75
                                            },
                                            "flags": 268435488,
                                            "transformFlags": 1,
                                            "start": 65,
                                            "end": 76
                                        },
                                        "flags": 0,
                                        "transformFlags": 0,
                                        "start": 65,
                                        "end": 76
                                    }
                                ],
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 60,
                                "end": 76
                            },
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "asteriskToken": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "method2",
                                    "rawText": "method2",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 76,
                                    "end": 84
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 85,
                                    "end": 86
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
                                        "start": 88,
                                        "end": 88
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 86,
                                    "end": 89
                                },
                                "flags": 0,
                                "transformFlags": 0,
                                "start": 84,
                                "end": 89
                            },
                            "flags": 0,
                            "transformFlags": 0,
                            "start": 60,
                            "end": 89
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 24,
                    "end": 89
                },
                "flags": 22,
                "transformFlags": 0,
                "start": 32,
                "end": 91
            },
            "flags": 17,
            "transformFlags": 0,
            "start": 0,
            "end": 91
        }
    ],
    "isModule": false,
    "source": "@(foo().bar)\nclass Foo {\n  @(member[expression]) method() {}\n\n  @(foo + bar) method2() {}\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 91
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected. A decorator name can only be an identifier - start: 1, end: 2
✖ Identifier expected. A decorator name can only be an identifier - start: 28, end: 29
✖ Identifier expected. A decorator name can only be an identifier - start: 65, end: 66

```

