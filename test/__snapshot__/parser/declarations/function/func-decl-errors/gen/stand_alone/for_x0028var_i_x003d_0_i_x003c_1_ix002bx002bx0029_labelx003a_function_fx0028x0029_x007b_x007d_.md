# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-11
- From: kataw/test/__snapshot__/parser/declarations/function/func-decl-errors/autogen.md
- Path: kataw/test/__snapshot__/parser/declarations/function/func-decl-errors/gen/stand_alone
> :: test: stand alone
> :: case: for (var i = 0; i < 1; i++) label: function f() { };
## Options

`````js
{}
`````
## Input

`````js
for (var i = 0; i < 1; i++) label: function f() { };
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "initializer": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "i",
                            "rawText": "i",
                            "flags": 96,
                            "start": 8,
                            "end": 10
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 201392130,
                            "text": 0,
                            "rawText": "0",
                            "flags": 96,
                            "start": 12,
                            "end": 14
                        },
                        "flags": 16,
                        "start": 8,
                        "end": 14
                    }
                ],
                "flags": 16,
                "start": 8,
                "end": 14
            },
            "condition": {
                "kind": 127,
                "operandToken": {
                    "kind": 196635,
                    "flags": 96,
                    "start": 24,
                    "end": 26
                },
                "operand": {
                    "kind": 134299649,
                    "text": "i",
                    "rawText": "i",
                    "flags": 96,
                    "start": 22,
                    "end": 24
                },
                "flags": 32,
                "start": 22,
                "end": 26
            },
            "incrementor": {
                "kind": 198,
                "left": {
                    "kind": 134299649,
                    "text": "i",
                    "rawText": "i",
                    "flags": 96,
                    "start": 15,
                    "end": 17
                },
                "operatorToken": {
                    "kind": 536971330,
                    "flags": 96,
                    "start": 17,
                    "end": 19
                },
                "right": {
                    "kind": 201392130,
                    "text": 1,
                    "rawText": "1",
                    "flags": 96,
                    "start": 19,
                    "end": 21
                },
                "flags": 32,
                "start": 15,
                "end": 21
            },
            "statement": {
                "kind": 163,
                "label": {
                    "kind": 134299649,
                    "text": "label",
                    "rawText": "label",
                    "flags": 96,
                    "start": 27,
                    "end": 33
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 64,
                    "start": 33,
                    "end": 34
                },
                "statement": {
                    "kind": 176,
                    "declareKeyword": null,
                    "asyncKeyword": null,
                    "functionKeyword": {
                        "kind": 37822554,
                        "flags": 64,
                        "start": 34,
                        "end": 43
                    },
                    "generatorToken": null,
                    "name": {
                        "kind": 134299649,
                        "text": "f",
                        "rawText": "f",
                        "flags": 96,
                        "start": 43,
                        "end": 45
                    },
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 45,
                        "end": 47
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "flags": 32,
                            "start": 49,
                            "end": 49
                        },
                        "flags": 32,
                        "start": 47,
                        "end": 51
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "flags": 16,
                    "start": 34,
                    "end": 51
                },
                "flags": 16,
                "start": 27,
                "end": 51
            },
            "flags": 80,
            "start": 0,
            "end": 51
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 51,
            "end": 52
        }
    ],
    "isModule": false,
    "source": "for (var i = 0; i < 1; i++) label: function f() { };",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 52
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Function declarations cannot be used in a single-statement context - start: 34, end: 43

```

