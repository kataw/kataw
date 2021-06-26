# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/declarations/function/func-decl-errors/autogen.md
- Path: kataw/test/__snapshot__/parser/declarations/function/func-decl-errors/gen/in_block
> :: test: in block
> :: case: for (var x in {}) label: function f() { };
## Options

`````js
{}
`````
## Input

`````js
{for (var x in {}) label: function f() { };}
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
                        "kind": 166,
                        "forKeyword": {
                            "kind": 37757017,
                            "flags": 80,
                            "start": 1,
                            "end": 4
                        },
                        "initializer": {
                            "kind": 341,
                            "varKeyword": {
                                "kind": 37757002,
                                "flags": 64,
                                "start": 6,
                                "end": 9
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
                                            "start": 9,
                                            "end": 11
                                        },
                                        "type": null,
                                        "initializer": null,
                                        "flags": 16,
                                        "start": 9,
                                        "end": 11
                                    }
                                ],
                                "flags": 16,
                                "start": 9,
                                "end": 11
                            },
                            "flags": 16,
                            "start": 1,
                            "end": 14
                        },
                        "inKeyword": {
                            "kind": 21006388,
                            "flags": 64,
                            "start": 11,
                            "end": 14
                        },
                        "expression": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 16,
                                "end": 16
                            },
                            "flags": 48,
                            "start": 14,
                            "end": 17
                        },
                        "statement": {
                            "kind": 163,
                            "label": {
                                "kind": 134299649,
                                "text": "label",
                                "rawText": "label",
                                "flags": 96,
                                "start": 18,
                                "end": 24
                            },
                            "colonToken": {
                                "kind": 21,
                                "flags": 64,
                                "start": 24,
                                "end": 25
                            },
                            "statement": {
                                "kind": 176,
                                "declareKeyword": null,
                                "asyncKeyword": null,
                                "functionKeyword": {
                                    "kind": 37822554,
                                    "flags": 64,
                                    "start": 25,
                                    "end": 34
                                },
                                "asteriskToken": null,
                                "name": {
                                    "kind": 134299649,
                                    "text": "f",
                                    "rawText": "f",
                                    "flags": 96,
                                    "start": 34,
                                    "end": 36
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 36,
                                    "end": 36
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 40,
                                        "end": 40
                                    },
                                    "flags": 32,
                                    "start": 38,
                                    "end": 42
                                },
                                "returnType": null,
                                "flags": 16,
                                "start": 25,
                                "end": 42
                            },
                            "flags": 16,
                            "start": 18,
                            "end": 42
                        },
                        "flags": 80,
                        "start": 1,
                        "end": 42
                    },
                    {
                        "kind": 168,
                        "flags": 16,
                        "start": 42,
                        "end": 43
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 43
            },
            "flags": 16,
            "start": 0,
            "end": 44
        }
    ],
    "isModule": false,
    "source": "{for (var x in {}) label: function f() { };}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 44
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Function declarations cannot be used in a single-statement context - start: 25, end: 34

```

