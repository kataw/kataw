# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw/test/__snapshot__/parser/expressions/classes/misc/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/classes/misc/gen/class-expr
> :: test: class-expr
> :: case: static *async(){}
## Input

`````js
(class { static *async(){} });
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
                                    "generatorToken": {
                                        "kind": 67143222,
                                        "flags": 64,
                                        "start": 15,
                                        "end": 17
                                    },
                                    "staticKeyword": {
                                        "kind": 8388716,
                                        "flags": 64,
                                        "start": 8,
                                        "end": 15
                                    },
                                    "asyncKeyword": null,
                                    "setKeyword": null,
                                    "getKeyword": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "async",
                                            "rawText": "async",
                                            "flags": 96,
                                            "start": 17,
                                            "end": 22
                                        },
                                        "typeParameters": null,
                                        "formalParameters": {
                                            "kind": 214,
                                            "formalParameterList": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "start": 23,
                                            "end": 24
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 25,
                                                "end": 25
                                            },
                                            "flags": 32,
                                            "start": 24,
                                            "end": 26
                                        },
                                        "flags": 0,
                                        "start": 22,
                                        "end": 26
                                    },
                                    "flags": 0,
                                    "start": 15,
                                    "end": 26
                                }
                            ],
                            "flags": 32,
                            "start": 8,
                            "end": 26
                        },
                        "flags": 6,
                        "start": 32,
                        "end": 28
                    },
                    "flags": 32,
                    "start": 1,
                    "end": 28
                },
                "flags": 32,
                "start": 0,
                "end": 29
            },
            "flags": 16,
            "start": 0,
            "end": 30
        }
    ],
    "isModule": false,
    "source": "(class { static *async(){} });",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 30
}
```

### Printed

```javascript

(class  {
    static static async() {}
  });
```

### Diagnostics

```javascript
✔ No errors
```

