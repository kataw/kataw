# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw/test/__snapshot__/parser/miscellaneous/should-pass/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/should-pass/gen/in_a_block
> :: test: in a block
> :: case: for (let my_var = 0; my_var < 1; ++my_var) { } my_var;
## Input

`````js
{ for (let my_var = 0; my_var < 1; ++my_var) { } my_var; }
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
                            "start": 1,
                            "end": 5
                        },
                        "initializer": {
                            "kind": 151,
                            "bindingList": [
                                {
                                    "kind": 190,
                                    "binding": {
                                        "kind": 134299649,
                                        "text": "my_var",
                                        "rawText": "my_var",
                                        "flags": 96,
                                        "start": 10,
                                        "end": 17
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": {
                                        "kind": 201392130,
                                        "text": 0,
                                        "rawText": "0",
                                        "flags": 96,
                                        "start": 19,
                                        "end": 21
                                    },
                                    "flags": 16,
                                    "start": 10,
                                    "end": 21
                                }
                            ],
                            "flags": 16777232,
                            "start": 10,
                            "end": 21
                        },
                        "condition": {
                            "kind": 128,
                            "operandToken": {
                                "kind": 196635,
                                "flags": 64,
                                "start": 34,
                                "end": 37
                            },
                            "operand": {
                                "kind": 134299649,
                                "text": "my_var",
                                "rawText": "my_var",
                                "flags": 96,
                                "start": 37,
                                "end": 43
                            },
                            "flags": 32,
                            "start": 34,
                            "end": 43
                        },
                        "incrementor": {
                            "kind": 198,
                            "left": {
                                "kind": 134299649,
                                "text": "my_var",
                                "rawText": "my_var",
                                "flags": 96,
                                "start": 22,
                                "end": 29
                            },
                            "operatorToken": {
                                "kind": 536971330,
                                "flags": 64,
                                "start": 29,
                                "end": 31
                            },
                            "right": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "start": 31,
                                "end": 33
                            },
                            "flags": 32,
                            "start": 22,
                            "end": 33
                        },
                        "statement": {
                            "kind": 124,
                            "block": {
                                "kind": 249,
                                "statements": [],
                                "flags": 16,
                                "start": 46,
                                "end": 46
                            },
                            "flags": 16,
                            "start": 44,
                            "end": 48
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 48
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 134299649,
                            "text": "my_var",
                            "rawText": "my_var",
                            "flags": 96,
                            "start": 48,
                            "end": 55
                        },
                        "flags": 16,
                        "start": 48,
                        "end": 56
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 56
            },
            "flags": 16,
            "start": 0,
            "end": 58
        }
    ],
    "isModule": false,
    "source": "{ for (let my_var = 0; my_var < 1; ++my_var) { } my_var; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 58
}
```

### Printed

```javascript

{
  for (const; ++my_var; my_var  < 1)
    {}
  my_var;
}
```

### Diagnostics

```javascript
✔ No errors
```

