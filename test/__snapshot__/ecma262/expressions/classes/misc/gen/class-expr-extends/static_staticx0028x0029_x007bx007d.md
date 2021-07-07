# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/classes/misc/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/classes/misc/gen/class-expr-extends
> :: test: class-expr-extends
> :: case: static static() {}
## Options

`````js
{}
`````
## Input

`````js
(class extends Base {static static() {}});
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
                        "transformFlags": 0,
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
                                "transformFlags": 0,
                                "start": 6,
                                "end": 14
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "Base",
                                "rawText": "Base",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 14,
                                "end": 19
                            },
                            "typeParameter": null,
                            "flags": 16,
                            "transformFlags": 0,
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
                                    "staticKeyword": {
                                        "kind": 8388716,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 21,
                                        "end": 27
                                    },
                                    "asyncKeyword": null,
                                    "setKeyword": null,
                                    "getKeyword": null,
                                    "asteriskToken": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "static",
                                            "rawText": "static",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 27,
                                            "end": 34
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "transformFlags": 0,
                                            "start": 35,
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
                                                "transformFlags": 0,
                                                "start": 38,
                                                "end": 38
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 36,
                                            "end": 39
                                        },
                                        "flags": 0,
                                        "transformFlags": 0,
                                        "start": 34,
                                        "end": 39
                                    },
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 27,
                                    "end": 39
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 21,
                            "end": 39
                        },
                        "flags": 6,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 40
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 40
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 32,
                "end": 41
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 42
        }
    ],
    "isModule": false,
    "source": "(class extends Base {static static() {}});",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 42
}
```

### Printed

```javascript
(class extends Base {
    static static() {}
  });
```

### Diagnostics

```javascript
✔ No errors
```

