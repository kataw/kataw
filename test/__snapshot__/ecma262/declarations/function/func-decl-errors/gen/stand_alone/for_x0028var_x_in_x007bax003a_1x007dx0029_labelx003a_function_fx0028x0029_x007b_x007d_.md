# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/declarations/function/func-decl-errors/autogen.md
- Path: kataw/test/__snapshot__/parser/declarations/function/func-decl-errors/gen/stand_alone
> :: test: stand alone
> :: case: for (var x in {a: 1}) label: function f() { };
## Options

`````js
{}
`````
## Input

`````js
for (var x in {a: 1}) label: function f() { };
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 166,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "initializer": {
                "kind": 341,
                "varKeyword": {
                    "kind": 37757002,
                    "flags": 64,
                    "start": 5,
                    "end": 8
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
                                "start": 8,
                                "end": 10
                            },
                            "type": null,
                            "initializer": null,
                            "flags": 16,
                            "start": 8,
                            "end": 10
                        }
                    ],
                    "flags": 16,
                    "start": 8,
                    "end": 10
                },
                "flags": 16,
                "start": 0,
                "end": 13
            },
            "inKeyword": {
                "kind": 21006388,
                "flags": 64,
                "start": 10,
                "end": 13
            },
            "expression": {
                "kind": 220,
                "propertyList": {
                    "kind": 218,
                    "properties": [
                        {
                            "kind": 219,
                            "asteriskToken": null,
                            "left": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 15,
                                "end": 16
                            },
                            "right": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "start": 17,
                                "end": 19
                            },
                            "flags": 32,
                            "start": 15,
                            "end": 19
                        }
                    ],
                    "trailingComma": false,
                    "flags": 16,
                    "start": 15,
                    "end": 19
                },
                "flags": 48,
                "start": 13,
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
                    "asteriskToken": null,
                    "name": {
                        "kind": 134299649,
                        "text": "f",
                        "rawText": "f",
                        "flags": 96,
                        "start": 37,
                        "end": 39
                    },
                    "typeParameters": null,
                    "formalParameterList": {
                        "kind": 214,
                        "formalParameters": [],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 39,
                        "end": 39
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "flags": 32,
                            "start": 43,
                            "end": 43
                        },
                        "flags": 32,
                        "start": 41,
                        "end": 45
                    },
                    "returnType": null,
                    "flags": 16,
                    "start": 28,
                    "end": 45
                },
                "flags": 16,
                "start": 21,
                "end": 45
            },
            "flags": 80,
            "start": 0,
            "end": 45
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 45,
            "end": 46
        }
    ],
    "isModule": false,
    "source": "for (var x in {a: 1}) label: function f() { };",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 46
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Function declarations cannot be used in a single-statement context - start: 28, end: 37

```

