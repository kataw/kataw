# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/declarations/function/async-generator/autogen.md
- Path: kataw/test/__snapshot__/parser/declarations/function/async-generator/gen/expression
> :: test: expression
> :: case: x = class extends (await 10) {}
## Options

`````js
{}
`````
## Input

`````js
({ async * gen () {x = class extends (await 10) {}} })
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
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 351,
                                "asyncKeyword": {
                                    "kind": 82031,
                                    "flags": 352,
                                    "start": 2,
                                    "end": 8
                                },
                                "asteriskToken": {
                                    "kind": 67143222,
                                    "flags": 64,
                                    "start": 8,
                                    "end": 10
                                },
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "gen",
                                        "rawText": "gen",
                                        "flags": 96,
                                        "start": 10,
                                        "end": 14
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 416,
                                        "start": 16,
                                        "end": 17
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [
                                                {
                                                    "kind": 120,
                                                    "expression": {
                                                        "kind": 125,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 96,
                                                            "start": 19,
                                                            "end": 20
                                                        },
                                                        "operatorToken": {
                                                            "kind": 4125,
                                                            "flags": 96,
                                                            "start": 20,
                                                            "end": 22
                                                        },
                                                        "right": {
                                                            "kind": 189,
                                                            "decorators": null,
                                                            "classKeyword": {
                                                                "kind": 37822544,
                                                                "flags": 64,
                                                                "start": 22,
                                                                "end": 28
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
                                                                        "start": 28,
                                                                        "end": 36
                                                                    },
                                                                    "expression": {
                                                                        "kind": 121,
                                                                        "expression": {
                                                                            "kind": 208,
                                                                            "awaitKeyword": {
                                                                                "kind": 82196,
                                                                                "flags": 64,
                                                                                "start": 38,
                                                                                "end": 43
                                                                            },
                                                                            "expression": {
                                                                                "kind": 201392130,
                                                                                "text": 10,
                                                                                "rawText": "10",
                                                                                "flags": 96,
                                                                                "start": 43,
                                                                                "end": 46
                                                                            },
                                                                            "flags": 32,
                                                                            "start": 38,
                                                                            "end": 46
                                                                        },
                                                                        "flags": 36,
                                                                        "start": 32,
                                                                        "end": 47
                                                                    },
                                                                    "typeParameter": null,
                                                                    "flags": 16,
                                                                    "start": 36,
                                                                    "end": 47
                                                                },
                                                                "body": {
                                                                    "kind": 303,
                                                                    "elements": [],
                                                                    "flags": 32,
                                                                    "start": 49,
                                                                    "end": 49
                                                                },
                                                                "flags": 28,
                                                                "start": 32,
                                                                "end": 50
                                                            },
                                                            "flags": 32,
                                                            "start": 22,
                                                            "end": 50
                                                        },
                                                        "flags": 32,
                                                        "start": 19,
                                                        "end": 50
                                                    },
                                                    "flags": 16,
                                                    "start": 19,
                                                    "end": 50
                                                }
                                            ],
                                            "flags": 32,
                                            "start": 19,
                                            "end": 50
                                        },
                                        "flags": 32,
                                        "start": 17,
                                        "end": 51
                                    },
                                    "flags": 416,
                                    "start": 14,
                                    "end": 51
                                },
                                "flags": 32,
                                "start": 2,
                                "end": 51
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 2,
                        "end": 51
                    },
                    "flags": 48,
                    "start": 1,
                    "end": 53
                },
                "flags": 0,
                "start": 34,
                "end": 54
            },
            "flags": 16,
            "start": 0,
            "end": 54
        }
    ],
    "isModule": false,
    "source": "({ async * gen () {x = class extends (await 10) {}} })",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 54
}
```

### Printed

```javascript

({ async * gen() {
    x = class  extends (await 10) {
    };
  } });

```

### Diagnostics

```javascript
✔ No errors
```

