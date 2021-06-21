# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/classes/misc/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/classes/misc/gen/class-decl-extends
> :: test: class-decl-extends
> :: case: set static(v) {}
## Options

`````js
{}
`````
## Input

`````js
class C extends Base { set static(v) {} }
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
            "tail": {
                "kind": 277,
                "classHeritage": {
                    "kind": 279,
                    "extendsKeyword": {
                        "kind": 4194391,
                        "flags": 80,
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
                "body": {
                    "kind": 303,
                    "elements": [
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "asteriskToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": {
                                "kind": 16499,
                                "flags": 64,
                                "start": 22,
                                "end": 26
                            },
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "static",
                                    "rawText": "static",
                                    "flags": 96,
                                    "start": 26,
                                    "end": 33
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [
                                        {
                                            "kind": 134299649,
                                            "text": "v",
                                            "rawText": "v",
                                            "flags": 96,
                                            "start": 34,
                                            "end": 35
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 608,
                                    "start": 34,
                                    "end": 36
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 38,
                                        "end": 38
                                    },
                                    "flags": 32,
                                    "start": 36,
                                    "end": 39
                                },
                                "flags": 512,
                                "start": 33,
                                "end": 39
                            },
                            "flags": 512,
                            "start": 22,
                            "end": 39
                        }
                    ],
                    "flags": 32,
                    "start": 22,
                    "end": 39
                },
                "flags": 7,
                "start": 32,
                "end": 41
            },
            "flags": 16,
            "start": 0,
            "end": 41
        }
    ],
    "isModule": false,
    "source": "class C extends Base { set static(v) {} }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 41
}
```

### Printed

```javascript

class C  {
  set static() {}
}
```

### Diagnostics

```javascript
✔ No errors
```

