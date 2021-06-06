# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw/test/__snapshot__/parser/miscellaneous/should-pass/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/should-pass/gen/in_a_block
> :: test: in a block
> :: case: async (a, b, c);
## Input

`````js
{ async (a, b, c); }
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
                        "kind": 131,
                        "expression": {
                            "kind": 134299649,
                            "text": "async",
                            "rawText": "async",
                            "flags": 96,
                            "start": 1,
                            "end": 7
                        },
                        "argumentList": {
                            "kind": 256,
                            "elements": [
                                {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 9,
                                    "end": 10
                                },
                                {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 96,
                                    "start": 11,
                                    "end": 13
                                },
                                {
                                    "kind": 134299649,
                                    "text": "c",
                                    "rawText": "c",
                                    "flags": 96,
                                    "start": 14,
                                    "end": 16
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 1,
                            "end": 1
                        },
                        "flags": 268435488,
                        "start": 1,
                        "end": 17
                    },
                    {
                        "kind": 168,
                        "flags": 16,
                        "start": 17,
                        "end": 18
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 18
            },
            "flags": 16,
            "start": 0,
            "end": 20
        }
    ],
    "isModule": false,
    "source": "{ async (a, b, c); }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 20
}
```

### Printed

```javascript

{
  async(a, b, c)

}
```

### Diagnostics

```javascript
✔ No errors
```

