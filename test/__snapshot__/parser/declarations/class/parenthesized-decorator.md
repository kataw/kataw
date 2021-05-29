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
                "decoratorList": [],
                "flags": 32,
                "start": 1,
                "end": 1
            },
            "classKeyword": null,
            "name": {
                "kind": 16637,
                "text": "",
                "flags": 64,
                "start": 1,
                "end": 1
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 262,
                    "elements": [],
                    "flags": 32,
                    "start": 1,
                    "end": 1
                },
                "flags": 1,
                "start": 32,
                "end": 1
            },
            "flags": 16,
            "start": 0,
            "end": 1
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 129,
                    "member": {
                        "kind": 131,
                        "expression": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "start": 2,
                            "end": 5
                        },
                        "argumentList": {
                            "kind": 256,
                            "elements": [],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 6,
                            "end": 6
                        },
                        "flags": 268435488,
                        "start": 1,
                        "end": 7
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "bar",
                        "rawText": "bar",
                        "flags": 96,
                        "start": 8,
                        "end": 11
                    },
                    "flags": 536870944,
                    "start": 1,
                    "end": 11
                },
                "flags": 32,
                "start": 1,
                "end": 12
            },
            "flags": 16,
            "start": 1,
            "end": 12
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "start": 12,
                "end": 18
            },
            "name": {
                "kind": 134299649,
                "text": "Foo",
                "rawText": "Foo",
                "flags": 96,
                "start": 18,
                "end": 22
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 262,
                    "elements": [
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": {
                                "kind": 207,
                                "decoratorList": [],
                                "flags": 32,
                                "start": 28,
                                "end": 28
                            },
                            "generatorToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 16637,
                                    "text": "",
                                    "flags": 64,
                                    "start": 28,
                                    "end": 28
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [
                                        {
                                            "kind": 215,
                                            "ellipsisToken": null,
                                            "binding": {
                                                "kind": 134299649,
                                                "text": "member",
                                                "rawText": "member",
                                                "flags": 96,
                                                "start": 29,
                                                "end": 35
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 32,
                                            "start": 29,
                                            "end": 35
                                        },
                                        {
                                            "kind": 215,
                                            "ellipsisToken": null,
                                            "binding": {
                                                "kind": 201,
                                                "elementList": {
                                                    "kind": 202,
                                                    "elements": [
                                                        {
                                                            "kind": 244,
                                                            "ellipsisToken": null,
                                                            "binding": {
                                                                "kind": 134299649,
                                                                "text": "expression",
                                                                "rawText": "expression",
                                                                "flags": 96,
                                                                "start": 36,
                                                                "end": 46
                                                            },
                                                            "optionalToken": null,
                                                            "type": null,
                                                            "initializer": null,
                                                            "flags": 32,
                                                            "start": 36,
                                                            "end": 46
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 0,
                                                    "start": 36,
                                                    "end": 46
                                                },
                                                "flags": 32,
                                                "start": 35,
                                                "end": 47
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 34,
                                            "start": 35,
                                            "end": 47
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 34,
                                    "start": 29,
                                    "end": 48
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 48,
                                        "end": 48
                                    },
                                    "flags": 32,
                                    "start": 48,
                                    "end": 48
                                },
                                "flags": 0,
                                "start": 28,
                                "end": 48
                            },
                            "flags": 0,
                            "start": 24,
                            "end": 48
                        },
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "generatorToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "method",
                                    "rawText": "method",
                                    "flags": 96,
                                    "start": 48,
                                    "end": 55
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
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
                                        "start": 59,
                                        "end": 59
                                    },
                                    "flags": 32,
                                    "start": 57,
                                    "end": 60
                                },
                                "flags": 0,
                                "start": 55,
                                "end": 60
                            },
                            "flags": 0,
                            "start": 48,
                            "end": 60
                        },
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": {
                                "kind": 207,
                                "decoratorList": [],
                                "flags": 32,
                                "start": 65,
                                "end": 65
                            },
                            "generatorToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 16637,
                                    "text": "",
                                    "flags": 64,
                                    "start": 65,
                                    "end": 65
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [
                                        {
                                            "kind": 215,
                                            "ellipsisToken": null,
                                            "binding": {
                                                "kind": 134299649,
                                                "text": "foo",
                                                "rawText": "foo",
                                                "flags": 96,
                                                "start": 66,
                                                "end": 69
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 32,
                                            "start": 66,
                                            "end": 69
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 66,
                                    "end": 71
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 69,
                                        "end": 69
                                    },
                                    "flags": 32,
                                    "start": 69,
                                    "end": 69
                                },
                                "flags": 0,
                                "start": 65,
                                "end": 69
                            },
                            "flags": 0,
                            "start": 60,
                            "end": 69
                        }
                    ],
                    "flags": 32,
                    "start": 24,
                    "end": 69
                },
                "flags": 22,
                "start": 32,
                "end": 69
            },
            "flags": 16,
            "start": 12,
            "end": 69
        },
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 34098,
                    "flags": 64,
                    "start": 69,
                    "end": 71
                },
                "operand": {
                    "kind": 134299649,
                    "text": "bar",
                    "rawText": "bar",
                    "flags": 96,
                    "start": 71,
                    "end": 75
                },
                "flags": 32,
                "start": 69,
                "end": 75
            },
            "flags": 16,
            "start": 69,
            "end": 75
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "method2",
                    "rawText": "method2",
                    "flags": 96,
                    "start": 76,
                    "end": 84
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 85,
                    "end": 85
                },
                "flags": 268435488,
                "start": 76,
                "end": 86
            },
            "flags": 16,
            "start": 76,
            "end": 86
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 88,
                "end": 88
            },
            "flags": 16,
            "start": 86,
            "end": 89
        }
    ],
    "isModule": false,
    "source": "@(foo().bar)\nclass Foo {\n  @(member[expression]) method() {}\n\n  @(foo + bar) method2() {}\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 91
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Binding identifier expected - start: 1, end: 2
✖ Identifier expected - start: 28, end: 29
✖ ',' expected - start: 35, end: 36
✖ Missing an opening brace - '{ - start: 48, end: 55
✖ Expression expected - start: 48, end: 55
✖ Identifier expected - start: 65, end: 66
✖ ',' expected - start: 69, end: 71
✖ Expected a ')' to match the '(' token here - start: 69, end: 71
✖ Expression expected - start: 69, end: 71
✖ Expected a `;` - start: 75, end: 76
✖ Expected a `;` - start: 86, end: 88
✖ Declaration or statement expected - start: 89, end: 91

```

