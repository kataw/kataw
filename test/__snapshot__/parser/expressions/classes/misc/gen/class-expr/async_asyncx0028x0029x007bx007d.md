# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/classes/misc/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/classes/misc/gen/class-expr
> :: test: class-expr
> :: case: async async(){}
## Options

`````js
{}
`````
## Input

`````js
(class { async async(){} });
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
                                    "asteriskToken": null,
                                    "staticKeyword": null,
                                    "asyncKeyword": {
                                        "kind": 82031,
                                        "flags": 64,
                                        "start": 8,
                                        "end": 14
                                    },
                                    "setKeyword": null,
                                    "getKeyword": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "async",
                                            "rawText": "async",
                                            "flags": 96,
                                            "start": 14,
                                            "end": 20
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 256,
                                            "start": 21,
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
                                                "start": 23,
                                                "end": 23
                                            },
                                            "flags": 32,
                                            "start": 22,
                                            "end": 24
                                        },
                                        "flags": 256,
                                        "start": 20,
                                        "end": 24
                                    },
                                    "flags": 256,
                                    "start": 8,
                                    "end": 24
                                }
                            ],
                            "flags": 32,
                            "start": 8,
                            "end": 24
                        },
                        "flags": 6,
                        "start": 32,
                        "end": 26
                    },
                    "flags": 32,
                    "start": 1,
                    "end": 26
                },
                "flags": 32,
                "start": 0,
                "end": 27
            },
            "flags": 16,
            "start": 0,
            "end": 28
        }
    ],
    "isModule": false,
    "source": "(class { async async(){} });",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 28
}
```

### Printed

```javascript

(class  {
    async async() {}
  });
```

### Diagnostics

```javascript
✔ No errors
```

