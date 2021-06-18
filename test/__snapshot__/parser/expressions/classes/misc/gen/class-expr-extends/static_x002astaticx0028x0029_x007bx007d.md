# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/classes/misc/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/classes/misc/gen/class-expr-extends
> :: test: class-expr-extends
> :: case: static *static() {}
## Options

`````js
{}
`````
## Input

`````js
(class extends Base {static *static() {}});
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 64,
                        "start": 1,
                        "end": 6
                    },
                    "name": null,
                    "typeParameters": null,
                    "tail": {
                        "kind": 277,
                        "classHeritage": {
                            "kind": 279,
                            "extendsKeyword": {
                                "kind": 4194391,
                                "flags": 80,
                                "start": 6,
                                "end": 14
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "Base",
                                "rawText": "Base",
                                "flags": 96,
                                "start": 14,
                                "end": 19
                            },
                            "typeParameter": null,
                            "flags": 16,
                            "start": 14,
                            "end": 19
                        },
                        "body": {
                            "kind": 303,
                            "elements": [
                                {
                                    "kind": 278,
                                    "declareToken": null,
                                    "decorators": null,
                                    "generatorToken": {
                                        "kind": 67143222,
                                        "flags": 64,
                                        "start": 27,
                                        "end": 29
                                    },
                                    "staticKeyword": {
                                        "kind": 8388716,
                                        "flags": 64,
                                        "start": 21,
                                        "end": 27
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
                                            "end": 35
                                        },
                                        "typeParameters": null,
                                        "formalParameters": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "start": 36,
                                            "end": 37
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 39,
                                                "end": 39
                                            },
                                            "flags": 32,
                                            "start": 37,
                                            "end": 40
                                        },
                                        "flags": 0,
                                        "start": 35,
                                        "end": 40
                                    },
                                    "flags": 0,
                                    "start": 27,
                                    "end": 40
                                }
                            ],
                            "flags": 32,
                            "start": 21,
                            "end": 40
                        },
                        "flags": 6,
                        "start": 32,
                        "end": 41
                    },
                    "flags": 32,
                    "start": 1,
                    "end": 41
                },
                "flags": 32,
                "start": 0,
                "end": 42
            },
            "flags": 16,
            "start": 0,
            "end": 43
        }
    ],
    "isModule": false,
    "source": "(class extends Base {static *static() {}});",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 43
}
```

### Printed

```javascript

(class   {
    static static static {}
  });
```

### Diagnostics

```javascript
✔ No errors
```

