# Kataw parser test case

## Input

`````js

class Foo { #foo; foo() { delete this.#foo } }

class Foo { #foo; foo() { delete this?.#foo } }
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
                "flags": 81,
                "transformFlags": 0,
                "start": 0,
                "end": 6
            },
            "name": {
                "kind": 134299649,
                "text": "Foo",
                "rawText": "Foo",
                "flags": 96,
                "transformFlags": 0,
                "start": 6,
                "end": 10
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "#foo",
                                "rawText": "#foo",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 12,
                                "end": 17
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 32,
                            "transformFlags": 128,
                            "start": 12,
                            "end": 17
                        },
                        {
                            "kind": 1108353041,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 17,
                            "end": 18
                        },
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
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 18,
                                    "end": 22
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 23,
                                    "end": 24
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 126,
                                                    "operandToken": {
                                                        "kind": 4259886,
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 26,
                                                        "end": 33
                                                    },
                                                    "operand": {
                                                        "kind": 129,
                                                        "member": {
                                                            "kind": 4276321,
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 33,
                                                            "end": 38
                                                        },
                                                        "expression": {
                                                            "kind": 67191035,
                                                            "text": "#foo",
                                                            "rawText": "#foo",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 39,
                                                            "end": 43
                                                        },
                                                        "flags": 96,
                                                        "transformFlags": 2,
                                                        "start": 33,
                                                        "end": 43
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 26,
                                                    "end": 43
                                                },
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 26,
                                                "end": 43
                                            }
                                        ],
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 26,
                                        "end": 43
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 24,
                                    "end": 45
                                },
                                "flags": 0,
                                "transformFlags": 0,
                                "start": 22,
                                "end": 45
                            },
                            "flags": 0,
                            "transformFlags": 0,
                            "start": 18,
                            "end": 45
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 12,
                    "end": 45
                },
                "flags": 10,
                "transformFlags": 0,
                "start": 32,
                "end": 47
            },
            "flags": 17,
            "transformFlags": 0,
            "start": 0,
            "end": 47
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "transformFlags": 0,
                "start": 47,
                "end": 54
            },
            "name": {
                "kind": 134299649,
                "text": "Foo",
                "rawText": "Foo",
                "flags": 96,
                "transformFlags": 0,
                "start": 54,
                "end": 58
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "#foo",
                                "rawText": "#foo",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 60,
                                "end": 65
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 32,
                            "transformFlags": 128,
                            "start": 60,
                            "end": 65
                        },
                        {
                            "kind": 1108353041,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 65,
                            "end": 66
                        },
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
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 66,
                                    "end": 70
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 71,
                                    "end": 72
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 126,
                                                    "operandToken": {
                                                        "kind": 4259886,
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 74,
                                                        "end": 81
                                                    },
                                                    "operand": {
                                                        "kind": 205,
                                                        "chainToken": {
                                                            "kind": 393240,
                                                            "flags": 64,
                                                            "transformFlags": 0,
                                                            "start": 86,
                                                            "end": 88
                                                        },
                                                        "member": {
                                                            "kind": 4276321,
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 81,
                                                            "end": 86
                                                        },
                                                        "chain": {
                                                            "kind": 302,
                                                            "chain": {
                                                                "kind": 202,
                                                                "chain": null,
                                                                "expression": {
                                                                    "kind": 67191035,
                                                                    "text": "#foo",
                                                                    "rawText": "#foo",
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 88,
                                                                    "end": 92
                                                                },
                                                                "flags": 536870944,
                                                                "transformFlags": 2,
                                                                "start": 88,
                                                                "end": 92
                                                            },
                                                            "flags": 32,
                                                            "transformFlags": 0,
                                                            "start": 88,
                                                            "end": 92
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 81,
                                                        "end": 92
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 74,
                                                    "end": 92
                                                },
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 74,
                                                "end": 92
                                            }
                                        ],
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 74,
                                        "end": 92
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 72,
                                    "end": 94
                                },
                                "flags": 0,
                                "transformFlags": 0,
                                "start": 70,
                                "end": 94
                            },
                            "flags": 0,
                            "transformFlags": 0,
                            "start": 66,
                            "end": 94
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 60,
                    "end": 94
                },
                "flags": 58,
                "transformFlags": 0,
                "start": 32,
                "end": 96
            },
            "flags": 17,
            "transformFlags": 0,
            "start": 47,
            "end": 96
        }
    ],
    "isModule": false,
    "source": "\nclass Foo { #foo; foo() { delete this.#foo } }\n\nclass Foo { #foo; foo() { delete this?.#foo } }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 96
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Prohibit delete of private class elements - start: 43, end: 45
✖ Duplicate identifier - start: 54, end: 58

```

