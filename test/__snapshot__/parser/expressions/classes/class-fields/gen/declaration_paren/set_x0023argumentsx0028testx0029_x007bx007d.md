# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-03
- From: kataw8/test\__snapshot__/parser/expressions/classes/class-fields/autogen.md
- Path: kataw8/test\__snapshot__\parser\expressions\classes\class-fields\gen\declaration_paren
> :: test: declaration_paren
> :: case: set #arguments(test) {}
## Input

`````js
(class extends Base { set #arguments(test) {} });
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
                            "kind": 262,
                            "elements": [
                                {
                                    "kind": 278,
                                    "declareToken": null,
                                    "decorators": null,
                                    "generatorToken": null,
                                    "staticKeyword": null,
                                    "asyncKeyword": null,
                                    "setKeyword": null,
                                    "getKeyword": {
                                        "kind": 16499,
                                        "flags": 64,
                                        "start": 21,
                                        "end": 25
                                    },
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 67174651,
                                            "text": "#arguments",
                                            "flags": 96,
                                            "start": 25,
                                            "end": 36
                                        },
                                        "typeParameters": null,
                                        "formalParameters": {
                                            "kind": 214,
                                            "formalParameterList": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "test",
                                                    "rawText": "test",
                                                    "flags": 96,
                                                    "start": 37,
                                                    "end": 41
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 608,
                                            "start": 37,
                                            "end": 42
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 44,
                                                "end": 44
                                            },
                                            "flags": 32,
                                            "start": 42,
                                            "end": 45
                                        },
                                        "flags": 512,
                                        "start": 36,
                                        "end": 45
                                    },
                                    "flags": 512,
                                    "start": 21,
                                    "end": 45
                                }
                            ],
                            "flags": 32,
                            "start": 21,
                            "end": 45
                        },
                        "flags": 6,
                        "start": 32,
                        "end": 47
                    },
                    "flags": 32,
                    "start": 1,
                    "end": 47
                },
                "flags": 32,
                "start": 0,
                "end": 48
            },
            "flags": 16,
            "start": 0,
            "end": 49
        }
    ],
    "isModule": false,
    "source": "(class extends Base { set #arguments(test) {} });",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 49
}
```

### Printed

```javascript

(class   {
    set #arguments(test) {}
  });
```

### Diagnostics

```javascript
✔ No errors
```

