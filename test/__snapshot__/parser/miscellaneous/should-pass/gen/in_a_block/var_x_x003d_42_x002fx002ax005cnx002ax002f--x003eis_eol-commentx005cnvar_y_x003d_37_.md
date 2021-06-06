# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw/test/__snapshot__/parser/miscellaneous/should-pass/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/should-pass/gen/in_a_block
> :: test: in a block
> :: case: var x = 42;/*\n*/-->is eol-comment\nvar y = 37;
## Input

`````js
{ var x = 42;/*\n*/-->is eol-comment\nvar y = 37; }
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
                            "end": 5
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
                                        "start": 5,
                                        "end": 7
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": {
                                        "kind": 201392130,
                                        "text": 42,
                                        "rawText": "42",
                                        "flags": 96,
                                        "start": 9,
                                        "end": 12
                                    },
                                    "flags": 16,
                                    "start": 5,
                                    "end": 12
                                }
                            ],
                            "flags": 16,
                            "start": 5,
                            "end": 12
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 13
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 198,
                            "left": {
                                "kind": 128,
                                "operandToken": {
                                    "kind": 196636,
                                    "flags": 64,
                                    "start": 13,
                                    "end": 21
                                },
                                "operand": {
                                    "kind": 16637,
                                    "text": "",
                                    "flags": 64,
                                    "start": 21,
                                    "end": 21
                                },
                                "flags": 32,
                                "start": 13,
                                "end": 21
                            },
                            "operatorToken": {
                                "kind": 34883,
                                "flags": 64,
                                "start": 21,
                                "end": 22
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "is",
                                "rawText": "is",
                                "flags": 96,
                                "start": 22,
                                "end": 24
                            },
                            "flags": 32,
                            "start": 13,
                            "end": 24
                        },
                        "flags": 16,
                        "start": 13,
                        "end": 24
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 198,
                            "left": {
                                "kind": 134299649,
                                "text": "eol",
                                "rawText": "eol",
                                "flags": 96,
                                "start": 24,
                                "end": 28
                            },
                            "operatorToken": {
                                "kind": 100915,
                                "flags": 64,
                                "start": 28,
                                "end": 29
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "comment",
                                "rawText": "comment",
                                "flags": 96,
                                "start": 29,
                                "end": 36
                            },
                            "flags": 32,
                            "start": 24,
                            "end": 36
                        },
                        "flags": 16,
                        "start": 24,
                        "end": 36
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 36
            },
            "flags": 16,
            "start": 0,
            "end": 36
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "nvar",
                "rawText": "nvar",
                "flags": 96,
                "start": 37,
                "end": 41
            },
            "flags": 16,
            "start": 37,
            "end": 41
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "y",
                    "rawText": "y",
                    "flags": 96,
                    "start": 41,
                    "end": 43
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 43,
                    "end": 45
                },
                "right": {
                    "kind": 201392130,
                    "text": 37,
                    "rawText": "37",
                    "flags": 96,
                    "start": 45,
                    "end": 48
                },
                "flags": 32,
                "start": 41,
                "end": 48
            },
            "flags": 16,
            "start": 41,
            "end": 49
        }
    ],
    "isModule": false,
    "source": "{ var x = 42;/*\\n*/-->is eol-comment\\nvar y = 37; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 51
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 21, end: 22
✖ The operand of an increment or decrement operator must be a variable or a property access - start: 21, end: 22
✖ Expected a `;` - start: 24, end: 28
✖ Invalid hexadecimal escape sequence - start: 29, end: 36
✖ Invalid hexadecimal escape sequence - start: 36, end: 36
✖ Expected a `;` - start: 36, end: 37
✖ Expected a `;` - start: 41, end: 43
✖ Declaration or statement expected - start: 49, end: 51

```

