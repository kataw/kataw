# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: expression
> :: case: set #await(test) {}
## Input

`````js
class C extends Base { set #await(test) {} }
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
                "extendsToken": {
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
                        "staticToken": null,
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 67109115,
                                "text": "#await",
                                "flags": 768,
                                "start": 26,
                                "end": 33
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
                                            "start": 34,
                                            "end": 38
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": null,
                                        "flags": 256,
                                        "start": 34,
                                        "end": 38
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 4352,
                                "start": 34,
                                "end": 39
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
                                    "start": 41,
                                    "end": 41
                                },
                                "flags": 256,
                                "start": 39,
                                "end": 42
                            },
                            "flags": 4096,
                            "start": 33,
                            "end": 42
                        },
                        "flags": 256,
                        "start": 22,
                        "end": 42
                    }
                ],
                "flags": 256,
                "start": 22,
                "end": 44
            },
            "flags": 128,
            "start": 0,
            "end": 44
        }
    ],
    "isModule": false,
    "text": "class C extends Base { set #await(test) {} }",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 44
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

