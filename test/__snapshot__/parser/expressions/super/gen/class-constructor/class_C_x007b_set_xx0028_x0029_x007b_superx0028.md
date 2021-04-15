# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: class-constructor
> :: case: class C { set x(_) { super(
## Input

`````js
class C { constructor() { class C { set x(_) { super( } }
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
            "decorators": null,
            "classKeyword": {
                "kind": 37814352,
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
                        "kind": 278,
                        "decorators": null,
                        "staticToken": null,
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 134299649,
                                "text": "constructor",
                                "rawText": "constructor",
                                "flags": 768,
                                "start": 9,
                                "end": 21
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "start": 22,
                                "end": 23
                            },
                            "type": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [
                                        {
                                            "kind": 178,
                                            "decorators": null,
                                            "classKeyword": {
                                                "kind": 37814352,
                                                "flags": 768,
                                                "start": 25,
                                                "end": 31
                                            },
                                            "name": {
                                                "kind": 134299649,
                                                "text": "C",
                                                "rawText": "C",
                                                "flags": 768,
                                                "start": 31,
                                                "end": 33
                                            },
                                            "typeParameters": null,
                                            "classHeritage": null,
                                            "members": {
                                                "kind": 277,
                                                "elements": [
                                                    {
                                                        "kind": 278,
                                                        "decorators": null,
                                                        "staticToken": null,
                                                        "method": {
                                                            "kind": 209,
                                                            "name": {
                                                                "kind": 134299649,
                                                                "text": "x",
                                                                "rawText": "x",
                                                                "flags": 768,
                                                                "start": 39,
                                                                "end": 41
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
                                                                            "text": "_",
                                                                            "rawText": "_",
                                                                            "flags": 768,
                                                                            "start": 42,
                                                                            "end": 43
                                                                        },
                                                                        "optionalToken": null,
                                                                        "type": null,
                                                                        "initializer": null,
                                                                        "flags": 256,
                                                                        "start": 42,
                                                                        "end": 43
                                                                    }
                                                                ],
                                                                "trailingComma": false,
                                                                "flags": 4352,
                                                                "start": 42,
                                                                "end": 44
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
                                                                                "kind": 131,
                                                                                "expression": {
                                                                                    "kind": 225,
                                                                                    "superKeyword": {
                                                                                        "kind": 4259935,
                                                                                        "flags": 768,
                                                                                        "start": 46,
                                                                                        "end": 52
                                                                                    },
                                                                                    "flags": 768,
                                                                                    "start": 46,
                                                                                    "end": 52
                                                                                },
                                                                                "argumentList": {
                                                                                    "kind": 256,
                                                                                    "elements": [],
                                                                                    "trailingComma": false,
                                                                                    "flags": 256,
                                                                                    "start": 53,
                                                                                    "end": 53
                                                                                },
                                                                                "flags": 256,
                                                                                "start": 46,
                                                                                "end": 53
                                                                            },
                                                                            "flags": 128,
                                                                            "start": 46,
                                                                            "end": 53
                                                                        }
                                                                    ],
                                                                    "multiline": false,
                                                                    "flags": 256,
                                                                    "start": 46,
                                                                    "end": 53
                                                                },
                                                                "flags": 256,
                                                                "start": 44,
                                                                "end": 55
                                                            },
                                                            "flags": 4096,
                                                            "start": 41,
                                                            "end": 55
                                                        },
                                                        "flags": 256,
                                                        "start": 35,
                                                        "end": 55
                                                    }
                                                ],
                                                "flags": 256,
                                                "start": 35,
                                                "end": 57
                                            },
                                            "flags": 128,
                                            "start": 25,
                                            "end": 57
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 256,
                                    "start": 25,
                                    "end": 57
                                },
                                "flags": 256,
                                "start": 23,
                                "end": 57
                            },
                            "flags": 0,
                            "start": 21,
                            "end": 57
                        },
                        "flags": 256,
                        "start": 9,
                        "end": 57
                    }
                ],
                "flags": 256,
                "start": 9,
                "end": 57
            },
            "flags": 128,
            "start": 0,
            "end": 57
        }
    ],
    "isModule": false,
    "text": "class C { constructor() { class C { set x(_) { super( } }",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 73,
            "error": "'super' can only be referenced in members of derived classes or object literal expressions",
            "start": 52,
            "end": 53
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 53,
            "end": 55
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 57,
            "end": 57
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 57,
            "end": 57
        }
    ],
    "start": 0,
    "end": 57
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

