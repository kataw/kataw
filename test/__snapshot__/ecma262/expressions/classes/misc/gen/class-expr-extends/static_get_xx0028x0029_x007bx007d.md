# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/classes/misc/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/classes/misc/gen/class-expr-extends
> :: test: class-expr-extends
> :: case: static get x() {}
## Options

`````js
{}
`````
## Input

`````js
(class extends Base {static get x() {}});
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
                                    "setKeyword": {
                                        "kind": 16498,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 27,
                                        "end": 31
                                    },
                                    "getKeyword": null,
                                    "asteriskToken": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 31,
                                            "end": 33
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 1024,
                                            "transformFlags": 0,
                                            "start": 34,
                                            "end": 35
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
                                                "start": 37,
                                                "end": 37
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 35,
                                            "end": 38
                                        },
                                        "flags": 1024,
                                        "transformFlags": 0,
                                        "start": 33,
                                        "end": 38
                                    },
                                    "flags": 1024,
                                    "transformFlags": 0,
                                    "start": 27,
                                    "end": 38
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 21,
                            "end": 38
                        },
                        "flags": 6,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 39
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 39
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 32,
                "end": 40
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 41
        }
    ],
    "isModule": false,
    "source": "(class extends Base {static get x() {}});",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 41
}
```

### Printed

```javascript
(class extends Base {
    static get x() {}
  });
```

### Diagnostics

```javascript
✔ No errors
```

