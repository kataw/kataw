# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/classes/class-fields/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/classes/class-fields/gen/expression_paren
> :: test: expression_paren
> :: case: async *#arguments() {}
## Options

`````js
{}
`````
## Input

`````js
(class { async *#arguments() {} });
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
                                        "start": 8,
                                        "end": 14
                                    },
                                    "setKeyword": null,
                                    "getKeyword": null,
                                    "asteriskToken": {
                                        "kind": 67143222,
                                        "flags": 64,
                                        "start": 14,
                                        "end": 16
                                    },
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 67191035,
                                            "text": "#arguments",
                                            "rawText": "#arguments",
                                            "flags": 96,
                                            "start": 16,
                                            "end": 26
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 384,
                                            "start": 27,
                                            "end": 28
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 30,
                                                "end": 30
                                            },
                                            "flags": 32,
                                            "start": 28,
                                            "end": 31
                                        },
                                        "flags": 384,
                                        "start": 26,
                                        "end": 31
                                    },
                                    "flags": 384,
                                    "start": 8,
                                    "end": 31
                                }
                            ],
                            "flags": 32,
                            "start": 8,
                            "end": 31
                        },
                        "flags": 6,
                        "start": 32,
                        "end": 33
                    },
                    "flags": 32,
                    "start": 1,
                    "end": 33
                },
                "flags": 32,
                "start": 0,
                "end": 34
            },
            "flags": 16,
            "start": 0,
            "end": 35
        }
    ],
    "isModule": false,
    "source": "(class { async *#arguments() {} });",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 35
}
```

### Printed

```javascript

(class  {
  async * #arguments() {}
});

```

### Diagnostics

```javascript
✔ No errors
```

