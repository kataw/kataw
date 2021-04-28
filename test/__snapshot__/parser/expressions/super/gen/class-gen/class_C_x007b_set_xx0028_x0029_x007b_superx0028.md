# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: class-gen
> :: case: class C { set x(_) { super(
## Input

`````js
class C { *method() { class C { set x(_) { super( } }
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
                                "text": "method",
                                "rawText": "method",
                                "flags": 768,
                                "start": 11,
                                "end": 17
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "start": 18,
                                "end": 19
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
                                            "declareKeyword": null,
                                            "decorators": null,
                                            "classKeyword": {
                                                "kind": 37822544,
                                                "flags": 21,
                                                "start": 0,
                                                "end": 27
                                            },
                                            "name": {
                                                "kind": 134299649,
                                                "text": "C",
                                                "rawText": "C",
                                                "flags": 768,
                                                "start": 27,
                                                "end": 29
                                            },
                                            "typeParameters": null,
                                            "classHeritage": null,
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
                                                        "getKeyword": {
                                                            "kind": 82031,
                                                            "flags": 31,
                                                            "start": 512,
                                                            "end": 35
                                                        },
                                                        "method": {
                                                            "kind": 209,
                                                            "name": {
                                                                "kind": 134299649,
                                                                "text": "x",
                                                                "rawText": "x",
                                                                "flags": 768,
                                                                "start": 35,
                                                                "end": 37
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
                                                                            "start": 38,
                                                                            "end": 39
                                                                        },
                                                                        "optionalToken": null,
                                                                        "type": null,
                                                                        "initializer": null,
                                                                        "flags": 256,
                                                                        "start": 38,
                                                                        "end": 39
                                                                    }
                                                                ],
                                                                "trailingComma": false,
                                                                "flags": 4352,
                                                                "start": 38,
                                                                "end": 40
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
                                                                                        "flags": 42,
                                                                                        "start": 0,
                                                                                        "end": 48
                                                                                    },
                                                                                    "flags": 768,
                                                                                    "start": 42,
                                                                                    "end": 48
                                                                                },
                                                                                "argumentList": {
                                                                                    "kind": 256,
                                                                                    "elements": [],
                                                                                    "trailingComma": false,
                                                                                    "flags": 256,
                                                                                    "start": 49,
                                                                                    "end": 49
                                                                                },
                                                                                "flags": 256,
                                                                                "start": 42,
                                                                                "end": 49
                                                                            },
                                                                            "flags": 128,
                                                                            "start": 42,
                                                                            "end": 49
                                                                        }
                                                                    ],
                                                                    "multiline": false,
                                                                    "flags": 256,
                                                                    "start": 42,
                                                                    "end": 49
                                                                },
                                                                "flags": 256,
                                                                "start": 40,
                                                                "end": 51
                                                            },
                                                            "flags": 4096,
                                                            "start": 37,
                                                            "end": 51
                                                        },
                                                        "flags": 4096,
                                                        "start": 31,
                                                        "end": 51
                                                    }
                                                ],
                                                "flags": 256,
                                                "start": 31,
                                                "end": 53
                                            },
                                            "flags": 128,
                                            "start": 21,
                                            "end": 53
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 256,
                                    "start": 21,
                                    "end": 53
                                },
                                "flags": 256,
                                "start": 19,
                                "end": 53
                            },
                            "flags": 0,
                            "start": 17,
                            "end": 53
                        },
                        "flags": 0,
                        "start": 9,
                        "end": 53
                    }
                ],
                "flags": 256,
                "start": 9,
                "end": 53
            },
            "flags": 128,
            "start": 0,
            "end": 53
        }
    ],
    "isModule": false,
    "text": "class C { *method() { class C { set x(_) { super( } }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 53
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ 'super' can only be referenced in members of derived classes or object literal expressions - start: 48, end: 49

```

