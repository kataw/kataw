# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/classes/class-fields/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/classes/class-fields/gen/expression_paren
> :: test: expression_paren
> :: case: set #await(test) {}
## Options

`````js
{}
`````
## Input

`````js
(class { set #await(test) {} });
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
                                    "asyncKeyword": null,
                                    "setKeyword": null,
                                    "getKeyword": {
                                        "kind": 16499,
                                        "flags": 64,
                                        "start": 8,
                                        "end": 12
                                    },
                                    "asteriskToken": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 67191035,
                                            "text": "#await",
                                            "rawText": "#await",
                                            "flags": 96,
                                            "start": 12,
                                            "end": 19
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "test",
                                                    "rawText": "test",
                                                    "flags": 96,
                                                    "start": 20,
                                                    "end": 24
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 608,
                                            "start": 20,
                                            "end": 25
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 27,
                                                "end": 27
                                            },
                                            "flags": 32,
                                            "start": 25,
                                            "end": 28
                                        },
                                        "flags": 512,
                                        "start": 19,
                                        "end": 28
                                    },
                                    "flags": 512,
                                    "start": 8,
                                    "end": 28
                                }
                            ],
                            "flags": 32,
                            "start": 8,
                            "end": 28
                        },
                        "flags": 6,
                        "start": 32,
                        "end": 30
                    },
                    "flags": 32,
                    "start": 1,
                    "end": 30
                },
                "flags": 0,
                "start": 32,
                "end": 31
            },
            "flags": 16,
            "start": 0,
            "end": 32
        }
    ],
    "isModule": false,
    "source": "(class { set #await(test) {} });",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 32
}
```

### Printed

```javascript

(class  {
    set #await(test) {}
  });
```

### Diagnostics

```javascript
✔ No errors
```

