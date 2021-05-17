# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: class-decl-extends
> :: case: static static() {}
## Input

`````js
class C extends Base { static static() {} }
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
                "flags": 0,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "C",
                "rawText": "C",
                "flags": 96,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "members": {
                "kind": 277,
                "classHeritage": {
                    "kind": 279,
                    "extendsKeyword": {
                        "kind": 4194391,
                        "flags": 0,
                        "start": 7,
                        "end": 15
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "Base",
                        "rawText": "Base",
                        "flags": 96,
                        "start": 15,
                        "end": 20
                    },
                    "typeParameter": null,
                    "flags": 16,
                    "start": 15,
                    "end": 20
                },
                "elements": [
                    {
                        "kind": 278,
                        "declareToken": null,
                        "decorators": null,
                        "generatorToken": null,
                        "staticKeyword": {
                            "kind": 8388716,
                            "flags": 64,
                            "start": 22,
                            "end": 29
                        },
                        "asyncKeyword": null,
                        "setKeyword": null,
                        "getKeyword": null,
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 134299649,
                                "text": "static",
                                "rawText": "static",
                                "flags": 96,
                                "start": 29,
                                "end": 36
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "start": 37,
                                "end": 38
                            },
                            "type": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 40,
                                    "end": 40
                                },
                                "flags": 32,
                                "start": 38,
                                "end": 41
                            },
                            "flags": 0,
                            "start": 36,
                            "end": 41
                        },
                        "flags": 0,
                        "start": 29,
                        "end": 41
                    }
                ],
                "flags": 32,
                "start": 7,
                "end": 43
            },
            "flags": 16,
            "start": 0,
            "end": 43
        }
    ],
    "isModule": false,
    "source": "class C extends Base { static static() {} }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 43
}
```

### Printed

```javascript

class C  {
  static static static() {}
}
```

### Diagnostics

```javascript
✔ No errors
```

