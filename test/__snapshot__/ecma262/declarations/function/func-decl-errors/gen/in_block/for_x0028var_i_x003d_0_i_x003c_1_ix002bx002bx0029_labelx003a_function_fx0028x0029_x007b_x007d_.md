# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/declarations/function/func-decl-errors/autogen.md
- Path: kataw/test/__snapshot__/ecma262/declarations/function/func-decl-errors/gen/in_block
> :: test: in block
> :: case: for (var i = 0; i < 1; i++) label: function f() { };
## Options

`````js
{}
`````
## Input

`````js
{for (var i = 0; i < 1; i++) label: function f() { };}
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
                        "kind": 165,
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
                                            "text": "i",
                                            "rawText": "i",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 9,
                                            "end": 11
                                        },
                                        "type": null,
                                        "initializer": {
                                            "kind": 201392130,
                                            "text": 0,
                                            "rawText": "0",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 13,
                                            "end": 15
                                        },
                                        "flags": 16,
                                        "transformFlags": 4224,
                                        "start": 9,
                                        "end": 15
                                    }
                                ],
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 9,
                                "end": 15
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 1,
                            "end": 16
                        },
                        "condition": {
                            "kind": 127,
                            "operandToken": {
                                "kind": 196635,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 25,
                                "end": 27
                            },
                            "operand": {
                                "kind": 134299649,
                                "text": "i",
                                "rawText": "i",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 23,
                                "end": 25
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 23,
                            "end": 27
                        },
                        "incrementor": {
                            "kind": 198,
                            "left": {
                                "kind": 134299649,
                                "text": "i",
                                "rawText": "i",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 16,
                                "end": 18
                            },
                            "operatorToken": {
                                "kind": 536971330,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 18,
                                "end": 20
                            },
                            "right": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 20,
                                "end": 22
                            },
                            "flags": 96,
                            "transformFlags": 5120,
                            "start": 16,
                            "end": 22
                        },
                        "statement": {
                            "kind": 163,
                            "label": {
                                "kind": 134299649,
                                "text": "label",
                                "rawText": "label",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 28,
                                "end": 34
                            },
                            "colonToken": {
                                "kind": 21,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 34,
                                "end": 35
                            },
                            "statement": {
                                "kind": 176,
                                "declareKeyword": null,
                                "asyncKeyword": null,
                                "functionKeyword": {
                                    "kind": 37822554,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 35,
                                    "end": 44
                                },
                                "asteriskToken": null,
                                "name": {
                                    "kind": 134299649,
                                    "text": "f",
                                    "rawText": "f",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 44,
                                    "end": 46
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 47,
                                    "end": 47
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 50,
                                        "end": 50
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 48,
                                    "end": 52
                                },
                                "returnType": null,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 35,
                                "end": 52
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 28,
                            "end": 52
                        },
                        "flags": 80,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 52
                    },
                    {
                        "kind": 168,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 52,
                        "end": 53
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 1,
                "end": 53
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 54
        }
    ],
    "isModule": false,
    "source": "{for (var i = 0; i < 1; i++) label: function f() { };}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 54
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Function declarations cannot be used in a single-statement context - start: 35, end: 44

```

