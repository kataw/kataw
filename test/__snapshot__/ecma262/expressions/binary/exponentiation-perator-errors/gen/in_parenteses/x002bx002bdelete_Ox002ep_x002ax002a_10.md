# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/binary/exponentiation-perator-errors/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/binary/exponentiation-perator-errors/gen/in_parenteses
> :: test: in parenteses
> :: case: ++delete O.p ** 10
## Options

`````js
{}
`````
## Input

`````js
var O = { p: 1 }, x = 10; ; (++delete O.p ** 10)
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
                "transformFlags": 0,
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
                            "transformFlags": 0,
                            "start": 3,
                            "end": 5
                        },
                        "type": null,
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "p",
                                            "rawText": "p",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 9,
                                            "end": 11
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 1,
                                            "rawText": "1",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 12,
                                            "end": 14
                                        },
                                        "flags": 32,
                                        "transformFlags": 128,
                                        "start": 9,
                                        "end": 14
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 9,
                                "end": 14
                            },
                            "flags": 48,
                            "transformFlags": 8,
                            "start": 7,
                            "end": 16
                        },
                        "flags": 16,
                        "transformFlags": 4224,
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
                            "transformFlags": 0,
                            "start": 17,
                            "end": 19
                        },
                        "type": null,
                        "initializer": {
                            "kind": 201392130,
                            "text": 10,
                            "rawText": "10",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 21,
                            "end": 24
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 17,
                        "end": 24
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 3,
                "end": 24
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 25
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
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
                        "kind": 128,
                        "operandToken": {
                            "kind": 196635,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 29,
                            "end": 31
                        },
                        "operand": {
                            "kind": 126,
                            "operandToken": {
                                "kind": 4259886,
                                "flags": 96,
                                "transformFlags": 8192,
                                "start": 31,
                                "end": 37
                            },
                            "operand": {
                                "kind": 129,
                                "member": {
                                    "kind": 134299649,
                                    "text": "O",
                                    "rawText": "O",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 37,
                                    "end": 39
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "p",
                                    "rawText": "p",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 40,
                                    "end": 41
                                },
                                "flags": 96,
                                "transformFlags": 2,
                                "start": 37,
                                "end": 41
                            },
                            "flags": 32,
                            "transformFlags": 16384,
                            "start": 31,
                            "end": 41
                        },
                        "flags": 32,
                        "transformFlags": 16384,
                        "start": 29,
                        "end": 41
                    },
                    "operatorToken": {
                        "kind": 35897,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 41,
                        "end": 44
                    },
                    "right": {
                        "kind": 201392130,
                        "text": 10,
                        "rawText": "10",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 44,
                        "end": 47
                    },
                    "flags": 32,
                    "transformFlags": 5120,
                    "start": 29,
                    "end": 47
                },
                "flags": 27,
                "transformFlags": 0,
                "start": 32,
                "end": 48
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 27,
            "end": 48
        }
    ],
    "isModule": false,
    "source": "var O = { p: 1 }, x = 10; ; (++delete O.p ** 10)",
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
✖ Unary expressions as the left operand of an exponentation expression must be disambiguated with parentheses - start: 41, end: 44
✖ The operand of an increment or decrement operator must be a variable or a property access - start: 41, end: 44

```

