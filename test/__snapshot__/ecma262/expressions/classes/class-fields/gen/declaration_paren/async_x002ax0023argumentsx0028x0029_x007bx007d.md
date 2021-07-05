# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/classes/class-fields/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/classes/class-fields/gen/declaration_paren
> :: test: declaration_paren
> :: case: async *#arguments() {}
## Options

`````js
{}
`````
## Input

`````js
(class extends Base { async *#arguments() {} });
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
                                    "asyncKeyword": {
                                        "kind": 82031,
                                        "flags": 64,
                                        "start": 21,
                                        "end": 27
                                    },
                                    "setKeyword": null,
                                    "getKeyword": null,
                                    "asteriskToken": {
                                        "kind": 67143222,
                                        "flags": 64,
                                        "start": 27,
                                        "end": 29
                                    },
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 67191035,
                                            "text": "#arguments",
                                            "rawText": "#arguments",
                                            "flags": 96,
                                            "start": 29,
                                            "end": 39
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 384,
                                            "start": 40,
                                            "end": 41
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 43,
                                                "end": 43
                                            },
                                            "flags": 32,
                                            "start": 41,
                                            "end": 44
                                        },
                                        "flags": 384,
                                        "start": 39,
                                        "end": 44
                                    },
                                    "flags": 384,
                                    "start": 21,
                                    "end": 44
                                }
                            ],
                            "flags": 32,
                            "start": 21,
                            "end": 44
                        },
                        "flags": 6,
                        "start": 32,
                        "end": 46
                    },
                    "flags": 32,
                    "start": 1,
                    "end": 46
                },
                "flags": 0,
                "start": 32,
                "end": 47
            },
            "flags": 16,
            "start": 0,
            "end": 48
        }
    ],
    "isModule": false,
    "source": "(class extends Base { async *#arguments() {} });",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 48
}
```

### Printed

```javascript

(class   extends Base {
    async * #arguments() {}
  });
```

### Diagnostics

```javascript
✔ No errors
```

