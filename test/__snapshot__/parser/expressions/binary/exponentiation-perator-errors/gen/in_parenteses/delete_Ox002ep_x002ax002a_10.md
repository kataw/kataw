# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-05
- From: kataw8/test\__snapshot__/parser/expressions/binary/exponentiation-perator-errors/autogen.md
- Path: kataw8/test\__snapshot__\parser\expressions\binary\exponentiation-perator-errors\gen\in_parenteses
> :: test: in parenteses
> :: case: delete O.p ** 10
## Input

`````js
var O = { p: 1 }, x = 10; ; (delete O.p ** 10)
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
                            "kind": 4259886,
                            "flags": 64,
                            "start": 29,
                            "end": 35
                        },
                        "operand": {
                            "kind": 129,
                            "member": {
                                "kind": 134299649,
                                "text": "O",
                                "rawText": "O",
                                "flags": 96,
                                "start": 35,
                                "end": 37
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "p",
                                "rawText": "p",
                                "flags": 96,
                                "start": 38,
                                "end": 39
                            },
                            "flags": 536870944,
                            "start": 35,
                            "end": 39
                        },
                        "flags": 32,
                        "start": 29,
                        "end": 39
                    },
                    "operatorToken": {
                        "kind": 35897,
                        "flags": 64,
                        "start": 39,
                        "end": 42
                    },
                    "right": {
                        "kind": 201392130,
                        "text": 10,
                        "rawText": "10",
                        "flags": 96,
                        "start": 42,
                        "end": 45
                    },
                    "flags": 32,
                    "start": 29,
                    "end": 45
                },
                "flags": 32,
                "start": 27,
                "end": 46
            },
            "flags": 16,
            "start": 27,
            "end": 46
        }
    ],
    "isModule": false,
    "source": "var O = { p: 1 }, x = 10; ; (delete O.p ** 10)",
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
✖ Unary expressions as the left operand of an exponentation expression must be disambiguated with parentheses - start: 39, end: 42

```

