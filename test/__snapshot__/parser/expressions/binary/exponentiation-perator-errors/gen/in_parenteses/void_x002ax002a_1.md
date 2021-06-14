# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/binary/exponentiation-perator-errors/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/binary/exponentiation-perator-errors/gen/in_parenteses
> :: test: in parenteses
> :: case: void ** 1
## Options

`````js
{}
`````
## Input

`````js
var O = { p: 1 }, x = 10; ; (void ** 1)
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
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 198,
                    "left": {
                        "kind": 126,
                        "operandToken": {
                            "kind": 138477615,
                            "flags": 96,
                            "start": 29,
                            "end": 33
                        },
                        "operand": {
                            "kind": 16637,
                            "text": "",
                            "flags": 64,
                            "start": 33,
                            "end": 33
                        },
                        "flags": 32,
                        "start": 29,
                        "end": 33
                    },
                    "operatorToken": {
                        "kind": 35897,
                        "flags": 96,
                        "start": 33,
                        "end": 36
                    },
                    "right": {
                        "kind": 201392130,
                        "text": 1,
                        "rawText": "1",
                        "flags": 96,
                        "start": 36,
                        "end": 38
                    },
                    "flags": 32,
                    "start": 29,
                    "end": 38
                },
                "flags": 32,
                "start": 27,
                "end": 39
            },
            "flags": 16,
            "start": 27,
            "end": 39
        }
    ],
    "isModule": false,
    "source": "var O = { p: 1 }, x = 10; ; (void ** 1)",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 39
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 33, end: 36
✖ Unary expressions as the left operand of an exponentation expression must be disambiguated with parentheses - start: 33, end: 36

```

