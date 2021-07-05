# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/classes/class-fields/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/classes/class-fields/gen/expression_paren
> :: test: expression_paren
> :: case: set #arguments(test) {}
## Options

`````js
{}
`````
## Input

`````js
(class { set #arguments(test) {} });
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
                                            "text": "#arguments",
                                            "rawText": "#arguments",
                                            "flags": 96,
                                            "start": 12,
                                            "end": 23
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
                                                    "start": 24,
                                                    "end": 28
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 608,
                                            "start": 24,
                                            "end": 29
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 31,
                                                "end": 31
                                            },
                                            "flags": 32,
                                            "start": 29,
                                            "end": 32
                                        },
                                        "flags": 512,
                                        "start": 23,
                                        "end": 32
                                    },
                                    "flags": 512,
                                    "start": 8,
                                    "end": 32
                                }
                            ],
                            "flags": 32,
                            "start": 8,
                            "end": 32
                        },
                        "flags": 6,
                        "start": 32,
                        "end": 34
                    },
                    "flags": 32,
                    "start": 1,
                    "end": 34
                },
                "flags": 0,
                "start": 32,
                "end": 35
            },
            "flags": 16,
            "start": 0,
            "end": 36
        }
    ],
    "isModule": false,
    "source": "(class { set #arguments(test) {} });",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 36
}
```

### Printed

```javascript

(class  {
    set #arguments(test) {}
  });
```

### Diagnostics

```javascript
✔ No errors
```

