# Kataw parser test case

## Input

`````js
class Foo extends Bar { #foo; foo() { super.#foo } }
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
                "classHeritage": {
                    "kind": 279,
                    "extendsKeyword": {
                        "kind": 4194391,
                        "flags": 80,
                        "transformFlags": 0,
                        "start": 9,
                        "end": 17
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "Bar",
                        "rawText": "Bar",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 17,
                        "end": 21
                    },
                    "typeParameter": null,
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 17,
                    "end": 21
                },
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
                                "start": 23,
                                "end": 28
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 32,
                            "transformFlags": 128,
                            "start": 23,
                            "end": 28
                        },
                        {
                            "kind": 1108353041,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 28,
                            "end": 29
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
                                    "start": 29,
                                    "end": 33
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 34,
                                    "end": 35
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
                                                    "kind": 129,
                                                    "member": {
                                                        "kind": 4259935,
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 37,
                                                        "end": 43
                                                    },
                                                    "expression": {
                                                        "kind": 67191035,
                                                        "text": "#foo",
                                                        "rawText": "#foo",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 44,
                                                        "end": 48
                                                    },
                                                    "flags": 96,
                                                    "transformFlags": 2,
                                                    "start": 37,
                                                    "end": 48
                                                },
                                                "flags": 16,
                                                "transformFlags": 4096,
                                                "start": 37,
                                                "end": 48
                                            }
                                        ],
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 37,
                                        "end": 48
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 35,
                                    "end": 50
                                },
                                "flags": 0,
                                "transformFlags": 0,
                                "start": 33,
                                "end": 50
                            },
                            "flags": 0,
                            "transformFlags": 0,
                            "start": 29,
                            "end": 50
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 23,
                    "end": 50
                },
                "flags": 9,
                "transformFlags": 0,
                "start": 32,
                "end": 52
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 52
        }
    ],
    "isModule": false,
    "source": "class Foo extends Bar { #foo; foo() { super.#foo } }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 52
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Private fields can't be accessed on super  - start: 44, end: 48

```

