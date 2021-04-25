# Kataw parser test case

## Input

`````js
class x extends y {constructor(){    ({"foo": super}) => x    }}
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
                "text": "x",
                "rawText": "x",
                "flags": 768,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "classHeritage": {
                "kind": 279,
                "extendsToken": {
                    "kind": 4194391,
                    "flags": 768,
                    "start": 7,
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
                                "end": 30
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "start": 31,
                                "end": 32
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
                                                "kind": 271,
                                                "arrowToken": {
                                                    "kind": 10,
                                                    "flags": 768,
                                                    "start": 53,
                                                    "end": 56
                                                },
                                                "typeParameters": null,
                                                "parameters": [
                                                    {
                                                        "kind": 220,
                                                        "propertyList": {
                                                            "kind": 218,
                                                            "properties": [
                                                                {
                                                                    "kind": 219,
                                                                    "left": {
                                                                        "kind": 203,
                                                                        "chain": {
                                                                            "kind": 225,
                                                                            "superKeyword": {
                                                                                "kind": 4259935,
                                                                                "flags": 768,
                                                                                "start": 45,
                                                                                "end": 51
                                                                            },
                                                                            "flags": 768,
                                                                            "start": 45,
                                                                            "end": 51
                                                                        },
                                                                        "expression": {
                                                                            "kind": 16637,
                                                                            "text": "",
                                                                            "autofix": 0,
                                                                            "flags": 12,
                                                                            "start": 51,
                                                                            "end": 51
                                                                        },
                                                                        "flags": 256,
                                                                        "start": 45,
                                                                        "end": 51
                                                                    },
                                                                    "right": {
                                                                        "kind": 201392131,
                                                                        "text": "foo",
                                                                        "rawText": "foo",
                                                                        "flags": 768,
                                                                        "start": 39,
                                                                        "end": 44
                                                                    },
                                                                    "flags": 256,
                                                                    "start": 39,
                                                                    "end": 51
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "multiline": false,
                                                            "flags": 0,
                                                            "start": 39,
                                                            "end": 51
                                                        },
                                                        "flags": 256,
                                                        "start": 38,
                                                        "end": 52
                                                    }
                                                ],
                                                "asyncToken": null,
                                                "returnType": null,
                                                "contents": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 768,
                                                    "start": 56,
                                                    "end": 58
                                                },
                                                "flags": 256,
                                                "start": 33,
                                                "end": 58
                                            },
                                            "flags": 128,
                                            "start": 33,
                                            "end": 58
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 256,
                                    "start": 33,
                                    "end": 58
                                },
                                "flags": 256,
                                "start": 32,
                                "end": 63
                            },
                            "flags": 0,
                            "start": 30,
                            "end": 63
                        },
                        "flags": 256,
                        "start": 19,
                        "end": 63
                    }
                ],
                "flags": 256,
                "start": 19,
                "end": 64
            },
            "flags": 128,
            "start": 0,
            "end": 64
        }
    ],
    "isModule": false,
    "text": "class x extends y {constructor(){    ({\"foo\": super}) => x    }}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 64
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

