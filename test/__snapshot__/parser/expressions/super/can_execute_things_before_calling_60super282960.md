# Kataw parser test case

## Input

`````js
class x extends y { constructor() { let xx = x + x; super.mom; } }
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
                "flags": 0,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 768,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "classHeritage": {
                "kind": 279,
                "extendsKeyword": {
                    "kind": 4194391,
                    "flags": 7,
                    "start": 0,
                    "end": 15
                },
                "expression": {
                    "kind": 134299649,
                    "text": "y",
                    "rawText": "y",
                    "flags": 768,
                    "start": 15,
                    "end": 17
                },
                "typeParameter": null,
                "flags": 128,
                "start": 15,
                "end": 17
            },
            "members": {
                "kind": 277,
                "elements": [
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
                                "text": "constructor",
                                "rawText": "constructor",
                                "flags": 768,
                                "start": 19,
                                "end": 31
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "start": 32,
                                "end": 33
                            },
                            "type": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [
                                        {
                                            "kind": 162,
                                            "lexicalKeyword": {
                                                "kind": 41951307,
                                                "flags": 640,
                                                "start": 35,
                                                "end": 39
                                            },
                                            "binding": {
                                                "kind": 151,
                                                "bindingList": [
                                                    {
                                                        "kind": 190,
                                                        "binding": {
                                                            "kind": 134299649,
                                                            "text": "xx",
                                                            "rawText": "xx",
                                                            "flags": 768,
                                                            "start": 39,
                                                            "end": 42
                                                        },
                                                        "optionalToken": null,
                                                        "type": null,
                                                        "initializer": {
                                                            "kind": 198,
                                                            "left": {
                                                                "kind": 134299649,
                                                                "text": "x",
                                                                "rawText": "x",
                                                                "flags": 768,
                                                                "start": 44,
                                                                "end": 46
                                                            },
                                                            "operatorToken": {
                                                                "kind": 34098,
                                                                "flags": 512,
                                                                "start": 46,
                                                                "end": 48
                                                            },
                                                            "right": {
                                                                "kind": 134299649,
                                                                "text": "x",
                                                                "rawText": "x",
                                                                "flags": 768,
                                                                "start": 48,
                                                                "end": 50
                                                            },
                                                            "flags": 256,
                                                            "start": 44,
                                                            "end": 50
                                                        },
                                                        "flags": 128,
                                                        "start": 39,
                                                        "end": 50
                                                    }
                                                ],
                                                "flags": 128,
                                                "start": 39,
                                                "end": 50
                                            },
                                            "flags": 128,
                                            "start": 35,
                                            "end": 51
                                        },
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 129,
                                                "member": {
                                                    "kind": 225,
                                                    "superKeyword": {
                                                        "kind": 4259935,
                                                        "flags": 51,
                                                        "start": 0,
                                                        "end": 57
                                                    },
                                                    "flags": 768,
                                                    "start": 51,
                                                    "end": 57
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "mom",
                                                    "rawText": "mom",
                                                    "flags": 768,
                                                    "start": 58,
                                                    "end": 61
                                                },
                                                "flags": 256,
                                                "start": 51,
                                                "end": 61
                                            },
                                            "flags": 128,
                                            "start": 51,
                                            "end": 62
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 256,
                                    "start": 35,
                                    "end": 62
                                },
                                "flags": 256,
                                "start": 33,
                                "end": 64
                            },
                            "flags": 0,
                            "start": 31,
                            "end": 64
                        },
                        "flags": 0,
                        "start": 19,
                        "end": 64
                    }
                ],
                "flags": 256,
                "start": 19,
                "end": 66
            },
            "flags": 128,
            "start": 0,
            "end": 66
        }
    ],
    "isModule": false,
    "text": "class x extends y { constructor() { let xx = x + x; super.mom; } }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 66
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

