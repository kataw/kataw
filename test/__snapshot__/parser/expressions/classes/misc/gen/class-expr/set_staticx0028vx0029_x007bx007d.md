# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-02
- From: kataw8/test\__snapshot__/parser/expressions/classes/misc/autogen.md
- Path: kataw8/test\__snapshot__\parser\expressions\classes\misc\gen\class-expr
> :: test: class-expr
> :: case: set static(v) {}
## Input

`````js
(class { set static(v) {} });
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
                        "classHeritage": null,
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
                                        "start": 8,
                                        "end": 12
                                    },
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "static",
                                            "rawText": "static",
                                            "flags": 96,
                                            "start": 12,
                                            "end": 19
                                        },
                                        "typeParameters": null,
                                        "formalParameters": {
                                            "kind": 214,
                                            "formalParameterList": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "v",
                                                    "rawText": "v",
                                                    "flags": 96,
                                                    "start": 20,
                                                    "end": 21
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 608,
                                            "start": 20,
                                            "end": 22
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 24,
                                                "end": 24
                                            },
                                            "flags": 32,
                                            "start": 22,
                                            "end": 25
                                        },
                                        "flags": 512,
                                        "start": 19,
                                        "end": 25
                                    },
                                    "flags": 512,
                                    "start": 8,
                                    "end": 25
                                }
                            ],
                            "flags": 32,
                            "start": 8,
                            "end": 25
                        },
                        "flags": 6,
                        "start": 32,
                        "end": 27
                    },
                    "flags": 32,
                    "start": 1,
                    "end": 27
                },
                "flags": 32,
                "start": 0,
                "end": 28
            },
            "flags": 16,
            "start": 0,
            "end": 29
        }
    ],
    "isModule": false,
    "source": "(class { set static(v) {} });",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 29
}
```

### Printed

```javascript

(class  {
    set static(v) {}
  });
```

### Diagnostics

```javascript
✔ No errors
```

