# Kataw parser test case

## Input

`````js
class C { #aaa; f(obj) { obj?.#aaa } }
`````

## Output

### Hybrid CST

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
                "flags": 768,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "C",
                "rawText": "C",
                "flags": 768,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "classHeritage": null,
            "members": {
                "kind": 277,
                "elements": [
                    {
                        "kind": 280,
                        "decorators": null,
                        "declaredToken": null,
                        "staticToken": null,
                        "key": {
                            "kind": 67109115,
                            "text": "#aaa",
                            "flags": 768,
                            "start": 9,
                            "end": 14
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 256,
                        "start": 9,
                        "end": 14
                    },
                    {
                        "kind": 281,
                        "flags": 768,
                        "start": 14,
                        "end": 15
                    },
                    {
                        "kind": 278,
                        "declareToken": null,
                        "decorators": null,
                        "staticKeyword": null,
                        "asyncKeyword": null,
                        "setKeyword": null,
                        "getKeyword": null,
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 134299649,
                                "text": "f",
                                "rawText": "f",
                                "flags": 768,
                                "start": 15,
                                "end": 17
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
                                            "text": "obj",
                                            "rawText": "obj",
                                            "flags": 768,
                                            "start": 18,
                                            "end": 21
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": null,
                                        "flags": 256,
                                        "start": 18,
                                        "end": 21
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 256,
                                "start": 18,
                                "end": 22
                            },
                            "type": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 205,
                                                "member": {
                                                    "kind": 134299649,
                                                    "text": "obj",
                                                    "rawText": "obj",
                                                    "flags": 768,
                                                    "start": 24,
                                                    "end": 28
                                                },
                                                "chain": {
                                                    "kind": 206,
                                                    "chain": {
                                                        "kind": 226,
                                                        "member": null,
                                                        "template": {
                                                            "kind": 227,
                                                            "spans": [
                                                                {
                                                                    "kind": 228,
                                                                    "rawText": "obj",
                                                                    "text": "#aaa",
                                                                    "expression": {
                                                                        "kind": 16637,
                                                                        "text": "",
                                                                        "autofix": 0,
                                                                        "flags": 12,
                                                                        "start": 30,
                                                                        "end": 30
                                                                    },
                                                                    "flags": 256,
                                                                    "start": 30,
                                                                    "end": 30
                                                                }
                                                            ],
                                                            "tail": {
                                                                "kind": 458761,
                                                                "text": " } }",
                                                                "rawText": "obj",
                                                                "flags": 768,
                                                                "start": 30,
                                                                "end": 38
                                                            },
                                                            "flags": 256,
                                                            "start": 30,
                                                            "end": 38
                                                        },
                                                        "flags": 256,
                                                        "start": 30,
                                                        "end": 38
                                                    },
                                                    "flags": 256,
                                                    "start": 30,
                                                    "end": 38
                                                },
                                                "flags": 256,
                                                "start": 24,
                                                "end": 38
                                            },
                                            "flags": 128,
                                            "start": 24,
                                            "end": 38
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 256,
                                    "start": 24,
                                    "end": 38
                                },
                                "flags": 256,
                                "start": 22,
                                "end": 38
                            },
                            "flags": 0,
                            "start": 17,
                            "end": 38
                        },
                        "flags": 256,
                        "start": 15,
                        "end": 38
                    }
                ],
                "flags": 256,
                "start": 9,
                "end": 38
            },
            "flags": 128,
            "start": 0,
            "end": 38
        }
    ],
    "isModule": false,
    "text": "class C { #aaa; f(obj) { obj?.#aaa } }",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 70,
            "error": "Tagged template expressions are not permitted in an optional chain.",
            "start": 30,
            "end": 34
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 30,
            "end": 34
        },
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 30,
            "end": 34
        },
        {
            "kind": 2,
            "source": 0,
            "code": 1,
            "error": "Unexpected token.",
            "start": 30,
            "end": 38
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 38,
            "end": 38
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 38,
            "end": 38
        }
    ],
    "start": 0,
    "end": 38
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

