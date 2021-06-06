# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw/test/__snapshot__/parser/expressions/binary/exponentiation-perator-errors/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/binary/exponentiation-perator-errors/gen/in_if-statement
> :: test: in if-statement
> :: case: ++delete O.p ** 10
## Input

`````js
var O = { p: 1 }, x = 10; ; if (++delete O.p ** 10) { foo(); }
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "O",
                            "rawText": "O",
                            "flags": 96,
                            "start": 3,
                            "end": 5
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 219,
                                        "generatorToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "p",
                                            "rawText": "p",
                                            "flags": 96,
                                            "start": 9,
                                            "end": 11
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 1,
                                            "rawText": "1",
                                            "flags": 96,
                                            "start": 12,
                                            "end": 14
                                        },
                                        "flags": 32,
                                        "start": 9,
                                        "end": 14
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 9,
                                "end": 14
                            },
                            "flags": 48,
                            "start": 7,
                            "end": 16
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 16
                    },
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 17,
                            "end": 19
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 201392130,
                            "text": 10,
                            "rawText": "10",
                            "flags": 96,
                            "start": 21,
                            "end": 24
                        },
                        "flags": 16,
                        "start": 17,
                        "end": 24
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 24
            },
            "flags": 16,
            "start": 0,
            "end": 25
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 25,
            "end": 27
        },
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 80,
                "start": 27,
                "end": 30
            },
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 128,
                    "operandToken": {
                        "kind": 196635,
                        "flags": 64,
                        "start": 32,
                        "end": 34
                    },
                    "operand": {
                        "kind": 126,
                        "operandToken": {
                            "kind": 4259886,
                            "flags": 64,
                            "start": 34,
                            "end": 40
                        },
                        "operand": {
                            "kind": 129,
                            "member": {
                                "kind": 134299649,
                                "text": "O",
                                "rawText": "O",
                                "flags": 96,
                                "start": 40,
                                "end": 42
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "p",
                                "rawText": "p",
                                "flags": 96,
                                "start": 43,
                                "end": 44
                            },
                            "flags": 536870944,
                            "start": 40,
                            "end": 44
                        },
                        "flags": 32,
                        "start": 34,
                        "end": 44
                    },
                    "flags": 32,
                    "start": 32,
                    "end": 44
                },
                "operatorToken": {
                    "kind": 35897,
                    "flags": 64,
                    "start": 44,
                    "end": 47
                },
                "right": {
                    "kind": 201392130,
                    "text": 10,
                    "rawText": "10",
                    "flags": 96,
                    "start": 47,
                    "end": 50
                },
                "flags": 32,
                "start": 32,
                "end": 50
            },
            "consequent": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "start": 53,
                                    "end": 57
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 58,
                                    "end": 58
                                },
                                "flags": 268435488,
                                "start": 53,
                                "end": 59
                            },
                            "flags": 16,
                            "start": 53,
                            "end": 60
                        }
                    ],
                    "flags": 16,
                    "start": 53,
                    "end": 60
                },
                "flags": 16,
                "start": 51,
                "end": 62
            },
            "elseKeyword": null,
            "alternate": null,
            "flags": 16,
            "start": 27,
            "end": 62
        }
    ],
    "isModule": false,
    "source": "var O = { p: 1 }, x = 10; ; if (++delete O.p ** 10) { foo(); }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 62
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Unary expressions as the left operand of an exponentation expression must be disambiguated with parentheses - start: 44, end: 47
✖ The operand of an increment or decrement operator must be a variable or a property access - start: 44, end: 47

```

