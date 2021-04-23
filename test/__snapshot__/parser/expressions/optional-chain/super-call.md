# Kataw parser test case

## Input

`````js
class x extends y {
  constructor() {
    super?.(foo)
  }
}
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
                                "end": 33
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "start": 34,
                                "end": 35
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
                                                    "kind": 225,
                                                    "superKeyword": {
                                                        "kind": 4259935,
                                                        "flags": 768,
                                                        "start": 37,
                                                        "end": 47
                                                    },
                                                    "flags": 768,
                                                    "start": 37,
                                                    "end": 47
                                                },
                                                "chain": {
                                                    "kind": 206,
                                                    "chain": {
                                                        "kind": 204,
                                                        "chain": null,
                                                        "argumentList": {
                                                            "kind": 256,
                                                            "elements": [
                                                                {
                                                                    "kind": 134299649,
                                                                    "text": "foo",
                                                                    "rawText": "foo",
                                                                    "flags": 768,
                                                                    "start": 50,
                                                                    "end": 53
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 256,
                                                            "start": 50,
                                                            "end": 53
                                                        },
                                                        "flags": 256,
                                                        "start": 49,
                                                        "end": 54
                                                    },
                                                    "flags": 256,
                                                    "start": 49,
                                                    "end": 54
                                                },
                                                "flags": 256,
                                                "start": 37,
                                                "end": 54
                                            },
                                            "flags": 128,
                                            "start": 37,
                                            "end": 54
                                        }
                                    ],
                                    "multiline": true,
                                    "flags": 256,
                                    "start": 37,
                                    "end": 54
                                },
                                "flags": 256,
                                "start": 35,
                                "end": 58
                            },
                            "flags": 0,
                            "start": 33,
                            "end": 58
                        },
                        "flags": 256,
                        "start": 19,
                        "end": 58
                    }
                ],
                "flags": 256,
                "start": 19,
                "end": 60
            },
            "flags": 128,
            "start": 0,
            "end": 60
        }
    ],
    "isModule": false,
    "text": "class x extends y {\n  constructor() {\n    super?.(foo)\n  }\n}",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 74,
            "error": "'super' must be followed by an argument list or member access.",
            "start": 47,
            "end": 49
        },
        {
            "kind": 2,
            "source": 2,
            "code": 73,
            "error": "'super' can only be referenced in members of derived classes or object literal expressions",
            "start": 47,
            "end": 49
        }
    ],
    "start": 0,
    "end": 60
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

