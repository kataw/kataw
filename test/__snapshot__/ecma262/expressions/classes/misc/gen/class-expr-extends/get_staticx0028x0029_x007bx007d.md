# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/classes/misc/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/classes/misc/gen/class-expr-extends
> :: test: class-expr-extends
> :: case: get static() {}
## Options

`````js
{}
`````
## Input

`````js
(class extends Base {get static() {}});
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
                                    "staticKeyword": null,
                                    "asyncKeyword": null,
                                    "setKeyword": {
                                        "kind": 16498,
                                        "flags": 64,
                                        "start": 21,
                                        "end": 24
                                    },
                                    "getKeyword": null,
                                    "asteriskToken": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "static",
                                            "rawText": "static",
                                            "flags": 96,
                                            "start": 24,
                                            "end": 31
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 1024,
                                            "start": 32,
                                            "end": 33
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 35,
                                                "end": 35
                                            },
                                            "flags": 32,
                                            "start": 33,
                                            "end": 36
                                        },
                                        "flags": 1024,
                                        "start": 31,
                                        "end": 36
                                    },
                                    "flags": 1024,
                                    "start": 21,
                                    "end": 36
                                }
                            ],
                            "flags": 32,
                            "start": 21,
                            "end": 36
                        },
                        "flags": 6,
                        "start": 32,
                        "end": 37
                    },
                    "flags": 32,
                    "start": 1,
                    "end": 37
                },
                "flags": 0,
                "start": 32,
                "end": 38
            },
            "flags": 16,
            "start": 0,
            "end": 39
        }
    ],
    "isModule": false,
    "source": "(class extends Base {get static() {}});",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 39
}
```

### Printed

```javascript

(class   extends Base {
    get static() {}
  });
```

### Diagnostics

```javascript
✔ No errors
```

