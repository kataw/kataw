# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/declarations/function/func-decl-errors/autogen.md
- Path: kataw/test/__snapshot__/ecma262/declarations/function/func-decl-errors/gen/in_block
> :: test: in block
> :: case: for (var x in {a: 1}) label: function f() { };
## Options

`````js
{}
`````
## Input

`````js
{for (var x in {a: 1}) label: function f() { };}
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
                            "transformFlags": 0,
                            "start": 1,
                            "end": 4
                        },
                        "initializer": {
                            "kind": 341,
                            "varKeyword": {
                                "kind": 37757002,
                                "flags": 64,
                                "transformFlags": 0,
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
                                            "transformFlags": 0,
                                            "start": 9,
                                            "end": 11
                                        },
                                        "type": null,
                                        "initializer": null,
                                        "flags": 16,
                                        "transformFlags": 4224,
                                        "start": 9,
                                        "end": 11
                                    }
                                ],
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 9,
                                "end": 11
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 1,
                            "end": 14
                        },
                        "inKeyword": {
                            "kind": 21006388,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 11,
                            "end": 14
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
                                            "transformFlags": 0,
                                            "start": 16,
                                            "end": 17
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 1,
                                            "rawText": "1",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 18,
                                            "end": 20
                                        },
                                        "flags": 32,
                                        "transformFlags": 128,
                                        "start": 16,
                                        "end": 20
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 16,
                                "end": 20
                            },
                            "flags": 48,
                            "transformFlags": 8,
                            "start": 14,
                            "end": 21
                        },
                        "statement": {
                            "kind": 163,
                            "label": {
                                "kind": 134299649,
                                "text": "label",
                                "rawText": "label",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 22,
                                "end": 28
                            },
                            "colonToken": {
                                "kind": 21,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 28,
                                "end": 29
                            },
                            "statement": {
                                "kind": 176,
                                "declareKeyword": null,
                                "asyncKeyword": null,
                                "functionKeyword": {
                                    "kind": 37822554,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 29,
                                    "end": 38
                                },
                                "asteriskToken": null,
                                "name": {
                                    "kind": 134299649,
                                    "text": "f",
                                    "rawText": "f",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 38,
                                    "end": 40
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 41,
                                    "end": 41
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 44,
                                        "end": 44
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 42,
                                    "end": 46
                                },
                                "returnType": null,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 29,
                                "end": 46
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 22,
                            "end": 46
                        },
                        "flags": 80,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 46
                    },
                    {
                        "kind": 168,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 46,
                        "end": 47
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 1,
                "end": 47
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 48
        }
    ],
    "isModule": false,
    "source": "{for (var x in {a: 1}) label: function f() { };}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 48
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Function declarations cannot be used in a single-statement context - start: 29, end: 38

```

