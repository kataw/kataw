# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: expression
> :: case: set #arguments(test) {}
## Input

`````js
class C extends Base { set #arguments(test) {} }
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
            "classHeritage": {
                "kind": 279,
                "extendsKeyword": {
                    "kind": 4194391,
                    "flags": 768,
                    "start": 7,
                    "end": 15
                },
                "expression": {
                    "kind": 134299649,
                    "text": "Base",
                    "rawText": "Base",
                    "flags": 768,
                    "start": 15,
                    "end": 20
                },
                "typeParameter": null,
                "flags": 128,
                "start": 15,
                "end": 20
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
                        "getKeyword": {
                            "kind": 82031,
                            "flags": 768,
                            "start": 22,
                            "end": 26
                        },
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 67109115,
                                "text": "#arguments",
                                "flags": 768,
                                "start": 26,
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
                                            "text": "test",
                                            "rawText": "test",
                                            "flags": 768,
                                            "start": 38,
                                            "end": 42
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": null,
                                        "flags": 256,
                                        "start": 38,
                                        "end": 42
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 4352,
                                "start": 38,
                                "end": 43
                            },
                            "type": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "multiline": false,
                                    "flags": 256,
                                    "start": 45,
                                    "end": 45
                                },
                                "flags": 256,
                                "start": 43,
                                "end": 46
                            },
                            "flags": 4096,
                            "start": 37,
                            "end": 46
                        },
                        "flags": 4096,
                        "start": 22,
                        "end": 46
                    }
                ],
                "flags": 256,
                "start": 22,
                "end": 48
            },
            "flags": 128,
            "start": 0,
            "end": 48
        }
    ],
    "isModule": false,
    "text": "class C extends Base { set #arguments(test) {} }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 48
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

