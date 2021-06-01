# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-01
- From: kataw8/test\__snapshot__/parser/declarations/function/func-decl-errors/autogen.md
- Path: kataw8/test\__snapshot__\parser\declarations\function\func-decl-errors\gen\in_block
> :: test: in block
> :: case: var x; for (x in {}) label: function foo() {}
## Input

`````js
{var x; for (x in {}) label: function foo() {}}
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 155,
                        "declareKeyword": null,
                        "varKeyword": {
                            "kind": 37757002,
                            "flags": 80,
                            "start": 1,
                            "end": 4
                        },
                        "declarationList": {
                            "kind": 156,
                            "declarations": [
                                {
                                    "kind": 157,
                                    "binding": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 4,
                                        "end": 6
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": null,
                                    "flags": 16,
                                    "start": 4,
                                    "end": 6
                                }
                            ],
                            "flags": 16,
                            "start": 4,
                            "end": 6
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 7
                    },
                    {
                        "kind": 166,
                        "forKeyword": {
                            "kind": 37757017,
                            "flags": 80,
                            "start": 7,
                            "end": 11
                        },
                        "initializer": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 13,
                            "end": 14
                        },
                        "inKeyword": {
                            "kind": 21006388,
                            "flags": 64,
                            "start": 14,
                            "end": 17
                        },
                        "expression": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 19,
                                "end": 19
                            },
                            "flags": 48,
                            "start": 17,
                            "end": 20
                        },
                        "statement": {
                            "kind": 163,
                            "label": {
                                "kind": 134299649,
                                "text": "label",
                                "rawText": "label",
                                "flags": 96,
                                "start": 21,
                                "end": 27
                            },
                            "colonToken": {
                                "kind": 21,
                                "flags": 64,
                                "start": 27,
                                "end": 28
                            },
                            "statement": {
                                "kind": 176,
                                "declareKeyword": null,
                                "asyncKeyword": null,
                                "functionKeyword": {
                                    "kind": 37822554,
                                    "flags": 64,
                                    "start": 28,
                                    "end": 37
                                },
                                "generatorToken": null,
                                "name": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "start": 37,
                                    "end": 41
                                },
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 41,
                                    "end": 43
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 45,
                                        "end": 45
                                    },
                                    "flags": 32,
                                    "start": 43,
                                    "end": 46
                                },
                                "typeParameters": null,
                                "returnType": null,
                                "flags": 16,
                                "start": 28,
                                "end": 46
                            },
                            "flags": 16,
                            "start": 21,
                            "end": 46
                        },
                        "flags": 16,
                        "start": 7,
                        "end": 46
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 46
            },
            "flags": 16,
            "start": 0,
            "end": 47
        }
    ],
    "isModule": false,
    "source": "{var x; for (x in {}) label: function foo() {}}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 47
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Function declarations cannot be used in a single-statement context - start: 28, end: 37

```

