# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw/test/__snapshot__/parser/miscellaneous/should-pass/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/should-pass/gen/in_a_block
> :: test: in a block
> :: case: ({__proto__: a, __proto__: b} = x)
## Input

`````js
{ ({__proto__: a, __proto__: b} = x) }
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
                        "kind": 120,
                        "expression": {
                            "kind": 121,
                            "expression": {
                                "kind": 125,
                                "left": {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 219,
                                                "generatorToken": null,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "__proto__",
                                                    "rawText": "__proto__",
                                                    "flags": 96,
                                                    "start": 4,
                                                    "end": 13
                                                },
                                                "right": {
                                                    "kind": 134299649,
                                                    "text": "a",
                                                    "rawText": "a",
                                                    "flags": 96,
                                                    "start": 14,
                                                    "end": 16
                                                },
                                                "flags": 36,
                                                "start": 4,
                                                "end": 16
                                            },
                                            {
                                                "kind": 219,
                                                "generatorToken": null,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "__proto__",
                                                    "rawText": "__proto__",
                                                    "flags": 96,
                                                    "start": 17,
                                                    "end": 27
                                                },
                                                "right": {
                                                    "kind": 134299649,
                                                    "text": "b",
                                                    "rawText": "b",
                                                    "flags": 96,
                                                    "start": 28,
                                                    "end": 30
                                                },
                                                "flags": 36,
                                                "start": 17,
                                                "end": 30
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 20,
                                        "start": 4,
                                        "end": 30
                                    },
                                    "flags": 52,
                                    "start": 3,
                                    "end": 31
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 64,
                                    "start": 31,
                                    "end": 33
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 33,
                                    "end": 35
                                },
                                "flags": 32,
                                "start": 3,
                                "end": 35
                            },
                            "flags": 32,
                            "start": 1,
                            "end": 36
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 36
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 36
            },
            "flags": 16,
            "start": 0,
            "end": 38
        }
    ],
    "isModule": false,
    "source": "{ ({__proto__: a, __proto__: b} = x) }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 38
}
```

### Printed

```javascript

{
  ({ __proto__: a, __proto__: b } = x);
}
```

### Diagnostics

```javascript
✔ No errors
```

